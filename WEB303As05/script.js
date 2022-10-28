/*
Nikhil Bharatbhai Bhingradiya
    Assignment 05
    0778098
*/

$(document).ready(function () {
    class ContentItem{
        uniqueId;
         name;
        description;
        category;
    
    constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
            }
    
    updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
                }
    
            }
            toString(){
                return $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
                 </div>`);
                    }
            }
            
            let content = [
            {
                "uniqueId": 000,
                "name": "Nikhil Bhingradiya",
                "description": "Web Devloper",
                "category": "Ownwer"
            },
            {
                "uniqueId": 001,
                "name": "Dipen Hirpara",
                "description": "Head manager of the company",
                "category": "Head"
            },
            {
                "uniqueId": 002,
                "name": "Parth Kachriya",
                "description": "Management Department Head",
                "category": "Manager"
            },
             {
                "uniqueId": 004,
                "name": "Axit Patel",
                "description": "Frond end Devloper",
                "category": "Head of the Devloper"
            },
            {
                "uniqueId": 004,
                "name": "Rushik Patel",
                "description": "Frond end Devloper",
                "category": "Junior Head of the Devloper"
            }
        
            ];
        
            $.each(content, function(key, val){
              $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
            </div>`);
            });


           
            $('.content-item-wrapper').css('margin', 'auto');  
            $('.content-item-wrapper').css('border', 'double 10px red');
            $('.content-item-wrapper').css('width', '50%');
            $('.content-item-wrapper').css('padding', '30px');
            $('.content-item-wrapper').css('margin-bottom', '30px');
            $('.content-item-wrapper').css('marging-top', '30px');
            
        
                    

});


