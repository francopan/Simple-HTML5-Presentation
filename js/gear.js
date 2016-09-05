//Total number of pages
var total = document.getElementById('pages').getElementsByTagName('article').length;


//Sort the Pages
function arrange(){
		var value = (total-1)*100;
		for(i=(total-1);i>=0;i--){ //Para cada página
			document.getElementById('pages').getElementsByTagName('article')[i].style.left = value+"%"; //Coloca na sequencia
			document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 0;
		value = (i-1)*100;
	}
}

//Goes to the previous page
function pre(){
	var i = 0;
	while(i<total && document.getElementById('pages').getElementsByTagName('article')[i].style.left!="0%")i++;
	
	//Check if is ending page
	if(i == 0){
		document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 0;
		document.getElementById("start").style.display = "block";
		document.getElementById("bottom").style.display = "none";
	}else{
		if(i==1){document.getElementById("start").style.display = "none";}
		for(i=0;i<total;i++){
			document.getElementById('pages').getElementsByTagName('article')[i].style.left = Number(document.getElementById('pages').getElementsByTagName('article')[i].style.left = document.getElementById('pages').getElementsByTagName('article')[i].style.left.replace('%',''))+100+"%";
			if(document.getElementById('pages').getElementsByTagName('article')[i].style.left!="0%"){ //If is not centered, hide
				document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 0;
			}else{
				document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 1;
			}
		}
	}
}

function prox(){ //Vai para a próxima página
	if(document.getElementById("start").style.display == "none"){
		var total = document.getElementById('pages').getElementsByTagName('article').length;
		var i = 0;
		while(i<total && document.getElementById('pages').getElementsByTagName('article')[i].style.left!="0%")i++;

		//Verifica se chegou no end
		if(i == total-1){ //Se chegou no end
			document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 0;
			document.getElementById("end").style.display = "block";
			exitFullscreen();
		}else{
			if(i==(total-2)){document.getElementById("end").style.display = "none";}
			for(i=0;i<total;i++){
				document.getElementById('pages').getElementsByTagName('article')[i].style.left = Number(document.getElementById('pages').getElementsByTagName('article')[i].style.left = document.getElementById('pages').getElementsByTagName('article')[i].style.left.replace('%',''))-100+"%";
				if(document.getElementById('pages').getElementsByTagName('article')[i].style.left!="0%"){ //Se não estiver centralizada, esconde
					document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 0;
				}else{
					document.getElementById('pages').getElementsByTagName('article')[i].style.opacity = 1;
				}
			}
		}
	}
}
