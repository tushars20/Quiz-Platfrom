const database  = [ {
    question:"Which of the following phenomena cannot be observed on the surface of the Moon?" , option1:"Rising and setting of the Sun" , option2:"Solar eclipse" , option3:"Motion of comets" , option4:"Twinkling of stars" , correct:"option4"
} 
,
{
    question:"Which female astronaut spent the maximum time in space?" , option1:"Lisa Norwak" , option2:"Kalpana Chawla" , option3:"Sunita Williams" , option4:"None of these" , correct:"option3"
} 
,
{
    question:"Which planet has the fastest revolution time" , option1:"Mercury" , option2:"Uranus" , option3:"Neptune" , option4:"Jupiter" , correct:"option4"
} 
,
{
    question:"What is the average distance (approximate) between the Sun and the Earth?" , option1:"70 x 10^5 km" , option2:"100 x 10^5 km" , option3:"110 x 10^6 km" , option4:"150 x 10^6 km" , correct:"option4"
} 
,
{
    question:"The name of the galaxy in which the earth is a planet is" , option1:"Andromeda" , option2:"Ursa Major" , option3:"Ursa Minor" , option4:"Milky Way" , correct:"option4"
} ,
{
    question:"The asteroid belt is located between which two planets in the solar system?" , option1:"Earth and Mars" , option2:"Mars and Jupiter" , option3:"Jupiter and Saturn" , option4:"Saturn and Uranus" , correct:"option2"
} ,
{
    question:"A star of which colour can be said to be the coolest?" , option1:"Yellow" , option2:"Blue" , option3:"Red" , option4:"Black" , correct:"option3"
} ,

{
    question:"According to International Astronomical Union which one of the following has lost its status as a planet?" , option1:"Jupiter" , option2:"Uranus" , option3:"Neptune" , option4:"Pluto" , correct:"option4"
},

{
    question:"Which of the following is the nearest galaxy to the Milky Way?" , option1:"Andromeda" , option2:"Cartwheel galaxy" , option3:"Pinwheel galaxy" , option4:"Whirlpool galazy" , correct:"option1"
},

{
    question:"Which of the following is not a gas planet?" , option1:"Jupiter" , option2:"Uranus" , option3:"Venus" , option4:"Neptune" , correct:"option3"
}
]
let score = 0;
let point = document.getElementById('score');
let ques = document.getElementById('question');
let op1 = document.getElementById('option1');
let op2 = document.getElementById('option2');
let op3 = document.getElementById('option3');
let op4 = document.getElementById('option4');



for ( let i=0 ; i<10 ; i++)
{   
    let c=0;

    setTimeout( function(){
        document.getElementById('question').innerHTML =`${i+1}. ` +database[i].question;
        document.getElementById('option1').innerHTML ='A.  ' + database[i].option1;
        document.getElementById('option2').innerHTML ='B.  ' + database[i].option2;
        document.getElementById('option3').innerHTML ='C.  '+ database[i].option3;
        document.getElementById('option4').innerHTML ='D.  '+ database[i].option4;
        let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").innerHTML = `Timer ${timeleft}`;
  timeleft -= 1;
}, 900);
         c=0;
        if (database[i].correct==='option1')
        {
            op1.addEventListener("click" , function(){
                op1.style.backgroundColor = 'green';
                op1.style.color = 'white';
                if (c===0)
                {score++;}
                point.innerHTML = `Score ${score}`;

            },{
                once: true,
                passive: true,
                capture: true
              })
            op2.addEventListener("click" , function(){
                op2.style.backgroundColor = 'red';
                op2.style.color = 'white';
                c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op3.addEventListener("click" , function(){
                op3.style.backgroundColor = 'red';
                op3.style.color = 'white';
                c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op4.addEventListener("click" , function(){
                op4.style.backgroundColor = 'red';
                op4.style.color = 'white';
                c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
        }

        else if (database[i].correct==='option2')
        {
            op1.addEventListener("click" , function(){
                op1.style.backgroundColor = 'red';
                op1.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op2.addEventListener("click" , function(){
                op2.style.backgroundColor = 'green';
                op2.style.color = 'white';
               if (c==0) {score++;}
                point.innerHTML = `Score ${score}`;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op3.addEventListener("click" , function(){
                op3.style.backgroundColor = 'red';
                op3.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op4.addEventListener("click" , function(){
                op4.style.backgroundColor = 'red';
                op4.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
        }
       else if (database[i].correct==='option3')
        {
            op1.addEventListener("click" , function(){
                op1.style.backgroundColor = 'red';
                op1.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op2.addEventListener("click" , function(){
                op2.style.backgroundColor = 'red';
                op2.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op3.addEventListener("click" , function(){
                op3.style.backgroundColor = 'green';
                op3.style.color = 'white';
               if (c==0){ score++;}
                point.innerHTML = `Score ${score}`;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op4.addEventListener("click" , function(){
                op4.style.backgroundColor = 'red';
                op4.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
        }
        else if (database[i].correct==='option4')
        {
            op1.addEventListener("click" , function(){
                op1.style.backgroundColor = 'red';
                op1.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op2.addEventListener("click" , function(){
                op2.style.backgroundColor = 'red';
                op2.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op3.addEventListener("click" , function(){
                op3.style.backgroundColor = 'red';
                op3.style.color = 'white'; c++;
            },{
                once: true,
                passive: true,
                capture: true
              })
            op4.addEventListener("click" , function(){
                op4.style.backgroundColor = 'green';
                op4.style.color = 'white';
               if(c==0) {score++;}
                point.innerHTML = `Score ${score}`;
            
            },{
                once: true,
                passive: true,
                capture: true
              })
        }
        
        
        
       
        op1.style.backgroundColor = 'white';
        op1.style.color = 'black';
        op2.style.backgroundColor = 'white';
        op2.style.color = 'black';
        op3.style.backgroundColor = 'white';
        op3.style.color = 'black';
        op4.style.backgroundColor = 'white';
        op4.style.color = 'black';
        timeleft = 10;
    } ,10000*i)

    
}
