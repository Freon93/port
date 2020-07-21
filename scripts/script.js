$(function () {
    $('#cvDownload').click(function () {
        $('#exampleModalLongTitle').text('Скачать резюме');
        $('#modal-body').html(`
            <a href="resume/Богдан Морозюк резюме.docx" download><img src="images/doc.png" alt="doc" class="dIcon"></a>
            <a href="resume/Богдан Морозюк резюме.pdf" download><img src="images/pdf.png" alt="pdf" class="dIcon"></a>`);
    });
    $('#email').click(function () {
        $('#exampleModalLongTitle').text('Мой e-mail');
        $('#modal-body').text(`bogdan.morozuk93@gmail.com`);
    });
    $('#phone').click(function () {
        $('#exampleModalLongTitle').text('Мой номер телефона');
        $('#modal-body').text(`073 151 38 58`);
    });

    $('[data-toggle="tooltip"]').tooltip();


    $('.certIcon').click(function () {
        let mobile = false;
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            mobile = true;
        }
        let certViewer = document.createElement('embed');
        let certViewerCloser = document.createElement('div');
        certViewer.setAttribute('class', 'certViewer');
        certViewerCloser.setAttribute('class', 'certViewerCloser');
        certViewer.setAttribute('src', $(this).attr('src').replace('.', window.location.protocol + '//' + window.location.hostname).replace('.jpg',
            mobile ? '.jpg' : '.pdf'));

        certViewerCloser.innerText = '<-Back';
        document.body.appendChild(certViewer);
        if (mobile) {
            document.getElementsByClassName('certViewer')[0].style.height = 'auto';
            document.getElementsByClassName('certViewer')[0].style.top = `calc(50% - ${$('.certViewer').eq(0).height() / 2}px)`;
            document.getElementsByClassName('content')[0].style.visibility = 'hidden';
            console.log(`calc(50% - ${$('.certViewer').eq(0).height() / 2}px)`);
        }
        document.body.appendChild(certViewerCloser);
        $('.certViewerCloser').click(function () {
            $('.certViewer').eq(0).remove();
            $(this).remove();
            document.getElementsByClassName('content')[0].style.visibility = 'visible';
        });
    });
});