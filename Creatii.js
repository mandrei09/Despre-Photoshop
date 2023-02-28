var aTAG=document.getElementsByClassName("a-uri");
for(a of aTAG){
    a.onclick=function(){
        this.remove();
        if(aTAG.length==0){
            alert("Nu există momentan imagini în această secțiune.");
        }
    }
}
