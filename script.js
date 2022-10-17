

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

    affiche()
    {
        document.getElementById("#click").innerHTML = "hi"
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
        return this.cards;
        
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
    
  
        
    shuffleAssembly () {
        const assembly = deck.shuffle()
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
                    assamblage.innerHTML +='<img src="png/' + assembly[0*i+j] + '.png.png" />'+ "&emsp;"
                    assamblage_2.innerHTML +='<img src="png/' + assembly[13*i+j] + '.png.png" />'+ "&emsp;" 
                    assamblage_3.innerHTML +='<img src="png/' + assembly[26*i+j] + '.png.png" />'+ "&emsp;"
                    assamblage_4.innerHTML +='<img src="png/' + assembly[39*i+j] + '.png.png" />'+ "&emsp;" 
 

 
                j++;
            k++;
    
        }   
    }
    

    }
  
    
 
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




let deck = new Paquet()
let deck2= deck
deck.assamblage()
deck2.shuffleAssembly(deck)

/*
const mybutton = document.getElementById("decks");
const mybutton2 = document.getElementById("reset")
mybutton.addEventListener("click",deck2.shuffleAssembly(deck));
mybutton2.addEventListener("click",deck.assamblage());
*/





