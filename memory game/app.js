const cardArray = [
    {
        name: 'fries',
        img:'images folder./fries.png'
    },
    {
        name: 'cheeseburger',
        img:'images folder./cheeseburger.png'  
    },
    {
        name:'hotdog',
        img:'images folder./hotdog.png'  
    },
    {
        name:'ice-cream',
        img:'images folder./ice-cream.png'  
    },
    {
        name:'milkshake',
        img:'images folder./milkshake.png'  
    },
    {
        name:'pizza',
        img:'images folder./pizza.png'  
    },
    {
        name: 'fries',
        img:'images folder./fries.png'
    },
    {
        name: 'cheeseburger',
        img:'images folder./cheeseburger.png'  
    },
    {
        name:'hotdog',
        img:'images folder./hotdog.png'  
    },
    {
        name:'ice-cream',
        img:'images folder./ice-cream.png'  
    },
    {
        name:'milkshake',
        img:'images folder./milkshake.png'  
    },
    {
        name:'pizza',
        img:'images folder./pizza.png'  
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
  
function createBoard () {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images folder./blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1] 


    if (optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src', 'images folder./blank.png')
        cards[optionTwoId].setAttribute('src', 'images folder./blank.png')
       alert('You clicked the same image')
    }
    else if (cardsChosen[0] === cardsChosen[1]){
       alert('You found a match')
       cards[optionOneId].setAttribute('src', 'images folder./white.png')
       cards[optionTwoId].setAttribute('src', 'images folder./white.png')
       cards[optionOneId].removeEventListener ('click', flipCard)
       cards[optionTwoId].removeEventListener ('click', flipCard)
       cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images folder./blank.png')
        cards[optionTwoId].setAttribute('src', 'images folder./blank.png')
        alert('Sorry try again')

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
}

if (cardsWon.length === 6){
    resultDisplay.textContent = 'Congratulations you found them all!'
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}
 

createBoard()





