// JavaScript Document



/*
var x=0;

if((document.getElementById("star1").checked == true) && (document.getElementById("star2").checked == true) && (document.getElementById("star3").checked == true) && (document.getElementById("star4").checked == true) && (document.getElementById("star5").checked == true) && (document.getElementById("item1").checked == true) && (document.getElementById("item2").checked == true) && (document.getElementById("item3").checked == true) && (document.getElementById("item4").checked == true) && (document.getElementById("item5").checked == true)){

for(var i=(myArray.length)-1;i>=0;i--) {

   table.insertRow();
   for(var j=0;j<(myArray[i].length)-7;j++) { 
      table.rows[x].insertCell(j); 
	  if(j !== 0 && (j==1 || j==2 || j==3)){	  	  
      table.rows[x].cells[j].innerHTML ='<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][j] + '</a>';} 	   
	  if(j == 0){
      table.rows[x].cells[0].innerHTML ='<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}	   
   }
   x=x+1;
	
}	
}	
*/



//------------------------------------------篩選---------------------------------------
function check() {
	
var len=table.rows.length;	
for(var n=0;n<len;n++)
{
table.deleteRow(0);
}
var m=0,i=0,j=0,k=0;		
	
for(var i=(myArray.length)-1;i>=0;i--) { 
  for(var j=0;j<myArray[i].length;j++) {
	/*一顆星 
	if(document.getElementById("star1").checked === true){  
    if(j==2 && myArray[i][2]=="★"){ 	   
	table.insertRow();
	for(var k=0;k<myArray[i].length;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k !== 9)){
	    table.rows[m].cells[k].innerHTML = myArray[i][k];}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = "<img src='images/Graph/"+myArray[i][0]+".png"+"' width='65px' height='80px'>";}
	  if(k == 9) {
	    table.rows[m].cells[9].innerHTML = "<img src='images/Skill/"+myArray[i][9]+".png"+"' width='65px' height='80px'>";}
	} 
	m=m+1;
	}
	}	  
	兩顆星  
	if(document.getElementById("star2").checked === true){  
    if(j==2 && myArray[i][2]=="★★"){ 	   
	table.insertRow();
	for(var k=0;k<myArray[i].length;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k !== 9)){
	    table.rows[m].cells[k].innerHTML = myArray[i][k];}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = "<img src='images/Graph/"+myArray[i][0]+".png"+"' width='65px' height='80px'>";}
	  if(k == 9) {
	    table.rows[m].cells[9].innerHTML = "<img src='images/Skill/"+myArray[i][9]+".png"+"' width='65px' height='80px'>";}
	} 
	m=m+1;
	}
	}	  
	三顆星  
	if(document.getElementById("star3").checked === true){  
    if(j==2 && myArray[i][2]=="★★★"){		
	table.insertRow();
	for(var k=0;k<myArray[i].length;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k !== 9)){
	    table.rows[m].cells[k].innerHTML = myArray[i][k];}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = "<img src='images/Graph/"+myArray[i][0]+".png"+"' width='65px' height='80px'>";}
	  if(k == 9) {
	    table.rows[m].cells[9].innerHTML = "<img src='images/Skill/"+myArray[i][9]+".png"+"' width='65px' height='80px'>";}
	}	 
	m=m+1;
	}
	}
	四顆星  
	if(document.getElementById("star4").checked === true){  
    if(j==2 && myArray[i][2]=="★★★★"){ 	   
	table.insertRow();
	for(var k=0;k<myArray[i].length;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k !== 9)){
	    table.rows[m].cells[k].innerHTML = myArray[i][k];}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = "<img src='images/Graph/"+myArray[i][0]+".png"+"' width='65px' height='80px'>";}
	  if(k == 9) {
	    table.rows[m].cells[9].innerHTML = "<img src='images/Skill/"+myArray[i][9]+".png"+"' width='65px' height='80px'>";}
	} 
	m=m+1;
	}
	}
	五顆星  
	if(document.getElementById("star5").checked === true){  
    if(j==2 && myArray[i][2]=="★★★★★"){ 	   
	table.insertRow();
	for(var k=0;k<myArray[i].length;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k !== 9)){
	    table.rows[m].cells[k].innerHTML = myArray[i][k];}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = "<img src='images/Graph/"+myArray[i][0]+".png"+"' width='65px' height='80px'>";}
	  if(k == 9) {
	    table.rows[m].cells[9].innerHTML = "<img src='images/Skill/"+myArray[i][9]+".png"+"' width='65px' height='80px'>";}
	} 
	m=m+1;
	}
	}
	*/  
	  
	//--------------------------------------------一般常駐---------------------------------------------	
	//一般常駐(三星)	
	if((document.getElementById("item1").checked === true) && (document.getElementById("star3").checked === true)){
	if(j==1 && (myArray[i][1]==89 || myArray[i][1]==91 || myArray[i][1]==243 || myArray[i][1]==244 || myArray[i][1]==245 || myArray[i][1]==246 || myArray[i][1]==247 || myArray[i][1]==265 || myArray[i][1]==331 || myArray[i][1]==332 || myArray[i][1]==333 || myArray[i][1]==402 || myArray[i][1]==418 || myArray[i][1]==419 || myArray[i][1]==420 || myArray[i][1]==545 || myArray[i][1]==580 || myArray[i][1]==581 || myArray[i][1]==582 || myArray[i][1]==585 || myArray[i][1]==674 || myArray[i][1]==691 ) ){	
	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}	
	} 
	m=m+1;
	}
	}

	//一般常駐(四星)	  
	if((document.getElementById("item1").checked === true) && (document.getElementById("star4").checked === true)){
	if(j==1 && (myArray[i][1]==21 || myArray[i][1]==22 || myArray[i][1]==23 || myArray[i][1]==24 || myArray[i][1]==25 || myArray[i][1]==26 || myArray[i][1]==27 || myArray[i][1]==28 || myArray[i][1]==29 || myArray[i][1]==30 || myArray[i][1]==38 || myArray[i][1]==39 || myArray[i][1]==47 || myArray[i][1]==56 || myArray[i][1]==66 || myArray[i][1]==73 || myArray[i][1]==74 || myArray[i][1]==98 || myArray[i][1]==176 || myArray[i][1]==182 || myArray[i][1]==183 || myArray[i][1]==184 || myArray[i][1]==186 || myArray[i][1]==264 || myArray[i][1]==401) ){	
	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}
	  
	//一般常駐(五星)	  	  
	if((document.getElementById("item1").checked === true) && (document.getElementById("star5").checked === true)){
	if(j==1 && (myArray[i][1]==31 || myArray[i][1]==32 || myArray[i][1]==33 || myArray[i][1]==34 || myArray[i][1]==35 || myArray[i][1]==40 || myArray[i][1]==48 || myArray[i][1]==57 || myArray[i][1]==58 || myArray[i][1]==67 || myArray[i][1]==75 || myArray[i][1]==97 || myArray[i][1]==175 || myArray[i][1]==185 || myArray[i][1]==188 || myArray[i][1]==263 || myArray[i][1]==400) ){	
	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}	  

	//--------------------------------------------絆禮裝---------------------------------------------	
	//絆禮裝(四星)	  
	if((document.getElementById("item2").checked === true) && (document.getElementById("star4").checked === true)){
	if(j==1 && (myArray[i][1]==191 || myArray[i][1]==192 || myArray[i][1]==193 || myArray[i][1]==194  || myArray[i][1]==195 || myArray[i][1]==196 || myArray[i][1]==197 || myArray[i][1]==198 || myArray[i][1]==199 || myArray[i][1]==200 || myArray[i][1]==201 || myArray[i][1]==202 || myArray[i][1]==203 || myArray[i][1]==204 || myArray[i][1]==205 || myArray[i][1]==206 || myArray[i][1]==207 || myArray[i][1]==208 || myArray[i][1]==209 || myArray[i][1]==210 || myArray[i][1]==216 || myArray[i][1]==217 || myArray[i][1]==218 || myArray[i][1]==219 || myArray[i][1]==220 || myArray[i][1]==221 || myArray[i][1]==222 || myArray[i][1]==223 || myArray[i][1]==224 || myArray[i][1]==225 || myArray[i][1]==230 || myArray[i][1]==231 || myArray[i][1]==232 || myArray[i][1]==233 || myArray[i][1]==234 || myArray[i][1]==235 || myArray[i][1]==236 || myArray[i][1]==237 || myArray[i][1]==238 || myArray[i][1]==239 || myArray[i][1]==248 || myArray[i][1]==249 || myArray[i][1]==250 || myArray[i][1]==251 || myArray[i][1]==252 || myArray[i][1]==253 || myArray[i][1]==254 || myArray[i][1]==255 || myArray[i][1]==256 || myArray[i][1]==257 || myArray[i][1]==266 || myArray[i][1]==267 || myArray[i][1]==268 || myArray[i][1]==269 || myArray[i][1]==270 || myArray[i][1]==271 || myArray[i][1]==272 || myArray[i][1]==273 || myArray[i][1]==274 || myArray[i][1]==275 || myArray[i][1]==281 || myArray[i][1]==282 || myArray[i][1]==283 || myArray[i][1]==284 || myArray[i][1]==285 || myArray[i][1]==286 || myArray[i][1]==287 || myArray[i][1]==288 || myArray[i][1]==289 || myArray[i][1]==290 || myArray[i][1]==299 || myArray[i][1]==300 || myArray[i][1]==301 || myArray[i][1]==302 || myArray[i][1]==303 || myArray[i][1]==304 || myArray[i][1]==305 || myArray[i][1]==306 || myArray[i][1]==307 || myArray[i][1]==308 || myArray[i][1]==315 || myArray[i][1]==316 || myArray[i][1]==317 || myArray[i][1]==318 || myArray[i][1]==319 || myArray[i][1]==320 || myArray[i][1]==321 || myArray[i][1]==322 || myArray[i][1]==323 || myArray[i][1]==324 || myArray[i][1]==334 || myArray[i][1]==335 || myArray[i][1]==336 || myArray[i][1]==337 || myArray[i][1]==338 || myArray[i][1]==339 || myArray[i][1]==340 || myArray[i][1]==341 || myArray[i][1]==342 || myArray[i][1]==343 || myArray[i][1]==350 || myArray[i][1]==351 || myArray[i][1]==352 || myArray[i][1]==353 || myArray[i][1]==354 || myArray[i][1]==355 || myArray[i][1]==356 || myArray[i][1]==357 || myArray[i][1]==358 || myArray[i][1]==359 || myArray[i][1]==367 || myArray[i][1]==368 || myArray[i][1]==369 || myArray[i][1]==370 || myArray[i][1]==371 || myArray[i][1]==372 || myArray[i][1]==373 || myArray[i][1]==374 || myArray[i][1]==375 || myArray[i][1]==376 || myArray[i][1]==377 || myArray[i][1]==378 || myArray[i][1]==379 || myArray[i][1]==380 || myArray[i][1]==381 || myArray[i][1]==382 || myArray[i][1]==383 || myArray[i][1]==384 || myArray[i][1]==385 || myArray[i][1]==386 || myArray[i][1]==391 || myArray[i][1]==392 || myArray[i][1]==393 || myArray[i][1]==394 || myArray[i][1]==395 || myArray[i][1]==396 || myArray[i][1]==397 || myArray[i][1]==398 || myArray[i][1]==403 || myArray[i][1]==404 || myArray[i][1]==405 || myArray[i][1]==406 || myArray[i][1]==407 || myArray[i][1]==408 || myArray[i][1]==409 || myArray[i][1]==410 || myArray[i][1]==411 || myArray[i][1]==416 || myArray[i][1]==417 || myArray[i][1]==429 || myArray[i][1]==546 || myArray[i][1]==547 || myArray[i][1]==548 || myArray[i][1]==549 || myArray[i][1]==559 || myArray[i][1]==567 || myArray[i][1]==568 || myArray[i][1]==575 || myArray[i][1]==576 || myArray[i][1]==577 || myArray[i][1]==578 || myArray[i][1]==579 || myArray[i][1]==586 || myArray[i][1]==587 || myArray[i][1]==588 || myArray[i][1]==589 || myArray[i][1]==641 || myArray[i][1]==642 || myArray[i][1]==647 || myArray[i][1]==648 || myArray[i][1]==649 || myArray[i][1]==650 || myArray[i][1]==651 || myArray[i][1]==656 || myArray[i][1]==657 || myArray[i][1]==658 || myArray[i][1]==669 || myArray[i][1]==675 || myArray[i][1]==676 || myArray[i][1]==677 || myArray[i][1]==678 || myArray[i][1]==679 || myArray[i][1]==686 || myArray[i][1]==687 || myArray[i][1]==688 || myArray[i][1]==692 || myArray[i][1]==693 || myArray[i][1]==694 || myArray[i][1]==695 || myArray[i][1]==700 || myArray[i][1]==701 || myArray[i][1]==709 || myArray[i][1]==717 || myArray[i][1]==762) ){
	
	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}	  

	//--------------------------------------------活動限定---------------------------------------------	
	//活動限定(三星)	
	if((document.getElementById("item3").checked === true) && (document.getElementById("star3").checked === true)){	  
	if(j==1 && (myArray[i][1]==49 || myArray[i][1]==50 || myArray[i][1]==59 || myArray[i][1]==68 || myArray[i][1]==76 || myArray[i][1]==78 || myArray[i][1]==84 || myArray[i][1]==109 || myArray[i][1]==162 || myArray[i][1]==163 || myArray[i][1]==170 || myArray[i][1]==171 || myArray[i][1]==215 || myArray[i][1]==229 || myArray[i][1]==260 || myArray[i][1]==280 || myArray[i][1]==294 || myArray[i][1]==298 || myArray[i][1]==311 || myArray[i][1]==327 || myArray[i][1]==346 || myArray[i][1]==349 || myArray[i][1]==389 || myArray[i][1]==414 || myArray[i][1]==425 || myArray[i][1]==426 || myArray[i][1]==556 || myArray[i][1]==557 || myArray[i][1]==558 || myArray[i][1]==564 || myArray[i][1]==573 || myArray[i][1]==592 || myArray[i][1]==645 || myArray[i][1]==654 || myArray[i][1]==664 || myArray[i][1]==668 || myArray[i][1]==682 || myArray[i][1]==685 || myArray[i][1]==698 || myArray[i][1]==706 || myArray[i][1]==715) ){		  
	

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}	  
	  
	//活動限定(四星)	  
	if((document.getElementById("item3").checked === true) && (document.getElementById("star4").checked === true)){	 
    if(j==1 && (myArray[i][1]==36 || myArray[i][1]==43 || myArray[i][1]==51 || myArray[i][1]==60 || myArray[i][1]==69 || myArray[i][1]==77 || myArray[i][1]==81 || myArray[i][1]==85 || myArray[i][1]==99 || myArray[i][1]==100 || myArray[i][1]==101 || myArray[i][1]==102 || myArray[i][1]==103 || myArray[i][1]==104 || myArray[i][1]==105 || myArray[i][1]==106 || myArray[i][1]==107 || myArray[i][1]==108 || myArray[i][1]==110 || myArray[i][1]==158 || myArray[i][1]==159 || myArray[i][1]==160 || myArray[i][1]==161 || myArray[i][1]==168 || myArray[i][1]==169 || myArray[i][1]==172 || myArray[i][1]==173 || myArray[i][1]==174 || myArray[i][1]==214 || myArray[i][1]==228 || myArray[i][1]==259 || myArray[i][1]==276 || myArray[i][1]==279 || myArray[i][1]==293 || myArray[i][1]==297 || myArray[i][1]==310 || myArray[i][1]==312 || myArray[i][1]==313 || myArray[i][1]==326 || myArray[i][1]==345 || myArray[i][1]==348 || myArray[i][1]==360 || myArray[i][1]==361 || myArray[i][1]==362 || myArray[i][1]==363 || myArray[i][1]==364 || myArray[i][1]==365 || myArray[i][1]==366 || myArray[i][1]==388 || myArray[i][1]==399 || myArray[i][1]==413 || myArray[i][1]==415 || myArray[i][1]==423 || myArray[i][1]==424 || myArray[i][1]==553 || myArray[i][1]==554 || myArray[i][1]==555 || myArray[i][1]==563 || myArray[i][1]==571 || myArray[i][1]==572 || myArray[i][1]==583 || myArray[i][1]==584 || myArray[i][1]==591 || myArray[i][1]==593 || myArray[i][1]==594 || myArray[i][1]==595 || myArray[i][1]==596 || myArray[i][1]==597 || myArray[i][1]==598 || myArray[i][1]==599 || myArray[i][1]==600 || myArray[i][1]==601 || myArray[i][1]==602 || myArray[i][1]==603 || myArray[i][1]==604 || myArray[i][1]==605 || myArray[i][1]==606 || myArray[i][1]==607 || myArray[i][1]==608 || myArray[i][1]==609 || myArray[i][1]==610 || myArray[i][1]==611 || myArray[i][1]==612 || myArray[i][1]==613 || myArray[i][1]==614 || myArray[i][1]==615 || myArray[i][1]==616 || myArray[i][1]==617 || myArray[i][1]==618 || myArray[i][1]==619 || myArray[i][1]==620 || myArray[i][1]==621 || myArray[i][1]==622 || myArray[i][1]==623 || myArray[i][1]==624 || myArray[i][1]==625 || myArray[i][1]==626 || myArray[i][1]==627 || myArray[i][1]==628 || myArray[i][1]==629 || myArray[i][1]==630 || myArray[i][1]==631 || myArray[i][1]==632 || myArray[i][1]==633 || myArray[i][1]==634 || myArray[i][1]==635 || myArray[i][1]==636 || myArray[i][1]==637 || myArray[i][1]==638 || myArray[i][1]==639 || myArray[i][1]==640 || myArray[i][1]==644 || myArray[i][1]==653 || myArray[i][1]==659 || myArray[i][1]==663 || myArray[i][1]==665 || myArray[i][1]==667 || myArray[i][1]==670 || myArray[i][1]==671 || myArray[i][1]==672 || myArray[i][1]==673 || myArray[i][1]==681 || myArray[i][1]==684 || myArray[i][1]==689 || myArray[i][1]==690 || myArray[i][1]==697 || myArray[i][1]==702 || myArray[i][1]==703 || myArray[i][1]==705 || myArray[i][1]==707 || myArray[i][1]==710 || myArray[i][1]==712 || myArray[i][1]==714 || myArray[i][1]==763) ){

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}		
		
	//活動限定(五星)	  
	if((document.getElementById("item3").checked === true) && (document.getElementById("star5").checked === true)){
	if(j==1 && (myArray[i][1]==41 || myArray[i][1]==44 || myArray[i][1]==45 || myArray[i][1]==52 || myArray[i][1]==53 || myArray[i][1]==54 || myArray[i][1]==61 || myArray[i][1]==62 || myArray[i][1]==70 || myArray[i][1]==71 || myArray[i][1]==79 || myArray[i][1]==80 || myArray[i][1]==82 || myArray[i][1]==83 || myArray[i][1]==86 || myArray[i][1]==111 || myArray[i][1]==112 || myArray[i][1]==154 || myArray[i][1]==155 || myArray[i][1]==156 || myArray[i][1]==157 || myArray[i][1]==165 || myArray[i][1]==166 || myArray[i][1]==167 || myArray[i][1]==178 || myArray[i][1]==179 || myArray[i][1]==180 || myArray[i][1]==181 || myArray[i][1]==189 || myArray[i][1]==211 || myArray[i][1]==212 || myArray[i][1]==213 || myArray[i][1]==226 || myArray[i][1]==227 || myArray[i][1]==240 || myArray[i][1]==241 || myArray[i][1]==242 || myArray[i][1]==258 || myArray[i][1]==261 || myArray[i][1]==262 || myArray[i][1]==277 || myArray[i][1]==278 || myArray[i][1]==291 || myArray[i][1]==292 || myArray[i][1]==295 || myArray[i][1]==296 || myArray[i][1]==309 || myArray[i][1]==325 || myArray[i][1]==328 || myArray[i][1]==329 || myArray[i][1]==330 || myArray[i][1]==344 || myArray[i][1]==347 || myArray[i][1]==387 || myArray[i][1]==390 || myArray[i][1]==412 || myArray[i][1]==421 || myArray[i][1]==422 || myArray[i][1]==427 || myArray[i][1]==428 || myArray[i][1]==550 || myArray[i][1]==551 || myArray[i][1]==552 || myArray[i][1]==560 || myArray[i][1]==561 || myArray[i][1]==562 || myArray[i][1]==569 || myArray[i][1]==570 || myArray[i][1]==590 || myArray[i][1]==643 || myArray[i][1]==646 || myArray[i][1]==652 || myArray[i][1]==655 || myArray[i][1]==660 || myArray[i][1]==661 || myArray[i][1]==662 || myArray[i][1]==666 || myArray[i][1]==680 || myArray[i][1]==683 || myArray[i][1]==696 || myArray[i][1]==699 || myArray[i][1]==704 || myArray[i][1]==711 || myArray[i][1]==713 || myArray[i][1]==716) ){		

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}		
		
	//--------------------------------------------友抽限定---------------------------------------------	
	//友抽限定(一星)		
	if((document.getElementById("item4").checked === true) && (document.getElementById("star1").checked === true)){
	if(j==1 && (myArray[i][1]==1 || myArray[i][1]==2 || myArray[i][1]==3 || myArray[i][1]==4 || myArray[i][1]==5) ){  

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}		

	//友抽限定(二星)
	if((document.getElementById("item4").checked === true) && (document.getElementById("star2").checked === true)){	  
	if(j==1 && (myArray[i][1]==6 || myArray[i][1]==7 || myArray[i][1]==8 || myArray[i][1]==9 || myArray[i][1]==10) ){

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}						
	  
	//友抽限定(三星)
	if((document.getElementById("item4").checked === true) && (document.getElementById("star3").checked === true)){		
	if(j==1 && (myArray[i][1]==11 || myArray[i][1]==12 || myArray[i][1]==13 || myArray[i][1]==14 || myArray[i][1]==15 || myArray[i][1]==16 || myArray[i][1]==17 || myArray[i][1]==18 || myArray[i][1]==19 || myArray[i][1]==20 || myArray[i][1]==37 || myArray[i][1]==42 || myArray[i][1]==46 || myArray[i][1]==55 || myArray[i][1]==65 || myArray[i][1]==72 || myArray[i][1]==90 || myArray[i][1]==92 || myArray[i][1]==93 || myArray[i][1]==94 || myArray[i][1]==95 || myArray[i][1]==96 || myArray[i][1]==177 || myArray[i][1]==187) ){	

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}		

	  
	//--------------------------------------------強化EXP ---------------------------------------------	
	//強化EXP(三星)	  
	if((document.getElementById("item5").checked === true) && (document.getElementById("star3").checked === true)){	  
	if(j==1 && (myArray[i][1]==63 || myArray[i][1]==88 || myArray[i][1]==164 || myArray[i][1]==190 || myArray[i][1]==314 || myArray[i][1]==566) ){

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}		
		
	//強化EXP(四星)
	if((document.getElementById("item5").checked === true) && (document.getElementById("star4").checked === true)){	  
	if(j==1 && (myArray[i][1]==64 || myArray[i][1]==87 || myArray[i][1]==113 || myArray[i][1]==114 || myArray[i][1]==115 || myArray[i][1]==116 || myArray[i][1]==117 || myArray[i][1]==118 || myArray[i][1]==119 || myArray[i][1]==120 || myArray[i][1]==121 || myArray[i][1]==122 || myArray[i][1]==123 || myArray[i][1]==124 || myArray[i][1]==125 || myArray[i][1]==126 || myArray[i][1]==127 || myArray[i][1]==128 || myArray[i][1]==129 || myArray[i][1]==130 || myArray[i][1]==131 || myArray[i][1]==132 || myArray[i][1]==133 || myArray[i][1]==134 || myArray[i][1]==135 || myArray[i][1]==136 || myArray[i][1]==137 || myArray[i][1]==138 || myArray[i][1]==139 || myArray[i][1]==140 || myArray[i][1]==141 || myArray[i][1]==142 || myArray[i][1]==143 || myArray[i][1]==144 || myArray[i][1]==145 || myArray[i][1]==146 || myArray[i][1]==147 || myArray[i][1]==148 || myArray[i][1]==149 || myArray[i][1]==150 || myArray[i][1]==151 || myArray[i][1]==152 || myArray[i][1]==153 || myArray[i][1]==430 || myArray[i][1]==431 || myArray[i][1]==432 || myArray[i][1]==433 || myArray[i][1]==434 || myArray[i][1]==435 || myArray[i][1]==436 || myArray[i][1]==437 || myArray[i][1]==438 || myArray[i][1]==439 || myArray[i][1]==440 || myArray[i][1]==441 || myArray[i][1]==442 || myArray[i][1]==443 || myArray[i][1]==444 || myArray[i][1]==445 || myArray[i][1]==446 || myArray[i][1]==447 || myArray[i][1]==448 || myArray[i][1]==449 || myArray[i][1]==450 || myArray[i][1]==451 || myArray[i][1]==452 || myArray[i][1]==453 || myArray[i][1]==454 || myArray[i][1]==455 || myArray[i][1]==456 || myArray[i][1]==457 || myArray[i][1]==458 || myArray[i][1]==459 || myArray[i][1]==460 || myArray[i][1]==461 || myArray[i][1]==462 || myArray[i][1]==463 || myArray[i][1]==464 || myArray[i][1]==465 || myArray[i][1]==466 || myArray[i][1]==467 || myArray[i][1]==468 || myArray[i][1]==469 || myArray[i][1]==470 || myArray[i][1]==471 || myArray[i][1]==472 || myArray[i][1]==473 || myArray[i][1]==474 || myArray[i][1]==475 || myArray[i][1]==476 || myArray[i][1]==477 || myArray[i][1]==478 || myArray[i][1]==479 || myArray[i][1]==480 || myArray[i][1]==481 || myArray[i][1]==482 || myArray[i][1]==483 || myArray[i][1]==484 || myArray[i][1]==485 || myArray[i][1]==486 || myArray[i][1]==487 || myArray[i][1]==488 || myArray[i][1]==489 || myArray[i][1]==490 || myArray[i][1]==491 || myArray[i][1]==492 || myArray[i][1]==493 || myArray[i][1]==494 || myArray[i][1]==495 || myArray[i][1]==496 || myArray[i][1]==497 || myArray[i][1]==498 || myArray[i][1]==499 || myArray[i][1]==500 || myArray[i][1]==501 || myArray[i][1]==502 || myArray[i][1]==503 || myArray[i][1]==504 || myArray[i][1]==505 || myArray[i][1]==506 || myArray[i][1]==507 || myArray[i][1]==508 || myArray[i][1]==509 || myArray[i][1]==510 || myArray[i][1]==511 || myArray[i][1]==512 || myArray[i][1]==513 || myArray[i][1]==514 || myArray[i][1]==515 || myArray[i][1]==516 || myArray[i][1]==517 || myArray[i][1]==518 || myArray[i][1]==519 || myArray[i][1]==520 || myArray[i][1]==521 || myArray[i][1]==522 || myArray[i][1]==523 || myArray[i][1]==524 || myArray[i][1]==525 || myArray[i][1]==526 || myArray[i][1]==527 || myArray[i][1]==528 || myArray[i][1]==529 || myArray[i][1]==530 || myArray[i][1]==531 || myArray[i][1]==532 || myArray[i][1]==533 || myArray[i][1]==534 || myArray[i][1]==535 || myArray[i][1]==536 || myArray[i][1]==537 || myArray[i][1]==538 || myArray[i][1]==539 || myArray[i][1]==540 || myArray[i][1]==541 || myArray[i][1]==542 || myArray[i][1]==543 || myArray[i][1]==544 || myArray[i][1]==565 || myArray[i][1]==574 || myArray[i][1]==708 || myArray[i][1]==718 || myArray[i][1]==719 || myArray[i][1]==720 || myArray[i][1]==721 || myArray[i][1]==722 || myArray[i][1]==723 || myArray[i][1]==724 || myArray[i][1]==725 || myArray[i][1]==726 || myArray[i][1]==727 || myArray[i][1]==728 || myArray[i][1]==729 || myArray[i][1]==730 || myArray[i][1]==731 || myArray[i][1]==732 || myArray[i][1]==733 || myArray[i][1]==734 || myArray[i][1]==735 || myArray[i][1]==736 || myArray[i][1]==737 || myArray[i][1]==738 || myArray[i][1]==739 || myArray[i][1]==740 || myArray[i][1]==741 || myArray[i][1]==742 || myArray[i][1]==743 || myArray[i][1]==744 || myArray[i][1]==745 || myArray[i][1]==746 || myArray[i][1]==747 || myArray[i][1]==748 || myArray[i][1]==749 || myArray[i][1]==750 || myArray[i][1]==751 || myArray[i][1]==752 || myArray[i][1]==753 || myArray[i][1]==754 || myArray[i][1]==755 || myArray[i][1]==756 || myArray[i][1]==757 || myArray[i][1]==758 || myArray[i][1]==759 || myArray[i][1]==760 || myArray[i][1]==761) ){

	table.insertRow();
	for(var k=0;k<(myArray[i].length)-7;k++) {			 
	  table.rows[m].insertCell(k);	 
	  if((k !== 0) && (k == 1 || k == 2 || k == 3)){
	  table.rows[m].cells[k].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + myArray[i][k] + '</a>';}
	  if(k == 0){
	    table.rows[m].cells[0].innerHTML = '<a href="Craft_Essence_No.html' + '#' + myArray[i][1] + '">' + "<img src='images/faces/Craft Essence_"+myArray[i][1]+".png"+"' width='65px' height='75px'>" + "</a>";}
	} 
	m=m+1;
	}
	}			
	  		
		
		
		
  }
}

		

}