let userdate =document.getElementById("date");
userdate.max=new  Date().toISOString().split('T')[0];
let result =  document.querySelector("#result");



function validatesdate(value){
    
    if( userdate.value ===""){
        window.alert("enter dob");
    
     }
     
    }

    
function calculateage(){
let birthdate= new Date(userdate.value);

let d1=birthdate.getDate();
let m1=birthdate.getMonth()+1; //January is 0!
let y1=birthdate.getFullYear();

let today=new Date();
let d2=today.getDate();
let m2=today.getMonth()+1;
let y2=today.getFullYear(); 

// calculate age
y3=y2-y1;

if(m2>=m1){
    m3=m2-m1;
}else{
    y3--;
    m3=12+(m2-m1)
}
if(d2>=d1){
    d3=d2-d1;
    }else{
        m3--;
        d3=30 + (d2 - d1);
    }
    if(m3 <0 ){
        y3--;
        m3=11;      
}
// console.log(y3,m3,d3);
result.innerHTML=`You are ${y3} Years,${m3} Months and  ${d3} Days Old.`;
}





