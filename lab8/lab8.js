document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit");
  button.addEventListener("click", function () {
      getDataFromForm();
  }
)});


function getDataFromForm() {
  
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  runAjax(fname,lname);
}

function runAjax(fname,lname){
  const p = document.getElementById("responseString");
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
