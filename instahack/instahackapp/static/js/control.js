var Login = document.querySelector(".btn");
var id = document.getElementById("username");

id.value = "Akash";

id.addEventListener("change",() => {
	if (id.value == ""){
	    Login.classList.remove("btn");
		Login.classList.add("disabled");
	}else{
		Login.classList.remove("disabled");
		Login.classList.add("btn");
	};
});

function openid(){
	if !(Login.classList.contains("disabled")){
		window.open(`https://www.instagram.com/${id.value}`);
	} else{
		return
	};
};

window.addEventListener("load", () =>{
	Login.classList.remove("btn");
	Login.classList.add("disabled");
});