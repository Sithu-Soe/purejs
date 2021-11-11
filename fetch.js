fetch('http://xtmm.live:8080/player_api.php?username=happylive&password=happylive&action=get_live_categories')
  .then((response) => {
      console.log(response, 'dddd')
    return response.json();
  })
  .then((data) => {
    console.log(data, 'dddgg');
  });