var size=0, milissegundos=0, pointer2=0;
var mensage="";
var mensagens=[];
window.onload= main();
function main(){
	mensage = document.getElementById("area_mensagens").innerHTML;
	
	size = mensage.length;
	pointer2=0;
	document.getElementById("area_mensagens").innerHTML="";
	dialog();
}

function dialog(){	
	milissegundos--;
	if(milissegundos<=0){
	document.getElementById("area_mensagens").innerHTML+=mensage[pointer2];
	
	
	pointer2++;
	}
	if(milissegundos<=0){
		milissegundos=4;
	}
	if(document.getElementById("area_mensagens").innerHTML.length==size){
		return false;
	}
	window.requestAnimationFrame(dialog);	
}
var and=0;
var	start=0;
function factor(){
	array=[];
	
	for(i=0;;i++){
		start=and;
	and=mensage.indexOf(" ", and);
	resulte = and-start;
	and++;
		if(mensage.indexOf(" ", and)==-1){
			alert("ok");
			break;
		}
		array[i]=mensage.substr(start, resulte);
		
	}
	
	return array;
}

