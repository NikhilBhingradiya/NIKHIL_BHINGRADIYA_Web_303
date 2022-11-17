$.ajax({
     url: 'data.json',
     dataType: 'json',
     success: function(data) {
         for (var i=0; i<data.length; i++) {
             var row = $('<tr><td>' + data[i].movie_Id+ '</td><td>' + data[i].Action/Comedy + '</td><td>' + data[i].First_name + '</td><td>' + data[i].Director_name + '</td><td>' + data[i].Last_name + '</td></tr>');
             $('#myTable').append(row);
         }
     },
     error: function(jqXHR, textStatus, errorThrown){
         alert('Error: ' + textStatus + ' - ' + errorThrown);
     }
 });
 $(document).ready(function(){  
            $('#search').keyup(function(){  
                 search_table($(this).val());  
            });  
            function search_table(value){  
                 $('#myTable tr').each(function(){  
                      var found = 'false';  
                      $(this).each(function(){  
                           if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                           {  
                                found = 'true';  
                                $(this).css('bgcolor', 'green'); 
                            $(this).css('color', 'white');
                           }  
                           else{
                               $(this).css('background', 'green'); 
                            $(this).css('color', 'black');
                           }
                      });  
                     
                        
                 });  
            }  
       });  
 
 
 $(document).ready(function(){  
            $('#first').keyup(function(){  
                 search_table($(this).val());  
            });  
            function search_table(value){
                 value='jerry';  
                 $('#myTable tr').each(function(){  
                      var found = 'false';  
                      $(this).each(function(){  
                           if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                           {  
                                found = 'true';  
                                $(this).css('bgcolor', 'green'); 
                            $(this).css('color', 'white');
                           }  
                           else{
                               $(this).css('background', 'white'); 
                            $(this).css('color', 'black');
                           }
                      });  
                     
                        
                 });  
            }  
       });  
 
 