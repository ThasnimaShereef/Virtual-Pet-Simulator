// Attribute Bars
const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar");
const energyBar = document.getElementById("energy-bar");
const petDisplay = document.getElementById("pet-display");

// Buttons
const feedButton = document.getElementById("feed-btn");
const playButton = document.getElementById("play-btn");
const sleepButton = document.getElementById("sleep-btn");

// Event Listeners for User Interactions
feedButton.addEventListener("click", () => {
  adjustAttribute(hungerBar, 20);
  updatePetMood();
});

playButton.addEventListener("click", () => {
  adjustAttribute(happinessBar, 15);
  adjustAttribute(energyBar, -10);
  updatePetMood();
});

sleepButton.addEventListener("click", () => {
  adjustAttribute(energyBar, 25);
  adjustAttribute(happinessBar, 5);
  updatePetMood();
});

// Function to Adjust Attribute Values
function adjustAttribute(bar, amount) {
  bar.value = Math.min(100, Math.max(0, bar.value + amount));
}

// Update Pet Mood Based on Attributes
function updatePetMood() {
  if (hungerBar.value < 30) {
    petDisplay.className = "sad";
  } else if (energyBar.value < 20) {
    petDisplay.className = "sleepy";
  } else {
    petDisplay.className = "happy";
  }
}

// Attribute Decay Over Time
setInterval(() => {
  adjustAttribute(hungerBar, -5);
  adjustAttribute(happinessBar, -3);
  adjustAttribute(energyBar, -2);
  updatePetMood();
}, 5000); // Updates every 5 seconds

// Pet wakes up after being sleepy
setInterval(() => {
  if (energyBar.value > 30 && petDisplay.className === 'sleepy') {
    petDisplay.className = 'happy';
  }
}, 5000); // Check every 5 seconds if the pet is ready to wake up
