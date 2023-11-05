document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getDataFromForm(form);
    }
    )});


function getDataFromForm(form) {
    runAjax(form);
    }

function runAjax(form){
    const formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_data.php", true);
    xhr.send(formData);
}