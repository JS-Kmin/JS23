let slideIndex = 1;
showSlides (slideIndex);

function hienThiSlideTruocDo(x) {
    showSlides (slideIndex += x);
}
//Khai báo hàm hiển thị img
function showSlides(x) {
    let y;
    let slide = document.getElementsByClassName("slides");
    if (x > slide.length) {slideIndex = 1}
    if (x < 1) {slideIndex = slide.length};
    for (y = 0; y < slide.length; y++) {
        slide[i].style.display = "none";
    }
    slide[slideIndex - 1].style.display = "block";
}