const button=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
button?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded','false');
}));

const page=location.pathname.split('/').pop()||'index.html';
const pageHero=document.querySelector('.page-hero');
if(pageHero){
  const photoByPage={
    'nosotros.html':'photo-company',
    'servicios.html':'photo-services',
    'servicio-aseo.html':'photo-aseo',
    'servicio-mantenimiento.html':'photo-mantenimiento',
    'servicio-especiales.html':'photo-especiales',
    'facility-management.html':'photo-facility',
    'productos.html':'photo-productos',
    'operamos.html':'photo-operamos',
    'sostenibilidad.html':'photo-green',
    'contacto.html':'photo-contacto'
  };
  const photoClass=photoByPage[page]||'photo-company';
  pageHero.classList.add('has-photo',photoClass);
}

if(page==='index.html'){
  const selector=document.querySelector('.home-selector');
  if(selector&&!selector.querySelector('.home-request')){
    selector.insertAdjacentHTML('beforeend','<div class="home-request"><div><p class="eyebrow">Solicitud de servicios</p><h3>¿Ya sabes qué necesita tu espacio?</h3><p>Pide aquí tu servicio de aseo o remodelación interna.</p></div><a class="button" href="solicitar-servicio.html">Solicitar servicio</a></div>');
  }
}
