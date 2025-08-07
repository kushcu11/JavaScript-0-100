///factorial of n natural numbers

let n= 20
if(n>0){
    console.log("valid number")
    var fact =1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }
    console.log(fact)
    
}else{
    console.log("please give positive and non zero!")
}