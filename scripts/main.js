var myImage = document.querySelector('img')

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src')
  // alert('11')
  if (mySrc === 'images/firefox.jpg') {
    myImage.setAttribute('src', 'images/firefox2.jpg')
  } else {
    myImage.setAttribute('src', 'images/firefox.jpg')
  }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

myButton.onclick = function () {
  setUserName()
}
/* global prompt localStorage:true */
function setUserName () {
  var myName = prompt('Please enter your name.')
  localStorage.setItem('name', myName)
  myHeading.textContent = 'Mozilla is cool, ' + myName
}
