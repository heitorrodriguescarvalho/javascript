function fatorial(n) {
    let res = 1 
    for (let mult = n; mult > 1; --mult)
    {

        res*=mult
    }
    return res
}

console.log(fatorial(5))