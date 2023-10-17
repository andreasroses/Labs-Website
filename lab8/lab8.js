document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit");
  const p = document.getElementById("responseString");

  button.addEventListener("click", function () {
      getDataFromForm();
  }
)});


function getDataFromForm() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  var params = "fname=" + encodeURIComponent(fname) + "&lname=" + encodeURIComponent(lname);
  console.log("First Name:", fname);
  console.log("Last Name:", lname);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "ajax.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      p.textContent = xhr.responseText;
    }
  }
  xhr.send(params);
}
