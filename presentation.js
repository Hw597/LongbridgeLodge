function symmetry(){
	let dLogo = document.getElementById("svgLogoImage"),
		callUsH2 = document.getElementById("address");	
	callUsH2.setAttribute('margin-top', dLogo.height.toString());
	alert(dLogo.height.toString());
};