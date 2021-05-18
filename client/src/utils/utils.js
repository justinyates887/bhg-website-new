export function color(dec){
    if(dec === 0) return "white"
    let result = '#' + dec.toString(16);
    console.log(result)
    return result
}