var code = fetch('https://api.twitch.tv/kraken/user')

console.log('hello')
console.log(code)

fetch('http://api.twitch.tv/kraken/user')
  .then(response => response.json())
  .then(data => console.log(data));