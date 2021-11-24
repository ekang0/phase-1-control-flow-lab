function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if (rideDistance <= 400) {
    return 'This one is on me!';
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideDistance > 2500) {
    return 'No can do.';
  }
};

function ternaryCheckCity(cityName){
  // Write your code here!
  /* if (cityName === 'NYC') {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  } */
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.';
};

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous' : 
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    default :
      return 'Bye.';
      break;
}
}