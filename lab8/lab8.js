document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit");
  button.addEventListener("click", function () {
      getDataFromForm();
  }
)});


function getDataFromForm() {
  const p = document.getElementById("responseString");
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const queryString = `?fname=${encodeURIComponent(fname)}&lname=${encodeURIComponent(lname)}`;
  var url = "ajax.php" + queryString;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      p.textContent = xhr.responseText;
    }
  }
  xhr.send();
}
