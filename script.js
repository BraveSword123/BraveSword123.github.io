function showPage(){
  document.getElementById("webpage").style.display = 'block';
}

function closePage(){
  document.getElementById("webpage").style.display = 'none';
}
function showSims(){
  document.getElementsByClassName("Welcome_Sims")[0].style.display = 'block';
}

function closeSims(){
  document.getElementsByClassName("Welcome_Sims")[0].style.display = 'none';
}

function closeSimsExp(){
  document.getElementsByClassName("Expansion_Sims")[0].style.display = 'none';
}

 function setActiveTab(selector) {
  document.querySelectorAll('.side .welcome, .side .Exp, .side .Down, .side .Content, .side .Uploads')
    .forEach(btn => btn.classList.remove('tab-active'));
    // When its selected, add the shadow 
  document.querySelectorAll(selector).forEach(btn => btn.classList.add('tab-active'));
}

function toWelcome(){ 
  document.getElementsByClassName("Expansion_Sims")[0].style.display = 'none';
  document.getElementsByClassName("Welcome_Sims")[0].style.display = 'block';
  setActiveTab('.side .welcome');   
}

function toExp(){
  document.getElementsByClassName("Expansion_Sims")[0].style.display = 'block'; 
  document.getElementsByClassName("Welcome_Sims")[0].style.display = 'none';
  setActiveTab('.side .Exp');    
}

/* Number Game JS */ 
// Declares 
let gameCount;
let numInput;
let i = 0;

// Generate a random number between 1 and 1000 (inclusive)
const randomNumber = Math.floor(Math.random() * (1000 - 1)) + 1;

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

else if(numInput == (randomNumber+4) || numInput == (randomNumber-4)){
document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 4 numbers off!";
}

else if(numInput == (randomNumber+3) || numInput == (randomNumber-3)){
 document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 3 numbers off!";
}

else if(numInput == (randomNumber+2) || numInput == (randomNumber-2)){
document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 2 numbers off!";
}

else if(numInput == (randomNumber+1) || numInput == (randomNumber-1)){
 document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + ". You were 1 numbers off!";
}

 else if (numInput > (randomNumber+5) || numInput < (randomNumber-5)){
 document.getElementById("demo").innerHTML = "Youre number was " + randomNumber + '. You lose. Try Again';
}  
}

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
}

function closeGame(){
  document.getElementById("Number_wrapper").style.display = 'none';
}

/* Music Code */
const song = document.getElementById("musicAudio");      
const crlIcon = document.getElementById("playMusic"); 

song.onloadedmetadata = function(){
   song.currentTime = 0;
   song.pause(); 
} 

function playPause(){
  if(crlIcon.classList.contains("fa-circle-pause")){
    song.pause();
    crlIcon.classList.remove("fa-circle-pause");
    crlIcon.classList.add("fa-circle-play");
  }
else{
    song.play();
    crlIcon.classList.add("fa-circle-pause");
    crlIcon.classList.remove("fa-circle-play"); 
  }
}

song.onended = function(){
  crlIcon.classList.remove("fa-circle-pause");
  crlIcon.classList.add("fa-circle-play");
  song.currentTime = 0;
  // progress.value = 0;
  song.pause();
} 

class Node{
  constructor(data){
    this.data = data; 
    this.next = null; 
    this.prev = null; 
  }
} 

let head = new Node("Kokomo, IN"); 
head.next = new Node("A Lots Gonna Change");
head.next.prev = head;
head.next.next = new Node("Hello Again");
head.next.next.prev = head.next; 
head.next.next.next = head;
head.prev = head.next.next;



let headPointer = head; 

function backClick(){
  headPointer = headPointer.prev;
  console.log(headPointer.data);
  changeSong(); 
}

function upClick(){
    headPointer = headPointer.next;
    console.log(headPointer.data);
    changeSong(); 
}

function changeSong(){
  if(headPointer.data === "Kokomo, IN"){
    document.getElementById("musicInfo").innerHTML = "Now Playing. . .<br> Kokomo, In <br> Japanese Breakfast <br> Instrumental"; 
    document.getElementById("musicAudio").src = "JB_Instrumental.mp3";
  }
  else if(headPointer.data === "A Lots Gonna Change"){
    document.getElementById("musicInfo").innerHTML = "Now Playing. . .<br> A Lot's Gonna Change <br> Weyes Blood <br> Instrumental";
    document.getElementById("musicAudio").src = "WB_Instrumental.mp3";
  }
  else if(headPointer.data === "Hello Again"){
    document.getElementById("musicInfo").innerHTML = "Now Playing. . .<br> Hello Again <br> Liana Flores <br> Instrumental";
    document.getElementById("musicAudio").src = "LF_Instrumental.mp3";
  }
}

function closeMusic(){
  document.getElementById("mainMusic").style.display = 'none';
} 

function showMusic(){
  document.getElementById("mainMusic").style.display = 'block';
}
