
// localStorage.clear();
/* Add Top SELLING Section */
let myCarousal = document.querySelector(".porducts").cloneNode(1);
let contact = document.getElementById('contact');
contact.parentNode.insertBefore(myCarousal, contact);
document.getElementById("carouselExampleIndicators").setAttribute("id", "ex2")
for(let i = 0; i < 2; i++)
document.querySelectorAll(".porducts .carousel .caros")[i].setAttribute("data-bs-target", '#ex2')
document.querySelectorAll(".section-heading")[1].innerHTML = 'TOP SELLING';
// Change images source
let sources = [
    'imgs/xproduct06.png.pagespeed.ic.hnP3x9P-Fz.png',
    'imgs/xproduct07.png.pagespeed.ic.96craXAXfp.png',
    'imgs/xproduct08.png.pagespeed.ic.VCq0LEalYT.png',
    'imgs/xproduct09.png.pagespeed.ic.1JkuDEQEIw.png',
    'imgs/xproduct01.png.pagespeed.ic.flJc5JT8yl.png',
    'imgs/xproduct09.png.pagespeed.ic.1JkuDEQEIw.png',
    'imgs/xproduct08.png.pagespeed.ic.VCq0LEalYT.png',
    'imgs/xproduct07.png.pagespeed.ic.96craXAXfp.png'
];
let images = Array.from(document.querySelectorAll("#carouselExampleIndicators .box img"));
for(let i = 0; i < images.length; i++)
    images[i].src = sources[i];
/* End Add Top SELLING */
/* menu button */
let myNav = document.querySelector("nav");
let likeNumber = document.querySelector("header .header .box a .num:first-of-type");
document.querySelector(".bar").onclick = () => myNav.classList.toggle("left-nav");
document.onkeyup = function (e) {
    if(e.key === "Escape")
    myNav.classList.remove("left-nav")
};
/* end menu button */
/* add to local sorage and update hearts */
let productLiked = 0;
let hearts = Array.from(document.querySelectorAll(".carousel .box .favorite"));
hearts.forEach((heart, index) => {
    heart.onclick = () => {
        if(heart.classList.toggle("liked")) {
            productLiked++;
            localStorage.setItem(`heart${index}`, index);
        } else {
            productLiked--;
            window.localStorage.removeItem(`heart${index}`);
        }
        likeNumber.setAttribute("data-number", productLiked);
}});
function addFromLocalStorage () {
    productLiked = localStorage.length;
    likeNumber.setAttribute("data-number", productLiked);
    for(let i = 0; i < localStorage.length; i++)
        hearts[localStorage.getItem(localStorage.key(i))].classList.add("liked");
};
/* end add to local sorage and update hearts */
/* Countdown in hot deal Section */
let countDownDate = new Date("Dec 31, 2022 23:59:59");
let counter = setInterval(() => {
    //Get Date Now
    let dateNow = new Date().getTime();
    // Find the Differencs Between now and countDown Date
    let dateDiff = countDownDate - dateNow;
    // get Time Units
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));
    document.querySelector("#hot-deal .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector("#hot-deal .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector("#hot-deal .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector("#hot-deal .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
/* end Countdown in hot deal Section */