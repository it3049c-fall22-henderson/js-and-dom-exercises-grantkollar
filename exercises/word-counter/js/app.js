// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.getElementById("text");
const wordCounter = document.getElementById("stat");


// 🤖: Create an Event Listener on textarea input
textarea.addEventListener("input",function(e){
  const current = textarea.value;
  const wCounter = current.split(" ").length;
  const lCounter = current.split("").length;

  wordCounter.innerHTML = `You've written ${wCounter} words and ${lCounter} characters.`;
  
  if(textarea.value === "")
    wordCounter.innerHTML = "You've written 0 words and 0 characters."
})
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.