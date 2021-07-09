let movie = {
    Name: "Beauty and The Beast",
    runTime: 88,
    genre: "family",
    characters: [
        {name: "Belle", age: 18, items: {itemB1: "Book", itemB2: "Apron", itemB3: "Horse"}},
        {name: "Gaston", age: 40, items: {itemG1: "Antlers", itemG2: "Gun", itemG3: "Beer"}}
    ]
}
console.log(movie);

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
// }
//     season2: {},
//     season3: {},

// console.log(netflix);

// console.log(netflix.season1)
// console.log(netflix.season1.seasonInfo) //dot notation allows you to drill into an object
// console.log(netflix.season1.seasonInfo.episodeInfo[3])
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)

// // Pick an episode to log in the terminal
// // using dot notation, walk through the netflix object and pring off both the episode number and the episode name

// console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName, netflix.season1.seasonInfo.episodeInfo[2].episode)