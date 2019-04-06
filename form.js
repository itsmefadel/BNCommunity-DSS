function printNilai(value,sliderKe){
    var nilai;
    //mencari perbandingan slider
    var el1,el2;
    if(sliderKe==1){
        el1="Rating Novel";
        el2="Penghargaan";
    }
    if(sliderKe==2){
        el1="Rating Novel";
        el2="Popularitas Penulis";
    }
    if(sliderKe==3){
        el1="Rating Novel";
        el2="Rating Penulis";
    }
    if(sliderKe==4){
        el1="Penghargaan";
        el2="Popularitas Penulis";
    }
    if(sliderKe==5){
        el1="Penghargaan";
        el2="Rating Penulis";
    }
    if(sliderKe==6){
        el1="Popularitas Penulis";
        el2="Rating Penulis";
    }
    //mencari nilai slider
    if(value==9){nilai=1;
                perbandinganSlider(a,b,nilai);
                }else{
    if(value<9){nilai=9-value;
               }
    else{nilai=value-8;
        }}
    //print nilai
     document.getElementById("nilaiSlider"+sliderKe).innerHTML=nilai;
}
function printPerbandingan(a,b,nilai){
    var iK1="sama pentingnya";
    var iK3="sedikit lebih penting";
    var iK5="lebih penting";
    var iK7="kuat penting";
    var iK9="sangat penting";
    var iK2="antara"+iK1+"dan"+iK3;
    var iK4="antara"+iK3+"dan"+iK5;
    var iK6="antara"+iK5+"dan"+iK7;
    var iK8="antara"+iK7+"dan"+iK9;
    
}