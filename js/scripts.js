$(document).ready(function(){
  $(".theForm").submit(function(event){
    event.preventDefault();
    $(".theForm").hide();
    var textInput = document.getElementById("epicodus").value;
    console.log(textInput);

    if(document.getElementById('orange').checked == true) {
    $("#ifOrange").show();
  } else if(textInput == 'epicodus') {
    $("#ifEpicodus").show();
  } else {
    $("#ifElse").show();
  }
});

});
