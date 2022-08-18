const smallImages = document.querySelectorAll('.image-button');

smallImages.forEach((drinkItem) => {
    drinkItem.addEventListener('click', function() {
        const {src, color} = this.dataset;
        imgChange(src);
        colorChange(color);
       
        function imgChange(item) {
            document.querySelector('.coffee').src = item;
        };
        
         function colorChange(color) {
            const backGround = document.querySelector('.background');
            backGround.style.background = color;
        };
    });
});

smallImages();

