(function($){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options= ["Español","English","Català"];
    var instances = M.FormSelect.init(elems, options);
  });
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready

})(jQuery); // end of jQuery name space
