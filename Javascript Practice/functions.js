

function rollDie(){
    console.log(Math.floor((Math.random()*6)+1));
}


function pass(){
    let user = prompt("Please enter a username:")
    let password = prompt("Please enter a password:");
    if (password.length < 8 || password.indexOf(" ") !== -1 || password === user){
        console.log("Either you had less than 8 characters, it contained a space, or your pass equals user");
        return false
    }else{
        return true
    }
}

function avg(){
    const arr = [1, 3, 5, 8, 4];
    let count = 0;
    for(i = 0; i < arr.length; i++){
        let sum = count += arr[i];
        console.log(sum/arr.length)
    }
}

function rock(){
    let ask = prompt("Select Rock, Paper, or Scissors")
    const game = ["Rock", "Paper", "Scissors"]
    let count = 0
    while(count != 5){
        count += 1
        if(ask === "Rock")
    }
}
