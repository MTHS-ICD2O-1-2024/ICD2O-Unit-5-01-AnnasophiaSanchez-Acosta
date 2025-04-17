// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall updated by Anna S.
// Created on: April 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if the user has selected the random number from above
 */
//eslint-disable-next-line no-used-vars
function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById(`user-number`).value)
  //process
  If(userNumber === randomNumber)
  {
    //output
    document.getElementById(
      `result`
    ).innerHTML = `<p>You have guessed the correct number!</p>`
  }

  If(userNumber !== randomNumber)
  {
    //output
    document.getElementById(`result`).innerHTML =
      `<p>You have guessed the worong number!` +
      `<br/> The correct number was` +
      randomNumber +
      `</p>`
  }
}
