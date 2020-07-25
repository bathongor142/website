var uiController = (function () {
  var x = 100;

  // дэлгэцтэй ажиллах контроллер
  function add(y) {}
})();
//санхүүтай ажиллах контроллер
var financeController = (function () {})();

// Програмын холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. оруулах өгдлийг дэлгэцээс олж авна
    console.log("дэлгэцээс өгөгдлөө авах хэсэг");
    // 2. олж авсан өгөгдлүүдээ санхүүгийн контроллер дамжуулж тэнд хадгална.
    // 3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
    // 4. төсвийг тооцоолно
    // 5. эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
