function logInButton() {
  var name = prompt('Please enter your name');
  alert(`Thanks for logging in: ${name}`);
  document.getElementById("greeting").innerHTML = `Thanks for logging in: ${name}`;
  Event.preventDefault();

  }

function socialMediaButton() {
  alert('This will link to social media');
}

$( document ).ready(function() {
   $('.secondaryNav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    const contentSelected = $(this).attr("id");
    $(".content").removeClass('active');
    $('.' + contentSelected).addClass('active');

  });
});

