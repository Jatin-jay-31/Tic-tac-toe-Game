let btns = document.querySelectorAll('.box')
let reset = document.getElementById('reset')
let turnX = true
let count = 0
let winner = false


const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
turn(turnX)
btns.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (turnX) {
            box.innerHTML = 'X'
            box.style.color = 'White'
            turnX = false
            turn(turnX)
        }
        else {
            box.innerHTML = 'O'
            box.style.color = 'Black'
            turnX = true
            turn(turnX)
        }
        box.disabled = true
        count++
        checkWinner()

    })

})
function turn(player) {
    if (player) {
        document.querySelector('.winner').innerHTML = `Player X's turn`
        document.querySelector('p').classList.remove('hide')
    }
    else {
        document.querySelector('.winner').innerHTML = `Player O's turn`
        document.querySelector('p').classList.remove('hide')
    }

}
function displayMssg(pos) {
    document.querySelector('.winner').innerHTML = `Player ${pos} wins`
    document.querySelector('p').classList.remove('hide')
}
function drawMssg() {
    document.querySelector('.winner').innerHTML = `Game Drawn!`
    document.querySelector('p').classList.remove('hide')
}
function hideMssg() {
    document.querySelector('p').classList.add('hide')
}
function checkWinner() {
    for (const i of winPatterns) {
        let pos1 = btns[i[0]].innerHTML
        let pos2 = btns[i[1]].innerHTML
        let pos3 = btns[i[2]].innerHTML
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                displayMssg(pos1)
                disablebtn()
                winner = true
                btns[i[0]].style.border= '3px solid black'
                btns[i[1]].style.border= '3px solid black'
                btns[i[2]].style.border= '3px solid black'
                break
            }

        }
    }
    if (winner === false && count === 9) {
        drawMssg()
    }
}

function enableBtn() {
    btns.forEach((box) => {
        box.disabled = false
        box.innerHTML = ""
        box.style.border='none'
    })
}
function disablebtn() {
    btns.forEach((box) => {
        box.disabled = true
    })
}

reset.addEventListener('click', () => {
    enableBtn()
    hideMssg()
    count = 0
    winner = false
    turnX = true
})




