// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBkJEZVH3mPL9A14SS6sO65xOOpcxLD5mI',
  authDomain: 'protimouri-8a891.firebaseapp.com',
  databaseURL: 'https://protimouri-8a891.firebaseio.com',
  projectId: 'protimouri-8a891',
  storageBucket: 'protimouri-8a891.appspot.com',
  messagingSenderId: '713038357373'
};
firebase.initializeApp(config);
// firebase.database.enableLogging(true);

//ref msg collection (collections are tables)

var ref = firebase.database().ref('FeatureCollection');

ref
  .child('Features')
  //.child('Feature01')
  //.child('Properties')
  .once('value')
  .then(
    function(snap) {
      if (snap.val()) {
        //do your thing here.
        console.log(snap.val());
      }
    },
    function(error) {
      // The Promise was rejected.
      console.log('Error: ', error);
    }
  );
