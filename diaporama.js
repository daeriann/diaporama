//diaporama
var Slideshow = {
    items : document.getElementsByClassName("item"), 
    //touche
    infoKeyboard : function(e) {
        if(e.keyCode === 39) {
            document.addEventListener("keydown", this.next());
        } else if(e.keyCode === 37) {
            document.addEventListener("keydown", this.previous());
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
    }
}


document.getElementById("buttonRight").addEventListener("click", Slideshow.next.bind(Slideshow));

document.getElementById("buttonLeft").addEventListener("click", Slideshow.previous.bind(Slideshow));

document.addEventListener("keydown", Slideshow.infoKeyboard.bind(Slideshow));