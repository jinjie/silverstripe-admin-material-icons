(function($){
  $("span.menu__icon[class*='mdi:']").each(function() {
    var menuItem = this;
    var classList = $(this).attr('class').split(/\s+/);

    $.each(classList, function(index, item) {
      if (item.startsWith("mdi:")) {
        var icon = item.split(":")[1];

        $(menuItem).addClass('material-icons');
        $(menuItem).text(icon);
      }
    });
  });
})(jQuery);
