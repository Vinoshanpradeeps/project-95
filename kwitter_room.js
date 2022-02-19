const firebaseConfig = {
    apiKey: "AIzaSyAMOtcX4Pj3dOkKAHCtegz4fw3XKu3FfFY",
    authDomain: "project-93-2e998.firebaseapp.com",
    databaseURL: "https://project-93-2e998-default-rtdb.firebaseio.com",
    projectId: "project-93-2e998",
    storageBucket: "project-93-2e998.appspot.com",
    messagingSenderId: "362083034999",
    appId: "1:362083034999:web:5ee73b79ee718a7e93a372"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("player_name");
document.getElementById("welcome").innerHTML = "Welcome" + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name - " + Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("rooms").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
