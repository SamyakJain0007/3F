function calculateBMI() {
let height =document.getElementById('height').value;
let weight =document.getElementById('weight').value;
let result = document.getElementById('result');
if (height === ""){ 
    result.value = "Provide a valid Height!";
    console.log("Provide a valid Height");

}else if (weight === "" ){ 
    result.value= "Provide a valid Weight!";
    console.log("Provide a valid weight");
}else{
    let bmi = (weight / ((height * height) / 10000));
        if (bmi < 18.6) result.value =
            `Under Weight : ${bmi}`;

        else if (bmi >= 18.6 && bmi < 24.9) 
            result.value = 
                `Normal : ${bmi}`;

        else result.value =
            `Over Weight :${bmi}`;
    }
}