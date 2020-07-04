$(document).ready(function () {
    console.log('hello')

    $.ajax({
        dataType: 'json',
        url: 'https://api.twitch.tv/helix/users',
        headers: {
            'Client-Id': 'b3f8o6lurrry9l9ymrx865fh798ae1',
            'token_type': 'bearer'
        }
    })
});