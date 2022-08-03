function prime(num){
    let arr=[]
    for(let i=0;i<=num*2;i++){
      
            if(i%2!=0){
                arr.push(i)
            }
        
    }
    return arr

}
    
console.log(prime(4))