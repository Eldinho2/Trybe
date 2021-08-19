function fatorialRec(n) {
    if (n == 0) return 1
    if (n == 1) return 1
    return n * fatorialRec (n - 1)
}

console.log(fatorialRec(5));