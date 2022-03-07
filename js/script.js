    const navTabClass = "nav-interactive__tab";
    const TabClass = "interactive__tab";
    const sliderClass = "interactive__slider";
    const bigSliderClass = "interactive__big-slider";

    const navtabs = document.querySelectorAll(`.${navTabClass}`);
    const tabs = document.querySelectorAll(`.${TabClass}`);
    const sliders = document.querySelectorAll(`.${sliderClass}`);
    const bigSliders = document.querySelectorAll(`.${bigSliderClass}`);


function delegateTabsActive(nameTab, tabs, e){
    tabs.forEach(tab =>{
        tab.addEventListener( e, () => {
            tabs.forEach(tab =>{
                
                    tab.classList.remove(`${nameTab}_active`);
                
            });
           tab.classList.add(`${nameTab}_active`);
        });
    });
}
function tabEvents(nameTab,tabs){
    tabs.forEach(tab =>{
        
        tab.addEventListener( "mouseover", () => {
            if(!tab.classList.contains(`${nameTab}_active`)){
           tab.classList.add(`${nameTab}_hover`);
            }
        });
        tab.addEventListener( "mouseout", () => {
            
            tab.classList.remove(`${nameTab}_hover`);
         });
        
    });
    delegateTabsActive(nameTab, tabs, 'click');
}
tabEvents(navTabClass,navtabs);
tabEvents(TabClass, tabs);
tabEvents(sliderClass, sliders);
tabEvents(bigSliderClass, bigSliders);

//tabClass = tabs

const        tabsContentIMG = document.querySelectorAll('.destination__planet'),
             tabsContent = document.querySelectorAll('.destination__target'),
             tabsParent = document.querySelector('.interactive__tabs');
          


        function hideTabContent(){
            tabsContent.forEach(item =>{
                item.classList.add('hidden');
                
            });
            tabsContentIMG.forEach(item =>{
                item.classList.add('hidden');
                
            });
            tabs.forEach(item =>{
                item.classList.remove('interactive__tab_active');
            });
        }   
        function showTabContent(i = 0){
            tabsContent[i].classList.remove('hidden');
            tabsContentIMG[i].classList.remove('hidden');
            tabs[i].classList.add('interactive__tab_active');
        }

        hideTabContent();
        showTabContent();


       
        tabsParent.addEventListener('click', (event)=>{
                const target = event.target;
    
                if(target && target.classList.contains('interactive__tab')){
                    tabs.forEach((item, i) => {
                        if(target == item){
                            hideTabContent();
                            showTabContent(i);

                        }
                        
                    });
                }
            
        });

   const sasParents = document.querySelector('.home-header'),
         sasContent = document.querySelectorAll('.page');

//navtabs = tabs
//navTabClass = tab

     function hiddenContent(){
            sasContent.forEach(item => {
                item.classList.add('hidden');
            });

            navtabs.forEach(item => {
                item.classList.remove('nav-interactive__tab_active');
            });
        }

    function AddContent(i = 0){
        sasContent[i].classList.remove('hidden');
        navtabs[i].classList.add('nav-interactive__tab_active');
    }
        
    hiddenContent();
    AddContent();

    sasParents.addEventListener('click', (event)=>{
        const target = event.target;

        if(target && target.classList.contains(navTabClass)){
            navtabs.forEach((item, i) => {
                if(target == item){
                    hiddenContent();
                    AddContent(i);
                    console.log("sssssssssssssss");
                }
                
            });
        }
    });

// BURGER===============================================================================================================
    const burger = document.querySelector('.menu__icon'),
          menu = document.querySelector('.nav-interactive');

        burger.addEventListener('click',  () => {
            menu.classList.toggle('look');
            burger.classList.toggle('close');
        });



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