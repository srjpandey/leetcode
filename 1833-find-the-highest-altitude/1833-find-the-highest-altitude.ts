function largestAltitude(gain: number[]): number {
    let highest = 0;
    let altitude = 0;
    for(let i = 0; i < gain.length; i++) {
        let temp;
        temp = altitude += gain[i]

        if(temp >= highest) {
            highest = temp;
        }

    }

    return highest;
    
};