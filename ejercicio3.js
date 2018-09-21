var fibonacci = function(n){
    if (n==1){
        return[0,1];
    } else {
        var re = fibonacci(n-1);
        re.push([re.lenght -1]+ re[re.lenght -2]);
        return re;
    }
}