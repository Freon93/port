class Cloud {
    constructor(id) {
        this.el = document.createElement('img');
        this.el.setAttribute('class', 'cloud');
        this.el.style.left = '900px';
        switch (Math.round(Math.random(2))) {
            case 0:
                this.el.setAttribute('src', "images/big_cloud.png");
                break;
            case 1:
                this.el.setAttribute('src', "images/cloud.png");
                break;
            default:
        }
        this.el.style.top = Math.round(Math.random() * 200) + 'px';
        document.getElementById(id).appendChild(this.el);
    }
}

class Grass {
    constructor(id) {
        this.el = document.createElement('img');
        this.el.setAttribute('class', 'grass');
        this.el.style.left = '900px';
        switch (Math.round(Math.random(2))) {
            case 0:
                this.el.setAttribute('src', "images/bush.png");
                break;
            case 1:
                this.el.setAttribute('src', "images/grass.png");
                break;
            default:
        }

        document.getElementById(id).appendChild(this.el);
    }
}

class Tuba {
    constructor(id) {
        this.el = document.createElement('img');
        this.el.setAttribute('class', 'tuba');
        this.el.style.left = '900px';

        this.el.setAttribute('src', "images/tuba.png");

        this.el.style.top = 185 + Math.round(Math.random() * 100) + 'px';
        document.getElementById(id).appendChild(this.el);
    }
}


class Floor {
    clouds = [];
    grasss = [];
    tubas = [];

    constructor(img, id, mario) {
        this.background = img;
        this.mario = mario;
        this.id = id;
        this.el = document.createElement('div');
        this.el.setAttribute('class', 'floor');
        this.el.style.background = `url("images/${this.background}")`;
        document.getElementById(id).appendChild(this.el);
    }

    move(e) {
        let mario = this.mario;

        if (e.keyCode === 65 || e.keyCode === 1060) {
            this.mario.rotate();
            stop = false;
            this.tubas.forEach(function (tuba) {

                if (Number(tuba.el.style.left.replace('px', '')) +94 ===
                    Number(mario.el.style.left.replace('px', '')) &&
                    Number(mario.el.style.bottom.replace('px', '')) +
                    Number(tuba.el.style.top.replace('px', '')) < 400) {

                    stop = true;
                }

            });

            if (stop) {
                return 0;
            }
            return 1;
        } else if (e.keyCode === 68 || e.keyCode === 1042) {
            this.mario.straight();

            stop = false;

            this.tubas.forEach(function (tuba) {

                if (Number(tuba.el.style.left.replace('px', '')) ===
                    Number(mario.el.style.left.replace('px', '')) + 33 &&
                    Number(mario.el.style.bottom.replace('px', '')) +
                    Number(tuba.el.style.top.replace('px', '')) < 400) {

                    stop = true;
                }

            });

            if (stop) {
                return 0;
            }
            if (Number(this.el.style.backgroundPosition.split('px ')[0]) % 300 == 0) {
                if (Math.round(Math.random(2)) === 1 &&
                    (this.clouds.length <= 0 || this.clouds[this.clouds.length - 1].el.style.left !== '900px')) {
                    this.clouds[this.clouds.length] = new Cloud(this.id);

                }

            }
            if (Number(this.el.style.backgroundPosition.split('px ')[0]) % 500 == 0) {
                if (Math.round(Math.random(2)) === 1 &&
                    (this.grasss.length <= 0 || this.grasss[this.grasss.length - 1].el.style.left !== '900px')) {
                    this.grasss[this.grasss.length] = new Grass(this.id);
                }

            }
            if (Number(this.el.style.backgroundPosition.split('px ')[0]) % 400 == 0) {
                if (Math.round(Math.random(2)) === 1 &&
                    (this.tubas.length <= 0 || this.tubas[this.tubas.length - 1].el.style.left !== '900px')) {
                    this.tubas[this.tubas.length] = new Tuba(this.id);
                }

            }

            return -1;


        }
        return 0;
    }
}

class Mario {
    constructor(id) {
        this.el = document.createElement('img');
        this.el.setAttribute('class', 'mario');
        this.el.setAttribute('id', 'mario');
        this.el.setAttribute('src', "images/mario_stay.png");
        this.el.setAttribute('style', "left: 300px");
        document.getElementById(id).appendChild(this.el);
    }

    rotate() {
        this.el.style.transform = 'scaleX(-1)';
    }

    straight() {
        this.el.style.transform = 'scaleX(1)';
    }

}


class Game {

    constructor(floor, id) {
        this.mario = new Mario(id);

        this.gFloor = new Floor(floor, id, this.mario);

    }

}