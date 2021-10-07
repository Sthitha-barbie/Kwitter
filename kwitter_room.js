const firebaseConfig = {
      apiKey: "AIzaSyA28WZHfu7CgSytXbB-z3iVHepA5a3prW8",
      authDomain: "kwitter-project-d9fe4.firebaseapp.com",
      databaseURL: "https://kwitter-project-d9fe4-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-d9fe4",
      storageBucket: "kwitter-project-d9fe4.appspot.com",
      messagingSenderId: "690509519465",
      appId: "1:690509519465:web:1bf5f7affb9b11ed9da0f8",
      measurementId: "G-8WHVLNHLFB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function addroom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Name"
 });

 localStorage.setItem("Roomname",room_name);

 window.location = "kwitter_page.html";
}
    
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;

    });});}
    getData();
