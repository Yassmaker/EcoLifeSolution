/*Sidebar*/
var sidebar = document.querySelector('.sidebar');
var menu = document.querySelector('#menu');
var close = document.querySelector('#close');

window.addEventListener('DOMContentLoaded' , () =>{
    menu.addEventListener('click', () =>{
        sidebar.classList.add('active')
    })

    close.addEventListener('click' , () =>{
        sidebar.classList.remove('active')
    })
    
})

/*Value*/

var MaxHome = 599;
var MaxChiSiamo = 1797;
var MaxServizi = 2396
var MaxImpegnoAmbientale = 3594 ;
var MaxBlog = 4193;
var MaxContatti = 4400;

/*NavLinks*/
var navLinks = document.querySelectorAll('.nav--link');

var counter = 0

if(window.innerWidth > 895 )
{   

    /*Links*/
    var nav_Home = document.getElementById('nav--Home') 
    var nav_ChiSiamo = document.getElementById('nav--ChiSiamo') 
    var nav_Servizi = document.getElementById('nav--Servizi') 
    var nav_ImpagnoAmbientale = document.getElementById('nav--ImpegnoAmbientale') 
    var nav_Blog = document.getElementById('nav--Blog') 
    var nav_Contatti = document.getElementById('nav--Contatti') 

    window.addEventListener('scroll' , () => {
        var scrollPosition = window.scrollY;

        if(scrollPosition >= 0 && scrollPosition < MaxHome)
        {
            ActiveLink(navLinks, 'nav--Home' )
        } else if(scrollPosition > MaxHome && scrollPosition < MaxChiSiamo)
        {
            ActiveLink(navLinks, 'nav--ChiSiamo' )
        }else if(scrollPosition > MaxChiSiamo && scrollPosition < MaxServizi)
        {
            ActiveLink(navLinks, 'nav--Servizi' )
        }else if(scrollPosition > MaxServizi && scrollPosition < MaxImpegnoAmbientale)
        {
            ActiveLink(navLinks, 'nav--ImpegnoAmbientale' )
        }else if(scrollPosition > MaxImpegnoAmbientale && scrollPosition < MaxBlog)
        {
            ActiveLink(navLinks, 'nav--Blog' )
        }else if(scrollPosition > MaxBlog)
        {
            ActiveLink(navLinks, 'nav--Contatti' )
        }
    })
}else{
    /*--------------------------Problem Solving Sidebar----------------------*/
    /*Links*/
    var nav_Home = document.getElementById('nav--Home-sidebar') 
    var nav_ChiSiamo = document.getElementById('nav--ChiSiamo-sidebar') 
    var nav_Servizi = document.getElementById('nav--Servizi-sidebar') 
    var nav_ImpagnoAmbientale = document.getElementById('nav--ImpegnoAmbientale-sidebar') 
    var nav_Blog = document.getElementById('nav--Blog-sidebar') 
    var nav_Contatti = document.getElementById('nav--Contatti-sidebar') 

    window.addEventListener('scroll' , () => {
        var scrollPosition = window.scrollY;

        if(scrollPosition >= 0 && scrollPosition < MaxHome)
        {
            ActiveLink(navLinks, 'nav--Home-sidebar' )
        } else if(scrollPosition > MaxHome && scrollPosition < MaxChiSiamo)
        {
            ActiveLink(navLinks, 'nav--ChiSiamo-sidebar' )
        }else if(scrollPosition > MaxChiSiamo && scrollPosition < MaxServizi)
        {
            ActiveLink(navLinks, 'nav--Servizi-sidebar' )
        }else if(scrollPosition > MaxServizi && scrollPosition < MaxImpegnoAmbientale)
        {
            ActiveLink(navLinks, 'nav--ImpegnoAmbientale-sidebar' )
        }else if(scrollPosition > MaxImpegnoAmbientale && scrollPosition < MaxBlog)
        {
            ActiveLink(navLinks, 'nav--Blog-sidebar' )
        }else if(scrollPosition > MaxBlog)
        {
            ActiveLink(navLinks, 'nav--Contatti-sidebar' )
        }
    })
}

function ActiveLink(navs , id)
{
    navs.forEach(function(nav){
        nav.classList.remove('active')
    })

    document.getElementById(id).classList.add('active')
}




/*Header*/
const header = document.querySelector('.header');
var max = 0;

