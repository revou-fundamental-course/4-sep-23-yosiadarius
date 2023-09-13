// window.alert("sometext");

// Validate Input Form Hitung Luas & Keliling
onload =function(){ 
    var ele = document.querySelectorAll(".hanyaAngka")[0];
    ele.onkeypress = function(e) {
       if(isNaN(this.value+""+String.fromCharCode(e.charCode)))
        return false;
    }

    // Tidak boleh paste yah, bunda!
    ele.onpaste = function(e){
       e.preventDefault();
    }
  }

  function hitungLuas() {
    let sisi = parseInt(document.getElementById("inputField").value);
    let luas = sisi * sisi;

    window.alert("Luas Persegi adalah: " + luas);
  }