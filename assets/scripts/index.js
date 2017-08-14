'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./games/event.js')
$(() => {
  setAPIOrigin(location, config) // do I add config.apiOrigins.production here?
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// On document ready 'DOM'
$(() => { // An arrow function... lexically binds the this value (does not bind its own this...)
  events.addHandlers()
})

$(document).ready(function () {
  let player = 1
  // click event
  $('.col-xs-3').on('click', function (event) { // how the game to be played
    const boxSelected = $(this)
    if (boxSelected.hasClass('x') || boxSelected.hasClass('o')) { // game logic
      document.getElementById('message').innerHTML = 'PICK ANOTHER BOX'
      $('#message').hide(3000)
    } else {
      if (player === 1) {
        boxSelected.addClass('x') // if box is selected, add 'x'
        if (checkForWinner('x')) { // return true or false
          document.getElementById('winner1').innerHTML = 'FLAWLESS VICTORY! Player One'
          $('#winner1').hide(3000)
          $('#winner1').show(3000)
        } else {
          player = 2 // switch to player 2
        }
      } else {
        boxSelected.addClass('o') // if box is selected, add 'o'
        if (checkForWinner('o')) { // return true or false
          document.getElementById('winner2').innerHTML = 'IMPECCABLE WIN! Player Two'
          $('#winner2').hide(3000)
          $('#winner2').show(3000)
        } else {
          player = 1 // when player 2 goes, switch back to player 1
        }
      }
    }
  })

  // $('#hide').click(function () {
  // $('#hide').hide()
  // })

  // $('').click(function () {
  // $('#hide').show()
  // })

  // will fire every time a box is clicked
  function checkForWinner (symbol) { // symbol is 'x' or 'o'
    // possible winning combos
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
}
$('#newGame').click(restart)
