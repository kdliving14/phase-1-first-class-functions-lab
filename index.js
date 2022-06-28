// Code your solution in this file!

//variable with anon function assigned
let returnFirstTwoDrivers = function(list)
{   //function take 1 arg (array) ^

    const newList = list.slice(0, 2);
    return newList;
    //^function return new array containing first 2
}

//variable with anon function assigned
let returnLastTwoDrivers = function(list)
{   //function take 1 arg (array) ^

    const newList = list.slice(2);
    return newList;
    //^function return new array containing last 2
}

function selectDifferentDrivers(list, func)
{
    let newList = func(list);
    return newList;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare)
{
    return function(fare){return fare * fare;}
}

function fareDoubler(fare)
{
    return fare*2;
}

function fareTripler(fare)
{
    return fare*3;
}


