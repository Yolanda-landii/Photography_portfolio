var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var galleryItems = document.querySelectorAll(".gallery-item");
var currentIndex = 0;

function openModal(index) {
    modal.style.display = "block";
    modalImg.src = galleryItems[index].querySelector("img").src;
    currentIndex = index;
    updateButtons();
}
function closeModal() {
    modal.style.display = "none";
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }
    modalImg.src = galleryItems[currentIndex].querySelector("img").src;
    updateButtons();
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    modalImg.src = galleryItems[currentIndex].querySelector("img").src;
    updateButtons();
}

function updateButtons() {
    prevBtn.style.display = (currentIndex === 0) ? "none" : "block";
    nextBtn.style.display = (currentIndex === galleryItems.length - 1) ? "none" : "block";
}

galleryItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
        openModal(index);
    });
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);