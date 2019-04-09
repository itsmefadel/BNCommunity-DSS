// deklarasi matriks input pengguna
var barisRatingNovel=new Array(1,1,1,1);
var barisPenghargaan=new Array(1,1,1,1);
var barisPopularitas=new Array(1,1,1,1);
var barisRatingPenulis=new Array(1,1,1,1);
// deklarasi matriks normalisasi input pengguna
var normBarisRatingNovel=new Array(1,1,1,1);
var normBarisPenghargaan=new Array(1,1,1,1);
var normBarisPopularitas=new Array(1,1,1,1);
var normBarisRatingPenulis=new Array(1,1,1,1);
var el1,el2;
//string perbandingan
var iK1="<span style='color:blue'>sama penting </span>";
var iK3="<span style='color:blue'>sedikit lebih penting </span>";
var iK5="<span style='color:blue'>lebih penting </span>";
var iK7="<span style='color:blue'>kuat penting </span>";
var iK9="<span style='color:blue'>sangat penting </span>";
var iK2="antara "+iK1+"dan "+iK3;
var iK4="antara "+iK3+"dan "+iK5;
var iK6="antara "+iK5+"dan "+iK7;
var iK8="antara "+iK7+"dan "+iK9;
var jumlahKolomRatingNovel, jumlahKolomPenghargaan, jumlahKolomPopularitaspenulis, jumlahKolomRatingPenulis;

