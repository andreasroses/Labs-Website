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
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Load show_data.php here or perform any other actions
            loadShowData();
        }
    };
}

function loadShowData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "show_data.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector("#table-container").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}