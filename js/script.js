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
                if(tab.classList.contains(`${nameTab}_active`)){
                    tab.classList.remove(`${nameTab}_active`);
                }
            });
           tab.classList.add(`${nameTab}_active`);
        });
    });
}
function tabEvents(nameTab,tabs){
    tabs.forEach(tab =>{
        
        tab.addEventListener( "mouseover", () => {
            
           tab.classList.add(`${nameTab}_hover`);
            
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

