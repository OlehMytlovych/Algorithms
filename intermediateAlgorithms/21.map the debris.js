/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
     GM = 398600.4418;
     earthRadius = 6367.4447;

    for (let object in arr){

        arr[object].orbitalPeriod = 2*Math.PI*Math.sqrt(Math.pow((earthRadius + arr[object].avgAlt), 3)/GM);// the formula can be found on Wikipedia "orbital period"
        arr[object].orbitalPeriod = Math.round(arr[object].orbitalPeriod)
        delete arr[object].avgAlt

    }    
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


  /**
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
 should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
   */