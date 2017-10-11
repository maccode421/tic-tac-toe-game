'use strict'

const app = require('../app.js')
// const index = require('../index.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('success!')
  $('#authMessage').html('Sign up successful!')
  $('.input').val('')
}

const signUpFailure = (error) => {
  console.error(error)
  console.log('failure!')
  $('#authMessage').html('Sign up failed!')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('sign in success!')
  $('#authMessage').html('You\'re signed in!')
  $('#authMessage').fadeIn('You\'re signed in!')
  $('.input').val('')
  $('#gameBoard').removeClass('hide')
}

const signInFailure = (error) => {
  $('#authMessage').html('Sign in failed!', error)
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#authMessage').html('Good Bye!')
  $('#authMessage').fadeOut(1500)
  $('#gameBoard').addClass('hide')
  restart()
}

const signOutFailure = (error) => {
  $('#authMessage').html('Sign out failed!')
  console.log(error)
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.')
  $('#authMessage').html('Password successfully changed!')
  $('.input').val('')
}

const changePasswordFailure = (error) => {
  $('#authMessage').html('Change password failed!')
  console.log(error)
}

const createGameSuccess = (data) => {
  app.game = data.game
  console.log(data)
  console.log('create new game success')
}

const createGameFailure = (error) => {
  console.log(error)
  console.log('Fail')
}

const updateGameSuccess = (data) => {
  console.log(data)
  // console.log('game update success')
}

const updateGameFailure = (error) => {
  console.log(error)
}

const getHistorySuccess = (data) => {
  console.log(data)
  const games = data.games.length
  $('#message').html(games)
  console.log('game history success')
}

const getHistoryFailure = (error) => {
  console.log(error)
  console.log('game history failed')
}

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
  $('#x_win').html('')
  $('#o_win').html('')
  $('#tie').html('')
  // $('#winnerX').empty()
  // $('#winnerO').empty()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  getHistorySuccess,
  getHistoryFailure,
  updateGameSuccess,
  updateGameFailure
}
