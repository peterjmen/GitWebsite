//Original log in with welcome banner
// function logInButton() {
//   var name = prompt('Please enter your name');
//   alert(`Thanks for logging in: ${name}`);
//   document.getElementById("greeting").innerHTML = `Thanks for logging in: ${name}`;
//   Event.preventDefault();

//   }



// function socialMediaButton() {
//   alert('This will link to social media');
// }

// function bookAppointment() {
//   alert('Thank you for booking an appointment');
// }



$( document ).ready(function() {
   $('.secondaryNav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    const contentSelected = $(this).attr("id");
    $(".content").removeClass('active');
    $('.' + contentSelected).addClass('active');

  });
});



function bookAppointment(event){
  event.preventDefault();
        var nameInput = form.elements[0].value;
        var surnameInput = form.elements[1].value;
        var emailInput = form.elements[2].value;
        var phoneInput = form.elements[3].value;
        var dayInput = form.elements[4].value;
        var timeInput = form.elements[5].value;
        var serviceInput = form.elements[6].value;
        var practitionerInput = form.elements[7].value;



 if(nameInput === "" || surnameInput === "" || emailInput === "" || phoneInput ===""){
  alert('Please complete all information before booking'); 
 }
 else{
   alert('Thank you ' + nameInput + ' ' + surnameInput +  ' for booking an appointment with ' + practitionerInput + ' for ' + serviceInput + ' on ' + dayInput + ' at ' + timeInput + '\n\n You signed up with the email: ' + emailInput + '\n With the phone number: ' + phoneInput );
 }

}



// start of query selectors
// its good practice to have all of your query selectors at the top of your page
// reference https://www.w3schools.com/jsref/met_document_queryselector.asp
const signUpMasterContainer = document.querySelector("#signUpMasterContainer");
const loginMasterContainer = document.querySelector("#loginMasterContainer");
// const passwordSignUp = document.querySelector("#passwordSignUp")
// console.log(passwordSignUp)
// end of query selectors

// show/hide login and sign up modals
function showSignUp(){
    // useing our created variable to change the css
    signUpMasterContainer.style.display ="block";
}
function hideSignUp(){
    signUpMasterContainer.style.display ="none";
}

function showLogin(){
    loginMasterContainer.style.display ="block";
}
function hideLogin(){
    loginMasterContainer.style.display ="none";
}
// end of show/hide modals

// show password handled by check box we can do this as some browsers wont automatically show/hide

const passwordSignUp = document.querySelector("#passwordSignUp")
console.log(passwordSignUp)
const usernameSignUp = document.querySelector("#usernameSignUp")
console.log(usernameSignUp)

// jquery click method acts the same as onclick
// reference https://www.w3schools.com/jquery/event_click.asp
$("#showSignUpPassword").click(
    function(){
        if(passwordSignUp.type === "password"){
            passwordSignUp.type = "text";
        } else{
            passwordSignUp.type ="password";
        } 
    }
)

$("#showPasswordLogin").click(
  function(){
      if(passwordLogin.type === "password"){
        passwordLogin.type = "text";
      } else{
        passwordLogin.type ="password";
      } 
  }
)

// start user sign up
// empty arrays to store user sign up data
     const passwordData = [];
     const usernameData = [];

    $("#userSignUpBtn").click(
        function(e){
            // event prevent default is a jquery method this will stop the form data from flying off so we can store it in our variables
            e.preventDefault();
            if(usernameSignUp.value === "" || passwordSignUp.value === "" ){
                alert('please enter both a username and password')
            } else{
                // the poush function lets us add data to an array
                passwordData.push(passwordSignUp.value)
                usernameData.push(usernameSignUp.value)
                // console.log(usernameData)
                // console.log(passwordData)
                // val() lets accesss the value property within our form input
                $(usernameSignUp).val('');
                $(passwordSignUp).val('');
                $(signUpMasterContainer).css("display","none")
                alert(`Thank you for signing up ${usernameData}`)
            }
        }
    );

// end of user sign up
// start of login
const usernameLogin = document.querySelector("#usernameLogin")
const passwordLogin = document.querySelector("#passwordLogin")
$("#userLoginBtn").click(
    function(e){
        e.preventDefault();
        let userName = false;
        let password = false;
        console.log('clicked')
        // console.log(usernameLogin.value)
        // console.log(passwordLogin.value)
        // console.log(usernameData)
        // looping through user name data and checking to see if a user is there
        // DONT'N FORGET .length otherwise it will be a massive stitch up
        for(i=0; i<usernameData.length; i++){
            console.log(usernameData[i]);
            if(usernameLogin.value === usernameData[i]){
                console.log('is a match')
                userName = true
            }

        }

        // looping through password data tgo see if the password is there
        for(j=0; j<passwordData.length; j++){
            if(passwordLogin.value === passwordData[j]){
                console.log('password is correct')
                password = true
            } else{
                console.log('password doesnt exist')
            }
        }

        // handle the username/password data
        // to display user name .innerhtml
        if(userName === true && password === true){
            console.log('user is logged in')
            $(usernameLogin).val('');
            $(passwordLogin).val('');

            $(loginMasterContainer).css("display","none")
            alert(`Thank you for logging in ${usernameData}`)
        } else{
            alert('please enter a correct user name and password')
        }

        

    }
)

// end of login




