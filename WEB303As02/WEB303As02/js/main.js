// WEB303 Assignment 2
// Name = Nikhil bhingradiya


$(document).ready(function(){
    
    $("#prospect").click(function(){

      
        $("#content").load("prospect.html", function(responseTxt1, prospect1, xhr){
            if(content1 == "success")
            {
                alert(" loaded successfully");
                $("#content").fadeIn(30);
            }
                
            if(statusTxt1 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });

    });


    $("#convert").click(function(){
        $("#content").load("convert.html", function(responseTxt2, convert1, xhr){
            if(convert2 == "success") {
           alert("content for convert ");
            $("#content").fadeIn(30);
            }
            if(statusTxt2 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });


    $("#retain").click(function(){
        $("#content").load("retain.html", function(responseTxt3, retain1, xhr){
            if(content3 == "success") {
               alert("content retain")
            $("#content").fadeIn(30);
        }
               
            if(statusTxt3 == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
      
    });

});