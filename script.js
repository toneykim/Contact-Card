$(document).ready(function(){

var message;



	$(document).on('click', '.btn', function(){
		var fname= $('input[name="firstname"]').val();
		var lname= $('input[name="lastname"]').val();
		message=$('textarea[name="message"]').val();

		
/*
		console.log(fname);
		console.log(lname);
		console.log(message);
*/


		$('article').append("<div><h1>"+fname+" "+lname+"</h1><p class='descrip'>"+"Click for description!"+"</p><h2>"+message+"</h2><h4>Click to go back to First and Last Name</h4></div>")
	


		return false;

	})



		$(document).on('click', '.descrip', function(){



		$(this).parent().children().css("display","none");


		$(this).parent().children('h2').css("display","block");

		$(this).parent().children('h4').css("display","block");
		

		//return false;

	})

$(document).on('click', 'h4', function(){



		$(this).parent().children().css("display","block");


		$(this).parent().children('h2').css("display","none");

		$(this).parent().children('h4').css("display","none");


		

		

		//return false;

	})






});