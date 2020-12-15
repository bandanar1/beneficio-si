import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

import { ActionSheetController, IonSlides, NavController, Platform, ToastController } from '@ionic/angular';
import { Usuario, City, State } from '../interface';
import { PictureSourceType } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user: Usuario = {
    profile: {
      firstname: 'Franco',
      lastname: 'Duek',
      bio: 'El hincha mas fiel del ribersito.',
      phone: '+5491168451335',
      image: '../../assets/imgs/perfilfranco.jpg',
    },
    address: {
      id: 1,
      state: {
        id: 1,
        name: 'Buenos Aires'
      },
      city: {
        id: 1,
        name: 'Capital Federal'
      },
      address: 'Argentina Buenos Aires.',
      latitude: null,
      longitude: null,
    }
  };

  newUserImage = {
    name: '',
    filePath: '',
    blob: null
  }

  states: State[] = [
    {
      id: 2,
      name: "Misiones"
    },
    {
      id: 1,
      name: "Capital Federal"
    }    
  ];

  cities: City[] = [
    {
      id: 1,
      name: "C.A.B.A"
    },
    {
      id: 2,
      name: "Posadas"
    }
  ];

  @ViewChild('slidesconfig', { static: true }) protected slides: IonSlides;
  @ViewChild('mapconfig', { static: true }) protected map: ElementRef;

  slideNumber = 0;

  constructor(
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private file: File,
    private filePath: FilePath,
    private platform: Platform,
    private webview: WebView,
    private ref: ChangeDetectorRef,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  changeSlide() {
    this.slides.slideTo(Number(this.slideNumber));
  }

  async slidesChanged(event) {
    this.slideNumber = await this.slides.getActiveIndex();
  }

  toggleSound() {
    console.log('silenciar.')    
  }

  /*SELECCIONAR ORIGEN DE LA IMAGEN*/
  async selectImage() {    
    const actionSheet = await this.actionSheetController.create({
      header: "Cargar desde:",
      buttons: [{
        text: 'Abrir Galeria',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Usar Camara',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  /*OBTENGO LA IMAGEN*/
  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {

        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });

      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });
  }

  /*CREO EL NUEVO NOMBRE DE LA IMAGEN*/
  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  /*COPIO LA IMAGEN AL DIRECTORIO DE LA APP*/
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file.', 'danger');
    });
  }

  /*ACTUALIZO LA IMAGEN DEL USUARIO CON LA URL DE LA IMAGEN EN EL EQUIPO*/
  updateStoredImages(name) {
    let filePath = this.file.dataDirectory + name;

    this.user.profile.image = this.pathForImage(filePath);

    this.ref.detectChanges(); // trigger change detection cycle

    this.newUserImage.name = name;
    this.newUserImage.filePath = filePath;

    this.file.resolveLocalFilesystemUrl(this.newUserImage.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file))
      })
      .catch(err => {
        this.presentToast('Error while reading file.', 'danger');
      });
  }

  readFile(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      this.newUserImage.blob = imgBlob;
      this.newUserImage.name = file.name;
    };
    reader.readAsArrayBuffer(file);
  }

  /*CONVIERTO LA URL NATIVA A URL DE NAVEGADOR*/
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text, color) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000,
      color: color
    });
    toast.present();
  }
}
