document.getElementById("submit").onclick = submit

function submit() {


    var x = document.getElementsByTagName("input")[0].value
    var y = document.getElementsByTagName("input")[1].value


    var regexRes = hasNumbers(x)

    if (y === "12345678" && regexRes === true) {

        document.getElementById("hert").innerHTML = "Welcome WOLF2"

    } else(alert("Wrong Password or Username"))


}

function hasNumbers(x) {
    var regex = /\d/;
    return regex.test(x);
}

function w3_open() {
    document.getElementById("main").style.marginLeft = "10%";
    document.getElementById("mySidebar").style.width = "10%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}
$("#rightside img").click(
    function() {
        $(this).fadeOut(5000);
        $(this).fadeIn(5000);
    }
);

document.getElementById("finish").onclick= finish

function finish() {
	var a = document.getElementsByTagName("input")[2].value
	var b = document.getElementsByTagName("input")[3].value
	var c = document.getElementsByTagName("input")[4].value

	console.log(a)

	var jar = string1(a)
	var ml = br(b)
	var kl = psh(c)
	console.log(a)
	if(!jar && ml && kl){
		alert("Thank you! Your request has been received")
	}
	else if(jar && ml && kl){
		alert("Your name should be without digits")
	}
	else if(!jar && !ml && kl){
		alert("Invalid E-mail adress")
	}
	else if(!jar && ml && !kl){
		alert("You need more than two words in your request")
	}
	else(alert("You done did fucked up son!"))






function string1(a) {
    var jark = /\d/;
    return jark.test(a);
}

function br(b){
	var melk = /\@/;
	return melk.test(b)
}

function psh(c){
	var kelk = /[a-zA-Z]+\s+[a-zA-Z]+/g;
	return kelk.test(c)
}

}










