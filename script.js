const firebaseConfig = {
    apiKey: "AIzaSyDKx-0AUjb2rlCI5c6Zlhjp_i8pYSlKc0k",
    authDomain: "wooclap-afc.firebaseapp.com",
    projectId: "wooclap-afc",
    storageBucket: "wooclap-afc.firebasestorage.app",
    messagingSenderId: "684510100391",
    appId: "1:684510100391:web:60407c6ed96543f7909482"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  const bangDiv = document.getElementById("bang");
  const bangSound = document.getElementById("bangSound");
  
  db.ref("bang").on("value", (snapshot) => {
    const data = snapshot.val();
    if (data && data.active) {
      bangDiv.style.display = "block";
      bangSound.play().catch(() => {}); // au cas où l'audio est bloqué
      setTimeout(() => {
        bangDiv.style.display = "none";
      }, 5000);
    }
  });
  