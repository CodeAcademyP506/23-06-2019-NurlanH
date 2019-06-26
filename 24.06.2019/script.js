// Titleye klik olunanda sort edir table-i



$(".myBtn").click(function(){
   var dlt
   var movieName = $(".myTitle").val()
   var movieRating = $(".myRating").val()
   if(movieName != "" && movieRating !=""){
       if(movieRating <= 10){
        $("table tbody").append("<tr><td>"+ movieName + "</td>" + "<td> "+ movieRating + "</td>" + "<td> <button>Delete</button></td>" + "</tr>");
        $(".myTitle").val(null)
        $(".myRating").val(null)
      }else{
            alert("Zehmet olmasa 0 ile 10 arasi bir reqem daxil edin")
       }
   }else{
       alert("Siz bir film adi daxil etmemisiniz");
   }

   change = document.querySelectorAll(" table tbody tr")
   dlt = document.querySelectorAll(" table tbody td button");
    for(var i = 0; i< dlt.length; i++){
        dlt[i].setAttribute("class","deleteBtn")
        dlt[i].addEventListener("click",function(){
            $(this).parents("tr").remove();
        })
        
        // find clicked  row index
        change[i].addEventListener("click",function(){
            var trIndex = $(this).index()
            // console.log(trIndex)
        })
    }

})



$(".myT").click(function sortTable(table, order) {
  var asc = order === 'asc',
  
      tbody = $("table").find('tbody');

  tbody.find('tr').sort(function(a, b) {
      if (asc) {  
          return $('td:first', b).text().localeCompare($('td:first', a).text());
      } else {
          return $('td:first', a).text().localeCompare($('td:first', b).text());
      }
  }).appendTo(tbody);
})

