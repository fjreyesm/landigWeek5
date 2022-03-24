function abrirFormulario() {
  if (document.getElementById('signup-popup').style.display == 'block') {
    document.getElementById('signup-popup').style.display = 'none';
    document.getElementById('signup').textContent = 'Sign Up Now';
    document.getElementById('signup').style.backgroundColor = '#033048';
    alert('Cerrando formulario');
  } else {
    document.getElementById('signup-popup').style.display = 'block';
    document.getElementById('signup').textContent = 'ClOSE FORM';
    document.getElementById('signup').style.backgroundColor = 'red';
    alert('Abriendo formulario');
  }
}
function errorFormulario() {
  alert('Ha ocurrido un error al intentar registrarse.');
}

window.onload = function() {
  var btnSignUpNow = document.getElementById('signup');
  var btnSignUp = document.getElementById('error-formulario');

  btnSignUpNow.onclick = abrirFormulario;
  btnSignUp.onclick = errorFormulario;
};
