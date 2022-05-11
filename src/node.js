const { json } = require('body-parser');
const fs = require('fs');





function store() {
    var inputSalutation = document.querySelector('input[name=salutation]:checked');
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputSubject = document.getElementById("subject");
    var inputMessage = document.getElementById("message");

    localStorage.setItem("salutation", inputSalutation.value);
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("message", inputMessage.value);
    localStorage.setItem("subject", inputSubject.value);
    // let ret = localStorage.getItem('name')
    // console.log(ret);
    // let beforeString = JSON.stringify(localStorage.setItem("subject", inputSubject.value));
    // console.log(beforeString);
};
// localStorage.getItem("name")
// function func1() {
//     // console.log('hello');
//     let dataRetrieve = localStorage.getItem('name');
//     let afterParse = JSON.parse(dataRetrieve);
//     fs.writeFile('contactData.txt', afterParse, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
//     fs.readFile('contactData.txt', 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// };
// console.log('start calling func1');
// func1();

