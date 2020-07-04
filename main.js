fetch('https://api.twitch.tv/kraken/user')
  .then(response => response.json())
  .then(data => console.log(data));