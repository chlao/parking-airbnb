export const getDate = (time) => {
  let dateObj = time;
  if (!time instanceof Date){
    dateObj = new Date(time);
  }

  let tomorrowDateObj = new Date();
  tomorrowDateObj.setDate(tomorrowDateObj.getDate() - 1);

  if (dateObj.toDateString() === new Date().toDateString()){
    return "Today";
  } else if (dateObj.toDateString() === tomorrowDateObj.toDateString()){
    return "Tomorrow";
  }

  return dateObj.toDateString();
}

export const getTime = (time) => {
  let dateObj = time;
  if (!time instanceof Date){
    dateObj = new Date(time);
  }

  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  // if (dateObj.toTimeString() === new Date().toTimeString()){
  //   return "Now"
  // }

  // Pad with zeros if minute is a single digit number
  if (minutes < 10){
    minutes = "0" + minutes;
  }

  // Chnage from 24 hour format to AM/PM format
  var AMPMHours = hours % 12;

  if (hours > 12){
    return AMPMHours + ":" + minutes + " PM";
  } else{
    return AMPMHours + ":" + minutes + " AM";
  }
}

export const getDuration = (startTime, endTime) => {
  let startDateObj = startTime;
  let endDateObj = endTime;

  if (!startTime instanceof Date){
    startDateObj = new Date(startTime);
  }

  if (!endTime instanceof Date){
    endDateObj = new Date(endTime);
  }


  return (endDateObj - startDateObj) + 'ms';
}
