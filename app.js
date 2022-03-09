const cardArray = [
    {
        name: 'mama',
        img: 'images/mama.png',
    },
    {
        name: 'dada',
        img: 'images/dada.png',
    },
    {
        name: 'yaya',
        img: 'images/yaya.png',
    },
    {
        name: 'popo',
        img: 'images/popo.png',
    },
    {
        name: 'cece',
        img: 'images/cece.png',
    },
    {
        name: 'baba',
        img: 'images/baba.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)

    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')

    console.log('clicked', cardId)
}