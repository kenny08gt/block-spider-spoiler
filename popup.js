document.addEventListener(
  "DOMContentLoaded",
  function () {
    var blockButton = document.getElementById("block-it");
    console.log(blockButton);
    blockButton.addEventListener(
      "click",
      function () {
        chrome.tabs.getSelected(null, function (tab) {
          d = document;
          var images = document.getElementsByTagName("img");
          for (var i = 0; i < images.length; i++) {
            images[i].style.visibility = "hidden";
          }
          console.log(tab);
          console.log(d);
        });
      },
      false
    );
  },
  false
);
