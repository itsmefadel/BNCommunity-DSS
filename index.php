<html>
    <head>
        <link rel="stylesheet" type="text/css" href="index.css">
        <script src="index.js" type="text/javascript"></script>  
    </head>
<body>
    <div id="divFormBobot" class="formBobot">
        <form autocomplete="off" method="post" enctype="multipart/form-data">
        <h1>Tentukan Prioritas Kriteria</h1>
        <h2>Antara Rating Novel dan Rating Penulis</h2>
        <h3 id="kataSliderPertama"></h3>
        <input id="sliderPertama" name="inputJudulSkenario" type="range" value="9" min="0" max="17" class="slider" onmousemove="hitungNilaiSlider(this.value)" onChange="hitungNilaiSlider(this.value)">
        <span id="nilaiSlider">1</span>
        <h2></h2>
        <input type="submit" name="submit" value="Tampilkan Rekomendasi">
        </form>
        </div>
    
        
</body>
</html>