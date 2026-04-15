(function () {
  var timeEl = document.getElementById("epoch-time");

function update() {
  var now = Date.now();
  timeEl.textContent = String(now);
}

   update(); // run once only
})();