window.addEventListener('scroll' , () =>{
    let value = scrollY;
    
    if(value == 0 ){
        header.classList.remove('active')
        header.classList.remove('disappear')
        header.classList.add('normal')
    }
    else if(value > max )
    {

        header.classList.add('disappear')

    }else if(value < max){
        header.classList.add('active');
        header.classList.remove('disappear')
        
    }
    
    max = value
})
/*BLOG*/

var boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        boxes.forEach(otherBox => {
            otherBox.classList.remove('blur'); 
        });

        boxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.add('blur');
            }
        });
    });

    box.addEventListener('mouseout' , () => {
        boxes.forEach(otherBoxes => {
            otherBoxes.classList.remove('blur')
        })
    })
});

/*Contatti*/

var ContattiInput = document.querySelector('.ContattiInput');

ContattiInput.addEventListener('click' , () => {
    ContattiInput.classList.add('active')
})

document.addEventListener('click' , (event) => {
    if(!ContattiInput.contains(event.target))
    {
        ContattiInput.classList.remove('active')
    }
})

/*Scroll up*/

const scrollUp = () => {
    const scrollUp = document.querySelector('.scrollUp')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollUp')
                        : scrollUp.classList.remove('show.scrollUp')

    this.scrollY <= 350 ? scrollUp.classList.remove('show-scrollUp')
                        : scrollUp.classList.add('show.scrollUp')
}
window.addEventListener('scroll' , scrollUp)

/*Scroll*/

var value ;

window.addEventListener('scroll' , () => {
    value = window.scrollY;

    console.log(value)
})
/*---------------------Scroll Reveal----------------*/
/*
ScrollReveal({
    origin :'top' ,
    distance :'60px',
    duration : 3000, 
    delay : 400,
    reset : true
});

ScrollReveal().reveal('.Benvenuti' ,{delay : 500})
*/

window.addEventListener('load' , () => {
    revealFunction();
})

function revealFunction()
{
    window.sr = ScrollReveal({
        duration : 1000 ,
        distance : '20px', 
        easing:'ease-out'
    });
    /*Home*/
    sr.reveal('.Benvenuti' , {
        origin : 'top' , 
        reset : false
    });
    sr.reveal('.BenvenutiP' , {
        origin : 'top' , 
        duration : 1250,
        reset : false
    });
    sr.reveal('.BenvenutiA' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });

    /*Chi Siamo*/

    sr.reveal('.BoxChiSiamo' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxLeft1' , {
        origin : 'left' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxRight1' , {
        origin : 'right' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxLeft2' , {
        origin : 'left' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxRight2' , {
        origin : 'right' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });

    /*Servizi*/

    sr.reveal('.boxServizi' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });

    sr.reveal('.boxServizi2' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxServizi3' , {
        origin : 'bottom' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });

    /*Impegno Ambientale*/

    sr.reveal('.boxImpegnoAmbientale1' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });

    sr.reveal('.boxImpegnoAmbientale2' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });

    sr.reveal('.boxImpegnoAmbientale3L1' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxImpegnoAmbientale3L2' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxImpegnoAmbientale3R' , {
        origin : 'bottom' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxImpegnoAmbientale4R1' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxImpegnoAmbientale4R2' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxImpegnoAmbientale4L' , {
        origin : 'bottom' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });

    /*Blog*/

    sr.reveal('.boxBlog1' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxBlog2' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxBlog3' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });
    sr.reveal('.boxBlog4' , {
        origin : 'top' , 
        duration : 1500,
        reset : false
    });

    /*Servizi*/
    sr.reveal('.boxContattiImg' , {
        origin : 'bottom' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.box1' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.box2' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.box3' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.box4' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });

    /*Footer*/

    sr.reveal('.row1' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.row2' , {
        origin : 'top' , 
        distance:'60px', 
        duration : 1500,
        reset : false
    });
    sr.reveal('.row3' , {
        origin : 'bottom' , 
        distance:'10px', 
        duration : 1750,
        reset : false
    });
}
/*Message*/
var boxMessage = document.querySelector('.boxMessage')
var InputContatti = document.querySelector('.ContattiInput')
var ButtonMessage = document.querySelector('.ButtonMessage')
var ExitMessage = document.querySelector('.ExitMessage')


ButtonMessage.addEventListener('click' , () => {
	
    if(InputContatti != '')
    {
        boxMessage.style.display = 'flex';
    }else {
        boxMessage.style.display = 'none';
    }
})

ExitMessage.addEventListener('click' , () => {
	boxMessage.style.display = 'none';
})
