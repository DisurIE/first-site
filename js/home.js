const homeBg = document.querySelectorAll('.home');
let bgCount = 0,
    sas = 400;
function animationBG(){
    setInterval( () =>{
        if(bgCount <= 400){
        
            bgCount += 1;
            document.getElementsByClassName('home')[0].style.marginTop = `${bgCount}px`;
            console.log(bgCount);
            
        }
        else if(sas >= 0 && bgCount >= 400){
            sas -= 1;
            document.getElementsByClassName('home')[0].style.marginTop = `${sas}px`;
            console.log(sas);
        }
        else if(sas <= 0){
            bgCount = 0;
            sas = 400;
        }
    }, 50);
    console.log(homeBg);
}
window.addEventListener('scroll', e => {
    window.scrollTo({top: 0})
  });
animationBG();