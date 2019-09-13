const tempFahr= prompt("What is the temperature? Use numbers only.") 
const eventType= prompt("Are you going to a formal, semi-formal, or casual event?")
const result= "Since it is " + tempFahr + " degress and you are going to a " + eventType + " event, you should wear " 

if(tempFahr < 54 && eventType === "formal"){
    console.log(result + "a coat and a suit.")
} if (tempFahr < 54 && eventType === "semi-formal"){
    console.log(result + "a polo and a coat.")
} if (tempFahr < 54 && eventType === "casual"){
    console.log(result + "something comfy and a coat.")
} if(tempFahr > 54 && tempFahr < 70 && eventType === "formal"){
    console.log(result + "a jacket and a suit.")
} if(tempFahr > 54 && tempFahr < 70 && eventType === "semi-formal"){
    console.log(result + "a polo and a jacket.")
} if(tempFahr > 54 && tempFahr < 70 && eventType === "casual"){
    console.log(result + "something comfy and a jacket.")
} if(tempFahr > 70 && eventType === "formal"){
    console.log(result + "a suit with no jacket.")
} if(tempFahr > 70 && eventType === "semi-formal"){
    console.log(result + "a polo and no jacket.")
} if(tempFahr > 70 && eventType === "casual"){
    console.log(result + "something comfy and no jacket.")
} 
