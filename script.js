const firebaseConfig = {
  apiKey: "AIzaSyDKx-0AUjb2rlCI5c6Zlhjp_i8pYSlKc0k",
  authDomain: "wooclap-afc.firebaseapp.com",
  databaseURL: "https://wooclap-afc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wooclap-afc",
  storageBucket: "wooclap-afc.appspot.com",
  messagingSenderId: "684510100391",
  appId: "1:684510100391:web:60407c6ed96543f7909482"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref("bang/trigger").on("value", (snapshot) => {
  if (snapshot.val() === true) {
    showBang();
  }
});

function showBang() {
  const div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = 0;
  div.style.left = 0;
  div.style.width = "100vw";
  div.style.height = "100vh";
  div.style.background = "white";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.fontSize = "80px";
  div.style.fontWeight = "bold";
  div.style.zIndex = 9999;
  div.innerText = "BANG";
  document.body.appendChild(div);

  const audio = new Audio("bang.mp3");
  audio.play().catch(() => {
    console.log("Le son n’a pas pu être joué automatiquement.");
  });

  // 💥 Vibration (fonctionne sur les téléphones compatibles)
  if (navigator.vibrate) {
    navigator.vibrate([300, 100, 300]); // vibre 300ms, pause 100ms, vibre 300ms
  }

  // Réinitialiser le trigger dans Firebase
  firebase.database().ref("bang/trigger").set(false);

  // Supprimer l'overlay après 5 secondes
  setTimeout(() => document.body.removeChild(div), 5000);
}
