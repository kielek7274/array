function getAverageAge(users2){
    let totalAge = users2.reduce(function(sum, user) {
        return sum + user.age;
      }, 0);
    
      let averageAge = totalAge / users.length;
    
      return averageAge;
    }
    
    let users2 = [
      { name: "Logan", age: 25 },
      { name: "Bob", age: 19 },
      { name: "Keanu", age: 46 }
    ];
    
    let averageAge = getAverageAge(users2);
    
    console.log(averageAge);
