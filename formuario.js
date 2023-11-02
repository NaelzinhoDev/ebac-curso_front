const form = document.getElementById("form");

function validaForm(a, b) {
  return b > a;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let a = parseFloat(document.getElementById("campoA").value);
  let b = parseFloat(document.getElementById("campoB").value);

  if (validaForm(a, b)) {
    document.querySelector("#erro").style.display = "none";
    document.querySelector("#sucesso").style.display = "block";
  } else {
    document.querySelector("#erro").style.display = "block";
    document.querySelector("sucesso").style.display = "none";
  }
});
