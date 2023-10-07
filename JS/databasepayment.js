var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var namaid = urlParams.get('id');

if(namaid == 1){
    let nama_kendaraan = "Bugatti Chiron"
    let harga = "10.000.000"  
    let nama_toko = "New Agung Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Mobil keren dari surabaya yang memamerkan beberapa teknologi luar negeri seperti, bisa pesan makanan langsung dari radio yang tersedia dalam mobil ini. Dengan biaya service yang cukup murah sehingga mobil ini sangat disukai oleh masyarakat luas."
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/Bugatti.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 2){
    let nama_kendaraan = "McClaren 720s"
    let harga = "13.000.000"  
    let nama_toko = "New Agung Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Mobil Elegan yang bisa diajak kemana mana. Tidak seperti mobil sport pada umumnya mobil ini bisa diajak untuk macet macetan di ibu kota. tidak hanya itu mobil ini juga sangat irit bensin karena dibuat langsung di indonesia dan sudah disesuaikan !"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/McClaren.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}


else if(namaid == 3){
    let nama_kendaraan = "Mc Claren"
    let harga = "18.000.000"  
    let nama_toko = "New Agung Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Ini merupakan mobil yang merupakan adik dari McClaren 720s dimana spesifikasi nya mirip cuman beda di bagian power mesin. Dimana mobil ini lebih cepat dari pada 720s namun mobil ini gampang panas. jadi tidak direkomendasikan untuk penggunaan dalam kota"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/Picture1.jpeg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}


else if(namaid == 4){
    let nama_kendaraan = "Aventador"
    let harga = "19.000.000"  
    let nama_toko = "New Agung Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Mobil ini sangat kencang dan sangat elegan. jika kalian menggunakan mobil ini di jalanan ibu kota maka kalian akan menjadi sorot pandang di kota tersebut. Mobil ini juga bisa di ajak ke circuit kesukaan kalian karena mudah digunakan dan juga di setup untuk balapan Profesional"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/aventador.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}


else if(namaid == 5){
    let nama_kendaraan = "Kawasaki H2R"
    let harga = "12.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Motor keren yang dikeluarkan langsung dari kawasaki yang membuat anda menjadi raja jalanan yang bisa membuat orang takut jika berada disekitar kalian !"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/h2r.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}


else if(namaid == 6){
    let nama_kendaraan = "Yamaha R25"
    let harga = "15.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Motor gagah idaman  para lelaki yang sangat bisa mendapatkan hati wanita yang dilewatinya. Mau balapan? motor ini juga sangat bisa diajak balap tinggal sebut lawannya siapa !"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/R25.jpeg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 7){
    let nama_kendaraan = "FOX R"
    let harga = "2.500.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Motor listrik yang sangat kece dan murah membuat hati tenang dan nyaman. Dengan kapasitas baterai yang besar dapat membawa anda kemana pun anda mau pergi. Dijamin ga nyesel deh"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/FoxR3.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 8){
    let nama_kendaraan = "Yamaha RM1"
    let harga = "5.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "motor keren yang bisa membawa 2 penumpang. tampil gagah dengan bodynya yang modern dan disukai oleh para wanita wanita muda. dijamin deh dapet cewe pasti !"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/R1M.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 9){
    let nama_kendaraan = "Mercy Actros"
    let harga = "15.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Truck keren yang bisa mengangkut banyak sekali barang. daya tahan yang kuat membuat truck ini bisa menempuh jarak yang sangat jauh sampai luar jawa"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/Truck.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}


else if(namaid == 10){
    let nama_kendaraan = "Ford Truck"
    let harga = "21.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Truck yang bisa di gunakan sebagai mobil keluarga. ban yang besar dapat menerjang segala rintangan yang ada di jalanan. bahkan mobil ini bisa jalan di atas sungai sangat rekomended!"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/Ford.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 11){
    let nama_kendaraan = "Truck Fuso"
    let harga = "17.500.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Truck Gagah yang biasa digunakan untuk mengangkut berbagai barang, Seperti sayur, buah, hewan ternak, dll. Tidak hanya itu truck ini juga memiliki tenaga yang sangat besar sehingga jangan khwatir dalam berkendara"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/Fuso.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}

else if(namaid == 12){
    let nama_kendaraan = "International"
    let harga = "25.000.000"  
    let nama_toko = "Toko Sinar Jaya"  
    let icon = "fa-solid fa-rupiah-sign"
    let icon2 = "fa-solid fa-square-check"
    let detail = "Truck keren dengan design yang sangat modern membuat tampilan dari truck ini sangat disukai oleh banyak orang. Truck ini dilengkapi dengan berbagai teknologi modern yang sangat memanjakan mata dan juga raga !"
    let div_keterangan = document.getElementById('keterangan')

    let gambar = document.getElementById('gambar')
    gambar.src = '/Asset/inter.jpg'

    let h1 = div_keterangan.querySelector("h1")
    h1.textContent = nama_kendaraan

    let h2 = div_keterangan.querySelector("h2")
    h2.innerHTML = `<i class="${icon}"></i> ${harga}`

    let p = div_keterangan.querySelector("p")
    p.textContent = detail

    let h3 = div_keterangan.querySelector("h3")
    h3.innerHTML = `<i class="${icon2}"></i> ${nama_toko}`
}