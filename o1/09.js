///sum of n natural numbers

let n= 20
if(n>0){
    console.log("valid number")
    var sum =0;
    for(i=1;i<=n;i++){
        sum=sum +i;
    }
    console.log(sum)
    
}else{
    console.log("natural nmbers are always positive and non zero!")
}