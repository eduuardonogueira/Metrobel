/* Dinâmica do botão mobile */
    buttonMenu.addEventListener('click', () =>{
    menu.classList.toggle("ph-x");
    menu.classList.toggle("icone-animation");
    nav.classList.toggle("menu-nav_on")
  })
/* fim */

/* Dinâmica das animaçõe */

/* Animação para a direita */
const dashright = new IntersectionObserver( entries => {

  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
    entry.target.classList.add('dash-right')
    }
  })
 
}, {
 threshold: [0.25 , 0.5 , 0.75 , 1]
})
Array.from(document.querySelectorAll('.inicio-titulo, .clientes-imagem, .mapa-titulo')).forEach( element => {
dashright.observe(element)
})
/* Animação para a direita - fim */


/* Animação para a esquerda */
const dashleft = new IntersectionObserver( entries => {

  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
    entry.target.classList.add('dash-left')
    }
  })
 
}, {
 threshold: [0.25 , 0.5 , 0.75 , 1]
})
Array.from(document.querySelectorAll('.inicio-imagem, .rede-imagem, .mapa-imagem, .clientes-titulo')).forEach( element => {
dashleft.observe(element)
})
/* Animação para a esquerda - fim*/


/* Animação para cima */
const dashup = new IntersectionObserver( entries => {

  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 1) {
    entry.target.classList.add('dash-up')
    }
  })
 
}, {
 threshold: [0.25 , 0.5 , 0.75 , 1]
})
Array.from(document.querySelectorAll('.servicos-vantagem, .vantagem-divisor_mobile')).forEach( element => {
dashup.observe(element)
})
/* Animação para baixo - fim */


/* Animação contador */
let displayed = false;
const contador = new IntersectionObserver( entries => {
  console.log(entries)
    Array.from(entries).forEach(entry => {
      if (entry.intersectionRatio >= 1) {
        function action(){
            if( displayed == false){

              for(cont = 1; cont <= 4 ; cont++){
                const valor = document.getElementById("valor" + cont);
                let max = valor.innerHTML;

                for (i = 0; i <= max; i++){
                    setTimeout(function(nr){
                        valor.innerHTML = nr;
                    }, i * 1500 / max, i)
                }
              }
              displayed = true;
            }
        }

        action()
      }
    })
}, {
 threshold: [0.25 , 0.5 , 0.75 , 1]
})
Array.from(document.querySelectorAll('.card-titulo')).forEach( element => {
contador.observe(element)
})
/* Animação contador fim */


/* Scrollspy */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, 200  );
});
/* Scrollspy fim */




