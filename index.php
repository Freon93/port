<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Богдан Морозюк, портфолио, разработчик, JavaScript, JS, PHP">
    <title>Богдан Морозюк - портфолио</title>
    <link rel="icon" href="favicon.ico">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="./bootstrap/bootstrap.min.css">
    <script src="bootstrap/jquery-3.5.1.slim.min.js"></script>
    <script src="./bootstrap/popper.min.js"></script>
    <script src="./bootstrap/bootstrap.min.js"></script>
    <!--    <script src="./scripts/jquery-3.5.1.js"></script>-->
    <script src="./scripts/script.js"></script>
</head>
<body>

<!-- Modal -->
<div class="modal fade" id="modalCv" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<div class="content mt-5 mb-5 container-fluid">
    <div class="row" id='summary'>
        <div class="col-1 p-0 m-0"></div>

        <div class="col-3 bg-light text-dark p-3 mr-3 me rounded text-center h4 shadow-sm">
            <img src='./images/me.jpg' class="mb-3 border border-info photo" alt="Богдан Морозюк">
            <p class="mb-3 name">Богдан Морозюк</p>
            <p class="contacts mb-3">
                <span class="ms">
                    <a href="https://www.linkedin.com/in/bohdan-moroziuk-a30047183/" target="_blank"><img
                                src="./images/linkedin.png" class="contacts" alt="LinkedIn"></a>
                    <img src="./images/gmail.png" class="contacts" alt="Email" id="email" data-toggle="modal"
                         data-target="#modalCv">
                </span>
                <span class="ms">
                    <img src="./images/telegram.png" class="contacts" alt="Телефон" id="phone" data-toggle="modal"
                         data-target="#modalCv">
                </span>
            </p>
            <p>
                <button id="cvDownload" type="button" class="btn btn-secondary cv" data-toggle="modal"
                        data-target="#modalCv">Скачать резюме
                </button>
            </p>
        </div>

        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Общая информация</p>
            <p class="text-justify">&nbsp;&nbsp;&nbsp;&nbsp;Добрый день, меня зовут Богдан. Сейчас я нахожусь в поиске
                вакансии Web Developer.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Основные языки программирования, которыми владею - это JavaScript, PHP и Python
                (детальнее про мои <a href="#skills">скилы</a> ниже).
                На данный момент мне одинаково интересно развиваться в любом из них или выбрать только один, который в
                дальнейшем буду изучать углублено.
                Из технологий больше всего меня интересуют Web разработка и Data Science, но вторая - это скорее
                хобби.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Что касается моего опыта (детальнее тоже <a href="#experience">внизу</a>), то я
                имею 1,5 года
                практичесской
                разработки разнообразных функциональностей в виде Web проектов
                на заказ для внешних клиентов и для использования внутри компании, в которой работал. Большинство
                заказов, которые выполнял были
                связаны с деятельностью компании - предоставлением услуг Data Annotation in Machine Learning (AI pre-study). Эта сфера
                предполагает графичесскую
                аннотацию объектов разной сложности на разного рода графичесских изображениях, от простых фотографий
                объектов, до МРТ
                и Lidar 3d сьемки (примеры тоже есть <a href="#examples">ниже</a>). Это, в свою очередь, предполагает,
                написание
                функциональности для работы с векторной
                (SVG) или растровой (Canvas) графикой с дальнейшей трансформацией данных, чаще всего, в формат JSON или,
                что реже, SQL, XML, CSV,
                SHP, PTC и другие. Также, выполнял более простые, но более масштабные проекты такие, как внутренний сайт
                для планирования отпусков,
                сайт для оценки компетенций сотрудников и для сдачичи проф. тестов и другие более мелкие. Все проекты
                делал полностью сам, от
                настройки внешнего вида интерфейса до написания запросов к базе данных так, как в компании был
                единственным Web разработчиком. И эту страницу тоже сделал самостоятельно с нуля, от настройки хостинга
                до HTML верстки.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Практичесские задачи выполнял на JavaScript и PHP. Python только изучал для
                себя. Посещал курсы SkillUp по PHP и CBS по Python.<br>
                &nbsp;&nbsp;&nbsp;&nbsp;Сейчас активно изучаю фреймворк React и препроцессоры Less и Sass. Не имею
                коммерческого опыта в них, но понимаю, что сейчас для рынка они достаточно важны.<br>
                По всем языкам и технологиям, которые детально расписаны ниже имею сертификаты от ресурсов для
                проверки уровня знаний
                (они все тоже есть <a href="#certs_block">внизу</a>).
        </div>
        <div class="col-1 p-1 pl-2 side offset-10">
            <a href="#summary">

                <img src='./images/me.jpg'
                     class="mb-3 border border-info item"
                     alt="Общая информация" data-toggle="tooltip"
                     data-placement="left"
                     title="Общая информация"></a>
            <a href="#skills">

                <img src='./images/skills.jpg'
                     class="mb-3 border border-info item"
                     alt="Мои навыки" data-toggle="tooltip"
                     data-placement="left"
                     title="Мои навыки"></a>
            <a href="#experience">

                <img src='./images/experience.jpg'
                     class="mb-3 border border-info item"
                     alt="Опыт работы" data-toggle="tooltip"
                     data-placement="left"
                     title="Опыт работы"></a>
            <a href="#education">

                <img src='./images/education.jpg'
                     class="mb-3 border border-info item"
                     alt="Образование" data-toggle="tooltip"
                     data-placement="left"
                     title="Образование"></a>
            <a href="#certs_block">

                <img src='./images/certificate.jpg'
                     class="mb-3 border border-info item"
                     alt="Мои сетрификаты" data-toggle="tooltip"
                     data-placement="left"
                     title="Мои сетрификаты"></a>
            <a href="#examples">

                <img src='./images/examples.jpg'
                     class="mb-3 border border-info item"
                     alt="Примеры работ" data-toggle="tooltip"
                     data-placement="left"
                     title="Примеры работ"></a>
        </div>
    </div>
    <div class="row mt-3" id="skills">
        <div class="col-4 p-0 m-0 ml-3"></div>


        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Мои навыки</p>
            <p class="text-justify">
            <ul>
                <li>HTML, CSS, Bootstrap, адаптивная верстка;</li>
                <li>Препроцессоры LESS/SASS - изучаю;</li>
                <li>JavaScript (ES6), jQuery, AJAX, JSON, работал с библиотекой three.js;</li>
                <li>PHP, Python;</li>
                <li>SQL (MySQL, SQLite);</li>
                <li>Понимание принципов ООП, паттернов проектирования;</li>
                <li>Git, JIRA</li>
                <li>Опыт разработки Google Chrome Extension;</li>
                <li>Минимальный опыт в SEO оптимизации (например этот сайт вы можете найти на первой странице
                    результатов поиска Google по запросам "Богдан Морозюк разработчик", "Богдан Морозюк JavaScript" и т.
                    д.);
                </li>
                <li>Базовые навыки администрирования Linux, веб серверов Apache, OpenServer;</li>
                <li>Фреймворки: JavaScript - React, PHP - Yii2, Python - Django - базовые принципы;</li>
                <li>Уровень владения английским Intermediate (чтение тех. документации);</li>
                <li>Дополнительно:
                    <ul>
                        <li>Photoshop</li>
                        <li>С++, Pascal, Basic, Assembler, AutoiIt - не профессионально</li>

                    </ul>
                </li>
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
    <div class="row mt-3" id="experience">
        <div class="col-4 p-0 m-0 ml-3"></div>
        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Опыт работы</p>
            Опыт работы разработчиком у меня пока есть только в одной компании: <br>
            <ul>
                <li><b>- январь 2019 – июнь 2020 (1,5 года) – Web Developer</b> в компании Mindy Support (аутсорсинг в
                    сферах BPO и AI pre-study). Свои основные обязанности в этой должности я описал в верху этой
                    страницы;
                </li>
            </ul>
            Также в этой компании работал:
            <ul>
                <li><b>- январь 2018 – декабрь 2018 (1 год) – Quality Assistant</b> – основные обязанности – контроль
                    качества
                    продукции (AI pre-study), обучение тимлидов, тренеров, составление инструкций, проверка знаний
                    сотрудников в
                    плане качества. Резюмируя, проведение всех возможных мер, чтобы качество отправляемой клиентам
                    информации
                    максимально соответствовало их требованиям.
                </li>
                <li><b>- август 2017 – декабрь 2017 (5 месяцев) - Team Leader</b> – контроль операционных показателей
                    команды из 30
                    людей.
                </li>
                <li><b>- ноябрь 2016 – июль 2017 – Graphic Assistant</b> – классификация и аннотирование изображений,
                    видео, текстов
                    согласно инструкциям (AI pre-study).
                </li>
            </ul>
            До этого все работы были просто подработкой в студенческое время. Самой ответственной из них была:
            <ul>
                <li><b>- июль 2015 – октябрь 2016 (1,3 года) – Наладчик видеоинформационной системы</b> в Киевскиом
                    метрополитене. В
                    обязанности входили монтаж/демонтаж, ремонт и настройка вагонных мониторов, которые показывают
                    названия
                    станций и рекламу и всей системы, которая их обслуживает (ПК, меж вагонные соединения, питание и т.
                    д.)
                </li>
            </ul>
        </div>

        <div class="col-1"></div>
    </div>

    <div class="row mt-3" id="education">
        <div class="col-4 p-0 m-0 ml-3"></div>
        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Образование</p>
            <p class="text-justify">
            <ul>
                <li>Высшее:
                    <ul>
                        <li><b>2015-2017</b> Национальный Авиационный Университет - Автоматизация и
                            компьютерно-интегрированные технологии (специалист)
                        </li>
                        <li><b>2011-2015</b> Национальный Авиационный Университет - Автоматизация и
                            компьютерно-интегрированные технологии (бакалавр)
                        </li>
                    </ul>
                </li>
                <li>Дополнительно:
                    <ul>
                        <li><b>2019</b> Skill Up - Курс «PHP-программист»;</li>
                        <li><b>2019</b> CyberBionic Systematics - Курс «Python Developer»;</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
    <div class="row mt-3" id="certs_block">
        <div class="col-4 p-0 m-0 ml-3"></div>
        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Мои сетрификаты</p>
            <ul id="certs">
                <li>HTML, CSS:<br>
                    <img src="./certs/html_css/CSS_SL.jpg" alt="CSS" class="certIcon">
                    <img src="./certs/html_css/HTML_SL.jpg" alt="HTML" class="certIcon">
                    <img src="./certs/html_css/TP10865400.jpg" alt="HTML, CSS" class="certIcon">
                    <img src="./certs/html_css/TP33660330.jpg" alt="HTML, CSS" class="certIcon">
                </li>
                <li>JavaScript:<br>
                    <img src="./certs/javascript/jQuery_SL.jpg" alt="jQuery" class="certIcon">
                    <img src="./certs/javascript/JS_SL.jpg" alt="JS" class="certIcon">
                    <img src="./certs/javascript/TP59686619.jpg" alt="JS" class="certIcon">
                </li>
                <li>PHP:<br>
                    <img src="./certs/php/photo5343663731634187335.jpg" alt="PHP" class="certIcon">
                    <img src="./certs/php/PHP_SL.jpg" alt="PHP" class="certIcon">
                    <img src="./certs/php/TP58347410.jpg" alt="PHP" class="certIcon">
                </li>
                <li>Python:<br>
                    <img src="./certs/python/TP28317017.jpg" alt="Python" class="certIcon">
                    <img src="./certs/python/TP43772008.jpg" alt="Python" class="certIcon">
                    <img src="./certs/python/TP59267229.jpg" alt="Python" class="certIcon">
                    <img src="./certs/python/TP70019460.jpg" alt="Python" class="certIcon">
                    <img src="./certs/python/TP94425168.jpg" alt="Python" class="certIcon">
                </li>
                <li>MySQL:<br>
                    <img src="./certs/sql/SQL_SL.jpg" alt="MySQL" class="certIcon">
                </li>
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
    <div class="row mt-3" id="examples">
        <div class="col-4 p-0 m-0 ml-3"></div>
        <div class="col-6 bg-light text-dark p-5 rounded shadow-sm block">
            <p class="text-center h4">Примеры работ</p>
            <p class="text-justify">
            <ol class="last">
                <li>Пример функциональности для аннотации типа <a href="examples/bounding" target="_blank">bounding boxes</a>.</li>
                <li>Пример использования бибилиотеки three.js со снимком lidar:
                    <embed src="examples/lidar/index.html" width="100%" height="300px">
                </li>
                <li>И последнее, просто по фану). Всегда хотел сделать и наконец-то появилось на это время: <a href="examples/mario" target="_blank">Mario</a></li>
                <li>Исходный код всего этого проекта на <a href="https://github.com/Freon93/port" target="_blank">GitHub</a></li>
            </ol>

        </div>
        <div class="col-1"></div>
    </div>
</div>
</body>
</html>