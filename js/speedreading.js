/**************************************************
  Speed Reading JS. Created by Danny Perich Lara 
  URL: www.dannyperichlara.cl
  GitHUB: https://github.com/dannyperichlara
***************************************************/

speedreading = {
    position: 0.260,
    dottime: 800,
    commatime: 300,
    defaulttime: 180,
    text: '',
    read: function(text) {
        if (typeof text != 'undefined') {
            if (typeof uywOd8xmBdQ7 != 'undefined') clearTimeout(uywOd8xmBdQ7);

            if ($('#dC9f8j2wzTrP:visible').length == 0) {
                $('#dC9f8j2wzTrP').fadeIn(500, function() {
                    $('#dC9f8j2wzTrP .up').animate({
                        left: speedreading.position * $('#dC9f8j2wzTrP .reader .word').width() + 2
                    }, 500);

                    $('#dC9f8j2wzTrP .down').animate({
                        left: speedreading.position * $('#dC9f8j2wzTrP .reader .word').width() + 2
                    }, 500);
                });
            }

            speedreading.text = text;
            speedreading.textarray = speedreading.text.replace(/\n/g, ' ').replace(/-/g, '- ').split(' ');
            speedreading.i = 0;
            speedreading.read();

            return;
        }

        if (speedreading.i < speedreading.textarray.length) {
            var text = speedreading.textarray[speedreading.i].trim();

            var length = text.length;

            $('.P2locZ08HGxi').html(text.substr(Math.floor(length * speedreading.position), 1));

            var leftposition = $('#dC9f8j2wzTrP .reader').width() * (1 - speedreading.position) + $('.P2locZ08HGxi').width() * 0.5 + 1;
            var redposition = $('#dC9f8j2wzTrP .reader').width() * speedreading.position - $('.P2locZ08HGxi').width() / 2;
            var rightposition = $('#dC9f8j2wzTrP .reader').width() * speedreading.position + $('.P2locZ08HGxi').width() * 1 + 1;
            var htmltext = '';
            htmltext += '<span class="left" style="right: ' + leftposition + 'px !important">' + text.substr(0, Math.floor(length * speedreading.position)) + '</span>';
            htmltext += '<span class="red" style="left: ' + redposition + 'px !important">' + text.substr(Math.floor(length * speedreading.position), 1) + '</span>';
            htmltext += '<span class="right" style="left: ' + rightposition + 'px !important">' + text.substr(Math.floor(length * speedreading.position) + 1, Math.floor(length * (1 - speedreading.position))) + ' </span>';

            if (speedreading.i == 1) {
                var time = 2000;
            } else {
                var actualtext = $('#dC9f8j2wzTrP .reader .word').text().trim();
                var lastchar = actualtext.substr(actualtext.length - 1, 1);

                switch (lastchar) {
                    case '.':
                        time = speedreading.dottime;
                        break;

                    case ',':
                    case '-':
                        time = speedreading.commatime;
                        break;

                    default:
                        time = actualtext.length * speedreading.defaulttime / 2;
                        if (time > speedreading.defaulttime) time = speedreading.defaulttime;
                        break;
                }

                if (actualtext.length > 12) time = speedreading.commatime;

            }


            uywOd8xmBdQ7 = setTimeout(function() {
                $('#dC9f8j2wzTrP .reader .word').html(htmltext);
                speedreading.i++;
                speedreading.read()
            }, time);
        } else {
            uywOd8xmBdQ7 = setTimeout(function() {
                speedreading.stop(1000);
            }, 1000);
        }
    },

    stop: function(fadetime) {
        if (typeof fadetime == 'undefined') fadetime = 0;
        clearTimeout(uywOd8xmBdQ7);
        $('#dC9f8j2wzTrP').fadeOut(fadetime);
        $('#dC9f8j2wzTrP .up, #dC9f8j2wzTrP .down').css('left', 0);
        $('#dC9f8j2wzTrP .reader .word').html('');
    },

    initialize: function () {
        if ($('#dC9f8j2wzTrP').length == 0) {
            var cssbase = '<style>@import url(http://fonts.googleapis.com/css?family=Roboto);#dC9f8j2wzTrP { font-family: "Roboto", Arial; font-weight: bold; background-color: rgba(0,0,0,0.95); color: #998; width: 100%; position: fixed; height: 100%; margin: 0; padding: 0; top: 0; left: 0; opacity: 1.00; display: none;}.P2locZ08HGxi { font-family: "Roboto", Arial; font-weight: bold; z-index: 200; color: #FF0; position: fixed; left: -50px;}#dC9f8j2wzTrP .white { width: 320px; height: 73px; position: absolute; top: calc(40% - 35px); top: -webkit-calc(40% - 35px); top: -moz-calc(40% - 35px); left: calc(50% - 160px); left: -webkit-calc(50% - 160px); left: -moz-calc(50% - 160px); background-color: #272822; border-radius: 4px;}#dC9f8j2wzTrP .reader { width: 300px; height: 50px; top: calc(40% - 25px); top: -webkit-calc(40% - 25px); top: -moz-calc(40% - 25px); left: calc(50% - 150px); left: -webkit-calc(50% - 150px); left: -moz-calc(50% - 150px); position: absolute; border-top: 2px solid #070802; border-bottom: 2px solid #070802; overflow: hidden; letter-spacing:0px;}#dC9f8j2wzTrP .reader .word { text-align: center; line-height: 50px; font-size: 24px; position: absolute; width: 100%; height: 100%; top:0; left:0;}#dC9f8j2wzTrP .reader .red { color: #EA0; /* f92672 */ /* E90 */ /* 66c22e */ position: absolute; left: calc(50% - 52px); left: -webkit-calc(50% - 52px); left: -moz-calc(50% - 52px); text-align: center;}#dC9f8j2wzTrP .reader .left { position: absolute;}#dC9f8j2wzTrP .reader .right { position: absolute;}#dC9f8j2wzTrP .reader .up { width: 2px; height: 8px; position: absolute; top: calc(50% - 26px); top: -webkit-calc(50% - 26px); top: -moz-calc(50% - 26px); left: 0%; background-color: #070802;}#dC9f8j2wzTrP .reader .down { width: 2px; height: 8px; position: absolute; top: calc(50% + 18px); top: -webkit-calc(50% + 18px); top: -moz-calc(50% + 18px); left: 0%; background-color: #070802;}</style>\n';            
            var htmlbase = '<div id="dC9f8j2wzTrP"><div class="black"></div><div class="white"></div><div class="reader"><div class="up"></div><div class="word"></div><div class="down"></div></div></div><div class="P2locZ08HGxi"></div>\n';
            $('body').append(cssbase + htmlbase);
        }



    }
}

$(document).ready(function() {
    speedreading.initialize();
       
    $(document).keyup(function(e) {
        if (e.which == 27) {
            speedreading.stop();
        }
    });

    $('#dC9f8j2wzTrP').click(function() {
        speedreading.stop();
    })
})