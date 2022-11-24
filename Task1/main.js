// Data:
/*<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
*/

// Result:
/*list = [
     {name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en'},
     {name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru'}
]*/


const parser = new DOMParser();

const xmlStr = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`

// XML DOM from xmlStr 
const xmlDOM = parser.parseFromString(xmlStr, "text/xml");

// Node list for <list>
const listNode = xmlDOM.querySelector('list');

// First student name
const student1Firstname = listNode.getElementsByTagName('first')[0].textContent;
// first student surname
const student1Lastname = listNode.getElementsByTagName('second')[0].textContent;
// First student age
const student1Age = listNode.getElementsByTagName('age')[0].textContent;
// First student profession
const student1Prof = listNode.getElementsByTagName('student')[0].lastElementChild.textContent;
// First student language
const student1Lang = listNode.getElementsByTagName('name')[0].getAttribute('lang');
// Second student name
const student2Firstname = listNode.getElementsByTagName('first')[1].textContent;
// Second student surname
const student2Lastname = listNode.getElementsByTagName('second')[1].textContent;
// Second student age
const student2Age = listNode.getElementsByTagName('age')[1].textContent;
// Second student profession
const student2Prof = listNode.getElementsByTagName('student')[1].lastElementChild.textContent;
// Second student language
const student2Lang = listNode.getElementsByTagName('name')[1].getAttribute('lang');


// result for the first student
const student1Result = {
    name: student1Firstname + ' ' + student1Lastname,
    age: student1Age,
    prof: student1Prof,
    lang: student1Lang,
}
// console.log(student1Result);

// result for the second student
const student2Result = {
    name: student2Firstname + ' ' + student2Lastname,
    age: student2Age,
    prof: student2Prof,
    lang: student2Lang,
}
// console.log(student2Result);

// ИМтоговый список
const list = {
    'list': [
        student1Result,
        student2Result
    ]
}
console.log(list);