let gradebook = [
    {
        name: "Josh",
        subject: "math",
        grades: [
            {
                type: "quiz",
                letterGrade: "A",
            },
            {
                type: "test",
                letterGrade: "F",
            }
        ]
    },
    {
        name: "Heidi",
        subject: "math",
        grades: [
            {
                type: "quiz",
                letterGrade: "C",
            },
            {
                type: "test",
                letterGrade: "B",
            }
        ]
    }
]
// Bronze: Once the array is built console log Heidi's quiz grade and her name
console.log(gradebook[1].name, gradebook[1].grades[0].letterGrade)

// Silver: Write a forEach loop console log name and subject of each student
gradebook.forEach(student => console.log(student.name, student.subject)) //ARROW FUNCTION

// gradebook.forEach(function(student){
//     console.log(student.name, student.subject)  //Block body function
// })