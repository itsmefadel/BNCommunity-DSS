function hitungNilaiSlider(value){
    var nilai;
    if(value==9){nilai=1;}else{
    if(value<9){nilai=9-value;
               if(value==8){
                   
               }
               if(value==7){
                   
               }
               if(value==6){
                   
               }
               if(value==5){
                   
               }
               if(value==4){
                   
               }
               if(value==3){
                   
               }
               if(value==2){
                   
               }
               if(value==1){
                   
               }
               if(value==0){
                   
               }
               }
    else{nilai=value-8;}}
     document.getElementById("nilaiSlider").innerHTML=nilai;
}