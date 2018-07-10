
$("#clearBtn").on("click", function(){
$("#searchBox").val('');
$("#searchResults").html('');
});
$("#searchBtn").on("click", function(){
var searchTerm= $("#searchBox").val();
//console.log(searchTerm);
var apiUrl="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
//console.log(apiUrl);

$.ajax({
url: apiUrl,
type: "GET",
async:false,
dataType:"json",
success: function(data, status, jqXHR){
//console.log(data);
$("#searchResults").html('');
for(var i=0;i<data[1].length;i++){
$("#searchResults").prepend("<div><div class='well' style='background-color:black;'><a target='_blank' href='"+data[3][i]+"'<h3 style='font-weight:bold;color:white;'>Matched Result : "+data[1][i]+"</h3><p style='font-weight:normal;color:white;'>Description :"+data[2][i]+"</p></a></div></div>");
}
},
error: function(){
alert("Sorry, we've encountered an error");
}

});
});
$('#searchBox').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#searchBtn').click();//Trigger search button click event
        }
    });

