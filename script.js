
 // Get reference to the form element
 const form = document.getElementById('contact-form');

 // Add event listener for form submission
 form.addEventListener('submit', function(event) {
   // Prevent form submission
   event.preventDefault();
 
   // Get form input values
   const firstName = document.getElementById('first-name').value;
   const lastName = document.getElementById('last-name').value;
   const message = document.getElementById('message').value;
 
   // Regular expression pattern for alphabetic characters
   const alphabeticPattern = /^[A-Za-z]+$/;
 
   // Get references to error message elements
   const firstNameError = document.getElementById('first-name-error');
   const lastNameError = document.getElementById('last-name-error');
   const messageError = document.getElementById('message-error');
 
   // Clear previous error messages
   firstNameError.textContent = '';
   lastNameError.textContent = '';
   messageError.textContent = '';
 
   // Perform validation
   if (!alphabeticPattern.test(firstName)) {
     firstNameError.textContent = 'Please enter a valid first name with alphabetic characters only.';
     return;
   }
 
   if (!alphabeticPattern.test(lastName)) {
     lastNameError.textContent = 'Please enter a valid last name with alphabetic characters only.';
     return;
   }
 
   if (message.trim() === '') {
     messageError.textContent = 'Please enter a message.';
     return;
   }
 
   // If all fields are valid, proceed with form submission
   // You can include your code to submit the form data to a server or perform any other actions here
   alert('Form submitted successfully!');
   form.reset();
 });
const texts=['Full Stack Developer','Web Developer','UX/UI Designer'];
const typingDelay=10;
const newTextDelay=150;
let textIndex=0;
let charIndex=0;
const typingTextElement=document.getElementById('typing');
function typeText(){
    if(charIndex<texts[textIndex].length){
        typingTextElement.textContent+=texts[textIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(typeText,newTextDelay);

    }
    else{
        setTimeout(deleteText,typingDelay);
    }
   
}
function deleteText(){
    if(charIndex>0){
        typingTextElement.textContent=texts[textIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(deleteText,typingDelay);
    }
        else{
            textIndex=(textIndex+1)%texts.length;
            setTimeout(typeText,typingDelay);
        }
    
}
typeText()
