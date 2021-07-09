let btnFetch = document.getElementById("button-fetch");
console.log(btnFetch);
btnFetch.addEventListener("click", handleClick)

function handleClick(){
    getJoke();
}

function getJoke(){
    let apiURL = "https://api.chucknorris.io/jokes/random"
    fetch(apiURL)
        .then(response => response.json()) // takes incoming response form api request and converts it to regular js object
        .then(result => displayJoke(result.value))

        console.log("Hey from getJoke() function")
}

// getJoke();

async function getJokeAsync(){
    let apiURL = "https://api.chucknorris.io/jokes/random"

    try{
        const response = await fetch(apiURL);
        const result = await response.json();
        console.log("ASYNC", result)
    } catch(err){
        console.log(err)
    }
    }

    getJokeAsync()

    function displayJoke(joke){
        // console.log(joke)
        let displayFetch = document.getElementById("display-fetch"); //querySelector also works, but you need # or . to pull that element
        displayFetch.innerText ="";
        let para = document.createElement("p");
        para.innerText = joke;
        displayFetch.appendChild(para);

    }