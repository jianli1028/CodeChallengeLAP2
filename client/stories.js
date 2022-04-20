//------------- DOM MANIPULATION USED TO CREATE ELEMENTS ON STORIES PAGE 
const storySection = document.getElementById("storySection");

fetch("http://localhost:3000/posts")
    .then((r) => r.json())
    .then((data) => displayStories(data));

function displayStories(stories) {
    for (story of stories) {

    //--------- ARTICLE CONTAINER FOR NEW STORY :
    const article = document.createElement(`article`);

    article.style.border = "#341C09 3px solid";
    article.style.marginBottom = "30px";
    article.style.borderRadius = "10px";
    article.style.textAlign = "center";

    article.setAttribute("id", `story${story.id}`);
    document.getElementById("postSection").append(article);

    //----------- CREATE TITLE FOR STORY
    const title = document.createElement("h1");
    title.style.fontFamily = "Shadows Into Light";
    title.style.fontSize = "30px";
    title.style.color = "white";
    title.setAttribute("id", `title${story.id}`);
    title.textContent = story.title;
    article.append(title);

    //----------- CREATE NAME OF name FOR STORY
    const name = document.createElement("h3");
    title.style.fontFamily = "Shadows Into Light";
    title.style.fontSize = "27px";
    title.style.color = "white";
    title.setAttribute("id", `name${story.id}`);
    title.textContent = story.name;
    article.append(name);

    //----------- CREATE CONTENT SECTION FOR STORY
    const main = document.createElement("p");
    main.style.fontFamily = "Shadows Into Light";
    main.style.fontSize = "24px";
    main.style.color = "white";
    main.setAttribute("id", `main${story.id}`);
    main.textContent = story.main;
    article.append(main);
    }
}