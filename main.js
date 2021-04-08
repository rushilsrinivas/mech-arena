var images=["dad.jpeg","mom.jpeg","sister.jpeg","grandmom.webp"];
var member=["Dad","Mom","sister","grandmother"];
var i=0;
function change(){document.getElementById("dad").src=images[i];
document.getElementById("family_member").innerHTML=member[i];
                 i++;
                 if(i==4)
                 {
                   i=0;
                 }}