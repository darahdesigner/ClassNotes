// ADVENTURE TIME CHALLENGE

// Using the API documentation see how you can fetch 
// from the Adventure Time People API. 
// You will need to used DOM manipulation to display characters info
// The fetch should happen on page load.

// Medium: match your character's info to the proper photo. If no photo exists
// no need to display photo.
// Advanced: Have a button that, when clicked, shows the characters instead of
// page reload
// Advanced: Only get the first 7 Characters from Array

// Documentation URL: https://adventuretimeapi.herokuapp.com/

// Suggested Work Flow
// 1. See what URL you need to use to get a list of people from Adventure Times.
// 2. Get the results to console.log
// 3. Find out how you you will use these results to display the name and picture
// to the page.
// 4. What part of the document will you need to select? 
// How can you insert name/gender to this portion of the document?
// 5. Once you loop through the characters have a function responsible for sending
// back the correct photo based on the characters name. 


/* Character pictures links: 
finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
tarttoter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
ladyrainicorn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
lumpyspaceprincess : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
dukeofnuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
princessbubblegum : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
iceking : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
*/

let apiURL = "https://adventuretimeapi.herokuapp.com/people"
let infoDiv = document.getElementById("characterInfo");

async function getPeople(){
    const fetchAPI = await fetch(apiURL)
    const response = await fetchAPI.json();
    displayCharacterInfo(response);
}

getPeople();

function displayCharacterInfo(characters){
    // while(infoDiv.firstChild){
    //     infoDiv.removeChild(infoDiv.firstChild);
    // }

    for(let i =0; i< 7; i++){
        console.log(characters[i]);
        let divName = document.createElement("div");
        let imageTag = document.createElement("img");
        let divGender = document.createElement("div");

        divName.innerText = "Name: " + characters[i].name
        divGender.innerText = "Gender: " +characters[i].gender;
        imageTag.src = findPhoto(characters[i].name.replaceAll(" ", "").toLowerCase())
        infoDiv.appendChild(divName);
        infoDiv.appendChild(divGender);
        infoDiv.appendChild(imageTag)
    }
}

function findPhoto(characterName) {
    let characterPhotoList = {
    finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
    tarttoter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
    ladyrainicorn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
    marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
    lumpyspaceprincess : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
    lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
    dukeofnuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
    fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
    princessbubblegum : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
    iceking : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
    bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
    jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
}
if (characterPhotoList.hasOwnProperty(characterName)){
    return characterPhotoList[characterName];
   
}
}