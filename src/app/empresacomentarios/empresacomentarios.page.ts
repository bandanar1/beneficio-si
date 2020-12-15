import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';





@Component({
  selector: 'app-empresacomentarios',
  templateUrl: './empresacomentarios.page.html',
  styleUrls: ['./empresacomentarios.page.scss'],
})
export class EmpresacomentariosPage implements OnInit {

  constructor(private alertController: AlertController) { 

  }
  
  ngOnInit() {
  }

  async presentAlertPrompt(valorpasado) {
    const alert = await this.alertController.create({
      header: valorpasado,
      inputs: [
        {
          name: 'comentario',
          type: 'text',
          placeholder: 'Responder comentario.'
        },        
      ],
      /*estos son los botones ->*/ buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            /*Aca adentro se coloca la funcion a hacer cuando la persona pulsa el boton de cancelar*/
            console.log('Confirm Cancel');
          }
        }, {
          /*esto es el texto que se muesta en el boton*/ text: 'Ok',
          handler: () => {
            /*Aca adentro se coloca la funcion a hacer cuando la persona pulsa el boton de Ok*/
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
