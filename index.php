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
        <h3 id="kataSlider1"></h3>
        <input id="slider1" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,1)" onChange="hitungNilaiSlider(this.value,1)">
        <span id="nilaiSlider1">1</span>
        
        <h2>Antara Rating Novel dengan Popularitas Penulis</h2>
        <h3 id="kataSlider2"></h3>
        <input id="slider2" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,2)" onChange="hitungNilaiSlider(this.value,2)">
        <span id="nilaiSlider2">1</span>
        
        <h2>Antara Rating Novel dengan Rating Penulis</h2>
        <h3 id="kataSlider3"></h3>
        <input id="slider3" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,3)" onChange="hitungNilaiSlider(this.value,3)">
        <span id="nilaiSlider3">1</span>
            
        <h2>Antara Penghargaan dengan Popularitas Penulis</h2>
        <h3 id="kataSlider4"></h3>
        <input id="slider4" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,4)" onChange="hitungNilaiSlider(this.value,4)">
        <span id="nilaiSlider4">1</span>
            
        <h2>Antara Penghargaan dengan Rating Penulis</h2>
        <h3 id="kataSlider5"></h3>
        <input id="slider5" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,5)" onChange="hitungNilaiSlider(this.value,5)">
        <span id="nilaiSlider5">1</span>
            
        <h2>Antara Popularitas Penulis dengan Rating Penulis</h2>
        <h3 id="kataSlider6"></h3>
        <input id="slider6" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value,6)" onChange="hitungNilaiSlider(this.value,6)">
        <span id="nilaiSlider6">1</span>
            
        <h2></h2>
        <input type="submit" name="submit" value="Tampilkan Rekomendasi">
        </form>
        </div>
    
        
</body>
</html>