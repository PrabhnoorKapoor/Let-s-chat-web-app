//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCCQe99k7Ngh98SD2ekG41vSlBCKGUT-z4",
    authDomain: "kwitter-eef36.firebaseapp.com",
    databaseURL: "https://kwitter-eef36-default-rtdb.firebaseio.com",
    projectId: "kwitter-eef36",
    storageBucket: "kwitter-eef36.appspot.com",
    messagingSenderId: "50631311864",
    appId: "1:50631311864:web:cf556740251da9744dd60d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag = "<h4>" + name1 + "</h4>";
message_tag ="<h4 class='massage_h4'>" + message +"</h4>";
like_button = "<button class 'btn btn-warning'id="+firebase_message_id+"value="+like+"onlick='updateLike(this.id)'>Likes :" + like +"</button>";
row= name_tag + message_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function updateLike(message_id)
{
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes- Number(likes) +1;
  firebase.database().ref(room_name).child(message_id).update({
   like : updated_likes
});
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}