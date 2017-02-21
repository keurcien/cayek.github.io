var RMD = {};

(function() {


  RMD.AppViewModel = function() {
    var self = this;

    var menuShowing = false;
    self.handleMenuTogglerClick = function(event) {
      menuShowing = !menuShowing;
      if (menuShowing) {
        $('#menuItems').addClass("showMenu");
      }
      else {
        $('#menuItems').removeClass("showMenu");
      }

    }

    self.init = function() {
      $('#menuToggler').on('click', self.handleMenuTogglerClick);
    }
  }


}());

$(document).ready(function() {
  RMD.app = new RMD.AppViewModel();
  RMD.app.init();
});
