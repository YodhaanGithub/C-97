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

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = user_name;

function add_room() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })
  localStorage.setItem("room_name", room_name);
  window.location = "yitter_page.html";
}
function get_data() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
get_data();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "yitter_page.html";
}