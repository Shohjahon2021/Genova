let vw = window.screen.availWidth;
let body = document.querySelector('body');
let header = document.querySelector('header')
let headerHeight = header.offsetHeight;
let menuBtn = document.querySelector('.header__menu-btn');
let menuMobile = document.querySelector('.header__menu-mobile');
let services = document.querySelector('.services');
let calcBtns = document.querySelectorAll('.item__calc');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close-btn');
let pointReturn;

// Menu

menuBtn.addEventListener('click', function(evt) {
    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
        body.classList.remove('blocked');
    } else {
        menuMobile.classList.add('active');
        body.classList.add('blocked');
    }

    evt.stopPropagation();

    window.onclick = function(el) {
        if(!el.target === menuMobile || !menuMobile.contains(el.target)) {
            menuMobile.classList.remove('active');
            body.classList.remove('blocked');
        }
    }
});

// Services block

if (vw <= 576) {
    services.style.paddingTop = (((vw / 100) * 5) + headerHeight) + 'px';
}

// Services modal

modal.style.marginRight = -(modal.offsetWidth / 2) + "px";

calcBtns.forEach(function(btn) {
    btn.addEventListener('click', function(el) {
        modalClose.disabled = false;
        modal.style.top = "50%";
        modal.style.marginTop = -(modal.offsetHeight / 2) + "px";
        modal.style.boxShadow = "0 0 1px 100vmax #17171773";
        
        el.stopPropagation();
        
        window.onclick = function(el) {
            if(!el.target === modal || !modal.contains(el.target)) {
                modal.style.top = "-100%";
                modal.style.marginTop = "0";
                modal.style.boxShadow = 'none';
            }
        }
    });
});

modalClose.onclick = function() {
    modalClose.disabled = true;
    modal.style.top = "-100%";
    modal.style.marginTop = "0";
    modal.style.boxShadow = 'none';
    pointReturn = window.pageYOffset;
    window.scrollTo(0, pointReturn);
}