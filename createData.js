var fs = require('fs');

var path = "/Server/Movies";
fs.writeFileSync('data.JSON', '[\n');

fs.readdir(path, function(err, items) { 
    for (var i=0; i<items.length-1; i++) {
        fs.appendFileSync('data.JSON', JSON.stringify(items[i])+",\n");
    }
    fs.appendFileSync('data.JSON', JSON.stringify(items[items.length-1])+"\n");
    fs.appendFileSync('data.JSON', "]")
});

