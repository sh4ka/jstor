$(document).ready(function() {
    var btapp = new Btapp();
    if(btapp.connect()){
        console.log('connected')
    }

// load a torrent
    var url = 'http://vodo.net/media/torrents/Deadside.Pilot.2012.720p.x264-VODO.torrent';
    btapp.get('add');
})