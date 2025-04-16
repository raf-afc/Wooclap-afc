// Ce script doit être inclus dans la page des participants (ex: via console ou injection)

const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "TON_AUTH_DOMAIN",
  databaseURL: "TON_DATABASE_URL",
  projectId: "TON_PROJECT_ID",
  storageBucket: "TON_STORAGE_BUCKET",
  messagingSenderId: "TON_SENDER_ID",
  appId: "TON_APP_ID"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref("bang").on("value", (snapshot) => {
  const data = snapshot.val();
  if (data && data.trigger) {
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

  setTimeout(() => document.body.removeChild(div), 5000);
}
