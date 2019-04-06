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
        <input id="slider1" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,1)" onChange="printNilai(this.value,1)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Rating Novel dengan Popularitas Penulis</h2>
            <h3 id="kataSlider2">Rating Novel <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,2)" onChange="printNilai(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Rating Novel dengan Rating Penulis</h2>
            <h3 id="kataSlider3">Rating Novel <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,3)" onChange="printNilai(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Penghargaan dengan Popularitas Penulis</h2>
            <h3 id="kataSlider4">Penghargaan <span style='color:blue'>sama penting</span> dengan Popularitas Penulis</h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,4)" onChange="printNilai(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Penghargaan dengan Rating Penulis</h2>
            <h3 id="kataSlider5">Penghargaan <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,5)" onChange="printNilai(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Popularitas Penulis dengan Rating Penulis</h2>
            <h3 id="kataSlider6">Popularitas Penulis <span style='color:blue'>sama penting</span> dengan Rating Penulis</h3>
        <input id="slider6" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="printNilai(this.value,6)" onChange="printNilai(this.value,6)">
        <span id="nilaiSlider6">1</span>
        <p></p>
            
            <div id="matriksInput">
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
                    <th id="barisRatingNovel1">1</th>
                    <th id="barisRatingNovel2">1</th>
                    <th id="barisRatingNovel3">1</th>
                    <th id="barisRatingNovel4">1</th>
                    <hr>
                    </tr>
                    <tr>
                    <th>Penghargaan</th>
                    <th id="barisPenghargaan1">1</th>
                    <th id="barisPenghargaan2">1</th>
                    <th id="barisPenghargaan3">1</th>
                    <th id="barisPenghargaan4">1</th>
                    </tr>
                    <tr>
                    <th>Popularitas Penulis</th>
                    <th id="barisPopularitasPenulis1">1</th>
                    <th id="barisPopularitasPenulis2">1</th>
                    <th id="barisPopularitasPenulis3">1</th>
                    <th id="barisPopularitasPenulis4">1</th>
                    </tr>
                    <tr>
                    <th>Rating Penulis</th>
                    <th id="barisRatingPenulis1">1</th>
                    <th id="barisRatingPenulis2">1</th>
                    <th id="barisRatingPenulis3">1</th>
                    <th id="barisRatingPenulis4">1</th>
                    </tr>
                </table>
            </div>
        <input type="submit" name="submit" value="Tampilkan Rekomendasi" onclick="">
        </form>
        </div>
    
        
</body>
</html>