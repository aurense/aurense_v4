import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'El Oro',
      links: [
        {
          text: 'Guías Virtuales',
          href: getPermalink('/'),
        },
        {
          text: 'Información General',
          href: getPermalink('/'),
        },
        {
          text: 'Recomendaciones de Viaje',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: '¿Comida?',
      links: [
        {
          text: 'Pizza',
          href: getPermalink('/'),
        },
        {
          text: 'Restaurantes',
          href: getPermalink('/'),
        },
        {
          text: 'Tacos',
          href: getPermalink('/'),
        },
        {
          text: 'Cocinas',
          href: getPermalink('/'),
        },
        {
          text: 'Antojitos',
          href: getPermalink('/'),
        },
        {
          text: 'Ver Todo',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: '¿Diversión?',
      links: [
        {
          text: 'Eventos',
          href: getPermalink('/'),
        },
        {
          text: 'Actividades',
          href: getPermalink('/'),
        },
        {
          text: 'Bares',
          href: getPermalink('/'),
        },
        {
          text: 'Ver Todo',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: '¿Descanso?',
      links: [
        {
          text: 'Hoteles',
          href: getPermalink('/'),
        },
        {
          text: 'Posadas',
          href: getPermalink('/'),
        },
        {
          text: 'Habitaciones',
          href: getPermalink('/'),
        },
        {
          text: 'Cabañas',
          href: getPermalink('/'),
        },
        {
          text: 'Ver Todo',
          href: getPermalink('/'),
        },
      ],
    },
    {
      text: '¿Chisme?',
      links: [
        {
          text: 'Actualidad',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Política y Gobierno',
          href: getPermalink('politica', 'tag'),
        },
        {
          text: 'Comunidades',
          href: getPermalink('comunidades', 'tag'),
        },
        {
          text: 'Deportes',
          href: getPermalink('deportes', 'tag'),
        },
        {
          text: 'Cultura',
          href: getPermalink('cultura', 'tag'),
        },
        {
          text: 'Todas las Noticias',
          href: getPermalink('noticias', 'category'),
        },
      ],
    },
    {
      text: '¿Algo más?',
      href: '#',
    },
  ],
  actions: [{ text: 'Donativos', href: 'https://ko-fi.com/S6S81AWJT0', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Divulgación',
      links: [
        { text: 'Actualidad', href: '#' },
        { text: 'Análisis', href: '#' },
        { text: 'Vida cotidiana', href: '#' },
      ],
    },
    {
      title: 'Directorio',
      links: [
        { text: 'Turismo', href: '#' },
        { text: 'Alimentos y Bebidas', href: '#' },
        { text: 'Comercios', href: '#' },
        { text: 'Servicios', href: '#' },
      ],
    },
    {
      title: 'Oportunidades',
      links: [
        { text: 'Opciones de autoempleo', href: '#' },
        { text: 'Laptops a bajo costo', href: '#' },
        { text: 'Servicios Profesionales', href: '#' },
      ],
    },
    {
      title: 'Identidad',
      links: [
        { text: '¿Aurense?', href: '#' },
        { text: 'Nuestro Equipo', href: '#' },
        { text: 'Impacto Social', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@aurensemx/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/aurensemx/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/aurensemx/' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@aurensemx/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://aurense.com/favicon/favicon-32x32.png" alt="aurense logo" loading="lazy"></img>
    Desde El Oro, producto 100% <a class="text-blue-600 underline dark:text-muted" href="https://aurense.com/"> Aurense</a> · All rights reserved.
  `,
};
