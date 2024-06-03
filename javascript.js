var clique = false;

document.body.addEventListener('click',function(event){
    const menu_aberto = document.getElementById('menu-aberto')
    const menu_mobile = document.getElementById('menu-mobile')
    if(event.target === menu_aberto){
        menu_mobile.style.display= "flex"
    }else if(event.target === menu_mobile){
        //Nesta condição, o menu_mobile é somente o elemento pai,
        //se vc clicar no elemento filho, o evento não será executado,
        //mas se clicar no corpo do elemento pai, o evento será executado
        menu_mobile.style.display= "none"  
    }
})

window.addEventListener('resize',function(){
    const menu_mobile = document.getElementById('menu-mobile')
    if(window.innerWidth >= 768){
        menu_mobile.style.display="none"
    }
})