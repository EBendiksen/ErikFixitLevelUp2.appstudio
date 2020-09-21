// Repeats the process through a switch(condensed version) of if else statements
switch (true) {
  case (state == "NE" && temp < 32):  
    console.log(`Hello ${userName}, ${message[0]}`)
    break
  case (state == "NE" && temp >=32 && temp <=50):  
    console.log(`Hello ${userName}, ${message[1]}`)
    break
  case (state == "FL" && temp1>=32 && temp <=50):  
    console.log(`Hello ${userName}, ${message[2]}`)
    break
  case (state == "FL" && temp>50 && temp <=70):  
    console.log(`Hello ${userName}, ${message[3]}`)
    break
  default:
     console.log(`Hello ${userName}, please enter valid information.`)
}