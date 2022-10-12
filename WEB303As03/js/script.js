function nikhil(){
    $.getJSON( "team.json", function( result ) {    
        $.each( result, function( nikhil, data ) {
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
}

function nikhil(){
    $.ajax({
        url: "team.json",
        beforeSend: function() {
             h1 = `<h1>Loading...</h1>`;
            $("div#team").html(h1);
        },
        error: function(nikhil){
            alert("//////////////////");
        },
        success: function(result){
            setTimeout(() => {
                $("div#team").html("");
                $.each(result, (index, data)=>{
                    $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
                });
            },);
        }
    });
}





$(document).ready(function(){
    nikhil();
    
});