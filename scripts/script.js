function criptografar(texto) {
  if (!/^[a-z ]+$/.test(texto)) {
    alert(
      "A entrada deve conter apenas letras minúsculas sem acentos ou caracteres especiais."
    );
    throw new Error(
      "A entrada deve conter apenas letras minúsculas sem acentos ou caracteres especiais."
    );
  }

  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

function descriptografar(texto) {
  if (!/^[a-z ]+$/.test(texto)) {
    alert(
      "A entrada deve conter apenas letras minúsculas sem acentos ou caracteres especiais."
    );
    throw new Error(
      "A entrada deve conter apenas letras minúsculas sem acentos ou caracteres especiais."
    );
  }

  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");

  return texto;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const h1 = document.getElementById("h1");
  const p = document.getElementById("p");

  document
    .querySelector(".button--encrypt")
    .addEventListener("click", function () {
      var texto_criptografado = criptografar(input.value);
      p.innerHTML = texto_criptografado;
      input.value = "";
    });

  document
    .querySelector(".button--decrypt")
    .addEventListener("click", function () {
      var texto_descriptografado = descriptografar(input.value);
      p.innerHTML = texto_descriptografado;
      input.value = "";
    });

  input.addEventListener("input", function () {
    if (input.value === "") {
      h1.innerHTML = "Nenhuma mensagem encontrada";
      p.innerHTML =
        "Digite um texto que você deseja criptografar ou descriptografar";
    } else {
      h1.innerHTML = "";
      p.innerHTML = "";
    }
  });
});
