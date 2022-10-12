const FIGURES = ['♦','♣','♥','♠']
const VALEURS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']




class Paquet{
    constructor(cartes = nouveauPaquet()) {
    this.cartes = cartes 
    }

}

class Carte {
    constructor(figure, valeur){
        this.figure = figure
        this.valeur = valeur

    }
}

function nouveauPaquet(){
    return FIGURES.flatMap(figure => {
        return VALEURS.Map(valeur => {
            return new Carte(figure,valeur)
        })


    })

}
const paquet = new Paquet()
console.log(paquet.cartes)