//------------- CREATE NEW STORY -----------//

const { format } = require("express/lib/response");

const button = document.getElementById("story");
const title = document.getElementById("title");
const name = document.getElementById("name");
const story = document.getElementById("storyContent");

button.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const name = event.target.content.value;
    const story = event.target.storyContent.value;

    submitStory(title, name, story);
    redirectHome();
});

function submitStory(title, name, story) {
    const newStoryElements = {
        title: title,
        name: name,
        story: story 
    };

    const options = {
        method: "POST",
        body: JSON.stringify(newPostElements)
    };
    
    fetch("http://localhost:3000/", options);
}

function redirectHome() {
    window.location.href = "stories.html";
}