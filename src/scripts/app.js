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
var message = document.getElementById('txtNewMessage');
//when you click the "update" button 
document.getElementById('btUpdateMessage').addEventListener('click', function(e) {
//    var chat = { name: username, message: message.value };
//    addMessage(chat);
//    message.value = '';
    //console log the message string
   return console.log(message);
});