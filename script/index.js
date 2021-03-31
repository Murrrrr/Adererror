$(document).ready(() => {

    $('#tv').click(() => {

        setTimeout(() => {
            $('#tv').css({'top': "-30%"});
            $('video').css({'top': "-30%"});
        }, 2000)

        $('#ufo').css({'top': '-10%'});

        setTimeout(() => {
            $('#ufo').css({'transition': 'top 3s ease'});
            $('#ufo').css({'top': '-70%'});
            $('.intro-section > .subject').css({'opacity': 0});
        }, 1400)

        setTimeout(() => {
            $('.intro-section').css({"display": "none"});
            $('.main-section').css({"display": "block"});
        }, 3500)
    });

    $('.main-section span').mouseover(() => {
        $('.cursor').css({"opacity": "1"});
        $('.cursor').css({"width": "5rem"});
        $('.cursor').css({"height": "5rem"});
        $('.cursor').css({"top": "-2.5rem"});
        $('.cursor').css({"left": "-2.5rem"});
    });

    $('.main-section span').mouseout(() => {
        $('.cursor').css({"opacity": "0"});
        $('.cursor').css({"width": "1rem"});
        $('.cursor').css({"height": "1rem"});
        $('.cursor').css({"top": "-0.5rem"});
        $('.cursor').css({"left": "-0.5rem"});
    });

    $('.main-section span').click((e)=>{
        $(e.target).css({"top":"50%"});
        $(e.target).css({"left":"50%"});
        $(e.target).css({"transform":"translate(-50%, -50%)"});
        $(e.target).css({"font-size":"2.5rem"});

        $('.main-section > .container').css({'opacity':'0'});
        $('#vader').css({'opacity':'0'});
        $('.main-section span').not($(e.target)).css({'opacity':"0"});

        setTimeout(()=>{
            $(e.target).css({"opacity":"0"});
        },2000)

        setTimeout(()=>{
            $('.main-section').css({"display":"none"});
        },2500)

        if(e.target.id == "brand_id"){
            setTimeout(()=>{
                $('.brandId-section').css({"margin-right":"0"});
            },3000)

            setTimeout(()=>{
                $('.contents-container').css({"opacity":"1"});
            },4000)
            
        }

        else if(e.target.id == "collection"){
            $('.brandId-section').css({"display":"none"});
            setTimeout(()=>{
                $('.collection-section').css({"display":"block"});
                $('.collection-section .glitch').css({"opacity":"1"});
            },3500);
            setTimeout(()=>{
                $('.collection-section .sub').css({"opacity":"1"});
            },4000);
            setTimeout(()=>{
                $('.collection-section .item-slider').css({"opacity":"1"});
            },5000);
        }

    })

    $('#back_button').click(()=>{
        
        setTimeout(()=>{
            $('.main-section').css({"display":"block"});
            $('.main-section > .container').css({'opacity':'1'});
        },2000)
        
        $('#vader').css({'opacity':'1'});
        $('.main-section span').css({'opacity':"1"});
        $("#brand_id").css({"top":"10%"});
        $("#brand_id").css({"left":"10%"});
        $("#brand_id").css({"transform":"translate(0%, 0%)"});
        $("#brand_id").css({"font-size":"1.3rem"});
        $('.brandId-section').css({'margin-right':'100%'});
        $('.contents-container').css({"opacity":"0"});
    })

    $('#collection_button').click(()=>{
        $('.collection-section').css({"opacity" : 0});
        setTimeout(()=>{
            $('.collection-section').css({"display":"none"});
        },1000)

        setTimeout(()=>{
            $('.main-section').css({"display":"block"});
            $('#vader').css({'opacity':'1'});
            $('.main-section span').css({'opacity':"1"});
            $("#collection").css({"top":"20%"});
            $("#collection").css({"right":"10%"});
            $("#collection").css({"left":"auto"});
            $("#collection").css({"transform":"translate(0%, 0%)"});
            $("#collection").css({"font-size":"1.5rem"});
            $('.container').css({"opacity":1});
            $('.brandId-section').css({"display":"block"});
        },1500)
    })

    let index = 0;
        $('.left_button').click(() => {
            if (index >= 0 && index < 100) {
                index += 25;
                $('.slider-wrapper > ul').css({
                    'right': `${index}%`
                });
                console.log(index);
            } else
                return 0;
        })

        $('.right_button').click(() => {
            if (index > 0 && index <= 100) {
                index -= 25;
                $('.slider-wrapper > ul').css({
                    'right': `${index}%`
                });
                console.log(index);
            } else
                return 0;
        });
})

let human;
let subject;

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.05;

window.onload = function(){
    human = document.querySelector('#vader');
    subject = document.querySelector('.container');
    cursor = document.querySelector('.cursor');

    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    loop();

    function loop() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        human.style.transform = "translate(" + (-mx / 10) + "px," + (-my / 10) + "px)";
        subject.style.transform = "translate(" + (mx / 10) + "px," + (my / 10) + "px)";

        cursor.style.transform = `transform(${mx}px, ${my}px)`;
        window.requestAnimationFrame(loop);
    }



}


