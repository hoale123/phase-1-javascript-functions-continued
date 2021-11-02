// Your code here
function saturdayFun(fun = "roller-skate") // default parameter
 {
    return `This Saturday, I want to ${fun}!`
}

//function expression const = 
const mondayWork = function (work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(style= "*") {
   return function (word = "special") {
        return `You are ${style}${word}${style}!`
    }
}
// wrapAdjective("%")("a dedicated programmer");
// //=> "You are %a dedicated programmer%!"