function mostrarTexto() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('moretext');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more >';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less <';
    moreText.style.display = 'inline';
  }
}

function mostrarTexto2() {
  var dots = document.getElementById('dots2');
  var moreText = document.getElementById('moretext2');
  var btnText = document.getElementById('myBtn2');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more >';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less <';
    moreText.style.display = 'inline';
  }
}

function mostrarTexto3() {
  var dots = document.getElementById('dots3');
  var moreText = document.getElementById('moretext3');
  var btnText = document.getElementById('myBtn3');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Learn more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Learn less';
    moreText.style.display = 'inline';
  }
}

function mensajeAlerta() {
  alert('We’re Not Ready For Sign-Ups…Yet.');
}
