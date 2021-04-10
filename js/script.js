const btn = document.querySelector('.btn');
const heightType = document.querySelector('#height')
const weightType = document.querySelector('#weight')


btn.onclick = (event) => {
    event.preventDefault();
    // show the selected index
    let height = document.getElementById('heightI').value;
    let weight = document.getElementById('weightI').value;

    if (height == 0 || weight == 0) {
        alert('enter a valid number')

    }
    // // let BMI = weight / Math.pow(height, 2)


    let h = heightType.selectedIndex
    let w = weightType.selectedIndex

    //********************** * Type 1
    if (h == 0 && w == 0) {
        let BMI = weight / Math.pow((height / 39.37), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }
    };

    //********************** * Type 2
    if (h == 0 && w == 1) {
        let BMI = (weight / 2.205) / Math.pow((height / 39.37), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }

    };

    //********************** * Type 3
    if (h == 1 && w == 0) {
        let BMI = weight / Math.pow((height / 100), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }
    };
    //********************** * Type 4
    if (h == 1 && w == 1) {
        let BMI = (weight / 2.205) / Math.pow((height / 100), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }
    };

    //********************** * Type 5
    if (h == 2 && w == 0) {

        let BMI = weight / Math.pow((height), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }
    };

    //********************** * Type 6
    if (h == 2 && w == 1) {
        let BMI = (weight / 2.205) / Math.pow((height), 2)

        if (BMI < 18) {
            document.getElementById('print').innerHTML = `<span style=" color: #ed8d8d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're underweight. You should increase your weight by taking moderate food  `
            document.getElementById('t2').style.background = "#ed8d8d"

            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 18 && BMI <= 24.9) {
            document.getElementById('print').innerHTML = `<span style="color:#8ded9d;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at normal stage & you have no risk `
            document.getElementById('t3').style.background = "#8ded9d"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 24.9 && BMI <= 29.9) {
            document.getElementById('print').innerHTML = `<span style="color:#fffa7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're Overweight. You should loss extra weight by doing exercise  `
            document.getElementById('t4').style.background = "#fffa7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 29.9 && BMI <= 34.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f57a7a;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 1. Take proper food and do exercise  `
            document.getElementById('t5').style.background = "#f57a7a"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI >= 34.9 && BMI <= 39.9) {
            document.getElementById('print').innerHTML = `<span style="color:#f15252;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Obesity level 2. Take diet food and exercise regularly  `
            document.getElementById('t6').style.background = "#f15252"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t7').style.background = "inherit"

        }
        if (BMI > 40) {
            document.getElementById('print').innerHTML = `<span style="color:#fb1b1b;font-weight: bold;font-style: italic;">Your BMI is ${BMI.toFixed(2)}</span> <br> You're at Extreme Obesity. Risk of death. Consult with a doctor  `
            document.getElementById('t7').style.background = "#fb1b1b"

            document.getElementById('t2').style.background = "inherit"
            document.getElementById('t3').style.background = "inherit"
            document.getElementById('t4').style.background = "inherit"
            document.getElementById('t5').style.background = "inherit"
            document.getElementById('t6').style.background = "inherit"

        }
    };
}


// For pin system
function promptMe() {
    let code = prompt("Please Enter Your Pin");

    const pin = 54672;
    if (code == pin) {
        document.body.oncontextmenu = "return true";


    } else {
        // location.reload();
        alert('Your pin is incorrect')

    }
}

//locking the keys
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Trigger for pressing enter key 

let input = document.getElementById("heightI");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnClick").click();
    }
});
let input2 = document.getElementById("weightI");
input2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnClick").click();
    }
});