exports.at = at;


// Rewrite this file as needed.


// function at(hours, minutes) {
//   function makeMTime(hours, minutes) {
//       let timeArr = [];
//       if (hours < 10) {
//           timeArr[0] = "0";
//           timeArr[1] = hours.toString();
//           timeArr[2] = ":";
//           if(minutes === undefined){
//             timeArr[3] = "0"
//             timeArr[4] = "0"
//             return timeArr.join("")
//           }
//           if (minutes < 10) {
//               timeArr[3] = "0";
//               timeArr[4] = minutes.toString();
//               return timeArr.join("")
//           } else {
//               timeArr[3] = minutes.toString().split("").shift();
//               timeArr[4] = hours.toString().split("").pop();
//               return timeArr.join("");
//           }
//        } else {
//           timeArr[0] = hours.toString().split("").shift();
//           timeArr[1] = hours.toString().split("").pop();
//           timeArr[2] = ":";
//           if (minutes < 10) {
//               timeArr[3] = 0;
//               timeArr[4] = hours.toString();
//               return timeArr.join("")
//           } else {
//               timeArr[3] = minutes.toString().split("").shift();
//               timeArr[4] = hours.toString().split("").pop();
//               return timeArr.join("")
//           }
//       }
//   }
  
//   var mTime = makeMTime(hours, minutes);
//   console.log("hello", mTime);

// }


function at(hours, minutes){
  let timeArr = [];
  // if minutes and hours are less then 10
  if(hours<10){
    timeArr[0] = "0";
    timeArr[1] = hours
    timeArr[2] = ":"
  }
  if(minutes<10){
    timeArr[2] = ":"
    timeArr[3] = "0"
    timeArr[4] = minutes
  }
  //if minutes are empty
  if(minutes === undefined){
    timeArr[3] = "0"
    timeArr[4] = "0"
    return timeArr.join("")
  }
  // if hours are greater then 9 but less then 24
  if(hours>9 && hours<24){
    const hoursSplitIntoArray = (""+hours).split("")
    timeArr[0] = hoursSplitIntoArray[0];
    timeArr[1] = hoursSplitIntoArray[1];
    // timeArr[0] = hours;
    // timeArr[1] = ':'
  }

  // if minutes are greater then 9 but less then 60
  if(minutes>9 && minutes<60){
    const minutesSplitIntoArray = (""+minutes).split("")
    timeArr[3] = minutesSplitIntoArray[0]
    timeArr[4] = minutesSplitIntoArray[1]
  }
  // midnight is zero hours
  if(hours===24 && minutes===0){
    timeArr[0] = '0'
    timeArr[1] = '0'
    timeArr[2] = ':'
    timeArr[3] = '0'
    timeArr[4] = '0'
  }
  // hours roll over
  if(hours>24){
    var divided = hours/24;
    var roundedDivided = Math.floor(divided);
    var takeOutAmount = roundedDivided*24;
    var correntRolloverRemaining = hours - takeOutAmount;
    if(correntRolloverRemaining<9){
      timeArr[0] = '0'
      timeArr[1] = correntRolloverRemaining
    }else{
      var rollOverSplit = (""+correntRolloverRemaining).split("")
      timeArr[0] = rollOverSplit[0];
      timeArr[1] = rollOverSplit[1];
    }
  }

  // sixty minutes is next hour
  if(minutes >= 60){
    var minuteDivideByHour = Math.floor(minutes/60)
   
    var hoursToBeAdded = hours+minuteDivideByHour
   
    var remainingMinutes = Math.abs(minuteDivideByHour*60 - minutes)
   
    minutes = remainingMinutes
    
    hours = hoursToBeAdded
 
    var rollOverSplitHours = (""+hours).split("")
    
    if(rollOverSplitHours[1] === undefined){
      rollOverSplitHours[1] = rollOverSplitHours[0]
      rollOverSplitHours[0] = '0'
      
    }
      timeArr[0] = rollOverSplitHours[0];
    console.log(rollOverSplitHours[0])
      timeArr[1] = rollOverSplitHours[1];
    console.log(rollOverSplitHours[1])
    var rollOverSplitMinutes = (""+minutes).split("")
    if(rollOverSplitMinutes[1] === undefined){
      rollOverSplitMinutes[1] = rollOverSplitMinutes[0]
      rollOverSplitMinutes[0] = '0'
    }
    timeArr[3] = rollOverSplitMinutes[0]
    console.log(rollOverSplitMinutes[0])
    timeArr[4] = rollOverSplitMinutes[1]
    console.log(rollOverSplitMinutes[1])
    


  }


  return timeArr.join("")
 
}





// function at(hours, minutes) {







//   return '06:00'; // Just enough to make the 1st test pass.
// };
