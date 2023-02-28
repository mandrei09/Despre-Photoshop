var ulWindows=[
    "<li> <b>PROCESOR</b>: Intel® Core 2 sau AMD Athlon® 64; Procesor de 2 GHz sau mai mare. </li>",
    "<li> <b>SISTEM DE OPERARE</b>: Microsoft Windows 7 cu Service Pack 1, Windows 8.1 sau Windows 10. </li>",
    "<li> <b>MEMORIE RAM</b>: 2 GB sau mai mult RAM. </li>",
    "<li> <b>STOCARE</b>: 3,1 GB spațiu disponibil pe hard disk pentru instalarea pe 32, respectiv 64 de biți, + spațiul suplimentar necesar instalarii. </li>",
    "<li> <b>PLACĂ VIDEO</b>: Afișaj 1024 x 768 cu culoare pe 16 biți și 512 MB sau mai mult de VRAM dedicat.</li>",
    "<li> <b>CONEXIUNE</b>: Conexiunea la internet este necesară pentru activarea software-ului, validarea abonamentelor.</li>"
]

var ulMac=[
    "<li> <b>PROCESOR</b>: Procesor Intel multicore cu suport pe 64 de biți. </li>",
    "<li> <b>SISTEM DE OPERARE</b>: MacOS versiunea 10.13 (High Sierra), MacOS versiunea 10.12 (Sierra) sau Mac OS X versiunea 10.11</li>",
    "<li> <b>MEMORIE RAM</b>: 2 GB sau mai mult RAM. </li>",
    "<li> <b>STOCARE</b>: 4 GB sau mai mult spațiu disponibil pe hard disk + spațiul liber suplimentar necesar instalarii.</li>",
    "<li> <b>PLACĂ VIDEO</b>: Afișaj 1024 x 768 cu culoare pe 16 biți și 512 MB sau mai mult de VRAM dedicat.</li>",
    "<li> <b>CONEXIUNE</b>: Conexiunea la internet este necesară pentru activarea software-ului, validarea abonamentelor. </li>"
]

var butoane=document.getElementsByTagName("input");
var t;
for (buton of butoane){
    buton.onclick=function(){
        const div1=document.querySelector("#lista1");
        const div2=document.querySelector("#lista2");
        var ul=document.createElement("ul");
        this.style.display="none";
        if(this.id=="buton1"){
            var indexWindows=0;
            ul.innerHTML="";
            t=setInterval(function(){
                ul.innerHTML=ul.innerHTML+ulWindows[indexWindows];
                indexWindows++;
                if(indexWindows<ulWindows.length)
                    div1.appendChild(ul);
                else
                    clearInterval(t);
            },500);
        }
        else{
            var indexMac=0;
            ul.innerHTML="";
            t=setInterval(function(){
                ul.innerHTML=ul.innerHTML+ulMac[indexMac];
                indexMac++;
                if(indexMac<ulMac.length)
                    div2.appendChild(ul);
                else
                    clearInterval(t);
            },500);
        }
    }
}

var images=document.getElementsByClassName("grid-image");
for(image of images){
    image.onclick=function(){
        this.remove();
    }
}