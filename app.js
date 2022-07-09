const daily=document.querySelector('.daily-text');
const weekly=document.querySelector('.weekly-text');
const monthly=document.querySelector('.monthly-text');
const currentHrs=document.querySelector('.datainfo1');
const lastHrs=document.querySelector('.datainfo');
const currentPlay=document.querySelector('.currentinfoplay');
const previousPlay=document.querySelector('.previousinfoplay');
const currentStudy=document.querySelector('.currentstudy');
const previousStudy=document.querySelector('.previousstudy');
const currentexercise=document.querySelector('.currentexercise');
const previousExercise=document.querySelector('.previousexercise');
const currentSocial=document.querySelector('.currentsocial');
const previousSocial=document.querySelector('.previoussocial');
const currentSElfcare=document.querySelector('.currentselfcare');
const previousSelfcare=document.querySelector('.previouselfcare');

daily.addEventListener('click',getDataDaily)
weekly.addEventListener('click',getDataWeeekly)
monthly.addEventListener('click',getdataMonthly)

function getDataDaily(
    
){
    let http=new XMLHttpRequest();
    http.open('get','data.json',true);
    http.send();
    http.onload=function(){
      if(this.readyState== 4 && this.status==200){
        let result=JSON.parse(this.responseText);
       
    

        currentHrs.innerHTML=`${result[0].timeframes.daily.current}`
        lastHrs.innerHTML=`${result[0].timeframes.daily.previous}`
        currentPlay.innerHTML=`${result[1].timeframes.daily.current}`
        previousPlay.innerHTML=`${result[1].timeframes.daily.previous}`
        currentStudy.innerHTML=`${result[2].timeframes.daily.current}`
        previousStudy.innerHTML=`${result[2].timeframes.daily.previous}`
        currentexercise.innerHTML=`${result[3].timeframes.daily.current}`
        previousExercise.innerHTML=`${result[3].timeframes.daily.previous}`
        currentSocial.innerHTML=`${result[4].timeframes.daily.current}`
        previousSocial.innerHTML=`${result[4].timeframes.daily.previous}`
        currentSElfcare.innerHTML=`${result[5].timeframes.daily.current}`
        previousSelfcare.innerHTML=`${result[5].timeframes.daily.previous}`


      }
  }

}
function getDataWeeekly(){
    let http=new XMLHttpRequest();
    http.open('get','data.json',true);
    http.send();
    http.onload=function(){
      if(this.readyState== 4 && this.status==200){
        let result=JSON.parse(this.responseText);
       
       

        currentHrs.innerHTML=`${result[0].timeframes.weekly.current}`
        lastHrs.innerHTML=`${result[0].timeframes.weekly.previous}`
        currentPlay.innerHTML=`${result[1].timeframes.weekly.current}`
        previousPlay.innerHTML=`${result[1].timeframes.weekly.previous}`
        currentStudy.innerHTML=`${result[2].timeframes.weekly.current}`
        previousStudy.innerHTML=`${result[2].timeframes.weekly.previous}`
        currentexercise.innerHTML=`${result[3].timeframes.weekly.current}`
        previousExercise.innerHTML=`${result[3].timeframes.weekly.previous}`
        currentSocial.innerHTML=`${result[4].timeframes.weekly.current}`
        previousSocial.innerHTML=`${result[4].timeframes.weekly.previous}`
        currentSElfcare.innerHTML=`${result[5].timeframes.weekly.current}`
        previousSelfcare.innerHTML=`${result[5].timeframes.weekly.previous}`
        
      }
  }

}
function getdataMonthly(){
    let http=new XMLHttpRequest();
    http.open('get','data.json',true);
    http.send();
    http.onload=function(){
      if(this.readyState== 4 && this.status==200){
        let result=JSON.parse(this.responseText);

      
       
        
        currentHrs.innerHTML=`${result[0].timeframes.monthly.current}`
        lastHrs.innerHTML=`${result[0].timeframes.monthly.previous}`
        currentPlay.innerHTML=`${result[1].timeframes.monthly.current}`
        previousPlay.innerHTML=`${result[1].timeframes.monthly.previous}`
        currentStudy.innerHTML=`${result[2].timeframes.monthly.current}`
        previousStudy.innerHTML=`${result[2].timeframes.monthly.previous}`
        currentexercise.innerHTML=`${result[3].timeframes.monthly.current}`
        previousExercise.innerHTML=`${result[3].timeframes.monthly.previous}`
        currentSocial.innerHTML=`${result[4].timeframes.monthly.current}`
        previousSocial.innerHTML=`${result[4].timeframes.monthly.previous}`
        currentSElfcare.innerHTML=`${result[5].timeframes.monthly.current}`
        previousSelfcare.innerHTML=`${result[5].timeframes.monthly.previous}`
      }
  }
}