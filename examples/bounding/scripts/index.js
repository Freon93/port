let isMoving = false;
let isDrawing = false;
let mouseCoords = [];
let pictureCoords = [];
let imgRealSize = [];
let zoom = 0;
let startResizing = [];
let rectClick = false;
let resizeBoxTop = false;
let resizeBoxBottom = false;
let startSize = [];
let startRectX = [];
let startRectY = [];
let results;
let picNumber;

function deletePx(val) {
    return Number(val.replace('px', ''));
}

function findText(el) {
    return $('.labelText').each(function (i) {

        if (el.attr('x') === $(this).attr('x') && el.attr('y') === $(this).attr('y')) {

            return $(this);
        }
    });
}

$(function () {
    // setInterval(function () {
    //     console.log(isDrawing);
    // },1000);
    window.oncontextmenu = function () {
        return false;
    }
    $('[data-toggle="tooltip"]').tooltip();
    $('#new_work').click(function () {
        $('#redactor').html('<img src="images/loading.gif" class="loading">');

        picNumber = Math.round(Math.random() * (datasetPicturelLinks.length - 1));
        let img = new Image();
        img.onload = function () {
            imgRealSize = [img.width, img.height];
            document.getElementById('redactor').style.background = `url('dataset/${datasetPicturelLinks[picNumber]}')`;
            $.ajax({
                url: webAdress + '/examples/bounding/get_data.php',
                type: 'POST',
                async: false,
                data: {
                    'picName': `${datasetPicturelLinks[picNumber]}`
                },
                success: function (responce) {
                    $('#redactor').html('');
                    let picSizeX
                    if (window.innerWidth * 0.8 / imgRealSize[0] <= (window.innerHeight - 54) / imgRealSize[1]) {
                        picSizeX = window.innerWidth * 0.8;

                        document.getElementById('redactor').style.backgroundSize = `${picSizeX}px`;
                    } else {

                        let picSizeY = window.innerHeight - 54;
                        picSizeX = picSizeY * imgRealSize[0] / imgRealSize[1];
                        document.getElementById('redactor').style.backgroundSize = `${picSizeX}px`;
                    }
                    document.getElementById('redactor').style.backgroundPosition = '0 50px';
                    if (responce !== 'no') {
                        JSON.parse(responce).animals.forEach(function (box) {
                            let x = box.coordX / (imgRealSize[0] / picSizeX);
                            let y = box.coordY / (imgRealSize[0] / picSizeX) + 50;
                            let width = box.width / (imgRealSize[0] / picSizeX);
                            let height = box.height / (imgRealSize[0] / picSizeX);
                            $('#redactor').append(`<rect x="${x}" y="${y}" width="${width}" height="${height}" class="bounding"/>`);
                            $('#redactor').append(`<text x="${x}" y="${y}" class="labelText">${box.label}</text>`);
                            $('#redactor').html($('#redactor').html());
                        });
                    }
                    $('#redactor').trigger('click');
                }
            });

            zoom = 0;
        };
        img.src = `dataset/${datasetPicturelLinks[picNumber]}`;

    });
    $('#redactor').on('mousedown', function (e) {
        $('.bounding').each(function (i) {
            startRectX[i] = $(this).attr('x');
            startRectY[i] = $(this).attr('y');
        });

        mouseCoords = [e.clientX, e.clientY];
        pictureCoords = [deletePx(document.getElementById('redactor').style.backgroundPositionX),
            deletePx(document.getElementById('redactor').style.backgroundPositionY)];
        if (e.which === 3) {

            isMoving = true;
        }

        if (e.which === 1 && !rectClick) {
            $('.bounding').removeClass('active');
            $('#deleteBox').css('display', 'none');
            if (!rectClick) {
                $('.point').remove();
            }
            isDrawing = true;
            $('#redactor').append(`<rect x="${mouseCoords[0]}" y="${mouseCoords[1]}" width="0" height="0" class="bounding"/>`);
            $('#redactor').append(`<circle cx="0" cy="0" r="0" class="point top" />`);
            $('#redactor').append(`<circle cx="0" cy="0" r="0" class="point bottom" />`);
            $('#redactor').append(`<text x="${mouseCoords[0]}" y="${mouseCoords[1]}" class="labelText"></text>`);
            $('#redactor').html($('#redactor').html());
            $('.bounding').on('mousedown', function (e) {
                isDrawing = false;
                rectClick = true;
                $('#deleteBox').css('display', 'block');
            });

            $('.bounding').on('mouseup', function (e) {
                $('.bounding').removeClass('active');
                $(this).addClass('active');
                $('#deleteBox').css('display', 'block');


                rectClick = false;
                //$('#redactor').html($('#redactor').html());
            });
            $('.point').on('mousedown', function (e) {
                // isDrawing = false;
                rectClick = true;

            });
            $('.point').on('mouseup', function (e) {
                // isDrawing = false;
                rectClick = false;

            });
            $('.top').on('mousedown', function (e) {
                resizeBoxTop = true;
                startResizing = [e.clientX, e.clientY];
                startSize = [Number($('.active').attr('width')), Number($('.active').attr('height'))];
            });
            $('.bottom').on('mousedown', function (e) {
                resizeBoxBottom = true;
                startResizing = [e.clientX, e.clientY];
                startSize = [Number($('.active').attr('width')), Number($('.active').attr('height'))];
            });

            $('.top').on('mouseup', function () {
                resizeBoxTop = false;
            });
            $('.bottom').on('mouseup', function () {
                resizeBoxBottom = false;
            });

            $('.bottom').on('mousedown', function () {

            });
            $('.bottom').on('mouseup', function () {

            });
            $('.bottom').on('mousemove', function () {

            });
        }
    });

    $('#redactor').on('mouseup', function (e) {
        if (e.which === 3) {
            isMoving = false;
        }
        if (e.which === 1) {
            isDrawing = false;
            if (Number($('.bounding').last().attr('width')) > 0 && Number($('.bounding').last().attr('height') > 0)) {
                $('.bounding').last().css('cursor', 'pointer');
                let rx = $('.active').last().attr('x');
                let ry = $('.active').last().attr('y');
                let rw = $('.active').last().attr('width');
                let rh = $('.active').last().attr('height');
                $('.top').attr('cx', rx);
                $('.top').attr('cy', ry);
                $('.top').attr('r', 5);
                $('.bottom').attr('cx', Number(rx) + Number(rw));
                $('.bottom').attr('cy', Number(ry) + Number(rh));
                $('.bottom').attr('r', 5);
                $('#deleteBox').css('display', 'block');
            } else {
                $('.bounding').last().remove();
                $('.labelText').last().remove();

            }
        }
    });
    $('#redactor').on('mousemove', function (e) {
        if (resizeBoxTop) {

            if ($('.bottom').attr('cx') - e.clientX > 5) {
                $('.top').attr('cx', e.clientX);
                $('.active').attr('x', e.clientX);
                $('.active').attr('width', startSize[0] - (e.clientX - startResizing[0]));
            } else {
                $('.top').attr('cx', $('.bottom').attr('cx') - 5);
                $('.active').attr('x', $('.bottom').attr('cx') - 5);
                $('.active').attr('width', 5);
            }
            if ($('.bottom').attr('cy') - e.clientY > 5) {
                $('.top').attr('cy', e.clientY);

                $('.active').attr('y', e.clientY);

                $('.active').attr('height', startSize[1] - (e.clientY - startResizing[1]));
            } else {
                $('.top').attr('cy', $('.bottom').attr('cy') - 5);

                $('.active').attr('y', $('.bottom').attr('cy') - 5);

                $('.active').attr('height', 5);
            }
            $('.labelText').eq($('.bounding').index($('.active').eq(0))).attr('x', $('.active').attr('x'));
            $('.labelText').eq($('.bounding').index($('.active').eq(0))).attr('y', $('.active').attr('y'));
        }
        if (resizeBoxBottom) {
            if (e.clientX - $('.top').attr('cx') > 5) {
                $('.bottom').attr('cx', e.clientX);
                $('.active').attr('width', startSize[0] + (e.clientX - startResizing[0]));
            } else {
                $('.bottom').attr('cx', $('.top').attr('cx') * 1 + 5);
                $('.active').attr('width', 5);
            }
            if (e.clientY - $('.top').attr('cy') > 5) {
                $('.bottom').attr('cy', e.clientY);


                $('.active').attr('height', startSize[1] + (e.clientY - startResizing[1]));
            } else {
                $('.bottom').attr('cy', $('.top').attr('cy') * 1 + 5);


                $('.active').attr('height', 5);
            }
        }
        if (isMoving) {
            let diffs = [e.clientX - mouseCoords[0], e.clientY - mouseCoords[1]];
            $('.bounding').each(function (i) {
                $(this).attr('x', Number(startRectX[i]) + diffs[0]);
                $(this).attr('y', Number(startRectY[i]) + diffs[1]);
                $('.labelText').eq(i).attr('x', $(this).attr('x'));
                $('.labelText').eq(i).attr('y', $(this).attr('y'));
            });
            document.getElementById('redactor').style.backgroundPositionX = `${pictureCoords[0] + diffs[0]}px`;
            document.getElementById('redactor').style.backgroundPositionY = `${pictureCoords[1] + diffs[1]}px`;
            if (document.getElementsByClassName('active').length > 0) {
                $('.top').attr('cx', $('.active').attr('x'));
                $('.top').attr('cy', $('.active').attr('y'));
                $('.bottom').attr('cx', Number($('.active').attr('x')) + Number($('.active').attr('width')));
                $('.bottom').attr('cy', Number($('.active').attr('y')) + Number($('.active').attr('height')));
            }

        }
        if (isDrawing) {


            if (e.clientX > mouseCoords[0]) {
                $('.bounding').last().attr('width', e.clientX - mouseCoords[0]);
            } else if (e.clientX < mouseCoords[0]) {
                $('.bounding').last().attr('width', mouseCoords[0] - e.clientX);
                $('.bounding').last().attr('x', e.clientX);
            } else {
                $('.bounding').last().attr('x', mouseCoords[0]);
                $('.bounding').last().attr('width', 0);
            }
            if (e.clientY > mouseCoords[1]) {
                $('.bounding').last().attr('height', e.clientY - mouseCoords[1]);
            } else if (e.clientY < mouseCoords[1]) {
                $('.bounding').last().attr('height', mouseCoords[1] - e.clientY);
                $('.bounding').last().attr('y', e.clientY);
            } else {
                $('.bounding').last().attr('y', mouseCoords[1]);
                $('.bounding').last().attr('height', 0);
            }

        }
    });
    $('#redactor').on('wheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            if (zoom <= 10) {
                let startPosX = deletePx(document.getElementById('redactor').style.backgroundPositionX);
                let startPosY = deletePx(document.getElementById('redactor').style.backgroundPositionY);
                let x1 = e.clientX - startPosX;
                let y1 = e.clientY - startPosY;
                let w1 = deletePx(document.getElementById('redactor').style.backgroundSize);
                let h1 = imgRealSize[1] * w1 / imgRealSize[0];
                let w2 = w1 * 1.2;
                let h2 = h1 * 1.2;
                document.getElementById('redactor').style.backgroundSize = `${w2}px`;
                zoom++;
                let x2 = w2 * x1 / w1;
                let y2 = h2 * y1 / h1;
                document.getElementById('redactor').style.backgroundPositionX = `${startPosX + (x1 - x2)}px`;
                document.getElementById('redactor').style.backgroundPositionY = `${startPosY + (y1 - y2)}px`;
                $('.bounding').each(function (i) {


                    $(this).attr('width', $(this).attr('width') * 1.2);
                    $(this).attr('height', $(this).attr('height') * 1.2);

                    $(this).attr('x', (Number($(this).attr('x') - startPosX) * 1.2) + deletePx(document.getElementById('redactor').style.backgroundPositionX));
                    $(this).attr('y', (Number($(this).attr('y') - startPosY) * 1.2) + deletePx(document.getElementById('redactor').style.backgroundPositionY));
                    $('.labelText').eq(i).attr('x', $(this).attr('x'));
                    $('.labelText').eq(i).attr('y', $(this).attr('y'));
                });
                if (document.getElementsByClassName('active').length > 0) {
                    $('.top').attr('cx', $('.active').attr('x'));
                    $('.top').attr('cy', $('.active').attr('y'));
                    $('.bottom').attr('cx', Number($('.active').attr('x')) + Number($('.active').attr('width')));
                    $('.bottom').attr('cy', Number($('.active').attr('y')) + Number($('.active').attr('height')));
                }
            }
        } else {
            if (zoom >= -10) {
                let startPosX = deletePx(document.getElementById('redactor').style.backgroundPositionX);
                let startPosY = deletePx(document.getElementById('redactor').style.backgroundPositionY);
                let x1 = e.clientX - startPosX;
                let y1 = e.clientY - startPosY;
                let w1 = deletePx(document.getElementById('redactor').style.backgroundSize);
                let h1 = imgRealSize[1] * w1 / imgRealSize[0];
                let w2 = w1 / 1.2;
                let h2 = h1 / 1.2;
                document.getElementById('redactor').style.backgroundSize = `${w2}px`;
                zoom--;
                let x2 = w2 * x1 / w1;
                let y2 = h2 * y1 / h1;
                document.getElementById('redactor').style.backgroundPositionX = `${startPosX + x1 - x2}px`;
                document.getElementById('redactor').style.backgroundPositionY = `${startPosY + y1 - y2}px`;
                $('.bounding').each(function (i) {


                    $(this).attr('width', $(this).attr('width') / 1.2);
                    $(this).attr('height', $(this).attr('height') / 1.2);

                    $(this).attr('x', (Number($(this).attr('x') - startPosX) / 1.2) + deletePx(document.getElementById('redactor').style.backgroundPositionX));
                    $(this).attr('y', (Number($(this).attr('y') - startPosY) / 1.2) + deletePx(document.getElementById('redactor').style.backgroundPositionY));
                    $('.labelText').eq(i).attr('x', $(this).attr('x'));
                    $('.labelText').eq(i).attr('y', $(this).attr('y'));
                });
                if (document.getElementsByClassName('active').length > 0) {
                    $('.top').attr('cx', $('.active').attr('x'));
                    $('.top').attr('cy', $('.active').attr('y'));
                    $('.bottom').attr('cx', Number($('.active').attr('x')) + Number($('.active').attr('width')));
                    $('.bottom').attr('cy', Number($('.active').attr('y')) + Number($('.active').attr('height')));
                }
            }
        }

    });

    $('#deleteBox').click(function () {
        let text = $('.labelText').eq($('.bounding').index($('.active').eq(0)));
        text.remove();
        $('.active').remove();
        $('#deleteBox').css('display', 'none');
        $('.point').remove();
    });
    $('.label').click(function () {
        if (document.getElementsByClassName('active').length > 0) {
            let text = $('.labelText').eq($('.bounding').index($('.active').eq(0)));
            let label = $(this).attr('alt');
            text.attr('x', $('.active').eq(0).attr('x'));
            text.attr('y', $('.active').eq(0).attr('y'));

            text.text(label);


        }
    });
    $('#save').click(function () {
        $(this).attr('style', "background: url(images/loading.gif)");
        $(this).text('\xa0\xa0\xa0');
        results = new Results(datasetPicturelLinks[picNumber]);
        $('.bounding').each(function (i) {
            let zoom = imgRealSize[0] / deletePx(document.getElementById('redactor').style.backgroundSize);
            let pictureStartX = deletePx(document.getElementById('redactor').style.backgroundPositionX);
            let pictureStartY = deletePx(document.getElementById('redactor').style.backgroundPositionY);
            let label = $('.labelText').eq(i).text();
            let coordX = ($(this).attr('x') - pictureStartX) * zoom;
            let coordY = ($(this).attr('y') - pictureStartY) * zoom;
            let width = $(this).attr('width') * zoom;
            let height = $(this).attr('height') * zoom;
            let animal = new Animal(label, coordX, coordY, width, height);
            results.addAnimal(animal);
        });
        $.ajax({
            url: webAdress + '/examples/bounding/save_data.php',
            type: 'POST',
            async: true,
            data: {
                'picName': `${results.picName}`,
                'data': `${JSON.stringify(results)}`
            },
            success: function (response) {
                $('#save').attr('style', "");
                $('#save').text('Save');
            }
        });
    });
});