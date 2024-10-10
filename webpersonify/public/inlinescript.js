WebFont.load({
  google: {
    families: ["Poppins:300,400,500,600,700"],
  },
  active: function () {
    sessionStorage.fonts = true;
  },
});

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
