var firebaseConfig = {
    apiKey: "AIzaSyDQczV8rpYDMIOvaKgei6hx-n3pLf2z9qs",
    authDomain: "test-4c714.firebaseapp.com",
    databaseURL: "https://test-4c714.firebaseio.com",
    projectId: "test-4c714",
    storageBucket: "test-4c714.appspot.com",
    messagingSenderId: "326041865540",
    appId: "1:326041865540:web:91601cf1aa7e0286b01b11"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistance.LOCAL;

$("#btn-login").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    
    if(email != "" && password != "")
    {
        var result =firebase.auth().signInWithEmailAndPassword(email , password);
        result.catch(function(error)
        {
                 var errorCode = error.code;
                 var errorMessage = error.message
                 console.log(errorCode);
                 console.log(errorMessage);
                 window.alert("message :" + errorMessage);     
                       
                     });
        
    }
    else
    {
        window.alert("please fill the details")
    }
})