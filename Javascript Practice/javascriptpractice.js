
let arr = [];
    let quest = prompt("Enter new todo, list your todos, remove one, or quit");

while(quest !== "quit"){
    if (quest === "new"){ 
        let cool = prompt("Enter a new todo");
        console.log(arr.push(cool));
        quest = prompt("Enter new todo, list your todos, remove one, or quit");
    }else if (quest === "list"){
        console.log(arr)
        quest = prompt("Enter new todo, list your todos, remove one, or quite");
    }else if (quest === "remove"){
        let remove = Number(prompt("Enter an index you'd like to remove"));
        arr.splice(remove, 1);
        quest = prompt("Enter a new todo, list, remove, or quite");
    }else{
        break
    }
}

