//diaporama
var Diaporama = {
    items : document.getElementsByClassName("item"), 
    //touche
    infosClavier : function(e) {
        if(e.keyCode === 39) {
            document.addEventListener("keydown", this.suivant());
        } else if(e.keyCode === 37) {
            document.addEventListener("keydown", this.precedent());
        }
    },

    suivant : function() {
        this.items[this.imageNum].style.opacity = "0"; 
        if(this.imageNum === 4) { 
            this.imageNum = 0; 
        } else { 
            this.imageNum++;
        }
        this.items[this.imageNum].style.opacity = "1";
    },

    precedent : function() {
        this.items[this.imageNum].style.opacity = "0"; 
        if(this.imageNum === 0) {
            this.imageNum = 4;
        } else { 
            this.imageNum--; 
        }
        this.items[this.imageNum].style.opacity = "1";
    }
}


document.getElementById("bouttonDroit").addEventListener("click", Diaporama.suivant.bind(Diaporama));

document.getElementById("bouttonGauche").addEventListener("click", Diaporama.precedent.bind(Diaporama));

document.addEventListener("keydown", Diaporama.infosClavier.bind(Diaporama));