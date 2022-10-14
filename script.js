/*document.querySelector("#reset").addEventListener("click",reset)**/
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
        let assamblage = document.getElementById('decks');
        assamblage.innerHTML = "";
        let i = 0;
        let j = 0;
        while (i < 4){
            assamblage.innerHTML += "<div>"
            i++;

            while (j < 13){
                assamblage.innerHTML +='<img scr = "' + Image[13*(i+j)] + '" />';
                j++;
            
            assamblage.innerHTML = "</div>";}}
            

    }
    

        
}       




class Carte {
    constructor(figure, value) {
        this.figure = figure
        this.value = value  
    }

}

function nouveauPaquet() { 
    return SUITS.flatMap(figure => {
        return VALUES.map(valeur => {
            return new Carte (figure,valeur)
        })
    })

}

const button = document.getElementById("shuffle")
button.addEventListener("click",shuffle);
const deck = new Paquet()
deck.shuffle()
deck.assamblage()

console.log(deck.cards)


/*
cardDiv = document.createElement("div")
cardDiv.innerText = this.suit
cardDiv.classList.add("card", this.color)
cardDiv.dataset.value = `${this.value} ${this.suit}`
*/









