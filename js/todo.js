// You are going to be building a mini single page to-do list app.
// You'll want to use preventDefault to prevent the
// form submission from refreshing the page.
// Remember, this app is only running client-side code.
// We don't have a database, so if that page refreshes,
// you'll lose all your items on your list.
//
// INSTRUCTIONS
// You'll be coding your solution in index.html and js/todo.js.
// You'll want to make sure that index.html has a form with a
// text input field, and an ordered list that
// the to-do list item to the list.
// You'll want to bind a submit event to the form.
// The event should add the user's input to the list.
// You'll want to make sure the page doesn't refresh
// so that you can add multiple items to the list.


$(document).ready(function(){
  // call functions here
  
  submitForm(); //need to call function submitForm, in order to pass the test

  //this works but is not passing tests, do i need to separate function declaration from function call?
  // $('form').on('submit', function(event){
  //   var newItem = $('#item').val(); //#item is the id of our text input field
  //   var newLi = $('<li>' + newItem + '</li>'); // 'li' is a 'list item'
  //   //$("#list").prepend(newLi); // puts newItem at top of list
  //   $("#list").append(newLi); // puts newItem at bottom of list
  //   newItem = $('#item').val(''); //show text input field again after submitting form, with an empty text field: .val('')
  //   event.preventDefault(); //prevents form from refreshing page on submit
  // });

});

// define functions here -- why not define and call above??

function submitForm() {
  $('form').on('submit', function(event){
    var newItem = $('#item').val(); //#item is the id of our text input field
    var newLi = $('<li>' + newItem + '</li>'); // 'li' is a 'list item'
    //$("#list").prepend(newLi); // puts newItem at top of list
    $("#list ol").append(newLi); // puts newItem at bottom of list -- need 'ol' within $("#list ol") so it is an ordered (or numbered) list, in order to pass the test
    newItem = $('#item').val(''); //show text input field again after submitting form, with an empty text field: .val('')
    event.preventDefault(); //prevents form from refreshing page on submit
  });
}
