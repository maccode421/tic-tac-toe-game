'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config) // do I add config.apiOrigins.production here?
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

$(document).ready(function() {

  let player = 1
  // click event
  $('.col-xs-3').on('click', function(event) { // how you want the game to be played
    const boxSelected = $(this) // game logic
    if (boxSelected.hasClass('x') || boxSelected.hasClass('o')) {
      alert('This box already taken! Please select another.')
    } else {
      if (player === 1) {
        boxSelected.addClass('x') // if box is selected, add 'x'
        if (checkForWinner('x')) { // return true or false
          document.write('You da BOMB! Player' + player + ' ' + 'you WIN!')
        } else {
          player = 2 // switch to player 2
        }
      } else {
        boxSelected.addClass('o') // if box is selected, add 'o'
        if (checkForWinner('o')) { // return true or false
          document.write('You da BOMB! Player' + player + ' ' + 'you WIN!')
        } else {
          player = 1 // when player 2 goes, it goes back to player 1
        }
      }
    }
  })

  // will fire every time a box is clicked
  function checkForWinner(symbol) { // symbol is 'x' or symbol is 'o'
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
