'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./games/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// On document ready 'DOM'
$(() => {
  events.addHandlers()
})

let won = false
let gameOver = false
let gamesPlayed = 0
let moveCount = 0
let tieCount = 0
let xWin = 0
let oWin = 0

$(document).ready(function () {
  let player = 1
  // click event
  $('.col-xs-3').on('click', function (event) {
    const boxSelected = $(this)
    if (won === true) {
      return
    }
    // box already taken
    if (boxSelected.hasClass('x') || boxSelected.hasClass('o')) {
      $('#message').html('Pick another box!')
    } else {
      // moveCount = moveCount + 1
      moveCount++
      if (player === 1) {
        // if box is selected, add 'x'
        boxSelected.addClass('x')
        // return true or false
        if (checkForWinner('x')) {
          won = true
          gameOver = true
          // keep track of wins
          xWin++
          recordGame('x')
          console.log(xWin)
          $('#winnerX').html('X-FLAWLESS VICTORY!')
          $('#x_win').html(xWin)
        }
        // check for tie
        if (moveCount === 9 && won === false) {
          gameOver = true
          tieCount++
          // do when there is a tie
          $('#message').html('Bumping heads!')
          $('#tie').html(tieCount)
        } else {
          // switch to player 2
          player = 2
          $('#message').html('O\'s turn')
        }
        events.onUpdateGame(event.target.dataset.index, 'x', gameOver)
      } else {
        // if box is selected, add 'o'
        boxSelected.addClass('o')
        // return true or false
        if (checkForWinner('o')) {
          won = true
          gameOver = true
          oWin++
          recordGame('o')
          console.log(oWin)
          $('#winnerO').html('O-IMPECCABLE WIN!')
          $('#o_win').html(oWin)
        }
        // check for tie
        if (moveCount === 9 && won === false) {
          gameOver = true
          tieCount++
          // do when there is a tie
          $('#message').html('Bumping heads!')
          $('#tie').html(tieCount)
        } else {
          // when player 2 goes, switch back to player 1
          player = 1
          $('#message').html('X\'s turn')
        }
        events.onUpdateGame(event.target.dataset.index, 'o', gameOver)
      }
    }
  })

  // tracking games played
  function recordGame (symbol) {
    gamesPlayed = gamesPlayed++
    return gamesPlayed
  }

  // possible winning combos
  function checkForWinner (symbol) {
    if ($('.box1').hasClass(symbol) && $('.box2').hasClass(symbol) && $('.box3').hasClass(symbol)) {
      return true
    } else if ($('.box4').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box6').hasClass(symbol)) {
      return true
    } else if ($('.box7').hasClass(symbol) && $('.box8').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      return true
    } else if ($('.box1').hasClass(symbol) && $('.box4').hasClass(symbol) && $('.box7').hasClass(symbol)) {
      return true
    } else if ($('.box2').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box8').hasClass(symbol)) {
      return true
    } else if ($('.box3').hasClass(symbol) && $('.box6').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      return true
    } else if ($('.box1').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      return true
    } else if ($('.box3').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box7').hasClass(symbol)) {
      return true
    } else {
      return false
    }
  }
})

// reset game
function restart () {
  $('#a1').removeClass('x o')
  $('#a2').removeClass('x o')
  $('#a3').removeClass('x o')
  $('#b1').removeClass('x o')
  $('#b2').removeClass('x o')
  $('#b3').removeClass('x o')
  $('#c1').removeClass('x o')
  $('#c2').removeClass('x o')
  $('#c3').removeClass('x o')
  won = false
  gameOver = false
  moveCount = 0
  // xWin = 0
  // oWin = 0
  // tieCount = 0
}

$('#newGame').click(() => {
  restart()
  $('#winnerX').empty()
  $('#winnerO').empty()
  events.onCreateGame()
})

module.exports = {
  restart
}
