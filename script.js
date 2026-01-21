const modal = document.getElementById("loginModal");
const modalTitle = document.getElementById("modalTitle");
const btnStudent = document.querySelector(".btn-student");
const btnTeacher = document.querySelector(".btn-teacher");
const closeBtn = document.querySelector(".close-btn");

btnStudent.onclick = function() {
    modal.style.display = "block";
    modalTitle.innerText = "Şagird Girişi";
}

btnTeacher.onclick = function() {
    modal.style.display = "block";
    modalTitle.innerText = "Müəllimə Girişi";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
