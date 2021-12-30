var timeinterval=0;
var timesec=1;
function timeintervalfun(){
timeinterval=timeinterval+1000;
setTimeout(function(){
console.log(timesec);
timesec++;
if(timesec<=6){
timeintervalfun()
};
},timeinterval)

}
timeintervalfun();