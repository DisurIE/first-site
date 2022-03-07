const navTabClass = "nav-interactive__tab";
const TabClass = "interactive__tab";
const sliderClass = "interactive__slider";
const bigSliderClass = "interactive__big-slider";

const navsliders = document.querySelectorAll(`.${navTabClass}`);
const sliders = document.querySelectorAll(`.${sliderClass}`);
const bigSliders = document.querySelectorAll(`.${bigSliderClass}`);



const        slidersContentIMG = document.querySelectorAll('.crew__douglas'),
             slidersContent = document.querySelectorAll('.crew__target'),
             slidersParent = document.querySelector('.interactive__sliders');
          


        function hibeTabContent(){
            slidersContent.forEach(item =>{
                item.classList.add('hidden');
                
            });
            slidersContentIMG.forEach(item =>{
                item.classList.add('hidden');
                
            });
            sliders.forEach(item =>{
                item.classList.remove('interactive__slider_active');
            });
        }   
        function shoyTabContent(i = 0){
            slidersContent[i].classList.remove('hidden');
            slidersContentIMG[i].classList.remove('hidden');
            sliders[i].classList.add('interactive__slider_active');
        }

        hibeTabContent();
        shoyTabContent();


       
        slidersParent.addEventListener('click', (event)=>{
                const target = event.target;
    
                if(target && target.classList.contains('interactive__slider')){
                    sliders.forEach((item, i) => {
                        if(target == item){
                            hibeTabContent();
                            shoyTabContent(i);

                        }
                        
                    });
                }
            
        });