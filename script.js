const student = "Корнаушенков Фёдор Андреевич"; 

document.getElementById("student").innerHTML = student;

const firstTerm = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const firstSession = Array(1).fill([0, 0, 2, 2, 0, 0, 0]);
const secondTerm = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const secondSession = Array(1).fill([0, 0, 2, 2, 2, 0, 0]);
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const academicYear = [firstTerm, firstSession, holidays, secondTerm, secondSession];

const realTravelCounter = 120;
const consoleMoney = 23500;
const travelCounter = 150;
const naobed = 250;

let dayCounter = 0;
let weekCounter = 0;
let moneyCounter = 0;

let realTravel = travelCounter - realTravelCounter;

for (let i = 0; i < academicYear.length; i++) {

    for (let j = 0; j < academicYear[i].length; j++) {
        weekCounter = weekCounter + 1;
        console.log('Номер недели: ' + weekCounter);

        for (let k = 0; k < academicYear[i][j].length; k++) {
            let element = academicYear[i][j][k];
            dayCounter = dayCounter + 1;
            console.log('Номер дня: ' + dayCounter);

            if (element > 0) {
                moneyCounter = moneyCounter + realTravel;
                
                if (element <= 3) {
                    moneyCounter = moneyCounter + naobed;
                    console.log('шекелей: ' + moneyCounter)
        }   
      }
      if(consoleMoney <= moneyCounter) break
    }
    if(consoleMoney <= moneyCounter) break
  }
  if(consoleMoney <= moneyCounter) break
}
if(consoleMoney <= moneyCounter ){console.log('Накоплений хватило для приставки ^_^ !!!', moneyCounter,'На', dayCounter,'день.' )
}
else{
  console.log('Накоплений не хватило >_< !!!', dayCounter, moneyCounter);
}
