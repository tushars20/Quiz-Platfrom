const database  = [ {
    question:"The theory of relativity is presented by which scientist" , option1:"Albert Einstein" , option2:"Isaac Newton" , option3:"Stephen Hawking" , option4:"Marie Curie" , correct:"option1"
} 
,
{
    question:"What type of lens is used in a magnifying glass" , option1:"Concave" , option2:"Plano-concave" , option3:"Convex" , option4:"None of these" , correct:"option3"
} 
,
{
    question:"Total number of colors exists in sunlight" , option1:"5" , option2:"7" , option3:"9" , option4:"10" , correct:"option2"
} 
,
{
    question:"Who is the first person to define speed" , option1:"Galileo" , option2:"Newton" , option3:"Kepler" , option4:"Ptolemy" , correct:"option1"
} 
,
{
    question:" If the spinning speed of the earth is increased then the weight of body at the equator will be" , option1:"Increases" , option2:"Decreases" , option3:"Same" , option4:"Double" , correct:"option2"
} ,
{
    question:"Which color deviates least when passing through a Prism" , option1:"Blue" , option2:"Green" , option3:"Yellow" , option4:"Red" , correct:"option4"
} ,
{
    question:"The velocity of the sound is highest in" , option1:"Metal" , option2:"Air" , option3:"Water" , option4:"Vacuum" , correct:"option4"
} ,

{
    question:"According to the quantum theory of light, the energy of light is carried in discrete units are called" , option1:"Photoelectrons" , option2:"Protons" , option3:"Electrons" , option4:"Photons" , correct:"option4"
},

{
    question:"In SONAR which kind of wave is used" , option1:"Infrasonic" , option2:"Ultrasonic" , option3:"Radio" , option4:"Audible sound" , correct:"option2"
},

{
    question:"The energy of a photon varies directly with its" , option1:"Frequency" , option2:"Speed" , option3:"Wave length" , option4:"None of the above" , correct:"option1"
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
