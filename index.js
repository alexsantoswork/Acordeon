
//CHECK ONE
let checkone = document.getElementById('check-one')
let minusone = document.getElementById('check-one-minus')
let response = document.getElementById('to-appear')

checkone.addEventListener('click', () => {
    response.classList.add('appear')
    minusone.classList.add('minus-one-open')
})

minusone.addEventListener('click', () => {
    response.classList.remove('appear')
    minusone.classList.remove('minus-one-open')
})

//CHECK TWO
let checkTwo = document.getElementById('check-two')
let minusTwo = document.getElementById('check-two-minus')
let responseTwo = document.getElementById('to-appear-two')

checkTwo.addEventListener('click', () => {
    responseTwo.classList.add('appear')
    minusTwo.classList.add('minus-two-open')
})

minusTwo.addEventListener('click', () => {
    responseTwo.classList.remove('appear')
    minusTwo.classList.remove('minus-two-open')
})

//CHECK TREE
let checkTree = document.getElementById('check-tree')
let minusTree = document.getElementById('check-tree-minus')
let responseTree = document.getElementById('to-appear-tree')

checkTree.addEventListener('click', () => {
    responseTree.classList.add('appear')
    minusTree.classList.add('minus-tree-open') 
})

minusTree.addEventListener('click', () => {
    responseTree.classList.remove('appear')
    minusTree.classList.remove('minus-tree-open')
})

//CHECK FOUR
let checkFour = document.getElementById('check-four')
let minusFour = document.getElementById('check-four-minus')
let responseFour = document.getElementById('to-appear-four')

checkFour.addEventListener('click', () => {
    responseFour.classList.add('appear')
    minusFour.classList.add('minus-four-open') 
})

minusFour.addEventListener('click', () => {
    responseFour.classList.remove('appear')
    minusFour.classList.remove('minus-four-open')
})