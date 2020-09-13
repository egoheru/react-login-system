import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCsYYNL8EmEHk6-HTreP5prEs-RQ9K1etE",
  authDomain: "login-react-2a306.firebaseapp.com",
  databaseURL: "https://login-react-2a306.firebaseio.com",
  projectId: "login-react-2a306",
  storageBucket: "login-react-2a306.appspot.com",
  messagingSenderId: "1064741441742",
  appId: "1:1064741441742:web:cddf7b6b42ec547196809f"
};

const fire =  firebase.initializeApp(firebaseConfig);

export default fire;
