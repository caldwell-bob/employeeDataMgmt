var firebaseConfig = {
    apiKey: "AIzaSyDEg3j6cDtsaY4L1nnbm1zMh99IuYmTq6E",
    authDomain: "employeetracker-62a4c.firebaseapp.com",
    databaseURL: "https://employeetracker-62a4c.firebaseio.com",
    projectId: "employeetracker-62a4c",
    storageBucket: "employeetracker-62a4c.appspot.com",
    messagingSenderId: "215024302088",
    appId: "1:215024302088:web:3f723a50e5b7356ae339bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


  database.ref().on("child_added", function(snapshot) {
    // console.log(snapshot);
    var sv = snapshot.val();

    // console.log(sv.eName);
    // console.log(sv.role);
    // console.log(sv.startDate);
    // console.log(sv.rate);

    // TODO call calcMonthsWorked
    calcMonthsWorked(sv.startDate);
    // $("#eName").prepend(sv.eName);
  
  // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  
  function calcMonthsWorked(dateVar) {
    console.log(dateVar);
  }
  
  




  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var eName = $("#employee-name-input").val().trim(); 
    var role = $("#role-input").val().trim();
    var startDate = ($("#start-input").val().trim());
    var rate = ($("#rate-input").val().trim());
  
  
  
      database.ref().push({
        eName: eName,
        role: role,
        startDate: startDate,
        rate: rate,
      });
  
    
    });
  
  
 
  

