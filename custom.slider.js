/*
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
[ MODO DE UTILIZAÇÃO ]  SLIDER PERSONALIZADO
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1º - SETA ESQUERDA ID | 2º - SETA DIREITA ID | 3ª Classe ou id do item | 4ª ID do container | 5º Numero minimo de items em display | 6º Quantos items está a passar por slide  
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
sliderButtons("#setaesquerda_a","#setadireita_a",".divisor-slide","#caixas_div",4,1);
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
function sliderButtons(setaesquerda, setadireita, itemid, divid, total_slides_basico, nr_passagem) {

    // Total de Slides 
    var total_slides = $(setadireita).attr('title'); // Total
    var count_slides = total_slides_basico; // Minimo por página
    var default_slides = total_slides_basico; // Default nr de count slides para comparar

    // Configuração inicial
    if (count_slides === default_slides) {
        count_slides = default_slides;
        $(setaesquerda).css({
            opacity: 0.5
        }); // Fade left arrow
        $(setadireita).css({
            opacity: 1
        });
    }




    $(setadireita).click(function() {

        if (count_slides >= total_slides) {
            // Não fazer nada
        } else {

            var width = $(itemid).outerWidth();

            $(divid).animate().stop().animate({
                scrollLeft: "+=" + width + "px",
            }, "slow");

            // Adicionar consoante o nr de passagens
            var i;
            for (i = 0; i < nr_passagem; i++) {
                count_slides++;
            }

            // Branquear seta
            if (count_slides >= total_slides) {
                count_slides = total_slides;
                $(setadireita).css({
                    opacity: 0.5
                }); // Fade left arrow
                $(setaesquerda).css({
                    opacity: 1
                });
            }

            console.log(count_slides);
        }

    });

    $(setaesquerda).click(function() {

        if (count_slides <= default_slides) {
            // Não fazer nada
        } else {

            var width = $(itemid).outerWidth();

            $(divid).animate().stop().animate({
                scrollLeft: "-=" + width + "px"
            }, "slow");

            // Adicionar consoante o nr de passagens
            var i;
            for (i = 0; i < nr_passagem; i++) {
                count_slides--;
            }
            // Branquear seta
            if (count_slides <= default_slides) {
                $(setaesquerda).css({
                    opacity: 0.5
                }); // Fade left arrow
                $(setadireita).css({
                    opacity: 1
                });
                count_slides = default_slides;
            }
            console.log(count_slides);

        }


    });

}
