var database = [
    {
        username: "tiffany",
        password: "secret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "I'm so tired"
    },
    {
        username: "Sally",
        timeline: "Javascript is cool"
    },
    {
        username: "Mitch",
        timeline: "I eat burgers"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(username === database[i].username && 
            password === database[i].password) {
                return true
        }
    }
    return false
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and password")
    }
}

var usernamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(usernamePrompt, passwordPrompt);