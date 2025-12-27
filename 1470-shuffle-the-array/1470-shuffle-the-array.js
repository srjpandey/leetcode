const shuffle = (a) => {
    const n = a.length >> 1;
    const b = new Uint16Array(n << 1);
    for (let i = 0, j = 0; i < n; ++i) {
        b[j++] = a[i];
        b[j++] = a[n + i]; 
    }
    return b;
};