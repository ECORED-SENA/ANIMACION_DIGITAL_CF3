export default {
  global: {
    componenteFormativo: '<i>Animatic</i>',
    descripcionCurso:
      'Antes de abandonar la fase de desarrollo y pasar a la pre-producción de un proyecto audiovisual, es imperativo validar que lo planteado en el guión técnico y el <i>storyboard</i> logran contar adecuadamente la historia creada en el guión literario. El mejor camino para realizar esta evaluación e identificar posibles ajustes, es la realización de una <i>animatic</i> o animática.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-intro.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y tipologías',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ritmo y montaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación o métodos de montaje',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Maqueta de sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diálogos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Efectos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Foley',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Musica',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Proceso básico de animatics',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Centro Audiovisual Rosario - CAR, (s.f). <i>Haciendo dibujitos en el fin del mundo, El libro de la Escuela para Animadores de Rosario</i>. Rosario, Santa Fe. Argentina: Secretaría de Cultura y Educación. Municipalidad de Rosario.',
      link: '',
    },
    {
      referencia:
        'Doucet, Ron, (2020). <i>Drawing & Composition for visual storytelling.</i> ',
      link: 'http://www.floobynooby.com/comp1.html#anchor',
    },
    {
      referencia:
        'Fernández, F. y Martínez, J. (1999). <i>Manual básico de lenguaje audiovisual y narrativa audiovisual. Barcelona, ESPAÑA: Paidós.</i>',
      link: '',
    },
    {
      referencia:
        'Maldonado, M. (2018). <i>Animatic – El Storyboard de Hoy. Blog Industria Animación. </i>',
      link:
        'https://www.industriaanimacion.com/2018/06/animatic-storyboard-de-hoy/',
    },
    {
      referencia:
        'Simon, Mark (2007). <i>Storyboard Motion in Art. Burlington, MA, EEUU: Focal Press.</i>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Diégesis',
      significado:
        'en una obra literaria o cinematográfica, desarrollo narrativo de los hechos.',
    },
    {
      termino: '<i>Live-action</i>',
      significado:
        'producciones que involucran personajes o animales reales, en contraste con la animación y efectos generados por computadora.',
    },
    {
      termino: 'Maqueta de sonido',
      significado:
        'es un recurso de audio utilizado dentro de la construcción del animatic, el cual contiene diálogos, música y en ocasiones efectos de sonido. En otras palabras, es el borrador del sonido que irá en el proyecto final. Entre mejor trabajada esté la maqueta, menor trabajo de ajustes se deberán hacer al final.',
    },
    {
      termino: 'Metadatos',
      significado:
        'se refiere a aquellos datos que hablan de los datos, es decir, describen el contenido de los archivos o la información de los mismos. ',
    },
    {
      termino: 'Vectorizar',
      significado:
        'proceso en el cual se representan los contornos de un dibujo mediante un conjunto de curvas Bézier. ',
    },
  ],
  complementario: [
    {
      texto:
        'Disneymusicvevo. (2020, Jan. 30). Into the Unknown (From "Frozen 2"/Storyboard to Final Frame Version). Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bcgTuVNaoY8',
    },
    {
      texto: 'Kevin Parry (2010), The Arctic Circle - Storyboard Comparison.',
      tipo: 'Video',
      link: 'https://vimeo.com/12153179',
    },
    {
      texto: 'The Third Floor (2020),The making of Avengers: End Game',
      tipo: 'Video',
      link: 'https://youtu.be/ghAPq5Y3NdQ',
    },
    {
      texto: 'Gorillaz - Clint Eastwood (Animatic)',
      tipo: 'Video',
      link: 'https://youtu.be/JPC0n_ml4kc',
    },
    {
      texto: 'Gorillaz - Feel Good Inc (Animatic)',
      tipo: 'Video',
      link: 'https://youtu.be/MRyPSOyC7_c',
    },
    {
      texto:
        'ILERNA Online,  (2020)- El ritmo audiovisual. Ritmo interno y externo',
      tipo: 'Video',
      link: 'https://youtu.be/WOR1SyXuRfk',
    },
    {
      texto:
        'Movieclips, (2017) - Atomic Blonde -  Savage Stairwell Fight Scene (5/10)',
      tipo: 'Video',
      link: 'https://youtu.be/XarGS1AeEcE',
    },
    {
      texto:
        'Wendy Apple, (2004) - The cutting edge,  The magic of the movie editing',
      tipo: 'Video',
      link: 'https://vimeo.com/63959564',
    },
    {
      texto: 'C Muñoz - Hitchcock explica el efecto Kuleshov',
      tipo: 'Video',
      link: 'https://youtu.be/Q1LmKtWAfOg',
    },
    {
      texto: 'Elder Tanaka - Técnicas de montagem - Pudovkin',
      tipo: 'Video',
      link: 'https://youtu.be/2h5iWMc_PA4',
    },
    {
      texto:
        'Manuel Pérez Mora - La teoría del montaje en el cine de Eisenstein',
      tipo: 'Video',
      link: 'https://youtu.be/JKHEGNSuLvE',
    },
    {
      texto: 'Filmadores - Los montajes de Eisenstein - Escuela para Cineastas',
      tipo: 'Video',
      link: 'https://youtu.be/JKHEGNSuLvE',
    },
    {
      texto: 'Tasos Frantzolas, Everything you hear on film is a lie.',
      tipo: 'Video',
      link:
        'https://www.ted.com/talks/tasos_frantzolas_everything_you_hear_on_film_is_a_lie#t-91161',
    },
    {
      texto:
        'Insider. (2018, Jun. 17). How 10 Different Movie Sounds Are Made | Movies Insider. Youtube.',
      tipo: 'Video / Artículo',
      link: 'https://www.youtube.com/watch?v=5hWbmn7GtDE',
    },
    {
      texto: 'WEBINAR - Learn How to Create Animatics in Storyboard Pro',
      tipo: 'Video',
      link: 'https://youtu.be/IewO4FET2xg',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Alexander García',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martín',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres    ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
