<?php 
$data = file_get_contents(__DIR__ . '/data/pizza.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Latihan Navbar</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
  <div class="container">
    <a class="navbar-brand fw-bold fs-5" href="#">
      <img src="img/Logo_Pizza.png" alt="Logo Pizza" width="120">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav fw-bold fs-5">
        <li class="nav-item">
          <a class="nav-link active" href="#">All Menu</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
  <div class="row mt-3">
    <div class="col">
      <h1>All Menu</h1>
    </div>
  </div>

  <div class="row">
    <?php foreach($menu as $row) : ?>
      <div class="col-md-4 mb-3">
        <div class="card mb-3">
          <img src="<?= $row['gambar']; ?>" class="card-img-top" alt="<?= $row['nama_menu']; ?>">
          <div class="card-body">
            <h5 class="card-title"><?= $row['nama_menu']; ?></h5>
            <p class="card-text"><?= $row['deskripsi']; ?></p>
            <h5 class="card-title">Rp. <?= $row['harga']; ?></h5>
            <a href="#" class="btn btn-primary">Order Now</a>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
