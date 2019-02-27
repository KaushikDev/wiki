
$("#clearBtn").on("click", function(){
$("#searchBox").val('');
$("#searchResults").html('');
});
$("#searchBtn").on("click", function(){
var searchTerm= $("#searchBox").val();

if(searchTerm != ''){
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
//$("#searchResults").prepend("<div class='card'><a target='_blank' href='"+data[3][i]+"'<h3'>Matched Result : "+data[1][i]+"</h3><p>Description :"+data[2][i]+"</p></a></div>");
$("#searchResults").prepend("<div class='card'><h2>"+data[1][i]+"</h2><a target='_blank' href='"+data[3][i]+"'<p>"+data[2][i]+"</p></a></div>");
}
},
error: function(){
alert("Sorry, we've encountered an error. Check your internet connection or try again in few minutes.");
}

});

}
else{
alert("Your search term is empty. Please enter your search term.");

}


});
$('#searchBox').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#searchBtn').click();//Trigger search button click event
        }
    });

