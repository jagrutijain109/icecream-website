const firebaseConfig = {
  apiKey: "AIzaSyAKzRNnI4L4Dqco43Rr51cIhCmbLp-lD-Y",
  authDomain: "sql-ice-cream-parlour.firebaseapp.com",
  databaseURL: "https://sql-ice-cream-parlour-default-rtdb.firebaseio.com",
  projectId: "sql-ice-cream-parlour",
  storageBucket: "sql-ice-cream-parlour.appspot.com",
  messagingSenderId: "152755219402",
  appId: "1:152755219402:web:ac9a9c33c5b9ea40a73d33",
  measurementId: "G-RW2TCF9TM5"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);