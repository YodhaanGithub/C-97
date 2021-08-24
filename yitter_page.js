var firebaseConfig = {
      apiKey: "AIzaSyD7OmGHTPFvfRmtBu6WBudZKB3KFQp-Hac",
      authDomain: "yitter-2d72b.firebaseapp.com",
      databaseURL: "https://yitter-2d72b-default-rtdb.firebaseio.com",
      projectId: "yitter-2d72b",
      storageBucket: "yitter-2d72b.appspot.com",
      messagingSenderId: "709457651413",
      appId: "1:709457651413:web:4608924bb69ab127bde45c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      })
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      username = message_data['name'];
      message = message_data['message'];
      like = message_data['likes'];
      name_with_tag = "<h4> "+ username +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
//End code
   } });  }); }
getData();
