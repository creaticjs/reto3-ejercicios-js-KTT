function calculeYear() {
    var year=document.getElementById("year").value;
    
    var res;
    if(year<0){
		$('.toast').toast('show');
	}
	if(year%4==0 && ( (year%100 ==0) && (year%400==0) )){
		res="es bisiesto"
	}
	else{
		res="no es bisiesto"
	}

    document.getElementById("result").innerHTML=`El año ${res}`;
    }