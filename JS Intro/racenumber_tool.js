let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;



let runnerAge = 18;




if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000
  console.log(`Race at 9:30 AM, your racenumber: ${raceNumber}` );
  
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Late registrants race at 11:00 AM, your racenumber: ${raceNumber}` );
} else if (runnerAge < 18 && registeredEarly === false) {
  console.log(`Youth races at 12:30 PM, your racenumber: ${raceNumber}` ); 
} else {
  console.log(`Please see registration desk! `); 
}