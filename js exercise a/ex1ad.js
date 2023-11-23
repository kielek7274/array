function camelize(str){
    str.split("-");
    str.map((word, index) => {
        return index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    }).join("");
    }

    let result = camelize("my-short-string");
console.log(result);