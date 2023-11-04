document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    form.addEventListener("submit", function () {
        getDataFromForm();
    }
    )});


function getDataFromForm() {
    
    const formData = new FormData(form);
    runAjax(formData);
    }

function runAjax(form){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_data.php", true);
    xhr.send(formData);
}