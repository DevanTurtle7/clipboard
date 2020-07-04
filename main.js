$(document).ready(function () {
    console.log('hello')

    $.ajax({
        dataType: 'json',
        url: 'https://id.twitch.tv/oauth2/authorize',
        headers: {
            'client_id': 'b3f8o6lurrry9l9ymrx865fh798ae1',
            'response_type': 'code',
            'redirect_uri' : 'https://devanturtle7.github.io/clipboard/&scope=clips:edit',
        }
    })


    $.ajax({
        dataType: 'json',
        url: 'https://api.twitch.tv/helix/users',
        headers: {
            'Authorization': 'Bearer mytoken',
            'Client-Id': 'b3f8o6lurrry9l9ymrx865fh798ae1',
        }
    })
});