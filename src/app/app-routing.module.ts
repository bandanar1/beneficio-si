import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'supermercado',
    loadChildren: () => import('./supermercado/supermercado.module').then( m => m.SupermercadoPageModule)
  },
  {
    path: 'gastronomia',
    loadChildren: () => import('./gastronomia/gastronomia.module').then( m => m.GastronomiaPageModule)
  },
  {
    path: 'boliche',
    loadChildren: () => import('./boliche/boliche.module').then( m => m.BolichePageModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./farmacia/farmacia.module').then( m => m.FarmaciaPageModule)
  },
  {
    path: 'espectaculos',
    loadChildren: () => import('./espectaculos/espectaculos.module').then( m => m.EspectaculosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-persona',
    loadChildren: () => import('./registro-persona/registro-persona.module').then( m => m.RegistroPersonaPageModule)
  },
  {
    path: 'registro-empresa',
    loadChildren: () => import('./registro-empresa/registro-empresa.module').then( m => m.RegistroEmpresaPageModule)
  },
  {
    path: 'nueva1',
    loadChildren: () => import('./nueva1/nueva1.module').then( m => m.Nueva1PageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'mistarjetas',
    loadChildren: () => import('./mistarjetas/mistarjetas.module').then( m => m.MistarjetasPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'configcuenta',
    loadChildren: () => import('./configcuenta/configcuenta.module').then( m => m.ConfigcuentaPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./comentarios/comentarios.module').then( m => m.ComentariosPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'inciarsesion',
    loadChildren: () => import('./inciarsesion/inciarsesion.module').then( m => m.InciarsesionPageModule)
  },
  {
    path: 'empresaredessociales',
    loadChildren: () => import('./empresaredessociales/empresaredessociales.module').then( m => m.EmpresaredessocialesPageModule)
  },
  {
    path: 'empresacomentarios',
    loadChildren: () => import('./empresacomentarios/empresacomentarios.module').then( m => m.EmpresacomentariosPageModule)
  },
  {
    path: 'empresapedidos',
    loadChildren: () => import('./empresapedidos/empresapedidos.module').then( m => m.EmpresapedidosPageModule)
  },
  {
    path: 'resumendepedido',
    loadChildren: () => import('./resumendepedido/resumendepedido.module').then( m => m.ResumendepedidoPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
  {
    path: 'empresaventas',
    loadChildren: () => import('./empresaventas/empresaventas.module').then( m => m.EmpresaventasPageModule)
  },
  {
    path: 'empresaofertas',
    loadChildren: () => import('./empresaofertas/empresaofertas.module').then( m => m.EmpresaofertasPageModule)
  },
  {
    path: 'empresatarjetas',
    loadChildren: () => import('./empresatarjetas/empresatarjetas.module').then( m => m.EmpresatarjetasPageModule)
  },
  {
    path: 'empresaconfig',
    loadChildren: () => import('./empresaconfig/empresaconfig.module').then( m => m.EmpresaconfigPageModule)
  },
  {
    path: 'empresaveresumen',
    loadChildren: () => import('./empresaveresumen/empresaveresumen.module').then( m => m.EmpresaveresumenPageModule)
  },
  {
    path: 'producto1',
    loadChildren: () => import('./producto1/producto1.module').then( m => m.Producto1PageModule)
  },
  {
    path: 'filtros',
    loadChildren: () => import('./filtros/filtros.module').then( m => m.FiltrosPageModule)
  },
  {
    path: 'misiones',
    loadChildren: () => import('./misiones/misiones.module').then( m => m.MisionesPageModule)
  },
  {
    path: 'show-mision',
    loadChildren: () => import('./show-mision/show-mision.module').then( m => m.ShowMisionPageModule)
  },
  {
    path: 'mision-details',
    loadChildren: () => import('./mision-details/mision-details.module').then( m => m.MisionDetailsPageModule)
  },
  {
    path: 'hamburguesamc',
    loadChildren: () => import('./hamburguesamc/hamburguesamc.module').then( m => m.HamburguesamcPageModule)
  },
  {
    path: 'show-product',
    loadChildren: () => import('./show-product/show-product.module').then( m => m.ShowProductPageModule)
  },
  {
    path: 'show-supermarket',
    loadChildren: () => import('./show-supermarket/show-supermarket.module').then( m => m.ShowSupermarketPageModule)
  },
  {
    path: 'show-teatro',
    loadChildren: () => import('./show-teatro/show-teatro.module').then( m => m.ShowTeatroPageModule)
  },
  {
    path: 'show-farmacia',
    loadChildren: () => import('./show-farmacia/show-farmacia.module').then( m => m.ShowFarmaciaPageModule)
  },
  {
    path: 'show-boliche',
    loadChildren: () => import('./show-boliche/show-boliche.module').then( m => m.ShowBolichePageModule)
  },
  {
    path: 'show-restaurant',
    loadChildren: () => import('./show-restaurant/show-restaurant.module').then( m => m.ShowRestaurantPageModule)
  },
  {
    path: 'show-cinemark',
    loadChildren: () => import('./show-cinemark/show-cinemark.module').then( m => m.ShowCinemarkPageModule)
  },
  {
    path: 'show-pelicula',
    loadChildren: () => import('./show-pelicula/show-pelicula.module').then( m => m.ShowPeliculaPageModule)
  },
  {
    path: 'show-pelicula2',
    loadChildren: () => import('./show-pelicula2/show-pelicula2.module').then( m => m.ShowPelicula2PageModule)
  },
  {
    path: 'show-product-farmacia',
    loadChildren: () => import('./show-product-farmacia/show-product-farmacia.module').then( m => m.ShowProductFarmaciaPageModule)
  },
  {
    path: 'show-product-farmacia1',
    loadChildren: () => import('./show-product-farmacia1/show-product-farmacia1.module').then( m => m.ShowProductFarmacia1PageModule)
  },
  {
    path: 'show-product-farmacia2',
    loadChildren: () => import('./show-product-farmacia2/show-product-farmacia2.module').then( m => m.ShowProductFarmacia2PageModule)
  },
  {
    path: 'show-product-farmacia3',
    loadChildren: () => import('./show-product-farmacia3/show-product-farmacia3.module').then( m => m.ShowProductFarmacia3PageModule)
  },
  {
    path: 'show-farmacia1',
    loadChildren: () => import('./show-farmacia1/show-farmacia1.module').then( m => m.ShowFarmacia1PageModule)
  },
  {
    path: 'show-farmacia2',
    loadChildren: () => import('./show-farmacia2/show-farmacia2.module').then( m => m.ShowFarmacia2PageModule)
  },
  {
    path: 'show-farmacia3',
    loadChildren: () => import('./show-farmacia3/show-farmacia3.module').then( m => m.ShowFarmacia3PageModule)
  },
  {
    path: 'show-ticket-boliche',
    loadChildren: () => import('./show-ticket-boliche/show-ticket-boliche.module').then( m => m.ShowTicketBolichePageModule)
  },
  {
    path: 'show-product-restaurant',
    loadChildren: () => import('./show-product-restaurant/show-product-restaurant.module').then( m => m.ShowProductRestaurantPageModule)
  },
  {
    path: 'show-ticket-teatro',
    loadChildren: () => import('./show-ticket-teatro/show-ticket-teatro.module').then( m => m.ShowTicketTeatroPageModule)
  },
  {
    path: 'show-product-supermarket',
    loadChildren: () => import('./show-product-supermarket/show-product-supermarket.module').then( m => m.ShowProductSupermarketPageModule)
  },
  {
    path: 'show-comida-italiana',
    loadChildren: () => import('./show-comida-italiana/show-comida-italiana.module').then( m => m.ShowComidaItalianaPageModule)
  },
  {
    path: 'show-supermercados-mayorista',
    loadChildren: () => import('./show-supermercados-mayorista/show-supermercados-mayorista.module').then( m => m.ShowSupermercadosMayoristaPageModule)
  },
  {
    path: 'show-musica-electronica',
    loadChildren: () => import('./show-musica-electronica/show-musica-electronica.module').then( m => m.ShowMusicaElectronicaPageModule)
  },
  {
    path: 'show-farmacias-mayoristas',
    loadChildren: () => import('./show-farmacias-mayoristas/show-farmacias-mayoristas.module').then( m => m.ShowFarmaciasMayoristasPageModule)
  },
  {
    path: 'show-peliculas',
    loadChildren: () => import('./show-peliculas/show-peliculas.module').then( m => m.ShowPeliculasPageModule)
  },
  {
    path: 'show-empresa-producto-gastronomia',
    loadChildren: () => import('./show-empresa-producto-gastronomia/show-empresa-producto-gastronomia.module').then( m => m.ShowEmpresaProductoGastronomiaPageModule)
  },
  {
    path: 'show-ticket-espectaculo',
    loadChildren: () => import('./show-ticket-espectaculo/show-ticket-espectaculo.module').then( m => m.ShowTicketEspectaculoPageModule)
  },
  {
    path: 'show-event-boliche',
    loadChildren: () => import('./show-event-boliche/show-event-boliche.module').then( m => m.ShowEventBolichePageModule)
  },
  {
    path: 'show-opiniones',
    loadChildren: () => import('./show-opiniones/show-opiniones.module').then( m => m.ShowOpinionesPageModule)
  },
  {
    path: 'delivery-mirano',
    loadChildren: () => import('./delivery-mirano/delivery-mirano.module').then( m => m.DeliveryMiranoPageModule)
  },
  {
    path: 'show-product-delivery',
    loadChildren: () => import('./show-product-delivery/show-product-delivery.module').then( m => m.ShowProductDeliveryPageModule)
  },
  {
    path: 'subcategoria-frutasyverduras',
    loadChildren: () => import('./subcategoria-frutasyverduras/subcategoria-frutasyverduras.module').then( m => m.SubcategoriaFrutasyverdurasPageModule)
  },
  {
    path: 'reserva-restaurant',
    loadChildren: () => import('./reserva-restaurant/reserva-restaurant.module').then( m => m.ReservaRestaurantPageModule)
  },
  {
    path: 'data-reserva',
    loadChildren: () => import('./data-reserva/data-reserva.module').then( m => m.DataReservaPageModule)
  },
  {
    path: 'canasta',
    loadChildren: () => import('./canasta/canasta.module').then( m => m.CanastaPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./servicios/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'checkout-supermarket',
    loadChildren: () => import('./checkout-supermarket/checkout-supermarket.module').then( m => m.CheckoutSupermarketPageModule)
  },
  {
    path: 'checkout-supermarket',
    loadChildren: () => import('./checkout-supermarket/checkout-supermarket.module').then( m => m.CheckoutSupermarketPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'data-boliche',
    loadChildren: () => import('./data-boliche/data-boliche.module').then( m => m.DataBolichePageModule)
  },
  {
    path: 'ver-mapa',
    loadChildren: () => import('./ver-mapa/ver-mapa.module').then( m => m.VerMapaPageModule)
  },
  {
    path: 'valoracion-modal',
    loadChildren: () => import('./valoracion-modal/valoracion-modal.module').then( m => m.ValoracionModalPageModule)
  },
  {
    path: 'distancia-modal',
    loadChildren: () => import('./distancia-modal/distancia-modal.module').then( m => m.DistanciaModalPageModule)
  },
  {
    path: 'destacados-modal',
    loadChildren: () => import('./destacados-modal/destacados-modal.module').then( m => m.DestacadosModalPageModule)
  },
  {
    path: 'favoritos-modal',
    loadChildren: () => import('./favoritos-modal/favoritos-modal.module').then( m => m.FavoritosModalPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'map-options',
    loadChildren: () => import('./map-options/map-options.module').then( m => m.MapOptionsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
