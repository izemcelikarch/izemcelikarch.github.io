
const container = document.querySelector(".outer-wrapper")




container.addEventListener("scroll", function () {
    const x = container.scrollTop
    scrollFunction(x)
})



function scrollFunction(x) {
    if (x > 500 ) {
        document.getElementById("direction-arrow").style.opacity = "0";
    } else {
        document.getElementById("direction-arrow").style.opacity = "1";
    }
}
