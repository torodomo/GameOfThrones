$(document).ready(function() {
    $('img').click(function() {
        var url = 'https://anapioficeandfire.com/api/houses/' + $(this).attr('houseid') + '/';
        // your code here (build up your url)
        $.get(url, function(res) {
            // your code here
            console.log(res.name, res.words, res.titles);
            var titles = "<p>Titles: " + res.titles[0];
            for (var i = 1; i < res.titles.length; i++) {
                titles += ", " + res.titles[i];
            }
            titles += "</p>";

            $('#info').html(
                "<p>Name: " + res.name + "</p>" +
                "<p>Words: " + res.words + "</p>" +
                titles
            )
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});