function prosesSlider1(value){
    var nilai;
    var stringPerbandingan;
    el1="Rating Novel ";
    el2="Penghargaan ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[1]=1;
        barisPenghargaan[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[1]=2;            
        }
            if(nilai==3){
                barisRatingNovel[1]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[1]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[1]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[1]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[1]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[1]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[1]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPenghargaan[0]=barisRatingNovel[0]/barisRatingNovel[1];
        }else{
            //lebih mementingkan penghargaan
        nilai=value-7;
            if(nilai==2){
            barisPenghargaan[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPenghargaan[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPenghargaan[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPenghargaan[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPenghargaan[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPenghargaan[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPenghargaan[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPenghargaan[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[1]=barisRatingNovel[0]/barisPenghargaan[0];
        }
    }
    document.getElementById("nilaiSlider1").innerHTML=nilai.toString();
    document.getElementById("kataSlider1").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider2(value){
    var nilai;
    var stringPerbandingan;
    el1="Rating Novel ";
    el2="Popularitas Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[2]=1;
        barisPopularitas[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[2]=2;            
        }
            if(nilai==3){
                barisRatingNovel[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPopularitas[0]=barisRatingNovel[0]/barisRatingNovel[2];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisPopularitas[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPopularitas[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPopularitas[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPopularitas[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPopularitas[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPopularitas[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPopularitas[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPopularitas[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[2]=barisRatingNovel[0]/barisPopularitas[0];
        }
    }
    document.getElementById("nilaiSlider2").innerHTML=nilai.toString();
    document.getElementById("kataSlider2").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider3(value){
    var nilai;
    var stringPerbandingan;
    el1="Rating Novel ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisRatingNovel[3]=1;
        barisRatingPenulis[0]=1;
    }else{
        if(value<8){
            //lebih mementingkan rating novel
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisRatingNovel[3]=2;            
        }
            if(nilai==3){
                barisRatingNovel[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisRatingNovel[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisRatingNovel[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisRatingNovel[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisRatingNovel[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisRatingNovel[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisRatingNovel[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[0]=barisRatingNovel[0]/barisRatingNovel[3];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[0]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[0]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[0]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[0]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[0]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[0]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[0]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[0]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisRatingNovel[3]=barisRatingNovel[0]/barisRatingPenulis[0];
        }
    }
    document.getElementById("nilaiSlider3").innerHTML=nilai.toString();
    document.getElementById("kataSlider3").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider4(value){
    var nilai;
    var stringPerbandingan;
    el1="Penghargaan ";
    el2="Popularitas Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPenghargaan[2]=1;
        barisPopularitas[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Penghargaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPenghargaan[2]=2;            
        }
            if(nilai==3){
                barisPenghargaan[2]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPenghargaan[2]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPenghargaan[2]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPenghargaan[2]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPenghargaan[2]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPenghargaan[2]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPenghargaan[2]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisPopularitas[1]=barisPenghargaan[1]/barisPenghargaan[2];
        }else{
            //lebih mementingkan popularitas penulis
        nilai=value-7;
            if(nilai==2){
            barisPopularitas[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisPopularitas[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisPopularitas[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisPopularitas[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisPopularitas[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisPopularitas[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisPopularitas[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisPopularitas[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPenghargaan[2]=barisPopularitas[2]/barisPopularitas[1];
        }
    }
    document.getElementById("nilaiSlider4").innerHTML=nilai.toString();
    document.getElementById("kataSlider4").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider5(value){
    var nilai;
    var stringPerbandingan;
    el1="Penghargaan ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPenghargaan[3]=1;
        barisRatingPenulis[1]=1;
    }else{
        if(value<8){
            //lebih mementingkan Penghargaan
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPenghargaan[3]=2;            
        }
            if(nilai==3){
                barisPenghargaan[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPenghargaan[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPenghargaan[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPenghargaan[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPenghargaan[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPenghargaan[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPenghargaan[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[1]=barisPenghargaan[1]/barisPenghargaan[3];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[1]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[1]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[1]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[1]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[1]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[1]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[1]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[1]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPenghargaan[3]=barisRatingPenulis[2]/barisRatingPenulis[1];
        }
    }
    document.getElementById("nilaiSlider5").innerHTML=nilai.toString();
    document.getElementById("kataSlider5").innerHTML=stringPerbandingan;
    printMatriks();
}

function prosesSlider6(value){
    var nilai;
    var stringPerbandingan;
    el1="Popularitas Penulis ";
    el2="Rating Penulis ";
    if(value==8){
        nilai=1;
        stringPerbandingan=el1+iK1+"dengan "+el2;
        barisPopularitas[3]=1;
        barisRatingPenulis[2]=1;
    }else{
        if(value<8){
            //lebih mementingkan popularitas penulis
        nilai=9-value;
        if(nilai==2){
            stringPerbandingan=el1+iK2+"daripada "+el2;
            barisPopularitas[3]=2;            
        }
            if(nilai==3){
                barisPopularitas[3]=3;
            stringPerbandingan=el1+iK3+"daripada "+el2;
        }
            if(nilai==4){
                barisPopularitas[3]=4;
            stringPerbandingan=el1+iK4+"daripada "+el2;
        }
            if(nilai==5){
                barisPopularitas[3]=5;
            stringPerbandingan=el1+iK5+"daripada "+el2;
        }
            if(nilai==6){
                barisPopularitas[3]=6;
            stringPerbandingan=el1+iK6+"daripada "+el2;
        }
            if(nilai==7){
                barisPopularitas[3]=7;
            stringPerbandingan=el1+iK7+"daripada "+el2;
        }
            if(nilai==8){
                barisPopularitas[3]=8;
            stringPerbandingan=el1+iK8+"daripada "+el2;
        }
            if(nilai==9){
                barisPopularitas[3]=9;
            stringPerbandingan=el1+iK9+"daripada "+el2;
        }
        barisRatingPenulis[2]=barisPopularitas[2]/barisPopularitas[3];
        }else{
            //lebih mementingkan rating penulis
        nilai=value-7;
            if(nilai==2){
            barisRatingPenulis[2]=2;
            stringPerbandingan=el2+iK2+"daripada "+el1;                
        }
            if(nilai==3){
                barisRatingPenulis[2]=3;
            stringPerbandingan=el2+iK3+"daripada "+el1;
        }
            if(nilai==4){
                barisRatingPenulis[2]=4;
            stringPerbandingan=el2+iK4+"daripada "+el1;
        }
            if(nilai==5){
                barisRatingPenulis[2]=5;
            stringPerbandingan=el2+iK5+"daripada "+el1;
        }
            if(nilai==6){
                barisRatingPenulis[2]=6;
            stringPerbandingan=el2+iK6+"daripada "+el1;
        }
            if(nilai==7){
                barisRatingPenulis[2]=7;
            stringPerbandingan=el2+iK7+"daripada "+el1;
        }
            if(nilai==8){
                barisRatingPenulis[2]=8;
            stringPerbandingan=el2+iK8+"daripada "+el1;
        }
            if(nilai==9){
                barisRatingPenulis[2]=9;
            stringPerbandingan=el2+iK9+"daripada "+el1;
        }
      barisPopularitas[3]=barisRatingPenulis[3]/barisRatingPenulis[2];
        }
    }
    document.getElementById("nilaiSlider6").innerHTML=nilai.toString();
    document.getElementById("kataSlider6").innerHTML=stringPerbandingan;
    printMatriks();
}

function printMatriks(){
   for(var i=0;i<4;i++){
       var index=i+1;
document.getElementById("barisRatingNovel"+(i+1)).innerHTML=barisRatingNovel[i];
document.getElementById("barisPenghargaan"+(i+1)).innerHTML=barisPenghargaan[i];
       document.getElementById("barisPopularitasPenulis"+(i+1)).innerHTML=barisPopularitas[i];
       document.getElementById("barisRatingPenulis"+(i+1)).innerHTML=barisRatingPenulis[i];
   }
    menjumlahKolom();
    menormalisasiMatriksInput();
}

function menjumlahKolom(){
    //menghitung jumlah tiap kolom
        jumlahKolomRatingNovel=barisRatingNovel[0]+barisPenghargaan[0]+barisPopularitas[0]+barisRatingPenulis[0];
        jumlahKolomPenghargaan=barisRatingNovel[1]+barisPenghargaan[1]+barisPopularitas[1]+barisRatingPenulis[1];;
        jumlahKolomPopularitaspenulis=barisRatingNovel[2]+barisPenghargaan[2]+barisPopularitas[2]+barisRatingPenulis[2];;
        jumlahKolomRatingPenulis=barisRatingNovel[3]+barisPenghargaan[3]+barisPopularitas[3]+barisRatingPenulis[3];;
    
    document.getElementById("jumlahKolom1").innerHTML=jumlahKolomRatingNovel;
    document.getElementById("jumlahKolom2").innerHTML=jumlahKolomPenghargaan;
    document.getElementById("jumlahKolom3").innerHTML=jumlahKolomPopularitaspenulis;
    document.getElementById("jumlahKolom4").innerHTML=jumlahKolomRatingPenulis;
}

function menormalisasiMatriksInput(){

}
