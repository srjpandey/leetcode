type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return await Promise.all([promise1, promise2]).then (
        ([val1,val2])=> val1+val2
    );
};

