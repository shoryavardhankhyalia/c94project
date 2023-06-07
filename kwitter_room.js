var firebaseConfig = {

    apiKey: "AIzaSyDg1uH0lm0GGyHqUj1Xm3SyWgeIpAg9x40",

    authDomain: "kwitter-59f71.firebaseapp.com",

    databaseURL: "https://kwitter-59f71-default-rtdb.firebaseio.com",

    projectId: "kwitter-59f71",

    storageBucket: "kwitter-59f71.appspot.com",

    messagingSenderId: "561708535697",

    appId: "1:561708535697:web:fe61cdd92a18748eb89430"

  };
  
    firebase.initializeApp(firebaseConfig);

  function addRoom()

  {

    room_name = document.getElementById("room_name").value;

    localStorage.setItem("room_name", room_name);

    firebase.database().ref("/").child(room_name).update({ purpose : "adding user" });

  }

function logout()

{
    
    window.location = "index.html";
    
}
