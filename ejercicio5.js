function circun(radio){
    if(radio==0){
        return "Error El radio debe ser mayor que cero.";
    } else{
        return Math.PI*(Math.pow(radio,2));
    }
}