
(function () {
    "use strict";

    // OTHER VARS

    // called when the page first loads to create tiles and empty space 
    function setup() {
        const homeElement = document.getElementById("blogTitle");
        homeElement.onclick = home;
        const resumeElement = document.getElementById("resume");
        resumeElement.onclick = resume;
        const projectsElement = document.getElementById("projects");
        addRecipesElement.onclick = addRecipe;
        const myGroceryListElement = document.getElementById("grocery");
        myGroceryListElement.onclick = groceryList;
        const myAccountElement = document.getElementById("account");
        myAccountElement.onclick = account;
        const recipeOfTheWeek = document.getElementById("rotwImage");
        recipeOfTheWeek.onclick = recipe;
		const recipeOfTheWeekTitle = document.getElementById("recipeOfWeekTitle");
        recipeOfTheWeekTitle.onclick = recipe;
    }


    function home() {
        window.location = "index.html";
    }

    function resume() {
        window.location = "resume.html";
    }

    function project() {
        window.location = "project.html";
    }
    function recipe() {
		sessionStorage.setItem("previousPage", "find-recipe.html");
		window.location = "./Frontend/html/login.html"
    }

    window.onload = setup;
})();
