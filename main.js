var images=["family.jpg",
    "Father.jpg",
    "Mother.jpg",
    "Sister.jpg"];

var names = ["Family",
              "Vikram Kedia",
             "Rinku Kedia",
              "Karisha Kedia"];

 var i = 0;             
 function update(){
    i++;
    var number_of_family_memebers_in_array = 3
    if(i>number_of_family_memebers_in_array){
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_image").src = updatedImage;
    document.getElementById("family_name").innerHTML = updatedName;
 }           
