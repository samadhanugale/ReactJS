function formArray() {
    var myArr = Array.from("ABCDEFG");
    document.getElementById("formArray").innerHTML = myArr;
}

function formKey() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const keys = fruits.keys();

    let text = "";
    for (let x of fruits) {
        text += "- " + x + "<br>";
    }

    document.getElementById("formKey").innerHTML = text;
}

formFind = () => {
    let a = document.getElementById('number')

    let ab = a.value;
    const numbers = [4, 9, 16, 25, 29, 42, 54, 67, 78, 82, 98];
    document.getElementById('arraylist').innerText = "List : " + numbers;
    let c = 0;
    for (const num of numbers) {
        if (num == ab) {
            c = 1;
        }
    }
    if (c == 1) {
        document.getElementById("formFind").innerHTML = "Number found in array at index : " + numbers.indexOf(ab);
    } else {
        document.getElementById("formFind").innerHTML = "Number not found!";
    }

}


function mathFunct() {
    let minn = document.getElementById('min');
    let maxx = document.getElementById('max');
    let min = minn.value;
    let max = maxx.value;

    document.getElementById("trunc").innerHTML = "Your random number is : " + getRndInteger(min, max);


}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class randomEntry {
    id;
    name;
    city;
    pin;
    constructor(id, name, city, pin) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pin = pin;
    }
}
const randomData = new Set();
classFunc = () => {

    let id1 = document.getElementById('id');
    let name1 = document.getElementById('name');
    let city1 = document.getElementById('city');
    let pin1 = document.getElementById('pin');

    let idd = id1.value;
    let namee = name1.value;
    let cityy = city1.value;
    let pinn = pin1.value;
    console.log(idd + namee + cityy + pinn);
    console.log(randomData);

    randomData.add(new randomEntry(idd, namee, cityy, pinn));


}
showData = () => {
    randomData.forEach(element => {
        console.log(element);
        document.write("Id : ", element.id, ", City : ", element.city, ", Name : ", element.name, ", Pin : ", element.pin);
    });

}