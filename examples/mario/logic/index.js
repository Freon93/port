let mainAudio = new Audio('audio/main.mp3');
let gravity = false;
let jump = false;
mainAudio.autoplay = true;

let marioJump = new Audio('audio/mario_jump.mp3');
marioJump.autoplay = false;

function Gravitation(game) {
    let mario = game.gFloor.mario;
    if (!jump && !gravity && Number(mario.el.style.bottom.replace('px', '')) > 65) {

        let flat = false;

        game.gFloor.tubas.forEach(function (tuba) {
            if (Number(tuba.el.style.left.replace('px', '')) <
                Number(mario.el.style.left.replace('px', '')) + 50 &&
                Number(tuba.el.style.left.replace('px', '')) + 110 >
                Number(mario.el.style.left.replace('px', ''))) {
                flat = 400 - Number(tuba.el.style.top.replace('px', ''));
            }
        });

        if (!flat) {
            flat = 65;
        }
        if (Number(mario.el.style.bottom.replace('px', '')) > flat) {
            gravity = true;
            let marioJumpDown = setInterval(function () {
                $('#mario').css('bottom', Number($('#mario').css('bottom').replace('px', '')) - 2 + 'px');
                console.log(Number($('#mario').css('bottom').replace('px', '')) + '     ' + flat)
                if (Number($('#mario').css('bottom').replace('px', '')) <= flat) {
                    clearInterval(marioJumpDown);
                    $('#mario').attr('src', 'images/mario_stay.png');

                    setTimeout(function () {
                        gravity = false;
                    }, 100);
                }
            }, 1);
        }
    }
}

$(function () {
    setInterval(function () {
        Gravitation(game);
    });

    let game = new Game('plitka.png', 'game');
    $('.floor').css('background-position', '0px 0px');
    $(document).on('keypress', function (e) {


    });
    let down = false;
    let timer;
    let itter = 0;
    let marioJumpUp;
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 32 && !gravity) {
            jump = true;
            marioJump.play();
            if ($('#mario').attr('src') !== 'images/mario_jump.png') {

                $('#mario').attr('src', 'images/mario_jump.png');

                let flat = Number($('#mario').css('bottom').replace('px', ''));
                marioJumpUp = setInterval(function () {
                    $('#mario').css('bottom', Number($('#mario').css('bottom').replace('px', '')) + 2 + 'px');
                    if (++itter >= 80 || Number($('#mario').css('bottom').replace('px', '')) >= 355) {
                        clearInterval(marioJumpUp);
                        setTimeout(function () {
                            jump = false;
                        }, 100);

                        let marioJumpDown = setInterval(function () {


                            if (--itter <= 0) {
                                clearInterval(marioJumpDown);
                                $('#mario').attr('src', 'images/mario_stay.png');
                            }
                        }, 1);
                    }
                }, 1);
            }
        }
        if (down) return;
        down = true;


        let marioWalk;

        timer = setInterval(function () {

            marioWalk = game.gFloor.move(e);
            switch (marioWalk) {
                case -1:
                    mainAudio.play();
                    if ($('#mario').attr('src') !== 'images/mario.gif' && $('#mario').attr('src') !== 'images/mario_jump.png') {
                        $('#mario').attr('src', 'images/mario.gif');
                    }
                    if (Number($('#mario').css('left').replace('px', '')) >= 300) {
                        $('.floor').eq(0).css('background-position', Number($('.floor').css('background-position').split('px ')[0]) + marioWalk + 'px 0px');
                        $('.cloud').each(function (cloud) {

                            $(this).css('left', Number($(this).css('left').replace('px', '')) - 1 + 'px');
                            if (Number($(this).css('left').replace('px', '')) < -900) {
                                $(this).remove();
                            }
                        });
                        $('.grass').each(function (cloud) {

                            $(this).css('left', Number($(this).css('left').replace('px', '')) - 1 + 'px');
                            if (Number($(this).css('left').replace('px', '')) < -900) {
                                $(this).remove();
                            }
                        });
                        $('.tuba').each(function (cloud) {

                            $(this).css('left', Number($(this).css('left').replace('px', '')) - 1 + 'px');
                            if (Number($(this).css('left').replace('px', '')) < -900) {
                                $(this).remove();
                            }
                        });
                    } else {
                        $('#mario').css('left', Number($('#mario').css('left').replace('px', '')) - marioWalk + 'px');
                    }
                    break;
                case 1:
                    if ($('#mario').attr('src') !== 'images/mario.gif' && $('#mario').attr('src') !== 'images/mario_jump.png') {
                        $('#mario').attr('src', 'images/mario.gif');
                    }
                    if (Number($('#mario').css('left').replace('px', '')) > 0) {
                        $('#mario').css('left', Number($('#mario').css('left').replace('px', '')) - marioWalk + 'px');
                    }
                    break;
                case 0:

                    break
                default:
            }

        }, 1);

    }, false);

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 65 || e.keyCode === 1060 || e.keyCode === 68 || e.keyCode === 1042) {
            down = false;
            $('#mario').attr('src', 'images/mario_stay.png');
            clearInterval(timer);
        }
        if (e.keyCode === 32) {

            clearInterval(marioJumpUp);
            setTimeout(function () {
                jump = false;
            }, 100);
            let marioJumpDown = setInterval(function () {

                if (--itter <= 0) {
                    clearInterval(marioJumpDown);
                    $('#mario').attr('src', 'images/mario_stay.png');
                }
            }, 1);

        }
    }, false);
});