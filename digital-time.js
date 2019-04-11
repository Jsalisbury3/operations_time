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
  
  return timeArr.join("")
 
}





// function at(hours, minutes) {







//   return '06:00'; // Just enough to make the 1st test pass.
// };
