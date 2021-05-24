$('document').ready(function(){

    /*** Favorite Tabs ***/

    const favoriteItems = document.querySelectorAll('.favorite-tab-item');
    const favoriteContentItems = document.querySelectorAll('.favorite-tab-content-item');

    function selectFavoriteItem(e) {
        removeFavoriteBorder();
        removeFavoriteShow();
        this.classList.add('active');
        const favoriteContent = document.querySelector(`#${this.id}-content`);
        favoriteContent.classList.add('active');
    }

    function removeFavoriteBorder() {
        favoriteItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    function removeFavoriteShow() {
        favoriteContentItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    favoriteItems.forEach(item => {
        item.addEventListener('click', selectFavoriteItem);
    });


    /*** Quantity ***/

    let count = 1;
    let countElement = document.getElementById('quantity_value');
    let minusButton = document.getElementById('minus');
    let plusButton = document.getElementById('plus');

    if(minusButton !== null){
        minusButton.addEventListener('click', minus)
    }

    if(plusButton !== null){
        plusButton.addEventListener('click', plus)
    }
    
    function plus(){
        count++;
        countElement.value = count;
    }

    function minus(){
        if(count>1){
            count--;
            countElement.value = count;
        }
    }

    /*** Slider Presentation ***/

    $('.product-slider').owlCarousel({
        items:1,
        nav: true,
        dots: true,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });

    /*** Slider Presentation ***/
    
    $('.recent-products_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    /*** Single Product Description Tabs ***/

    const productTabItems = document.querySelectorAll('.product-tab-item');
    const productTabContens = document.querySelectorAll('.product-tab-content');

    function selectProductItem(e){
        removeProductBorder();
        removeProductActive();
        this.classList.add('product-tab-border');
        const productTabContenItem = document.querySelector(`#${this.id}-content`);
        productTabContenItem.classList.add('active')
    }

    function removeProductActive(){
        productTabContens.forEach(item=>item.classList.remove('active'));
    }

    function removeProductBorder(){
        productTabItems.forEach(item=>item.classList.remove('product-tab-border')) 
    }

    productTabItems.forEach(item =>item.addEventListener('click', selectProductItem))





    /*** Big Slider ***/

    $('#main-slider').slick({
        dots:true,
        arrows:true
    });

    /*** Category Slider ***/

    $('#category-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        infinite: true,
        responsive: [{
            breakpoint:1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

    

    /*** Show/Hide Presentation Content ***/

    const tabItems = document.querySelectorAll('.tabs-container__item')
    const tabContentItems = document.querySelectorAll('.tab-content__item');
    
    function selectItem(e) {
        removeBorder();
        removeShow();
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('active');
    }

    function removeBorder() {
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });



});

/*** Presentation Slider ***/

$('.product-presentation__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    nav: true,
    responsive: [{
        breakpoint:1280,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    },{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }]
});

