$(document).ready(function () {
  var view = 0;
  var load = function () {
    console.log(view);
    if (!view) {
      $('.b-planning-wrapper').css("display", "block");
      $('.b-planning-table-wrapper').css("display", "none");
    } else {
      $('.b-planning-wrapper').css("display", "none");
      $('.b-planning-table-wrapper').css("display", "block");
    }
  };
  $('#listView').click(function () {
    view = 0;
    load();
  });
  $('#tableView').click(function () {
    view = 1;
    load();
  });
});