const database  = [ {
    question:" One of the essential minerals in the human body is salt. How much salt (NaCl) is in the average adult human body?" , option1:"1 Kg" , option2:"500 grams" , option3:"250 grams" , option4:"practically none" , correct:"option3"
} 
,
{
    question:"What is the most common isotope of hydrogen?" , option1:"Protium" , option2:"Deuterium" , option3:"Tritum" , option4:"Hydrogen only has one isotope!" , correct:"option1"
} 
,
{
    question:"Who is credited with the invention of the modern periodic table?" , option1:"Nobel" , option2:"Lavoisier" , option3:"Mendel" , option4:"Mendeleev" , correct:"option4"
} 
,
{
    question:"Which of these elements is a nonmetal?" , option1:"Sulfur" , option2:"Manganese" , option3:"Aluminum" , option4:"Beryllium" , correct:"option1"
} 
,
{
    question:"The symbol Ag stands for which element?" , option1:"Gallium" , option2:"Magnesium" , option3:"Gold" , option4:"Silver" , correct:"option4"
} ,
{
    question:"You can't live without iron. Where in the body is most of the iron located?" , option1:"Your brain" , option2:"Your skin" , option3:"Your bones" , option4:"Your blood" , correct:"option4"
} ,
{
    question:"What do you call an atom that has more protons than electrons?" , option1:"A molecule" , option2:"An isotope" , option3:"An anion" , option4:"A cation" , correct:"option4"
} ,

{
    question:"All of the following elements are liquids around room temperature except which one?" , option1:"Gallium" , option2:"Magnesium" , option3:"Bromine" , option4:"Mercury" , correct:"option2"
},

{
    question:"A mole contains Avogadro's number of items. What is Avogadro's number?" , option1:"6023" , option2:"6.023 x 10^23" , option3:"6.02 x 10^-23" , option4:"3 x 10^8" , correct:"option2"
},

{
    question:"All organic molecules contain:" , option1:"Carbon only" , option2:"Carbon and nitrogen" , option3:"Carbon and hydrogen" , option4:"Carbon, hydrogen, and oxygen" , correct:"option3"
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
