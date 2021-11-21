<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Maqueta de sonido

    p.mb-5 En el siguiente video se expone el proceso básico para el montaje de los cuadros elaborados en el proceso de <i>storyboard</i> con la finalidad de elaborar una animatic.Para esto se utilizará el programa Blender el cual es un <i>software</i> libre que se puede obtener gratuitamente en la página www.blender.org.

    h3.titulo-tercero Instalación de Blender

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Aunque su uso principalmente está enfocado en el 3D, posee un apartado dedicado a la edición de video básica, ideal para introducirse en el mundo del montaje.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Por otro lado, se pone a disposición una serie de videos que presenta el software especializado StoryboardPro y el proceso que se debe seguir para la construcción de un animatic.

    .row.justify-content-center
      .col-lg-5
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://youtu.be/IewO4FET2xg" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Enlace.
              i   Webinar - Learn How to Create Animatics in Storyboard Pro


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
