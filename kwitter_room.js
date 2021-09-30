
const firebaseConfig = {
  apiKey: "AIzaSyDmkAr7O97EVw6f2BPeLTyVW0QpJUBTPjY",
  authDomain: "kwitter-5094f.firebaseapp.com",
  databaseURL: "https://kwitter-5094f-default-rtdb.firebaseio.com",
  projectId: "kwitter-5094f",
  storageBucket: "kwitter-5094f.appspot.com",
  messagingSenderId: "384088211131",
  appId: "1:384088211131:web:c48f7ffc4f65357eee339e",
  measurementId: "G-7XNEV46PC2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData()
 { 
   firebase.database().ref("/").on('value', function(snapshot)
    {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
      {
        childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
    });
  });

}

getData();


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

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

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
        window.location = "index.html";
}
