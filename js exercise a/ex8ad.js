function sortByAge(users1) {
    users1.sort(function (a, b){
        return a.age - b.age;
    });
};

let users1 = [
    {name: "Agent", age:22},
    {name: "H", age:23},
    {name:"Jayce", age:11}
];

sortByAge(users1);

console.log(users1);