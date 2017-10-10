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
let gamesPlayed = 0
let moveCount = 0
let winCount = 0

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
      $('#message').html('pick another box')
    } else {
      moveCount++ // moveCount = moveCount + 1
      console.log(event)
      if (player === 1) {
        boxSelected.addClass('x') // if box is selected, add 'x'
        if (checkForWinner('x')) { // return true or false
          won = true
          winCount++ // keeping track of wins
          $('#winnerX').html('FLAWLESS VICTORY!')
          $('#x_win').html(winCount)
        }
        // checking for tie
        if (moveCount === 9 && won === false) {
          // do when there is a tie
          $('#message').html('bumping heads!')
          $('#tie').html(moveCount)
        } else {
          player = 2 // switch to player 2
          $('#message').html('O\'s turn')
        }
        events.onUpdateGame(event.target.dataset.index, 'x', false)
      } else {
        boxSelected.addClass('o') // if box is selected, add 'o'
        if (checkForWinner('o')) { // return true or false
          won = true
          winCount++
          $('#winnerO').html('IMPECCABLE WIN!')
          $('#o_win').html(winCount)
        }
        if (moveCount === 9 && won === false) {
          // do when there is a tie
          $('#message').html('bumping heads!')
          $('#tie').html(moveCount)
        } else {
          player = 1 // when player 2 goes, switch back to player 1
          $('#message').html('X\'s turn')
        }
        events.onUpdateGame(event.target.dataset.index, 'o', false)
      }
    }
  })

  // tracking games played
  function recordGame () {
    gamesPlayed = gamesPlayed++
    return gamesPlayed
  }

  // possible winning combos
  function checkForWinner (symbol) {
    if ($('.box1').hasClass(symbol) && $('.box2').hasClass(symbol) && $('.box3').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box4').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box6').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box7').hasClass(symbol) && $('.box8').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box1').hasClass(symbol) && $('.box4').hasClass(symbol) && $('.box7').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box2').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box8').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box3').hasClass(symbol) && $('.box6').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box1').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box9').hasClass(symbol)) {
      recordGame()
      return true
    } else if ($('.box3').hasClass(symbol) && $('.box5').hasClass(symbol) && $('.box7').hasClass(symbol)) {
      recordGame()
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
  moveCount = 0
  winCount = 0
}

$('#newGame').click(() => {
  restart()
  $('#winnerX').empty()
  $('#winnerO').empty()
  events.onCreateGame()
})
