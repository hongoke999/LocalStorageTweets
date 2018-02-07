// Variables

// Event Listeners
eventListeners();

function eventListeners() {
    // Form Submissions
    document.querySelector('#form').addEventListener('submit', newTweet);
}

// Functions
function newTweet(e) {
    e.preventDefault();
    console.log('Tweet Submitted!');
}