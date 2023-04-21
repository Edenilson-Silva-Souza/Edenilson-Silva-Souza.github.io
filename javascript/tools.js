var size=0, milissegundos=0, pointer2=0;
var mensage="";
var mensagens=[];
window.onload= main();
var tagp="";
function main(){
	mensage = document.getElementById("area_mensagens").innerHTML;
	
	quantP = contP();
	size = mensage.length+quantP;
	
	pointer2=0;
	document.getElementById("area_mensagens").innerHTML="";
	dialog();
}

function contP(){
	let salt=0;
	cont = 0 ;
	while(mensage.indexOf("<p>",salt)!=-1){
		salt =  mensage.indexOf("<p>",salt+1);
		cont++;
		if(salt==-1){
			break;
		}
	}
	return cont+3;
}

function dialog(){	
	milissegundos--;
	if(milissegundos<=0){
		
	if(mensage[pointer2]=="<"){
		tagp+="<";
		
	}
	else if(tagp=="<"){
		tagp+="p";
	}
	else if(tagp=="<p"){
		tagp+=">";
	}
	else if(tagp=="<p>"){
		document.getElementById("area_mensagens").innerHTML+="<p>";
		tagp="";
	}
	else{
		document.getElementById("area_mensagens").innerHTML+=mensage[pointer2];
	}
	
	
	
	pointer2++;
	}
	if(milissegundos<=2){
		milissegundos=0;
	}
	if(document.getElementById("area_mensagens").innerHTML.length>=size){
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

