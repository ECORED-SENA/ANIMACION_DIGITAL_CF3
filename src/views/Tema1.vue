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
      .col-lg-6
        figure
          img(src="@/assets/curso/tema1-img1.svg")
      .col-lg-6
        p.mb-0 También conocido como story reel, el animatic o animática en español, es una composición audiovisual, donde se acoplan y sincronizan todas las secuencias de viñetas del storyboard con la maqueta de sonido. Es la mejor forma de experimentar con el ritmo narrativo y ver cómo quedará el proyecto al final antes de entrar a la etapa de pre-producción. Todas las transiciones entre escenas son mostradas y cada dibujo se monta con cierta duración en el tiempo.
          br
          br
          | Todo lo anterior permite a los directores y editores corregir la narrativa, sugerir nuevos planos y lograr una duración apropiada (Doucet, 2020). Como lo menciona el Centro Audiovisual de Rosario – CAR  (Argentina): “Siempre tengamos presente que en animación el trabajo de guión es más activo y abarcativo que en otros géneros. El guión de animación siempre se puede complementar con el dibujo y puede atravesar las distintas etapas de rodaje con mayor libertad para su reescritura que en las ficciones convencionales, permitiendo distintos aportes que enriquecerán nuestra escritura”.

    h3.titulo-tercero Tipologías

    p.mb-5 El animatic puede ser tan simple como un video editado de cada uno de los cuadros estáticos que vienen del storyboard, o tan complejos como unas secuencias de animación básicas de las acciones. Es por esto último, que en ocasiones el término animatic se acuña dentro del término “previsualización” (previz). No obstante, una previz se ha convertido en la siguiente etapa o evolución del animatic, agregando elementos y movimientos en 3D y brindando información técnica a todo el equipo de grabación. En particular, la previz es usada en proyectos live-action y producciones de alto presupuesto tales como las películas de Marvel o series de televisión como Game of Thrones de HBO.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los animatic simples toman directamente las viñetas del storyboard para digitalizarlos mediante un escáner o una fotografía. Más tarde, cada elemento gráfico se sincroniza con la maqueta de sonido. También es importante insinuar el movimiento de cámara y de los personajes dentro del encuadre.

    p.mb-5 Por otra parte, los animatic más complejos pueden ser pensados como un storyboard que tiene piezas móviles (Simon, 2007). Se usan las ilustraciones de la viñeta y se le agregan pequeños sistemas de manipulación que permiten hacer animaciones sencillas, similares a la técnica cut-out del stop-motion. En otros casos, se pueden sumar más poses de los personajes con el fin de mostrar mayor fluidez, claridad de las acciones y expresiones que tendrán los personajes dentro de la escena. Lo mejor es ver algunos propuestos desde el material complementario.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-5.d-flex
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Animatic con pocos dibujos: Arthur Gu (2011), "Animatic".
      .col-lg-4.mb-lg-0.mb-5.d-flex
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Animatic muy fiel al producto final: Kevin Parry (2010), The Arctic Circle - Storyboard Comparison.
      .col-lg-4.d-flex
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              i   Animatic avanzado en 3D (Previz): The Third Floor (2020), The making of Avengers: End Game.

    .row.justify-content-center
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
