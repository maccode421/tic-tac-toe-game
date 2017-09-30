'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('sign in success!')
  $('#authMessage').html('You\'re signed in')
  $('#gameBoard').removeClass('hide')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#authMessage').html('You\'re signed out')
  $('#gameBoard').addClass('hide')
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.')
  $('#authMessage').html('Password successfully changed')
}

const success = (data) => {
  console.log(data)
  console.log('success!')
  $('#authMessage').html('Sign up successful')
}

const failure = (error) => {
  console.error(error)
  console.log('failure!')
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
  console.log('game history success')
}

const getHistoryFailure = (error) => {
  console.log(error)
  console.log('game history failed')
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createGameSuccess,
  createGameFailure,
  getHistorySuccess,
  getHistoryFailure,
  updateGameSuccess,
  updateGameFailure
}
