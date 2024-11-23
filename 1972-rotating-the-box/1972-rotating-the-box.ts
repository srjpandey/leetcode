function rotateTheBox(box: string[][]): string[][] {
    let ans: string[][] = Array.from({ length: box[0].length }, () => new Array())

    let fall: (arr: string[]) => string[] = (arr) => {
        let end: number = arr.length
        let obstacle: number = end
        while (obstacle >= 0) {
            obstacle = arr.lastIndexOf("*", obstacle - 1)
            let stones: number = 0
            for (let i: number = obstacle + 1; i < end; i++)
                if (arr[i] == "#") {
                    stones++
                    arr[i] = "."
                }
            while (stones > 0) {
                end--
                arr[end] = "#"
                stones--
            }
            end = obstacle
            if (obstacle == 0) break
        }
        return arr
    }

    for (let m: number = box.length - 1; m >= 0; m--) {
        let curr: string[] = fall(box[m])
        for (let n: number = 0; n < curr.length; n++)
            ans[n].push(curr[n])
    }

    return ans
};