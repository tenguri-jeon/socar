해더에기능넣기();

function 해더에기능넣기(){

    const header = document.querySelector('header');
    let 이전스크롤좌표= window.scrollY;
    
    window.addEventListener('scroll', (e)=>{
        console.log(window.scrollY);
        if(window.scrollY > 40){
            스크롤된해더();
        }
        else{
            스크롤안된해더();
        }
        
        
        if(이전스크롤좌표 < window.scrollY) {
            스크롤사라짐();
        }
        else{
            스크롤나타날();
    }
    이전스크롤좌표 = window.screenY;
})

function 스크롤된해더(){
    header.classList.add('scrolled');
}

function 스크롤안된해더(){
    header.classList.remove('scrolled');
}

function 스크롤사라짐() {
    header.classList.add('hide-header');
}

function 스크롤나타날(){
    header.classList.remove('hide-header')
}
}