let users = [
    {name: "John", surname: "Wick", id: 1},
    {name: "Vi", surname: "Stay", id: 2},
    {name: "Logan", surname: "Lopez", id: 3}
]

// fullName = name + surname

let fullNameUsers = users.map(function(user) {
    return {
        id: user.id,
        fullName: user.name + " " + user.surname
    };
});

console.log(fullNameUsers)