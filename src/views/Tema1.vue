<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Definición y tipologías

    h3.titulo-tercero Definición

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="slide-left" data-aos-duration="800")
        figure
          img(src="@/assets/curso/tema1-img1.svg")
      .col-lg-6(data-aos="slide-right" data-aos-duration="800")
        p.mb-0 También conocido como <i>story reel</i>, el <i>animatic</i> o animática en español, es una composición audiovisual, donde se acoplan y sincronizan todas las secuencias de viñetas del <i>storyboard</i> con la maqueta de sonido. Es la mejor forma de experimentar con el ritmo narrativo y ver cómo quedará el proyecto al final antes de entrar a la etapa de preproducción. Todas las transiciones entre escenas son mostradas y cada dibujo se monta con cierta duración en el tiempo.
          br
          br
          | Todo lo anterior permite a los directores y editores corregir la narrativa, sugerir nuevos planos y lograr una duración apropiada <i>(Doucet, 2020)</i>. Como lo menciona el Centro Audiovisual de Rosario – CAR  (Argentina): “Siempre tengamos presente que en animación el trabajo de guion es más activo y abarcativo que en otros géneros. El guion de animación siempre se puede complementar con el dibujo y puede atravesar las distintas etapas de rodaje con mayor libertad para su reescritura que en las ficciones convencionales, permitiendo distintos aportes que enriquecerán nuestra escritura”.

    h3.titulo-tercero(data-aos="fade" data-aos-duration="800") Tipologías

    p.mb-5(data-aos="fade" data-aos-duration="800") El <i>animatic</i> puede ser tan simple como un video editado de cada uno de los cuadros estáticos que vienen del <i>storyboard</i>, o tan complejos como unas secuencias de animación básicas de las acciones. Es por esto último, que en ocasiones el término <i>animatic</i> se acuña dentro del término “previsualización” (<em>previz</em>). No obstante, una <em>previz</em> se ha convertido en la siguiente etapa o evolución del <em>animatic</em>, agregando elementos y movimientos en 3D y brindando información técnica a todo el equipo de grabación. En particular, la <em>previz</em> es usada en proyectos <em>live-action</em> y producciones de alto presupuesto tales como las películas de Marvel o series de televisión como <i>Game of Thrones</i> de HBO.

    .bloque-texto-g.inverse.color-primario.p-4.p-sm-5.p-md-5.mb-5(data-aos="fade" data-aos-duration="800")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Los <i>animatic</i> simples toman directamente las viñetas del <i>storyboard</i> para digitalizarlos mediante un escáner o una fotografía. Más tarde, cada elemento gráfico se sincroniza con la maqueta de sonido. También es importante insinuar el movimiento de cámara y de los personajes dentro del encuadre.

    p.mb-5(data-aos="fade" data-aos-duration="800") Por otra parte, los <i>animatic</i> más complejos pueden ser pensados como un <i>storyboard</i> que tiene piezas móviles (Simon, 2007). Se usan las ilustraciones de la viñeta y se le agregan pequeños sistemas de manipulación que permiten hacer animaciones sencillas, similares a la técnica <i>cut-out</i> del <i>stop-motion</i>. En otros casos, se pueden sumar más poses de los personajes con el fin de mostrar mayor fluidez, claridad de las acciones y expresiones que tendrán los personajes dentro de la escena. Lo mejor es ver algunos propuestos desde el material complementario.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-5.d-flex(data-aos="slide-left" data-aos-duration="800")
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=bcgTuVNaoY8" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Disneymusicvevo. (2020, Jan. 30). Into the Unknown (From "Frozen 2"/Storyboard to Final Frame Version)
      .col-lg-4.mb-lg-0.mb-5.d-flex(data-aos="slide-down" data-aos-duration="800")
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://vimeo.com/12153179" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Animatic muy fiel al producto final: Kevin Parry (2010), The Arctic Circle - Storyboard Comparison.
      .col-lg-4.d-flex(data-aos="slide-right" data-aos-duration="800")
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://youtu.be/ghAPq5Y3NdQ" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Animatic avanzado en 3D (<em>previz</em>): The Third Floor (2020), The making of Avengers: End Game.

    .row.justify-content-center(data-aos="fade" data-aos-duration="800")
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1-img3.svg")


</template>

<script>
export default {
  name: 'Tema1',
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
