new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      autoplay: {
        delay: 5000,
      },

});

new Swiper('.delivery-swiper', {
    
    navigation: {
        nextEl: '.delivery-swiper-button-next',
        prevEl: '.delivery-swiper-button-prev',
      },
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
     loop: true,
     autoplay: {
        delay: 3000,
      },
     breakpoints: {
         200: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
         }
     },

});

    function outputFiles(){
        var inputs = document.querySelectorAll('.file__input');
        Array.prototype.forEach.call(inputs, function( input ){
            var label = input.nextElementSibling,
            labelVal = label.innerHTML;

            input.addEventListener('change', function(e){
                console.log(this.files);
                var fileName = '';
                if(this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else
                    fileName = this.files[0].name;
                    
                    if(fileName)
                        label.querySelector('span').innerHTML = fileName;
                    else
                        label.innerHTML = labelVal;
            });
        });
    }
document.addEventListener("DOMContentLoaded", outputFiles);

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.form-first__text-tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});