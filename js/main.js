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
Array.from(document.querySelectorAll('.inicio-titulo')).forEach( element => {
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
Array.from(document.querySelectorAll('.inicio-imagem')).forEach( element => {
dashleft.observe(element)
})
/* Animação para a esquerda - fim*/


/* Animação para baixo */
const dashdown = new IntersectionObserver( entries => {

  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
    entry.target.classList.add('dash-down')
    }
  })
 
}, {
 threshold: [0.25 , 0.5 , 0.75 , 1]
})
Array.from(document.querySelectorAll('.')).forEach( element => {
dashdown.observe(element)
})
/* Animação para baixo - fim */

