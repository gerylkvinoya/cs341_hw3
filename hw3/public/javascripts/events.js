eventHandler = function( event ) {
	if ($("textarea").val().toLowerCase().indexOf('vegan') > -1) {
	    alert("WARNING! Cheesecakes contain dairy.");
	}
	
	//hide text
      $("table").hide();
      $("textarea").hide();
      $("#order").hide();
      $("#text1").hide();
	
	//change text to Thank You! Your order has been places
      $("#text2").text("Thank You! Your order has been placed.");
}
$(function() {
    $("#order").click(eventHandler);
    $("#jan").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });     
        $("#feb").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });   
        $("#mar").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });     
        $("#apr").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });    
        $("#may").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });      
        $("#jun").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });     
        $("#jul").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });     
        $("#aug").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });      
        $("#sep").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });  
        $("#oct").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });      
        $("#nov").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });    
        $("#dec").click(function(){	  
        $(".dropbtn").text($(this).text());	  
        });
});