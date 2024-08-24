console.log("Welcome to the Javascript");
//console.log(names);
//console.log(lnames);
let btn = document.querySelector('.btn');
console.log(btn);
btn.addEventListener('click', (e) => {
   e.preventDefault();
   let resultText = document.getElementById('resultText');
   let names = document.getElementById('name').value;
   let lnames = document.getElementById('lname').value;
    if (names== ''||lnames=='') {
        alert("Please enter your and your partner's name");
    }
    else if (names.length <= 2||lnames.length <= 2) {
        alert("Your and your partner's name should have more than 3 characters")
    }
    else if (!isNaN(names)) {
        alert("Your name should have only characters")
    }
    else if (!isNaN(lnames)) {
        alert("Your partner's name should have only characters");
    }
    else {
        let r = Math.random();
        let s = Math.floor(r * 100);
        console.log(s);
        resultText.value = s + "%";
    }
});
