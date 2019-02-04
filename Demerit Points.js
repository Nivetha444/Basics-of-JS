checkspeed(150);

function checkspeed(speed){
    const speedlimit = 70;
     const kmperpoint = 5;   

     if(speed < speedlimit + kmperpoint){
         console.log('ok');
     }
     else {
        let points = Math.floor((speed - speedlimit) / kmperpoint);
        if(points >= 12)
           console.log('License Suspended!!');  
           else
           console.log('Points:',points);
        }

     
}