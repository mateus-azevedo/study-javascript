// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = insertY = insertZ = new Array();

insertX.push('Willy the Goblin');
insertX.push('Big Daddy');
insertX.push('Father Christmas');

insertY.push('the soup kitchen');
insertY.push('Disneyland');
insertY.push('the White House');

insertZ.push('spontaneously combusted');
insertZ.push('melted into a puddle on the sidewalk');
insertZ.push('turned into a slug and crawled away');

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/, name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14.000) + ' stone';
    let temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace(/94 fahrenheit/ig, temperature);
    newStory = newStory.replace(/300 pounds/ig, weight);
  }
  
  let xItem = randomValueFromArray(insertX), 
      yItem = randomValueFromArray(insertY), 
      zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replace(/:insertX:/ig, xItem);
  newStory = newStory.replace(/:insertY:/i, yItem);
  newStory = newStory.replace(/:insertZ:/i, zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}