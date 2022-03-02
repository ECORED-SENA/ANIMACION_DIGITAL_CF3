<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ritmo y montaje

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="slide-left" data-aos-duration="900")
        figure
          img(src="@/assets/curso/tema2-img1.svg")
      .col-lg-6(data-aos="slide-right" data-aos-duration="900")
        p.mb-0 El montaje o también conocido como edición, es el proceso mediante el cual se determina la duración y cortes de cada uno de los planos, de la misma manera se realiza la sincronización de sonidos para otorgar mayor sentido al audiovisual.
          br
          br
          | Este es uno de los elementos más importantes ya que contribuye a la organización y el ritmo del filme, los cuales determinarán en gran medida la experiencia y efectos generados en los espectadores. Dentro del proceso, se juega con la tendencia del espectador a relacionar imágenes para construir significado. (Fernández y Martínez, 1999)
          br
          br
          | Desde el lenguaje audiovisual reconocemos el concepto de ritmo como la sensación dinámica dada por el flujo de movimiento, sonoro y visual en los diferentes planos, así como también por efectos de montaje. Es así como se puede crear tensión o relajación a partir de la forma en cómo se articulan los diferentes elementos. Se habla de que un plano cinematográfico posee un ritmo interno y otro externo, que también puede entenderse como montaje interno y montaje externo.

    p.mb5(data-aos="fade" data-aos-duration="900") Para ampliar este concepto puede revisar el material complementario
      strong   “El ritmo audiovisual. Ritmo interno y externo”.

    TabsB.color-acento-contenido.mb-5(data-aos="fade" data-aos-duration="900")
      .py-4.py-md-5(titulo="Montaje interno" :icono="require('@/assets/curso/tema2-img2.svg')")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3.titulo-tercero Montaje interno
            p.mb-5 Es aquel que se realiza antes de la producción de cada plano sin recurrir a la edición. Puede obtenerse con o sin movimientos de cámara y efectos ópticos.
              br
              br
              | Al momento de optar por una cámara estática resulta importante denotar que la profundidad de campo, el enfoque, las acciones de los personajes, la composición y presencia fuera del campo, son los elementos a tener en cuenta para dotar a un plano de ritmo interno.
              br
              br
              | Adicionalmente, el movimiento de cámara y de óptica amplían las posibilidades. Un plano secuencia (sin cortes) permitirá relacionar dos o más imágenes, así como también un zoom proporcionará el aislamiento de un detalle o descubrir un entorno. (Fernández y Martínez, 1999). Lo mejor es ver un ejemplo propuesto por <i>Movieclips</i> (2017) de la película “<i>Atomic Blonde</i>” en el material complementario.
            a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://youtu.be/XarGS1AeEcE" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/link-amarillo.svg")
              .anexo__texto
                p
                  strong Video.
                  i   Movieclips (2017).  “Atomic Blonde”
          .col-md-6
            figure
              img(src='@/assets/curso/tema2-img4.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Montaje externo" :icono="require('@/assets/curso/tema2-img3.svg')")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            h3.titulo-tercero Montaje externo
            p.mb-5 Recurre a la edición, recortando y organizando los diferentes planos de la producción de acuerdo con las necesidades narrativas y propósitos sugeridos por el director.
              br
              br
              | El montaje externo puede lograrse a partir de la continuidad o discontinuidad temporal y espacial, empleando elipsis para suprimir información que la narrativa no requiere o que más adelante se mostrará, rompiendo así la linealidad.
              br
              br
              | El montaje según la idea o contenido trata de construir significados simbólicos o ideológicos mediante el uso de diferentes planos cuya relación sugiere un significado para el espectador. (Fernández y Martínez, 1999)
          .col-md-6
            figure
              img(src='@/assets/curso/tema2-img5.svg', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-7
        a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://vimeo.com/63959564" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/link-amarillo.svg")
          .anexo__texto
            p
              strong Video.
              |   Puede consultar el material complementario del documental producido por Wendy Apple “The cutting edge - The magic of the movie editing”, con el fin de ampliar los conceptos de montaje cinematográfico.

    Separador


    #t_2_1.titulo-segundo.color-secundario(data-aos="fade" data-aos-duration="900")
      h2 2.1  Clasificación o métodos de montaje

    p.mb-5(data-aos="slide-left" data-aos-duration="900") Dado que la historia del montaje se encuentra unida a la evolución del lenguaje audiovisual, existen diferentes estilos, tendencias y comprensión de los espectadores, los cuales han ido cambiando los criterios para organizar y combinar de cierta manera cada uno de los fragmentos dentro de un filme (Fernández y Martínez, 1999). No existe como tal una única clasificación arbitraria dentro del montaje, así que se presentan algunas de las más importantes.

    TabsC.color-primario(data-aos="slide-right" data-aos-duration="900")
      .py-3.py-md-4(titulo="Efecto Kuleshov")
        .row.justify-content-center
          .col-lg-5.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema2-img6.svg")
          .col-lg-5
            h3.titulo-tercero Efecto Kuleshov
            p.mb-0 Este director soviético observó la facilidad con que los espectadores relacionaban campos dispares. Su experimento se basó en montar un primer plano estático y tranquilo del actor Mosjukin, seguido de un plato de sopa sobre una mesa; luego hacía la misma combinación, pero ahora seguido de un ataúd y por último una niña. Al presentar esto a un público no avisado, quedaron sorprendidos por la expresividad del actor en cada una de las situaciones. Lo único que se cambiaba era el fragmento que le seguía al primer plano del actor, y así se generaban sensaciones distintas.
              br
              br
              | Lo mejor es consultar el material complementario <i>“Hitchcock explica el efecto Kuleshov”</i>.
      .py-3.py-md-4(titulo="Clasificación sugerida por Pudovkin")
        .row.justify-content-center
          .col-lg-5.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema2-img7.svg")
          .col-lg-5
            h3.titulo-tercero Clasificación sugerida por Pudovkin
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Montaje por contraste: se comparan dos situaciones contrarias: miseria vs. derroche, muerte vs. nacimiento.
              li
                .lista-ol--cuadro__vineta
                  span b
                | Montaje por paralelismo: presentación alternativa de dos tipos de sucesos diferentes.
              li
                .lista-ol--cuadro__vineta
                  span c
                | Montaje por similitud: relación simbólica entre dos tomas distintas.
              li
                .lista-ol--cuadro__vineta
                  span d
                | Montaje por sincronismo: similar al paralelismo, con la diferencia que los sucesos están relacionados y ocurren al mismo tiempo.
              li
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0
                  i Leitmotiv:
                  |   acentuación de una misma idea. También se le conoce como tema recurrente.
            a.anexo.color-acento-contenido.mb-4.mb-lg-0(href="https://youtu.be/2h5iWMc_PA4" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/link-amarillo.svg")
              .anexo__texto
                p
                  strong Video.
                  i   Puede consultar el material complementario propuesto por Elder Tanaka de “Técnicas de montagem - Pudovkin”.

      .py-3.py-md-4(titulo="Clasificación sugerida por Eisenstein")
        .row.justify-content-center
          .col-lg-5.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema2-img8.svg")
          .col-lg-5
            h3.titulo-tercero Clasificación sugerida por Eisenstein
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span a
                | Montaje métrico: basado enteramente en la longitud de los fragmentos independiente de su contenido.
              li
                .lista-ol--cuadro__vineta
                  span b
                | Montaje rítmico/ continuo: la longitud de los fragmentos se establece en función del contenido de los fragmentos y la estructura de la secuencia. Se tiene una estrecha relación con el sonido.
              li
                .lista-ol--cuadro__vineta
                  span c
                | Montaje tonal: es un grado superior del montaje rítmico, donde intervienen, además del movimiento y el sonido, el carácter emocional de cada fragmento.
              li
                .lista-ol--cuadro__vineta
                  span d
                | Montaje armónico: resultado de la combinación y relación de conflicto de las 3 técnicas anteriores.
              li
                .lista-ol--cuadro__vineta
                  span e
                | Montaje intelectual: pretende estimular el intelecto del espectador, haciendo uso de las técnicas anteriores. Podría catalogarse en cierta medida como el efecto Kulechov.
            p.mb-0 Para tener mayor claridad de cada una de las técnicas de montaje sugeridas por Eisenstein basta con realizar una búsqueda en internet o revisar el material complementario de “La teoría del montaje en el cine de Eisenstein” y “Los montajes de Eisenstein-Escuela para Cineastas”.

</template>

<script>
export default {
  name: 'Tema2',
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
