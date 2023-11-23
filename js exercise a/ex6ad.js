let user = [
    {name: "John", age: 20},
    {name: "Logan", age: 25},
    {name: "Sierra", age: 15}
]

let convertArray = user.map(function(user) {
    return user.name;
});

console.log(convertArray)