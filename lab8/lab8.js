const button = document.getElementById("submit");
const p = getElementById("responseString");
button.addEventListener("click", function () {
  getDataFromForm();
});

function getDataFromForm() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "ajax.php", true);
  xhr.onload() = function(){
    if(xhr.status === 200){
      p.textContent = xhr.responseText;
    }
  }
}
