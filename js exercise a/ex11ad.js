function groupById(arr) {
    let result = arr.reduce(function(names, user) {
      names[user.id] = user;
      return names;
    }, {});
  
    return result;
}
  
  let users3 = [
    {id: 'john', name: "John Wick", age: 35},
    {id: 'log', name: "Logan Lopez", age: 25},
    {id: 'pete', name: "Pete Snicker", age: 31},
];
  
  let usersById = groupById(users3);
  console.log(usersById);
  