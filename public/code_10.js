//temporary HINT
setTimeout('$("section#info").hide()',3000);

$(document).ready(function (){
	
	//function for GET method
	$('#getButton').bind('click', function(){
		
		let userData = {
			userName: $('div#wrap form #name').val(),
			userSurname:$('div#wrap form #surname').val(),
			userAge:$('div#wrap form input#age').val(),
			userLocation:$('div#wrap form input#location').val()
		};
							
		if(userData.userName == ""||userData.userSurname == ""||userData.userAge == null|| userData.userLocation == ""){
			$('div#wrap+section').removeClass('hide');
			console.log("The form was not filled out.");
			return false;
		}else{
			$('div#wrap+section').addClass('hide');
		}	
				
		/*userData.userName = $('div#wrap form #name').val() + '.ValidatedByGET';
		userData.userSurname = $('div#wrap form input#surname').val() + '.ValidatedByGET';
		userData.userAge = $('div#wrap form input#age').val() + '.ValidatedByGET';
		userData.userLocation = $('div#wrap form input#location').val() + '.ValidatedByGET';*/
		
		$.ajax({
			type:'GET',
			contentType: 'application/json',
			url: 'http://localhost:3000/userGet',
			data: userData,
			success: function(data, status, jqXHR){
				$('div#wrap form #getButton').val('Data was sent');
				setTimeout("$('div#wrap form #getButton').val('Get')", 1000);
				$('div#wrap form #name').val('');
				$('div#wrap form #surname').val('');
				$('div#wrap form #age').val('');
				$('div#wrap form #location').val('');
				console.log("jqXHR статус: " + jqXHR.status + " " + jqXHR.statusText)},
			error: function(jqXHR, status) {
				$('div#wrap+section').removeClass('hide');
				$('div#wrap+section h4').html(`Happened the ${status}, status: ${jqXHR.status}`);
				console.log(`Happened the ${status}, status: ${jqXHR.status}`)} 
		});
		
		//This method receives information from the server
		$.get('http://localhost:3000/userGet', function(data){
			$('#receivedInfo ul .one').html(userData.userName);
			$('#receivedInfo ul .two').html(userData.userSurname);
			$('#receivedInfo ul .three').html(userData.userAge);
			$('#receivedInfo ul .four').html(userData.userLocation);
			$('#receivedInfo').css("background-color", "rgba(151, 112, 53, 0.2)");
			$('#receivedInfo').css("box-shadow", "0 0 5px 5px rgba(151, 112, 53, 0.2)");
		});	
	});
	
	
	//function for POST method
	$('#postButton').bind('click', function(){
		
		let userData = {
			userName: $('div#wrap form #name').val(),
			userSurname:$('div#wrap form #surname').val(),
			userAge:$('div#wrap form input#age').val(),
			userLocation:$('div#wrap form input#location').val()
		};
							
		if(userData.userName == ""||userData.userSurname == ""||userData.userAge == null|| userData.userLocation == ""){
			$('div#wrap+section').removeClass('hide');
			console.log("The form was not filled out.");
			return false;
		}else{
			$('div#wrap+section').addClass('hide');
		}	
				
		userData.userName = $('div#wrap form #name').val() + '.ValidatedByPOST';
		userData.userSurname = $('div#wrap form input#surname').val() + '.ValidatedByPOST';
		userData.userAge = $('div#wrap form input#age').val() + '.ValidatedByPOST';
		userData.userLocation = $('div#wrap form input#location').val() + '.ValidatedByPOST';
		
		$.ajax({
			type:'POST',
			data: JSON.stringify({userData}), 
			contentType: 'application/json',
			url: 'http://localhost:3000/userPost',
			success: function(data, status, jqXHR){
				$('div#wrap form #postButton').val('Data was sent');
				setTimeout("$('div#wrap form #postButton').val('Post')", 1000);
				$('div#wrap form #name').val('');
				$('div#wrap form #surname').val('');
				$('div#wrap form #age').val('');
				$('div#wrap form #location').val('');
				console.log("jqXHR статус: " + jqXHR.status + " " + jqXHR.statusText)},
			error: function(jqXHR, status) {
				$('div#wrap+section').removeClass('hide');
				$('div#wrap+section h4').html(`Happened the ${status}, status: ${jqXHR.status}`);
				console.log(`Happened the ${status}, status: ${jqXHR.status}`)} 
		});
		
		//This method receives information from the server
		$.post('http://localhost:3000/userPost', function(data){
			$('#receivedInfo ul .one').html(userData.userName);
			$('#receivedInfo ul .two').html(userData.userSurname);
			$('#receivedInfo ul .three').html(userData.userAge);
			$('#receivedInfo ul .four').html(userData.userLocation);
			$('#receivedInfo').css("background-color", "rgba(151, 112, 53, 0.2)");
			$('#receivedInfo').css("box-shadow", "0 0 5px 5px rgba(151, 112, 53, 0.2)");
		});
	});
	
	//check for NAME field		
	$('div#wrap form input#name').bind('blur', function(){
		if(isNaN(this.value)){
			$('div#wrap form input#surname').focus();
			$('div#wrap form input[type=text]:nth-child(1)').css('background-color', '#e9e7db');
			$('div#wrap form label#message1').addClass('hide');
			$('div#wrap form input#getButton').removeClass('hide');
			$('div#wrap form input#postButton').removeClass('hide');
		}else{
			$('div#wrap form input#name').focus();
			$('div#wrap form input[type=text]:nth-child(1)').css('background-color', '#eae100');
			$('div#wrap form label#message1').removeClass('hide');
			$('div#wrap form input#getButton').addClass('hide');
			$('div#wrap form input#postButton').addClass('hide');
		}
	});
	
	//check for SURNAME field		
	$('div#wrap form input#surname').bind('blur', function(){
		if(isNaN(this.value)){
			$('div#wrap form input#age').focus();
			$('div#wrap form input[type=text]:nth-child(3)').css('background-color', '#e9e7db');
			$('div#wrap form label#message2').addClass('hide');
			$('div#wrap form input#getButton').removeClass('hide');
			$('div#wrap form input#postButton').removeClass('hide');
		}else{
			$('div#wrap form input#surname').focus();
			$('div#wrap form input[type=text]:nth-child(3)').css('background-color', '#eae100');
			$('div#wrap form label#message2').removeClass('hide');
			$('div#wrap form input#getButton').addClass('hide');
			$('div#wrap form input#postButton').addClass('hide');
		}
	});
	
	//check for AGE field
	$('div#wrap form input#age').bind('blur', function(){
		if(isNaN(this.value) || this.value > 100 || this.value < 1 || this.value == ""){
			$('div#wrap form input#age').focus();
			$('div#wrap form input[type=text]:nth-child(5)').css('background-color', '#eae100');
			$('div#wrap form label#message3').removeClass('hide');
			$('div#wrap form input#getButton').addClass('hide');
			$('div#wrap form input#postButton').addClass('hide');
		}else{
			$('div#wrap form input#location').focus();
			$('div#wrap form input[type=text]:nth-child(5)').css('background-color', '#e9e7db');
			$('div#wrap form label#message3').addClass('hide');
			$('div#wrap form input#getButton').removeClass('hide');
			$('div#wrap form input#postButton').removeClass('hide');
		}	
	});
	
	//check for LOCATION field		
	$('div#wrap form input#location').bind('blur', function(){
		if(isNaN(this.value)){
			$('div#wrap form input[type=text]:nth-child(7)').css('background-color', '#e9e7db');
			$('div#wrap form label#message4').addClass('hide');
			$('div#wrap form input#getButton').removeClass('hide');
			$('div#wrap form input#postButton').removeClass('hide');
		}else{
			$('div#wrap form input[type=text]:nth-child(7)').css('background-color', '#eae100');
			$('div#wrap form label#message4').removeClass('hide');
			$('div#wrap form input#getButton').addClass('hide');
			$('div#wrap form input#postButton').addClass('hide');
		}
	});		
});//ready
			