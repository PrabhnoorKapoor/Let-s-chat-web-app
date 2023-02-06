
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot){childKey=childSnapshot.key;
      Room_names= childKey;
      //Start code
      console.log("Room_Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
            //End code
            });
      });}

       function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


getData();


function redirectToRoomName (name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}




