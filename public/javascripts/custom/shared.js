
$(document).ready(function(){

  m_k_add_year_copyright();

});

function m_k_add_year_copyright() {
  var year = (new Date).getFullYear();
  $("#dataYear").text(year);
}
