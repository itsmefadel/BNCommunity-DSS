<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="form.js" type="text/javascript"></script>  
    </head>
<body>
    <div id="divFormBobot" class="formBobot">
        <form autocomplete="off" method="post" enctype="multipart/form-data">
        <h1>Tentukan Prioritas Kriteria</h1>
            
        <h2>Antara Rating Novel dengan Penghargaan</h2>
            <h3 id="kataSlider1">Rating Novel <span style='color:blue'>sama penting</span> dengan Penghargaan</h3>
        <input id="slider1" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider1(this.value)" onChange="prosesSlider1(this.value)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Rating Novel dengan Popularitas Penulis</h2>
            <h3 id="kataSlider2">Rating Novel <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider2(this.value,2)" onChange="prosesSlider2(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Rating Novel dengan Rating Penulis</h2>
            <h3 id="kataSlider3">Rating Novel <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider3(this.value,3)" onChange="prosesSlider3(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Penghargaan dengan Popularitas Penulis</h2>
            <h3 id="kataSlider4">Penghargaan <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider4(this.value,4)" onChange="prosesSlider4(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Penghargaan dengan Rating Penulis</h2>
            <h3 id="kataSlider5">Penghargaan <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider5(this.value,5)" onChange="prosesSlider5(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Popularitas Penulis dengan Rating Penulis</h2>
            <h3 id="kataSlider6">Popularitas Penulis <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider6" name="inputJudulSkenario" type="range" value="8" min="0" max="16" class="slider" onmousemove="prosesSlider6(this.value,6)" onChange="prosesSlider6(this.value,6)">
        <span id="nilaiSlider6">1</span>
        <p></p>
            
            <hr>
            <div id="matriksInput">
                <h2>Matriks Pairwise Comparison</h2>
                <table style="width:80%">
                    <tr>
                    <th></th>
                    <th>Rating Novel</th>
                    <th>Penghargaan</th>
                    <th>Popularitas Penulis</th>
                    <th>Rating Penulis</th>
                    </tr>
                    <tr>
                    <th>Rating Novel</th>
                    <th bgcolor="yellow" id="barisRatingNovel1">1</th>
                    <th id="barisRatingNovel2">1</th>
                    <th id="barisRatingNovel3">1</th>
                    <th id="barisRatingNovel4">1</th>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisPenghargaan1">1</th>
                    <th bgcolor="yellow" id="barisPenghargaan2">1</th>
                    <th id="barisPenghargaan3">1</th>
                    <th id="barisPenghargaan4">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisPopularitasPenulis1">1</th>
                    <th id="barisPopularitasPenulis2">1</th>
                    <th bgcolor="yellow" id="barisPopularitasPenulis3">1</th>
                    <th id="barisPopularitasPenulis4">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisRatingPenulis1">1</th>
                    <th id="barisRatingPenulis2">1</th>
                    <th id="barisRatingPenulis3">1</th>
                    <th bgcolor="yellow" id="barisRatingPenulis4">1</th>
                    </tr>
                    <tr>
                    <th>Jumlah Kolom</th>
                    <th bgcolor="green" id="jumlahKolom1">4</th>
                    <th bgcolor="green" id="jumlahKolom2">4</th>
                    <th bgcolor="green" id="jumlahKolom3">4</th>
                    <th bgcolor="green" id="jumlahKolom4">4</th>
                    </tr>
                </table>
            </div>
            
            <hr>
            <div id="matriksInputNormalisasi">
                <h2>Matriks Normalisasi Input</h2>
                <table style="width:80%">
                    <tr>
                    <th></th>
                    <th>Rating Novel</th>
                    <th>Penghargaan</th>
                    <th>Popularitas Penulis</th>
                    <th>Rating Penulis</th>
                    <th>Jumlah Baris</th>
                    <th>Prioritas Relatif Kriteria</th>
                    </tr>
                    <tr>
                    <th>Rating Novel</th>
                    <th bgcolor="yellow" id="barisNormRatingNovel1">1</th>
                    <th id="barisNormRatingNovel2">1</th>
                    <th id="barisNormRatingNovel3">1</th>
                    <th id="barisNormRatingNovel4">1</th>
                    <th id="barisNormRatingNovel5">4</th>
                    <th id="barisNormRatingNovel6">1</th>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisNormPenghargaan1">1</th>
                    <th bgcolor="yellow" id="barisNormPenghargaan2">1</th>
                    <th id="barisNormPenghargaan3">1</th>
                    <th id="barisNormPenghargaan4">1</th>
                    <th id="barisNormPenghargaan5">4</th>
                    <th id="barisNormPenghargaan6">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisNormPopularitasPenulis1">1</th>
                    <th id="barisNormPopularitasPenulis2">1</th>
                    <th bgcolor="yellow" id="barisNormPopularitasPenulis3">1</th>
                    <th id="barisNormPopularitasPenulis4">1</th>
                    <th id="barisNormPopularitasPenulis5">4</th>
                    <th id="barisNormPopularitasPenulis6">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisNormRatingPenulis1">1</th>
                    <th id="barisNormRatingPenulis2">1</th>
                    <th id="barisNormRatingPenulis3">1</th>
                    <th bgcolor="yellow" id="barisNormRatingPenulis4">1</th>
                        <th id="barisNormRatingPenulis5">4</th>
                        <th id="barisNormRatingPenulis6">1</th>
                    </tr>
                </table>
            </div>
        <p></p>
        <input type="submit" name="submit" value="Tampilkan Rekomendasi" onclick="">
        </form>
        </div>
    
        
</body>
</html>