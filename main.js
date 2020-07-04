console.log('hello')

$.get('https://api.twitch.tv/helix/users?client_id=b3f8o6lurrry9l9ymrx865fh798ae1', function(data) {
    console.log(data);
})