let w, h, loopId, canvas, ctx, particles;

let options = {
    particleColor: "rgba(255,255,255)",
    particleAmout: 30,
    defaultRadius: 2,
    variantRadius: 2,
    defaultSpeed: 0.1,
    varianSpeed: 0.5,
    linkRadius: 100
};

document.addEventListener("DOMContentLoaded", init);

function init(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeReset();
    initialseElements();
    startAnimation();
}

function resizeReset(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function startAnimation(){
    loopId = requestAnimationFrame(animationLoop);
}

function animationLoop(){
    ctx.clearRect(0, 0, w, h);
    drawScene();

    id = requestAnimationFrame(animationLoop);
}

function drawScene(){
    drawParticle();
}

function drawParticle(){
    for(let i=0; i<particles.length; i++){
        particles[i].draw();
        particles[i].update();
    }
}

function initialseElements(){
    particles = [];
    for (let i = 0; i<options.particleAmout; i++){
        particles.push(new Particle());
    }
}

Particle = function(){
    let _this = this;

    _this.x = Math.random() * w;
    _this.y = Math.random() * h;
    _this.color = options.particleColor;
    _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    _this.speed = options.defaultSpeed + Math.random() * options.varianSpeed;
    _this.directionAngle = Math.floor(Math.random() * 360);
    _this.vector = {
        x: Math.cos(_this.directionAngle) * _this.speed,
        y: Math.sin(_this.directionAngle) * _this.speed
    }

    _this.update = function(){
        _this.border();
        _this.x += _this.vector.x;
        _this.y += _this.vector.y;
    }

    _this.border = function(){
        if(_this.x >= w || _this.x <= 0){
            _this.vector.x *= -1;
        }

        if(_this.y >= h || _this.y <= 0){
            _this.vector.y *= -1;
        }

        if(_this.x > w) _this.x = w;
        if(_this.y > h) _this.y = h;
        if(_this.x < 0) _this.x = 0;
        if(_this.y < 0) _this.y = 0;
    }

    _this.draw = function(){
        ctx.beginPath();
        ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = _this.color;
        ctx.fill();
    }
}