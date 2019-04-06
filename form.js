var barisRatingNovel=new Array(1,1,1,1);
var barisPenghargaan=new Array(1,1,1,1);
var barisPopularitas=new Array(1,1,1,1);
var barisRatingPenulis=new Array(1,1,1,1);
var el1;
var el2;
function printNilai(value,sliderKe){
    var nilai;
    var stringKalimat;
    if(sliderKe==1){
        el1="Rating Novel ";
        el2="Penghargaan ";
        //mencari nilai slider & mendapatkan string kalimat
    if(value==9){
                barisRatingNovel[1]==1;
                stringKalimat= membentukString(el1,el2,nilai);
                barisPenghargaan[0]=barisRatingNovel[0]/barisRatingNovel[1];}
        else{
    if(value<9){barisRatingNovel[1]=9-value;
               stringKalimat= membentukString(el2,el1,nilai);
               barisPenghargaan[0]}
    else{barisRatingNovel[1]=value-8;
               stringKalimat= membentukString(el1,el2,nilai);}
        }
        //Mengubah matriks
        barisPenghargaan[0]=barisRatingNovel[0]/barisRatingNovel[1];
    }
    if(sliderKe==2){
        el1="Rating Novel ";
        el2="Popularitas Penulis ";
        barisRatingNovel[2]=cariNilaiSlider(value,sliderKe);
        barisPopularitas[0]=barisRatingNovel[0]/barisRatingNovel[2];
    }
    if(sliderKe==3){
        el1="Rating Novel ";
        el2="Rating Penulis ";
        barisRatingNovel[3]=cariNilaiSlider(value,sliderKe);
        barisPopularitas[1]=barisPenghargaan[1]/barisPenghargaan[2];
    }
    if(sliderKe==4){
        el1="Penghargaan ";
        el2="Popularitas Penulis ";
        barisPenghargaan[2]=cariNilaiSlider(value,sliderKe);
        barisRatingPenulis[0]=barisRatingNovel[0]/barisRatingNovel[3];
    }
    if(sliderKe==5){
        el1="Penghargaan ";
        el2="Rating Penulis ";
        barisPenghargaan[3]=cariNilaiSlider(value,sliderKe);
        barisRatingPenulis[1]=barisPenghargaan[1]/barisPenghargaan[3];
    }
    if(sliderKe==6){
        el1="Popularitas Penulis ";
        el2="Rating Penulis ";
        barisPopularitas[3]=cariNilaiSlider(value,sliderKe);
        barisRatingPenulis[2]=barisPopularitas[2]/barisPopularitas[3];
    }
    //print nilai
    document.getElementById("kataSlider"+sliderKe).innerHTML=stringKalimat;
    document.getElementById("nilaiSlider"+sliderKe).innerHTML=nilai;
    //print matriks
    printMatriks();
}
function cariNilaiSlider(value,sliderKe){
    
}
function membentukString(el1,el2,nilai){
    var iK1="<span style='color:blue'>sama penting </span>";
    var iK3="<span style='color:blue'>sedikit lebih penting </span>";
    var iK5="<span style='color:blue'>lebih penting </span>";
    var iK7="<span style='color:blue'>kuat penting </span>";
    var iK9="<span style='color:blue'>sangat penting </span>";
    var iK2="antara "+iK1+"dan "+iK3;
    var iK4="antara "+iK3+"dan "+iK5;
    var iK6="antara "+iK5+"dan "+iK7;
    var iK8="antara "+iK7+"dan "+iK9;
    var stringKalimat;
    if(nilai==1){
        stringKalimat=el1+iK1+"dengan "+el2;}
    if(nilai==2){
        stringKalimat=el1+iK2+"dengan "+el2;}
    if(nilai==3){
        stringKalimat=el1+iK3+"dengan "+el2;}
    if(nilai==4){
        stringKalimat=el1+iK4+"dengan "+el2;}
    if(nilai==5){
        stringKalimat=el1+iK5+"dengan "+el2;}
    if(nilai==6){
        stringKalimat=el1+iK6+"dengan "+el2;}
    if(nilai==7){
        stringKalimat=el1+iK7+"dengan "+el2;}
    if(nilai==8){
        stringKalimat=el1+iK8+"dengan "+el2;}
    if(nilai==9){
        stringKalimat=el1+iK9+"dengan "+el2;}
    return stringKalimat;
}

function printMatriks(){
   for(var i=0;i<4;i++){
       var index=i+1;
 document.getElementById("barisRatingNovel"+(i+1)).innerHTML=barisRatingNovel[i];
   document.getElementById("barisPenghargaan"+(i+1)).innerHTML=barisPenghargaan[i];
       document.getElementById("barisPopularitasPenulis"+(i+1)).innerHTML=barisPopularitas[i];
       document.getElementById("barisRatingPenulis"+(i+1)).innerHTML=barisRatingPenulis[i];
   }
}