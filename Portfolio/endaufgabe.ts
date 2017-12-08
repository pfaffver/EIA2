function main() : void{
    
    kategorien("Biografie");
    
    document.getElementById("work").addEventListener('click',function(){
           kategorien ("Work&Travel");
        });
        
    document.getElementById("beruf").addEventListener('click',function(){
           kategorien ("Berufslaufbahn");
        });
        
    document.getElementById("bio").addEventListener('click',function(){
           kategorien ("Biografie");
        });
}


var arrayNamen :string[] = ["Biografie","Berufslaufbahn","Work&Travel"];


function kategorien (name :string): void{
    for(var i = 0; i< arrayNamen.length ;i++){
        if(arrayNamen[i]===name){
        document.getElementById(arrayNamen[i]).style.display ="block";
        }
        
        else {
            document.getElementById(arrayNamen[i]).style.display ="none";
        }
    }
}

document.addEventListener('DOMContentLoaded', main);