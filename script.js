
document.querySelector("#shuffle").addEventListener("click",shuffle)

const SUITS = ['♦','♣','♥','♠']
const VALUES = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']


class Paquet {
    constructor(cards = nouveauPaquet()) {
    this.cards = cards 
    }


    get fullCartes() {
        return this.cards.length

    }

    get halfCartes () {
        return this.cards.length /2

    }

    
    shuffle() {
        const newPaquet = []
        const newHalf1 = this.cards.slice(0,this.fullCartes-26);
        const newHalf2 = this.cards.slice(this.halfCartes,this.fullCartes);
        let i = 0;
        while (i < this.halfCartes){
            newPaquet.push(newHalf1[i]);
            newPaquet.push(newHalf2[i]);
            i++;

        }


        this.cards = newPaquet
        return newPaquet;
        
    }

    
    assamblage () {
        this.cards = []
        for (let suit in SUITS){
            for (let value in VALUES) {
                this.cards.push(`${VALUES[value]}${SUITS[suit]}`)
            }
        }
        const assamblage = document.getElementById('decks');
        const assamblage_2 = document.getElementById('decks1')
        const assamblage_3 = document.getElementById('decks2')
        const assamblage_4 = document.getElementById('decks3')
        assamblage.innerHTML =" ";
        assamblage_2.innerHTML =" ";
        assamblage_3.innerHTML =" ";
        assamblage_4.innerHTML =" ";
        let i = 0;
        let j = 0;
        let k = 0;
        while (k < 4 ){
            while (i < SUITS.length) {
                assamblage.innerHTML += "<a>"
                assamblage_2.innerHTML += "<a>"
                assamblage_3.innerHTML += "<a>"
                assamblage_4.innerHTML += "<a>"
                i++;
                while (j < 13){
                    assamblage.innerHTML +='<img src="png/' + this.cards[0*i+j] + '.png.png" />'+ "&emsp;"
                    assamblage_2.innerHTML +='<img src="png/' + this.cards[13*i+j] + '.png.png" />'+ "&emsp;" 
                    assamblage_3.innerHTML +='<img src="png/' + this.cards[26*i+j] + '.png.png" />'+ "&emsp;"
                    assamblage_4.innerHTML +='<img src="png/' + this.cards[39*i+j] + '.png.png" />'+ "&emsp;" 
 

 
                j++;
            k++;
    
        }   
    }
  
    
 
    }
    

    }
    
}
    

class Carte {
    constructor(figure, value) {
        this.figure = figure
        this.value = value  
    }

}

function nouveauPaquet() {
    cards = []
    for (let suit in SUITS){
        for (let value in VALUES) {
            cards.push(`${VALUES[value]}${SUITS[suit]}`)
        }
    return cards    
        }
    }


const button = document.getElementById("shuffle")
button.addEventListener("click",shuffle);
const deck = new Paquet()
deck.shuffle()
deck.assamblage()
console.log(deck.cards)
const cartes_sep2 = document.querySelector("#deck2").
cartes_sep2.innerHTML= deck.cards.slice(13,26).assamblage()


/*
const carte_sep1 = document.querySelector("#deck1")
carte_sep1.innerHTML = deck.cards.slice(0,13)
let i = 0
let j = 0
while (i < SUITS.length){
    carte_sep1.innerHTML += "<tr>"
    i++;
   
    for( let j=0; j<14; j++){
        let img =  document.createElement("img");
        img.src = "png/'.png" + this.cards[i] + "";
        carte_sep1.innerHTML += img + '/>';

    document.getElementById("#decks").appendChild(img)}}

    



const cartes_sep2 = document.querySelector("#deck2")
const cartes_sep3 = document.querySelector("#deck3")
const cartes_sep4 = document.querySelector("#deck4")
carte_sep1.innerHTML = deck.cards.slice(0,13)
cartes_sep2.innerHTML= deck.cards.slice(13,26)
cartes_sep3.innerHTML= deck.cards.slice(26,39)
cartes_sep4.innerHTML = deck.cards.slice(39,52)
    

*/





