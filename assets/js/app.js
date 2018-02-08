// Variables
tweetList = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {
    // Form Submissions
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click',  removeTweet);
}

// Functions
// Add Tweets to the DOM
function newTweet(e) {
    e.preventDefault();
    
    // read the textarea value
    const tweet = document.getElementById('tweet').value;
    console.log(tweet);

    // Create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    
    // Create a remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Add to the list
    tweetList.appendChild(li);

    // Add the remove button to each tweet
    li.appendChild(removeBtn);
}

// Remove Tweets from the DOM
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 
}