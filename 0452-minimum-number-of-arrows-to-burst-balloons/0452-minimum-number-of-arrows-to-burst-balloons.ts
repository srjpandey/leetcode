function findMinArrowShots(points: number[][]): number {
    points.sort((a,b)=>a[0]-b[0])
    let res=1
    let [px,py]=points[0]
    for (let index = 1; index < points.length; index++) {
        const [x,y] = points[index];
        if(py>=x){
            px=Math.max(px,x)
            py=Math.min(py,y)
        }else{
            [px,py]=[x,y]
            res++
        }
    }
    return res
};