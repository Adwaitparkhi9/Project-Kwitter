var firebaseConfig = {
    apiKey: "AIzaSyCbZKcOx55v2ZIo0i2-sDHG9RqfkhCQIrk",
    authDomain: "project-twitter-62a27.firebaseapp.com",
    databaseURL:"https://project-twitter-62a27-default-rtdb.firebaseio.com/",
    projectId: "project-twitter-62a27",
    storageBucket: "project-twitter-62a27.appspot.com",
    messagingSenderId: "970493598166",
    appId: "1:970493598166:web:efa56d02e4ed829ae7ac77",
    measurementId: "G-GMM5PZ60F7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot)
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  