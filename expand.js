function showPage(){
    document.getElementById("webpage").style.display = 'block';
  }
  
  function closePage(){
    document.getElementById("webpage").style.display = 'none';
  }
  function showSims(){
    document.getElementByClassName("Sims_3").style.display = 'block';
     localStorage.setItem("showSims", "true");
  }
  
  window.onload = function(){ // Adding a flag
    if(showSims() == true){
      document.getElementByClassName("Sims_3").style.display = 'block';
    }
    else{
   document.getElementByClassName("Sims_3").style.display = 'none';
    }
  }
  
  function closeSims(){
    document.getElementByClassName("Sims_3").style.display = 'none';
     localStorage.setItem("showSims", "false");
  }
  /* Number Game JS */ 
  // Declares 
  let gameCount;
  let numInput;
  let i = 0;
  
  // Generate a random number between 1 and 1000 (inclusive)
  const randomNumber = Math.floor(Math.random() * (1000 - 1)) + 1;
  
  // document.getElementById("demo2").innerHTML = randomNumber; 
  
  // Create for loop for input
  function returnText() {
     if (i < 10) {
        // numInput = prompt("Enter Number Here:");
        numInput = parseInt(document.getElementById("Input").value);
        if (isNaN(numInput)){
  document.getElementById("demo").innerHTML = "Please Enter a numerical value. Thank you!"; 
        }
        else if (numInput > randomNumber) {
           document.getElementById("demo").innerHTML = "Wrong Number. Youre number is too high.";
        }
        else if (numInput < randomNumber) {
           document.getElementById("demo").innerHTML = "Wrong Number. Youre number is too low.";
        }
     else{     document.getElementById("demo").innerHTML= "Correct Number. You win a prize!"
     }
        // create counter 
        i++;
     }
     else{
        document.getElementById("demo").innerHTML = "You lose. Click the button below for the number.";
     }
  }
  function returnAnswer(){ 
  // Ending point 
  if(numInput == (randomNumber+5) || numInput == (randomNumber-5)){
  document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 5 numbers off!";  
  } 
  
  // 
  else if(numInput == (randomNumber+4) || numInput == (randomNumber-4)){
  document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 4 numbers off!";
  }
  
  //
  else if(numInput == (randomNumber+3) || numInput == (randomNumber-3)){
   document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 3 numbers off!";
  }
  
  //  
  else if(numInput == (randomNumber+2) || numInput == (randomNumber-2)){
  document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 2 numbers off!";
  }
  
  // 
  else if(numInput == (randomNumber+1) || numInput == (randomNumber-1)){
   document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 1 numbers off!";
  }
  
   else if (numInput > (randomNumber+5) || numInput < (randomNumber-5)){
   document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + '. You lose. Try Again';
  }  
  }
  
  // 
  var images = [
    'Background.gif',
    'Background2.gif',
    'Background3.gif',
    'Background4.gif',
    'Background5.gif',
     'Background6.gif'
  ]
  
  var which = Math.floor(Math.random() * images.length);
  var img = document.getElementById('Back');
  img.src = images[which];
  img.title = images[which];
  
  function showGame(){
    document.getElementById("Number_wrapper").style.display = 'block';
     localStorage.setItem("showGame", "true");
  }
  
  window.onload = function(){ // Adding a flag
    if(showGame() == true){
      document.getElementById("Number_wrapper").style.display = 'block';
    }
    else{
   document.getElementById("Number_wrapper").style.display = 'none';
    }
  }
  
  function closeGame(){
    document.getElementById("Number_wrapper").style.display = 'none';
     localStorage.setItem("Number_wrapper", "false");
  }