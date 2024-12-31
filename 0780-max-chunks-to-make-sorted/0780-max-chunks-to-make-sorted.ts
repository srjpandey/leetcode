function maxChunksToSorted(arr: number[]): number {
    let l = arr.length
    let m = 0
    let s = 0
    let c = 0
    for (let i = 0; i < l; i++) {
        let sub_arr = arr.slice(s, i + 1)
        let ma_ele = Math.max(...sub_arr)
        let mi_ele = Math.min(...sub_arr)
        if (mi_ele == m && ma_ele == i) {
            c = c + 1
            m = i + 1
            s = i + 1
        }

    }

    return c
};