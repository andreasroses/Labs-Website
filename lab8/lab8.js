const button = document.getElementById("submit");
const p = document.getElementById("responseString");
button.addEventListener("click", function () {
  getDataFromForm();
});

function getDataFromForm() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  console.log("First Name:", fname);
  console.log("Last Name:", lname);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./ajax.php", true);
  xhr.onload = function(){
    if(xhr.status === 200){
      p.textContent = xhr.responseText;
    }
  }
  xhr.send();
}
