// Promise.then() Chaining

slowMath.add(6, 2)
.then(result => {
    console.log(result);
    return slowMath.multiply(result, 2);
}).then(result => {
    console.log(result);
    return slowMath.divide(result, 4);
}).then(result => {
    console.log(result);
    return slowMath.subtract(result, 3);
}).then(result => {
    console.log(result);
    return slowMath.add(result, 98);
}).then(result => {
    console.log(result);
    return slowMath.remainder(result, 2);
}).then(result => {
    console.log(result);
    return slowMath.multiply(result, 50);
}).then(result => {
    console.log(result);
    return slowMath.remainder(result, 40);
}).then(result => {
    console.log(result);
    return slowMath.add(result, 32);
}).then(result => {
    console.log(`The final result is ${result}.`);
}).catch(err => {
    console.log(err);
});

// Async/Await

let doMath = async () => { 
    try {
        let result = await slowMath.add(6, 2);
        result = await slowMath.divide(result, 4);
        result = await slowMath.multiply(result, 2);
        result = await slowMath.subtract(result, 3);
        result = await slowMath.add(result, 98);
        result = await slowMath.remainder(result, 2);
        result = await slowMath.multiply(result, 50);
        result = await slowMath.remainder(result, 40);
        result = await slowMath.add(result, 32);
        return console.log(`The final result is ${result}.`);        
        
    } catch (err) {
        console.log(err);
    }
}

doMath();