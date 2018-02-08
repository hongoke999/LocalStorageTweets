/*          LOCAL STORAGE PROJECT

The user can add new messages submitting an HTML Form

Messages are going to be saved into local Storage

Unimited number of messages can be added 

On page load the messages should be loaded from Local Storage and displayed in the page

The user can remove messages and this will remove them also from Local Storage 

*/

// Variables
tweetList = document.getElementById('tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {
    // Form Submissions
    document.querySelector('#form').addEventListener('submit', newTweet);

    // Remove tweet from the list
    tweetList.addEventListener('click',  removeTweet);

    // Document Ready
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
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

    // Add to the Local Storage
    addTweetLocalStorage(tweet);

    // Print the alert
    alert('Tweet Added!');

    // Reset the Form after typing a tweet
    this.reset();
}

// Remove Tweets from the DOM
function removeTweet(e) {
    if(e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    } 

    // Remove Tweets from Local Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Add Tweets to the Local Storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();

    // Add tweets into an Array
    tweets.push(tweet);

    // Convert tweet array into a String
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Get Tweets from the Local Storage
function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is returned
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

// Print Local Storage Tweets on Load
function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();

    // Loop through the storage and then print the values
    tweets.forEach(function(tweet){    
        // Create a remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        // Create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet;

        // Add to the list
        tweetList.appendChild(li);

        // Add the remove button to each tweet
        li.appendChild(removeBtn);        
    });
}

// Remove Tweets from the Local Storage
function removeTweetLocalStorage(tweet) {
    // get tweets from the Storage
    let tweets = getTweetsFromStorage();

    // Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1);
    
    // Loop throught the tweets and remove a tweet that's equal
    tweets.forEach(function(tweetLS, index) {
        if(tweetDelete === tweetLS) {
            tweets.splice(index, 1);
        }
    });

    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));
}