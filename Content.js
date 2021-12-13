let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      replaceImgs();
      ticking = false;
    });

    ticking = true;
  }
});

function replaceImgs() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    // TODO compare image
    images[i].src = "https://bit.ly/3Ck6DTU";
  }
}

replaceImgs();
