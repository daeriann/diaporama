//diaporama
var Slideshow = {

    items : document.getElementsByClassName("item"), 
    imageNum : 0,
    currentInterval : null,
    init: function(autoplay = true){
        this.setListeners(autoplay);
    },
    //touche
    infoKeyboard : function(e) {
        if(e.keyCode === 39) {
            this.next();
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        } else if(e.keyCode === 37) {
            this.previous();
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }
        else if(e.keyCode === 32){
            this.autoplay();
        }
    },

    next : function() {
        this.items[this.imageNum].style.opacity = "0"; 
        if(this.imageNum === 4) { 
            this.imageNum = 0; 
        } else { 
            this.imageNum++;
        }
        this.items[this.imageNum].style.opacity = "1";
    },

    previous : function() {
        this.items[this.imageNum].style.opacity = "0"; 
        if(this.imageNum === 0) {
            this.imageNum = 4;
        } else { 
            this.imageNum--; 
        }
        this.items[this.imageNum].style.opacity = "1";
    },

    autoplay : function(){
        if (this.currentInterval === null){
        document.getElementById('pause').textContent = 'pause';
        this.currentInterval = setInterval(this.next.bind(this),5000);
        }
        else{
        clearInterval(this.currentInterval);
        document.getElementById('pause').textContent = 'play';
        this.currentInterval = null;
        }
    },
    setListeners : function(autoplay){
        document.getElementById('pause').addEventListener('click',function(e){
            this.autoplay();
        }.bind(this));
        document.getElementById("buttonRight").addEventListener("click",this.next.bind(this));

        document.getElementById("buttonLeft").addEventListener("click",this.previous.bind(this));

        document.addEventListener("keydown", this.infoKeyboard.bind(this));
        if(autoplay === true){
            this.autoplay();
        }
    }
}

var slider = Object.create(Slideshow);

slider.init();