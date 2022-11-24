// Data:
/*{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}
*/

// Result:
/*
{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/

// Task 2 ----------------------------------------------------  НАЧАЛО --------------------------------------------------------
const jsonStr = `
{
"list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`

const data = JSON.parse(jsonStr);

const list = data.list;

// Final result
const res = {
    user1: {
        name: list[0].name,
        age: list[0].age,
        prof: list[0].prof,
    },
    user2: {
        name: list[1].name,
        age: list[1].age,
        prof: list[1].prof,
    }
}
const listArr = [];

listArr.unshift(res["user1"]);
listArr.push(res["user2"]);


console.log('list:', listArr);

