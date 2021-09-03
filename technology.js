const database  = [ {
    question:"Which one is the first search engine in internet" , option1:"Google" , option2:"Archie" , option3:"Altavista" , option4:" WAIS" , correct:"option2"
} 
,
{
    question:"Which one is the first web browser invented in 1990" , option1:"Internet Explorer" , option2:" Mosaic" , option3:"Mozilla" , option4:"Nexus" ,correct:"option4"
} 
,
{
    question:"How many computer languages are in use?" , option1:"2000" , option2:"5000" , option3:"50" , option4:"Pollen grain" , correct:"option1"
} 
,
{
    question:" Which of these is not a peripheral, in computer terms?" , option1:"Keyboard" , option2:"Monitor" , option3:"Mouse" , option4:"Motherboard" , correct:"option4"
} 
,
{
    question:"What does the Internet prefix WWW stand for?" , option1:"Wide Width Wickets" , option2:"World Wide Web" , option3:" Worldwide Weather" , option4:"Western Washington World" , correct:"option2"
} ,
{
    question:"The energy released by 1 gram of glucose is" , option1:"6 kcal" , option2:"4 kcal" , option3:"5 kcal" , option4:"3kcal" , correct:"option2"
} ,
{
    question:"A network designed to allow communication within an organization is called:" , option1:"the World Wide Web" , option2:"Yahoo" , option3:"an intranet" , option4:"the Internet" , correct:"option3"
} ,
{
    question:"Which of these products is not made by the Apple Corporation?" , option1:"IMAX" , option2:"iPhone" , option3:"iMac" , option4:"iPod" , correct:"option1"
},

{
    question:" Who invented flexible photographic film?" , option1:"Leonardo da Vinci" , option2:"Linda Eastman" , option3:"Louis Daguerre" , option4:"George Eastman" , correct:"option4"
},

{
    question:"To which of these devices is the cellular telephone most closely related?" , option1:"Telegraph" , option2:"Radio" , option3:"Light bulb" , option4:"Telescope" , correct:"option2"
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
