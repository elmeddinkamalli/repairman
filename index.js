// Main js

class trigger{
    clickedMenuItem = $('.nav-link');
    
    constructor(){
        this.events();
    }

    //Events
    events(){
        this.clickedMenuItem.on("click", (e)=>{
            e.preventDefault();
            this.check(e.target);
        })

        var countScroll = 0;
        var gear_1 = $('.gear_1');
        var gear_2 = $('.gear_2');
        $(window).scroll(function(e){
            var currentScroll = $(this).scrollTop();
            if (currentScroll > this.previousScroll){
                countScroll++;
                gear_2.css({'transform' : 'rotate('+ countScroll +'deg)'});
                gear_1.css({'transform' : 'rotate('+ countScroll +'deg)'});
            } else {
                countScroll--;
                gear_1.css({'transform' : 'rotate('+ countScroll +'deg)'});
                gear_2.css({'transform' : 'rotate('+ countScroll +'deg)'});
            }
            this.previousScroll = currentScroll;
         });

         $(window).on('scroll', ()=>{
            if(window.pageYOffset <= this.getElPos('home')+25){
                console.log('home');
                $(".nav-link.active").removeClass('active');
                $('a[href="#home"]').addClass('active');
            }
            if(window.pageYOffset >= this.getElPos('about-us')-25 && window.pageYOffset <= this.getElPos('about-us')+25){
                console.log('about');
                $(".nav-link.active").removeClass('active');
                $('a[href="#about-us"]').addClass('active');
            }
            if(window.pageYOffset >= this.getElPos('services')-25 && window.pageYOffset <= this.getElPos('services')+25){
                console.log('services');
                $(".nav-link.active").removeClass('active');
                $('a[href="#services"]').addClass('active');
            }
            if(window.pageYOffset >= this.getElPos('contact')-25){
                console.log('contact');
                $(".nav-link.active").removeClass('active');
                $('a[href="#contact"]').addClass('active');
            }
        })
    }

    //Methods for active menu items
    check(e){
        if(!$(e).hasClass("active")){
            this.makeCurrent(e);
        }
    }
    
    makeCurrent(e){
        $("#footer .nav-link.active").removeClass('active');

        $("html, body").animate({scrollTop: $($(e).attr('href')).offset().top}, 1000);
    }

    getElPos(e){
        return document.getElementById(e).offsetTop;
    }
}

mytrigger = new trigger();