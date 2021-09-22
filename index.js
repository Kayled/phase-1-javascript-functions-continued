// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
        return `This Monday, I will ${activity}.`;
}

function wrapAdjective(deer = "*"){
    return function (emphatic = "a hard worker") {
            // const emphatic = `${deer}${emphatic}`;
            return `You are ${deer}${emphatic}${deer}!`;
        };
    };


    // function wrapAdjective(bear = "||"){
    //     return function (emphasis = "a dedicated programer") {
    //             // const emphatic = `${deer}${emphatic}`;
    //             return `You are ${bear}${emphasis}${bear}!`;
    //         };
    //     };





// function wrapAdjective(emphasis = "a dedicated programer"){
//     return function(emphatic){
//         return function (moon = "||"){
//             const emphasis = `${moon}${emphasis}${moon}`;
//             return `You are ${moon}${emphasis}${moon}!`;
//         };
//     };
// }