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




  $("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    // Get the input values
    var eName = $("#employee-name-input").val().trim(); 
    var role = $("#role-input").val().trim();
    var startDate = ($("#start-input").val().trim());
    var rate = ($("#rate-input").val().trim());
  
    // Log the Bidder and Price (Even if not the highest)
    console.log(eName);
    console.log(role);
    console.log(startDate);
    console.log(rate);
 
      database.ref().push({
        eName: eName,
        role: role,
        startDate: startDate,
        rate: rate,
      });
  
    
    });
  
  
 
  

