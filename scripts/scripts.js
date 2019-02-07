$(document).ready(function(){
    $(function () {
       $(document).scroll(function () {
         var $nav = $(".fixed-top");
         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
       });
     });
   })

   function scollDown() {
    var elmnt = document.getElementById("work");
    elmnt.scrollIntoView();
  }