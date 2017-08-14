'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  console.log('sign in success!')
  $('#signIn').html('Sign in successful.')
  $('#signIn').hide(2500)
  // $('#sign-in').text(data.user.email)
  // $('').val('')
  // $('').hide()
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('sign out success!')
  $('#signOut').html('You signed out.')
  $('#signOut').hide(2500)
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.')
  $('#changePassword').html('Password Successfully Changed')
  $('#changePassword').hide(2500)
}

const success = (data) => {
  console.log(data)
  console.log('success!')
}

const failure = (error) => {
  console.error(error)
  console.log('failure!')
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
}
