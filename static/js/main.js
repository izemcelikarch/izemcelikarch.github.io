
const container = document.querySelector(".outer-wrapper")




container.addEventListener("scroll", function () {
    const x = container.scrollTop
    scrollFunction(x)
})



function scrollFunction(x) {
    if (x > 500 ) {
        console.log("over")
        document.getElementById("direction-arrow").style.opacity = "0";

    } else {
        console.log("under")
        document.getElementById("direction-arrow").style.opacity = "1";
    }
}
