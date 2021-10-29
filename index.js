
const participant = {
    name: "Derrick",
    weight: 54.4311,
    height: 175.25999999999996,
    bmiRange: 2, 
    bmi: 3,
};
calculateBMI()
function calculateBMI () { 
    participant.bmi = (participant.weight) / (participant.height/100)**2;
    
}

calculateRange();
function calculateRange () {
    if (participant.bmi<18.5) 
    {participant.bmiRange= "underweight"}
    else if (participant.bmi<25)
    {participant.bmiRange= "Nice"}
    else if (participant.bmi<30)
    {participant.bmiRange= "overweight"}
    else 
    {participant.bmiRange= "obese"}
}
console.log(`${participant.bmi} ${participant.bmiRange}`)


  




    



