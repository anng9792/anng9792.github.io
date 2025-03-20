const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "The engine roared at 120 mph as Bob and :insertx: weaved through the city streets. When they reached :inserty:, they :insertz:. Alarms blared and just as guards closed in, Bob yanked the 50 pound duffel bag of cash over their shoulder and fled into the night. :insertWitness: :insertConsequence: but Bob and :insertx: didn't care. Any and all collateral damage was inevitable to them.";

let insertX = [
"Mahatma Gandhi",
"The Rock",
"Mother Teresa"
];

let insertY = [
"the retirement home",
"the Krispy Kreme",
"the liquor store"
];

let insertZ = [
"threatened to call their lawyers if the employees didn't give them all the money they had",
"stole all of cash in the place along with 3 packs of powdered donuts",
"waved around hot sauce filled squirt guns and ordered money to be put into their bag"
];

let insertWitness = [
    "Marjorie, an abnormally shredded elderly woman,",
    "Ariana Grande",
    "Todd, a conspiracy theorist who thinks it's all part of a bigger plot,"
];

let insertConsequence = [
    "suffered an unwarranted karate chop to the throat during the robbery",
    "fainted suddenly next to the vending machine",
    "broke their own tibia in an attempt to interfere with the robbery"
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let witnessItem = randomValueFromArray(insertWitness);
    let consItem = randomValueFromArray(insertConsequence);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);
    newStory = newStory.replaceAll(':insertConsequence:', consItem);
    newStory = newStory.replaceAll(':insertWitness:', witnessItem);


    if(customName.value !== '') {
    const name = customName.value;

    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const speed = Math.round(120 * 1.609) +' kph';
    const weight =  Math.round(50 / 2.205) + ' kilogram';

    newStory = newStory.replace('120 mph', speed);
    newStory = newStory.replace('50 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

