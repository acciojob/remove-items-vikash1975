
let select=document.getElementById("colorSelect");
let btn=document.getElementById("removebtn");

btn.addEventListener("click",function(){
let selectedIndex=select.selectedIndex;

	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	}
	});
