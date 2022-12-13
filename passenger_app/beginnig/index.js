let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
countEl.innerText = 0;

function increment(){
    countEl.innerText++;
}

let previousCountEl = [0, countEl.innerText];
console.log(previousCountEl[0], previousCountEl[1]);

function save(){
    previousCountEl[1] = countEl.innerText;
    console.log(typeof previousCountEl[0], typeof previousCountEl[1]);

    //Prvi put kad se stisne SAVE na prvom mistu u nizu je broj, a
    //na drugom je string pa ako stavis !== onda će se to prihvatit
    //jer nisu jednaki po tipu podatka, a triba gledat samo vrijednost
    //Može se ostavit trostruki operator da u prvom krugu na ekranu ispiše
    //nulu, inače koliko god puta da se stisne SAVE na ekranu je prazno
    //ako nema inkrementa
    if(previousCountEl[0] !== previousCountEl[1]){
        previousCountEl[0] = previousCountEl[1];
    saveEl.innerText += countEl.innerText +  " - ";
    }
}


