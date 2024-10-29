const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    // create a function, when the button is clicked random characters will be selected.
    // use for loop and index[i] to retrive the random chars from array
    //check to see if the length is 15 chars, if yes then display text if not then keep adding chars
    //display the text in the para tags

let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")



function randomNumber(){
    let index = Math.floor(Math.random()*characters.length)

    //console.log(index)
    return characters[index]
    
}
//just a random edit


function passwordGenerator(){
    let password = ""
    for (let i = 0; i  < 15; i++){
        password += randomNumber()
        //console.log(password)
    }
    
    return password
    
}



function generatePasswords(){
    let firstPassword = passwordGenerator()
    let secondPassword = passwordGenerator()

    passwordOne.textContent = firstPassword
    passwordTwo.textContent = secondPassword
}

generatePasswords()
