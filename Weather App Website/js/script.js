  var widget = document.querySelectorAll(".widget");

  for (var i = 0; i < widget.length; i++) {
      widget[i].addEventListener("click", function() {
          if (document.querySelectorAll(".widget-click").length > 0) {
              document.querySelectorAll(".widget-click")[0].classList.remove("widget-click");
          }
          this.classList.toggle("widget-click");

          console.log("clicked");
      });
  }