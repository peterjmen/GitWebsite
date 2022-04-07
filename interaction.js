// const btn = document.getElementById("myButton");

// btn.addEventListener("click", function(){
// alert("You clicked me!");
// })


function logInButton() {
  alert('hi there');
}

const collection = document.getElementsByClassName("content");

// A $( document ).ready() block.
$( document ).ready(function() {
   $('.secondaryNav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    const contentSelected = $(this).attr("id");
    $(".content").removeClass('active');
    $('.' + contentSelected).addClass('active');

  });
});