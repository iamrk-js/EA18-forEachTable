var cl = console.log;
var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];

// for (var i = 0; i < ages.length; i++) {
//     cl(i + 1 + ">>", ages[i])
// }

// for (var i = ages.length - 1; i >= 0; i--) {
//     cl(ages[i])
// }

// forEach >> is a method
// forEach method accepts another function as a argument
// anonymous functions >> A function with out name
// callBack Function >> a function which is passed as parameter/argument in another function

// arrayName.forEach(callBackFunction(parameter){
//     parameter >> each and every element of a "arrayName" array
// })

// ages.forEach(function(age) {
//     cl(age)
// })


var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];


// I love HTML5

// 2nd parameter of callback function represents index number
// skills.forEach(function(skill, i) {
//     cl((i + 1) + " I love " + skill)
// })


// 1 to 10

var skillsInfo = document.getElementById("skillsInfo");

var result = `<ul class="list-group">`;

skills.forEach(function(skill) {
    result += `<li class="list-group-item">I love ${skill}</li>`
})

result += `</ul>`

skillsInfo.innerHTML = result;


var data = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

var elementInfo = document.getElementById("elementInfo");
// parameter >> functions own declration
// array[i] in for loop === ele (parameter of callback function in forEach)
var result1 = '';
data.forEach(function(ele, i) {
    // if (i === 2) {
    //     cl(ele.name)
    // }
    // if (ele.position === 3) {
    //     cl(ele.name)
    // }
    result1 += `<tr>
                    <td>${i + 1}</td>
                    <td>${ele.name}</td>
                    <td>${ele.weight}</td>
                    <td>${ele.symbol}</td>
                    <td>${ele.position}</td>
                </tr>`
})

elementInfo.innerHTML = result1;


var stdArray = [{
        fname: "Tony",
        lname: 'Stark',
        nickName: 'Ironman',
        email: 'tony@stark.com'
    },
    {
        fname: "Peter",
        lname: 'Parkar',
        nickName: 'SpiderMan',
        email: 'peter@stark.com'
    },
    {
        fname: "Bruce",
        lname: 'Wayne',
        nickName: 'BatMan',
        email: 'bruce@wayne.com'
    },
    {
        fname: "Stephen",
        lname: 'Strange',
        nickName: 'Dr. Strange',
        email: 'dr@strange.com'
    },
]

var stdInfo = document.getElementById("stdInfo");
var result3 = '';
stdArray.forEach(function(std, index) {
    result3 += `<tr>
                    <td>${index + 1}</td>
                    <td>${std.fname}</td>
                    <td>${std.lname}</td>
                    <td>${std.nickName}</td>
                    <td>${std.email}</td>
                </tr>`
})

stdInfo.innerHTML = result3;