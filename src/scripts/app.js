//Initialize Firebase
var config = {
    apiKey: 'AIzaSyB7DQENoTDJb8T1Fu-QHl6ZCmo-gwLgz0g',
    authDomain: 'testfire-62669.firebaseapp.com',
    databaseURL: 'https://testfire-62669.firebaseio.com',
    storageBucket: 'testfire-62669.appspot.com'
  };
//get firebase app and all primitives used
var app = firebase.initializeApp(config);
var database = app.database();
var auth = app.auth();
var storage = app.storage();

//get a refrence to our "chat room" in the database
var databaseRef = database.ref().child('chat');
//get varibales from input box
var message = document.getElementById('txtNewMessage').value();
//when you click the "update" button...
var update = document.getElementById('btUpdateMessage');

update.addEventListener('click', function(e) {
    //defaults from google io 2016
    //build new data input
//    var chat = { name: username, message: message.value };
    //add new data input to the board
//    addMessage(chat);
    //clear input box to bring back to original state
//    message.value = '';
    //console log the message string 
  return console.log(message);
});