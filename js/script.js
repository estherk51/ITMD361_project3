function slideShow(){
        var imgLen = document.getElementsByClassName('slide-container');
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length) {
            setInterval(slideShow() {
                images[0].src = images[counter].src;
                console.log(images[counter].src);
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },4000);
        }
}