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


$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active'); // ✅ benar
});

