$.ajax({
    url: "data.json",
    //force to handle it as text
    dataType: "text",
    success: function(data) {

        //data downloaded so we call parseJSON function 
        //and pass downloaded data
        var json = $.parseJSON(data);
        //now json variable contains data in json format
        //let's display a few items
        for (var i=0;i<json.length;++i)
        {
            $('#movies').append('<li>' + '<a href=Movies/' + json[i] + '> ' + json[i] + ' <a></li>');
        }
    }
});

