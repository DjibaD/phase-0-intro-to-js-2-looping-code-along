// Code your solutions in this file
const name =(["Lisa", "Kaitlin", "Jan"]);

function writeCards(name, event) {
    let newArr =[];
    for (let i = 0; i < name.length; i++) {
        let message = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        newArr.push(message);
    }
    return newArr;
}


function countDown (int){
    while (int >= 0) {
        console.log(int);
        int--
    }
}
