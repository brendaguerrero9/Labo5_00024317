function palindromo(palabra){
    cadena = "";
    for(i= palabra.length-1; i>=0; i--){
        cadena = cadena + palabra[i];
    }
    if(palabra == cadena){
        return true;
    } else{
        return false;
    }
}