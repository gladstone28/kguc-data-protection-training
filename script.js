document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form from submitting normally
    alert('Thank you for your message!');
    // Here, you can add code to handle the form submission, like sending data to a server or validating input
});
