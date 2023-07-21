let x = 1
let y = 1
function open_menu(){
    if (x == 1){
        document.getElementById('menu').style.left = '0%';
        document.getElementById('menu').style.opacity = '1';
        document.getElementsByTagName('body')[0].style.overflow ='hidden';
        x++
    } else{
        document.getElementById('menu').style.left = '100%';
        document.getElementById('menu').style.opacity = '0';
        document.getElementsByTagName('body')[0].style.overflow ='visible';
        x--
    }
}
function subscribe(){
    if (x == 1){

        document.getElementById('subscribe').style.opacity = '1';
        document.getElementById('subscribe').style.zIndex = '1000000000';
        document.getElementsByTagName('body')[0].style.overflow ='hidden';
        x++
    } else{

        document.getElementById('subscribe').style.opacity = '0';
        document.getElementById('subscribe').style.zIndex = '-1000000000';
        document.getElementsByTagName('body')[0].style.overflow ='visible';
        x--
    }
}



function back_nav(){
    if (y == 1){
        document.getElementById('nav-header').style.height ='70px'
        document.getElementById('nav-header').style.backgroundColor ='#191919'
        document.getElementById('go-top').style.opacity = '1'
        document.getElementById('go-top').style.bottom = '5%'
    }
    let m = window.pageYOffset
    if( m == 0){
        document.getElementById('nav-header').style.height ='100px'
        document.getElementById('nav-header').style.backgroundColor ='#19191900'
        document.getElementById('go-top').style.opacity = '0'
        document.getElementById('go-top').style.bottom = '10%'
    }
}

function explore(){
    window.scrollBy(0, 800);
}