const database  = [ {
    question:" The human heart is " , option1:" Neurogenic heart" , option2:"Myogenic heart" , option3:"Pulsating heart" , option4:" Ampullary heart" , correct:"option2"
} 
,
{
    question:"Some species of which of the below kinds of organisms are employed as biopesticides?" , option1:"Bacteria" , option2:"Fungi" , option3:" Flowering plants" , correct:"option1"
} 
,
{
    question:"Spermology is the study of" , option1:"Seed" , option2:"Leaf" , option3:"Fruit" , option4:"Pollen grain" , correct:"option1"
} 
,
{
    question:"Who is known as father of Zoology " , option1:"  Darwin" , option2:"Aristotle" , option3:"Lamark" , option4:"  Theophrastus" , correct:"option2"
} 
,
{
    question:"Animal without red blood cells" , option1:"Frog" , option2:"Earthworm" , option3:" Snake" , option4:"Peacock" , correct:"option2"
} ,
{
    question:"The energy released by 1 gram of glucose is" , option1:"6 kcal" , option2:"4 kcal" , option3:"5 kcal" , option4:"3kcal" , correct:"option2"
} ,
{
    question:"From the following pairs, find the one which is correctly matched?" , option1:"Scurvy- Thiamine	" , option2:"Tuberculosis- ATS" , option3:"Tetanus- BCG" , option4:"Malaria- Chloroquine" , correct:"option4"
} ,

{
    question:"The corner of the cells of collenchyma tissue in plant are thickened due to deposition of _____" , option1:"Lignin and suberin" , option2:"Suberin and cutin" , option3:" Cellulose and pectin" , option4:" Chitin and lignin" , correct:"option3"
},

{
    question:"Bone deformities occur due to the excess intake of" , option1:" Phosphorus" , option2:" Potassium" , option3:"Fatty acid" , option4:"Fluorine" , correct:"option4"
},

{
    question:"The phenomenon of summer sleep by animals is called" , option1:" hibernation" , option2:"aestivation" , option3:" laziness" , option4:"lethargy" , correct:"option2"
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
