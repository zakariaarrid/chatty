var aux="";
var aux1="";
var barreright='';
var barreleft='';
$("#btn-chat").click(function(){
  aux=document.getElementById("btn-input").value;
  var input = document.getElementById("btn-input").value;  
  barreright='<li class="right clearfix"><span class="chat-img pull-right">';
  barreright+='<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />';
  barreright+='</span><div class="chat-body clearfix"><div class="header">';
  barreright+='<small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small><strong class="pull-right primary-font">anonymous</strong></div>';
  barreright+='<p>'+aux+'</p></div></li>'; 
  $("ul").append(barreright);
/*************************************************/  
  aux1=output(input);  
  barreleft='<li class="left clearfix"><span class="chat-img pull-left">';
  barreleft+='<img src="assets/img/actor2.jpg" alt="User Avatar" class="img-circle" style="width:50px;height:50px;"/></span>';
  barreleft+='<div class="chat-body clearfix"><div class="header">';
  barreleft+='<strong class="primary-font">Admin</strong><small class="pull-right text-muted"><span class="glyphicon glyphicon-time"></span>12 mins ago</small>';
  barreleft+='</div><p>'+aux1+'</p></div></li>';
  setTimeout(function () {
  $("ul").append(barreleft);
  barreleft="";
  }, 3000);   
  //setTimeout(, 3000);   
  barreright="";
  
}); 

var trigger = [
	["hi","hey","hello"]
	/*["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"]*/
];
var reply = [
	["Hi","Hey","Hello"]
	/*["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["Kani Veri", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye", "Goodbye", "See you later"]*/
];
//var alternative = ["Haha...", "Eh..."];
var alternative = ["Sorry!", "Sorry!"];
function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	return product;
	
	
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
function functionx(){    
    document.getElementById("chat1").style.visibility = "hidden";
}
