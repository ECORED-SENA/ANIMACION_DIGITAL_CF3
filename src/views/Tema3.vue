<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Maqueta de sonido

    .row.justify-content-center.mb-5(data-aos="fade" data-aos-duration="900")
      .col-lg-6
        p.mb-5 La maqueta de sonido es la exploración inicial del ensamble sonoro necesario para el audiovisual, en este punto se explora con música y otros sonidos en su mayoría preexistentes para para poder determinar en la práctica qué cosas pueden funcionar y que cosas no, de la misma manera sirve para establecer los tiempos exactos de cada acción ya que hay sonidos como los correspondientes a los diálogos que son necesarios para determinar aspectos de la animación.
          br
          br
          | Aunque inicialmente se trata de una maqueta para determinar con exactitud qué aspectos sonoros deben ser diseñados y producidos, desde este punto es importante tener en cuenta 4 aspectos fundamentales que deben estar presentes en el diseño sonoro de cualquier producción los cuales se listan y describen a continuación.
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://www.ted.com/talks/tasos_frantzolas_everything_you_hear_on_film_is_a_lie#t-91161" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Enlace.
              i   Tasos Frantzolas, Everything you hear on film is a lie.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3-img1.svg")

    Separador

    #t_3_1.titulo-segundo.color-secundario
      h2 3.1  Diálogos

    p.mb-5(data-aos="slide-right" data-aos-duration="900") Son una parte fundamental de todo el diseño sonoro de una producción pues como se mencionó anteriormente, estos definen diversos aspectos de la animación como el timing o los acentos en el <em>acting</em> del personaje esta importancia hace casi imprescindible que de entre todos los audios de una producción los diálogos estén terminados antes de empezar a animar puesto que si se anima con diálogos provisionales es seguro que se generan reprocesos cuando se graben las versiones finales y esto puede dañar el appeal de la animación sin contar los tiempos extra de trabajo.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="slide-left" data-aos-duration="900")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0.py-5 Este aspecto incluye tanto los parlamentos de los personajes como las voces en off que en ocasiones acompañan narrando mientras transcurre la acción.

    Separador

    #t_3_2.titulo-segundo.color-secundario(data-aos="slide-down" data-aos-duration="900")
      h2 3.2  Efectos

    p.mb-4 En este aspecto podemos encontrar 2 grandes categorías, el sonido ambiente y los efectos especiales.


    .row.mb-5.g-0
      .col-lg-6
        .tarjeta.especial-left.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")(data-aos="slide-right" data-aos-duration="900")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.especial-left(:style="{'background-image': `url(${require('@/assets/curso/tema3-img3.svg')})`}")
            .tarjeta-flip__contenido.especial-left.p-4.p-xl-5
              p.mb-0.p-5
                strong Sonido ambiente o efectos de ambiente
                br
                br
                | También conocido como <em>room tone</em>, corresponde a todos aquellos sonidos que nos permiten identificar un espacio; es decir el sonido característico de un lugar cuando se encuentra en “silencio”, por ejemplo, el sonido de los pájaros cantando en el bosque mientras el viento pasa entre las hojas de los árboles o el ruido producido por personas hablando en un café. Es importante no confundirlo con el concepto de ambiente, ya que este corresponde a la atmósfera sonora que se crea para un espacio específico mediante la composición y edición de música y otros sonidos que no existirían naturalmente en el lugar, pero que contribuyen a lo que se quiere transmitir con la escena.
      .col-lg-6
        .tarjeta.especial-right.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")(data-aos="slide-left" data-aos-duration="900")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.especial-right(:style="{'background-image': `url(${require('@/assets/curso/tema3-img4.svg')})`}")
            .tarjeta-flip__contenido.especial-right.p-4.p-xl-5
              p.mb-0.p-5
                strong Efectos especiales
                br
                br
                | Son sonidos específicos que sirven para resaltar determinadas situaciones y que son necesarios recrear ya en un estudio diseñado para ello o en un espacio natural, no tienen correspondencia estricta con lo que se está mostrando, por ejemplo en <i>Transformers</i> cuando un robot se transforma hace sonidos mecánicos y electrónicos, los cuales tienen que ser generados de cero para tal fin o capturados de diversas fuentes para modificarlos y adaptarlos a las necesidades de la narración, ya que no existe forma de capturar esos sonidos de un <em>transformer</em> real.
                br
                br
                | De la misma manera el cine está plagado de estos efectos de los cuales no tenemos referencia real pero, percibimos como algo creíble como es el caso de los láseres en <i>Star Wars</i> o el rugido de los dinosaurios en <i>Jurassic Park</i>.

    Separador

    #t_3_3.titulo-segundo.color-secundario(data-aos="slide-up" data-aos-duration="900")
      h2 3.3  <i>Foley</i>

    .row.justify-content-center(data-aos="slide-down" data-aos-duration="900")
      .col-lg-6
        figure
          img(src="@/assets/curso/tema3-img5.svg")
      .col-lg-6
        p.mb-4 El <i>foley</i> es la reconstrucción o creación en estudio de sonidos en sincronía con la imagen real, es una forma de crear efectos especiales, pero principalmente sirve para resaltar o acentuar los sonidos que acompañan una acción y para ello se hace uso de gran variedad de elementos en un ambiente controlado.
          br
          br
          | Por ejemplo, puede existir una toma donde el sonido de los pasos es fundamental para lo que se desea narrar, pero el sonido capturado en el set no es suficientemente impactante por lo que es necesario crearlo en estudio para poder generar las sensaciones que se requieren.
          br
          br
          | Para el caso de la animación es imprescindible, ya que todos los sonidos procedentes de interacciones físicas deben ser generados de alguna manera al no existir los personajes en el mundo real.
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=5hWbmn7GtDE" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i    Insider. (2018, Jun. 17). How 10 Different Movie Sounds Are Made | Movies Insider.

    Separador

    #t_3_4.titulo-segundo.color-secundario(data-aos="fade" data-aos-duration="900")
      h2 3.4  Música

    p.mb-5(data-aos="fade" data-aos-duration="900") En este aspecto encontramos también 2 grandes categorías la música diegética y la música extra diegética o incidental.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(data-aos="slide-right" data-aos-duration="900")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/tema3-img6.svg', alt='Texto que describa la imagen')

        h2.text-white Música diegética

        p.text-white Diégesis es una palabra derivada del griego y según la RAE hace referencia al desarrollo narrativo de los hechos en una obra literaria o cinematográfica, dicho esto, es el tipo de música es la que transcurre al interior del universo narrativo, es decir el emisor de esta música existe dentro de la historia, trátese de una radio, una rockola, una agrupación tocando en algún sitio o incluso el mismo personaje silbando o cantando.
      .col-md.tarjeta.color-acento-contenido.p-5(data-aos="slide-left" data-aos-duration="900")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/tema3-img7.svg', alt='Texto que describa la imagen')

        h2 Música extradiegética o incidental

        p En su definición más sencilla se trata de música de acompañamiento, es decir se encarga de crear una atmósfera para el desarrollo de la acción y por tanto no existe al interior del universo narrativo y si fuese el caso el personaje no estaría en capacidad de escucharla. Habitualmente se compone para acompañar momentos específicos de la historia ya que debe estar pensada conforme a lo que se desea transmitir.
          br
          br
          | Uno de los ejemplos más claros y sencillos se da cuando en películas suena música agitada o cuando se desarrollan persecuciones o música de suspenso para anticipar que algo importante va a suceder.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
