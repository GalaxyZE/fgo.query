// JavaScript Document

function check () {

var demo=document.getElementById("demo");	
demo.innerHTML="";	
var docFragments = document.createDocumentFragment();
	

//--------------------------------------print data---------------------------------------------------
function print_data () {
var node=document.createElement("tr");	
node.innerHTML="<td><a href='Craft_Essence_No.html" + "#" +  myArray[i][1]  + "'>" + myArray[i][1] + "</a></td>"+ "<td><a href='Craft_Essence_No.html" + "#" +  myArray[i][1]  + "'><img src='images/faces/" + myArray[i][0] + ".png' width='65px' height='75px'></a></td>" + "<td><a href='Craft_Essence_No.html" + "#" +  myArray[i][1]  + "'>" + myArray[i][2] + "</a></td>" + "<td><a href='Craft_Essence_No.html" + "#" +  myArray[i][1]  + "'>" + myArray[i][3] + "</a></td>";
docFragments.appendChild(node);
}

//----------------------------------------小迴圈---------------------------------------------------
function loop_data (myArray_item) {
	for(var j=(myArray_item.length)-1;j>=0;j--) {
	if(myArray[i][1] == myArray_item[j]) {
	print_data();break;}}
}

for(var i=(myArray.length)-1;i>=0;i--){

//--------------------------------------------星星判斷---------------------------------------------
//一星
if(document.getElementById("star1").checked === false){
if(myArray[i][2] == "★"){
continue;}}
//二星
if(document.getElementById("star2").checked === false){
if(myArray[i][2] == "★★"){
continue;}}
//三星
if(document.getElementById("star3").checked === false){
if(myArray[i][2] == "★★★"){
continue;}}
//四星
if(document.getElementById("star4").checked === false){
if(myArray[i][2] == "★★★★"){
continue;}}
//五星
if(document.getElementById("star5").checked === false){
if(myArray[i][2] == "★★★★★"){
continue;}}	
//--------------------------------------------一般常駐---------------------------------------------	
if(document.getElementById("item1").checked === true) {
loop_data(myArray_item1);
}
//--------------------------------------------絆禮裝---------------------------------------------		  
if(document.getElementById("item2").checked === true) {
loop_data(myArray_item2);
}
//--------------------------------------------活動限定---------------------------------------------		
if(document.getElementById("item3").checked === true) {  
loop_data(myArray_item3);
}
//--------------------------------------------友抽限定---------------------------------------------		
if(document.getElementById("item4").checked === true) {
loop_data(myArray_item4);
}
//--------------------------------------------強化EXP ---------------------------------------------	  
if(document.getElementById("item5").checked === true) {	  
loop_data(myArray_item5);
}


}//迴圈結束
demo.appendChild(docFragments);




}//函數結束