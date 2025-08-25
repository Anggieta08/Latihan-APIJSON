function tampilkanSemuaMEnu() {

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftarMenu').append(
                '<div class="col-md-4">' +
                    '<div class="card mb-3">' +
                        '<img src="img/' + data.gambar + '" class="card-img-top">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">' + data.nama_menu + '</h5>' +
                            '<p class="card-text">' + data.deskripsi + '</p>' +
                            '<h5 class="card-title">Rp. ' + data.harga + '</h5>' +
                            '<a href="#" class="btn btn-primary">Order Now</a>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
        });
    });
}

    tampilkanSemuaMEnu();

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active'); 

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Men') {
        tampilkanSemuaMEnu();
        return;
    }

    $.getJSON('data/pizza.json', function(data) {
        let menu = data.menu;
        let content = '';


  $.each(menu, function(i, data){
    console.log("Klik kategori:", kategori.toLowerCase().trim(), "| JSON:", data.kategori.toLowerCase().trim());

    if (kategori.toLowerCase().trim() === "all menu" || data.kategori.toLowerCase().trim() === kategori.toLowerCase().trim()) {
        content += `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="img/${data.gambar}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${data.nama_menu}</h5>
                    <p class="card-text">${data.deskripsi}</p>
                    <h5 class="card-title">Rp. ${data.harga}</h5>
                    <a href="#" class="btn btn-primary">Order Now</a>
                </div>
            </div>
        </div>`;
    }
});
        $('#daftarMenu').html(content);
    });
});
