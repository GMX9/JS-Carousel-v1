<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.js"
  integrity="sha256-fNXJFIlca05BIO2Y5zh1xrShK3ME+/lYZ0j+ChxX2DA="
  crossorigin="anonymous"></script>
<style>

.container{
 float:left; height:240px; width:90%;  display: flex; flex-wrap: nowrap; overflow-x: auto; overflow-x:hidden; 
}

.new-adv{
  float:left; width:32%; height:240px; border:1px solid #4b93a2; margin-left:1%; flex: 0 0 auto; display: inline-block;
}

</style>
</head>
<body>


<!-- Your containers -->
<div class="block white mini">
  <div class="containerx" style="margin:0 auto; height:240px; width:92%; "> 
<!---->

<!--Previous button-->
   <div class="left-arr" id="left-n" style="float:left; width:5%; height:240px;  ">
          <img src="images/prev.png" style="margin-top:114px;" />
   </div>
<!---->

<!--Items container-->
     <div class="container"> 
       <div class="new-adv"></div>
       <div class="new-adv"></div>
       <div class="new-adv"></div>
       <div class="new-adv"></div>
       <div class="new-adv"></div>

    </div>
<!---->

<!--Right button-->
   <div class="right-arr" id="right-n" style="float:left; width:5%; height:240px; ">
     <img src="images/next.png'" style="margin-top:114px;" />
   </div>
<!---->

<!--End of your containers-->
  </div>
</div> 
<!---->


<script type="text/javascript">

    var nr_of_img = $('.new-adv').length;
    var position = 1;

    /*DETETAR TAMANHO DA CAIXA E PASSA ESSES PXS*/
    var width = $('.new-adv').width();

    var howmuch = width * nr_of_img;

  $('#right-n').click(function() {


        if (position == nr_of_img)
        {
           event.preventDefault();
           $('.containerxz').animate({
           scrollLeft: 0
           }, "slow");

          position = 1;
        }
        else
        {  
       
           event.preventDefault();
           $('.containerxz').animate({
           scrollLeft: "+="+width+"px"
           }, "slow");
           
          position++;
        }
   });

   $('#left-n').click(function() {
        if (position == nr_of_img)
        {
          // move all the way to the last image
           position = nr_of_img;
        }
        else
        {  
          event.preventDefault();
          $('.containerxz').animate({
          scrollLeft: "-="+width+"px"
          }, "slow");

        }
  });
    
   
</script>

</body>
</html>

