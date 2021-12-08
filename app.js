jQuery(function ($) {

    // GLOBALS
    let current_ost;
    let $current_time = $('#current_time');
    let $ost_image = $('#ost_image');
    let $ost_list = $('#ost_list');
    let $player_title = $('#player_title');
    let $player_next = $('#player_next');

    // CLOCK
    (function clock() {
        $current_time.html(moment().format("h:mm:ss a"));
        setTimeout(clock, 1000);
    })();

    let player = new Plyr('#player', {
        controls: ['play', 'mute', 'volume'],
        invertTime: false,
        hideControls: false,
        volume: 0.5,
    });

    let update_player = function () {

        let list = $ost_list.val();



        // remove .mp3 and number from name
        let name = current_ost.replace('.mp3', '')
        name = name.split(' ');
        name.shift();
        name = name.join(' ');

        $player_title.html(name);

        player.source = {
            type: 'audio',
            sources: [{src: 'ost/' + list + '/' + current_ost, type: 'audio/mp3'}],
        };

        player.play();

        // update image

        let image = list.split('_').shift();
        $ost_image.attr('src', 'images' + image + '.jpg');
    }

    // event
    player.on('ended', update_player);

    // menus
    $ost_list.on('change', update_player);

    // next button
    $player_next.on('click', update_player);

    // init effect
    Plyr.setup('.fx-player', {
        controls: ['play', 'mute', 'volume', 'background #000'],
        invertTime: false,
        hideControls: false,
        volume: 0.5,
    });

    // start
    update_player();

});
