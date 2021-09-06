function snapCrackle(maxValue){
    let arr = []
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 === 1 && i % 5 === 0){
            arr.push('SnapCrackle')
        }
        else if(i % 5 === 0){
           arr.push('Crackle')
        }
        else if(i % 2 === 1){
            arr.push('Snap')
        }
        else{
            arr.push(i)
        }
        
    }
    return arr.join(', ') + '.'
}
console.log(snapCrackle(12))

function snapCracklePrime(maxValue){
    let arr = []
    for(let i = 1; i <= maxValue; i++){
        if(i === 2 || i === 3 ||i === 5 || i === 7){
            arr.push('Prime')
        }
        else if((i!== 1) && (i % 2 !== 0) && (i % 3 !== 0) && (i % 5 !== 0) && (i % 7 !== 0)){
            arr.push('Prime')
        }
        else if(i % 2 === 1 && i % 5 === 0){
            arr.push('SnapCrackle')
        }
        else if(i % 5 === 0){
           arr.push('Crackle')
        }
        else if(i % 2 === 1){
            arr.push('Snap')
        }
        else{
            arr.push(i)
        }
        
    }
    return arr.join(', ') + '.'

}
console.log(snapCracklePrime(12))

