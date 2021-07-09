// let netflix = {
//     id: 9,
//     name: 'Superstore',
//     season1: {
//         seasonInfo: {
//             episodeInfo: [
//                 {episode: 1, episodeName: "Pilot"},
//                 {episode: 2, episodeName: "Magazine Profile"},
//                 {episode: 3, episodeName: "Shots and Salsa"},
//                 {episode: 4, episodeName: "Mannequin"},
//                 {episode: 5, episodeName: "Shoplifter"},
//                 {episode: 6, episodeName: "Secret Shopper"},
//                 {episode: 7, episodeName: "Color Wars"},
//                 {episode: 8, episodeName: "Wedding Day Sale"},
//                 {episode: 9, episodeName: "All-Nighter"},
//                 {episode: 10, episodeName: "Demolition"},
//                 {episode: 11, episodeName: "Labor"},

//             ]
//         }
//     },
//     season2: {},
//     season3: {},
// }
// // console.log(netflix);

// // console.log(netflix.season1)
// // console.log(netflix.season1.seasonInfo) //dot notation allows you to drill into an object
// // console.log(netflix.season1.seasonInfo.episodeInfo[3])
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)

// // Pick an episode to log in the terminal
// // using dot notation, walk through the netflix object and pring off both the episode number and the episode name

// console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName, netflix.season1.seasonInfo.episodeInfo[2].episode)

// //JSON -> JavaScript Object Notation

// var json = {
//     "workbench.colorTheme": "One Dark + (Sublime)",
//     "window.zoomLevel": 3,
//     "files.exclude": {
//         "**/.git": true,
//         "**/.DS_Store": true,
//         "**/*.js":{
//             "when": "$(basename).ts"
//         },
//         "**/*.js.map": {
//             "when": "$(basename)"
//         }
//     },
//     "editor.fontFamily": "Monaco, 'Courier New', monospace",
//     "editor.detectIndentation": false,
//     "editor.letterSpacing": 0,
//     "editor.tabSize": 2,
//     "files.autoSave": "off",
//     "editor.wordWrap": "on",
//     "extensions.ignoreRecommendations": true,
//     "[html]":{},
//     "files.associatiosn": {
//         "*.html": "html",
//         "*.js": "javascriptreact"
//     },
//     "html.format.indentInnerHtml": true,
//     "editor.fontSize": 11,
//     "liveServer..settings.donotShowInfoMsg": true,
//     "liveServer.settings.port": 3500,
//     "[javascriptreact]": {}
// }

// let spaceJam = {
//     toonSquad: {
//         human: "Michael Jordan",
//         rabbit1: "Bugs Bunny",
//         rabbit2: "Lola Bunny",
//         duck: "Daffy Duck",
//         tDevil: "Tazmanian Devil",
//         bird: "Tweety",
//         cat: "Sylvester",
//         pig: "Porky Pig"
//     },
//     monstars: {
//         0: "Bupkus",
//         1: "Bang",
//         2: "Nawt",
//         3: "Pound",
//         4: "Blanko",
//     },
//     nbaPlayers: {
//         phoenixSuns: "Charles Barkley",
//         newJerseyNets: "Shawn Bradley",
//         newYorkKnicks: "Patrick Ewing",
//         charlotteHornets1: "Larry Johnson",
//         charlotteHornets2: "Muggsy Bogues"
//     }
// }
// console.log(Object.keys(spaceJam)); // object.keys returns an array containing object keys
// console.log(Object.keys(spaceJam.toonSquad)) // dot notation can grab keys from a nested object
// console.log(Object.keys(spaceJam.toonSquad).toString());

// console.log(Object.values(spaceJam));
// console.log(Object.values(spaceJam.toonSquad));

let garden= {
    vegetable: "zucchini",
    flower: "sunflower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

// let inc; 
// console.log(garden.inc); // returns undefined both because inc isn't defined and because there is no inc key in object

let inc = "fruit"; 
// console.log(garden.inc); // returns undefined because it is looking for the "inc" as a key

console.log(garden[inc]);

let baking = {}; //baking is a variable equal to an empty object
baking["zucchini"] = "better make some bread!"; //added a property to baking called zucchini, and the value of that property is "better make some bread!" string
baking.bestKeyEver = "Cornbread!";

// console.log(baking.zucchini);
// console.log(baking.bestKeyEver);

console.log(baking[baking.bestKeyEver]);

let g = "water";
Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})