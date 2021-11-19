// console.log("hello");
var isTrue = true;

function addText() {
    isTrue = false;
    
    var a = document.getElementById("optional");
    var txt1 = a.options[a.selectedIndex].text;
    var vle1 = a.options[a.selectedIndex].value;
    var vald1 = vle1.slice(0,2);
    var myvald1 = vle1.slice(-2);
    console.log(vald1,myvald1);

    var b = document.getElementById("optional1");
    var txt2 = b.options[b.selectedIndex].text;
    var vle2 = b.options[b.selectedIndex].value;
    var vald2 = vle2.slice(0,2);
    var myvald2 = vle2.slice(-2);
    console.log(vald2,myvald2);

    var c = document.getElementById("optional2");
    var txt3 = c.options[c.selectedIndex].text;
    var vle3 = c.options[c.selectedIndex].value;
    var vald3 = vle3.slice(0,2);
    var myvald3 = vle3.slice(-2);
    console.log(vald3,myvald3);

    var hidnbox = document.getElementById("hidden");
    hidnbox.style.opacity = 1;

    const present = document.getElementById("newcard");
    if (present){
        present.innerHTML = `wakeuptime : ${txt1} <br> lunchtime : ${txt2} <br> naptime: ${txt3}`;
    }
    else{
        var newone = document.createElement("div");
        newone.setAttribute("id","newcard");
        newone.innerHTML = `wakeuptime : ${txt1} <br> lunchtime : ${txt2} <br> naptime: ${txt3}`;
        hidnbox.appendChild(newone);
    }

    var rtimeclk = new Date();
    var hours = rtimeclk.getHours();
    var mints = rtimeclk.getMinutes();
    var secs = rtimeclk.getSeconds();
    document.getElementById("clock-hours").innerHTML = hours;
    document.getElementById("clock-mins").innerHTML = mints;
    document.getElementById("clock-secs").innerHTML = secs ;
    var ampm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours-12 : hours;
    var t = setTimeout(addText,1000);
    
    if((vald1 == hours) && (myvald1 == ampm)){
        document.getElementById("wish").innerHTML = "GOOD MORNING!!";
        document.getElementById("image").innerHTML = 
        `<img src="./breakfast.jpg" alt="" srcset="" id="changeproperty">`;
        document.getElementById("message").innerHTML = "LET'S HAVE BREAKFAST"

    }
    else if ((vald2 == hours) && (myvald2 == ampm)){
        document.getElementById("wish").innerHTML = "GOOD AFTERNOON!!";
        document.getElementById("message").innerHTML = "LET'S HAVE LUNCH"
        document.getElementById("image").innerHTML = 
        `<img src="./lunch-time.jpg" alt="" srcset="" id="changeproperty" >`;
    }
    else if((vald3 == hours) && (myvald3 == ampm)){
        document.getElementById("wish").innerHTML = "GOOD NIGHT!!!";
        document.getElementById("image").innerHTML = 
        `<img src="./dinner-time.jpg" alt="" srcset="" id="changeproperty" >`;
        document.getElementById("message").innerHTML = "IT'S TIME TO SLEEP!";   
    }
    else{
    }

}




function realTime() {
    if(isTrue == true){
        const rtimeclk = new Date();
        var hours = rtimeclk.getHours();
        var mints = rtimeclk.getMinutes();
        var secs = rtimeclk.getSeconds();
        var ampm = (hours<12)? "AM" : "PM";
        hours = (hours>12)? hours-12: hours;
        
        hours = ("0"+hours).slice(-2);
        mints = ("0"+mints).slice(-2);
        secs = ("0"+secs).slice(-2);

        document.getElementById("clock-hours").innerHTML = hours;
        document.getElementById("clock-mins").innerHTML = mints;
        document.getElementById("clock-secs").innerHTML = secs;
        document.getElementById("setampm").innerHTML = ampm;
        var t = setTimeout(realTime,1000)

        if((hours>=4) && (hours<12) && (ampm=="AM")){
            document.getElementById("message").innerHTML = "LET'S HAVE BREAKFAST";
            document.getElementById("image").innerHTML = `<img src="./breakfast.jpg" alt="" id="changeproperty" >`;
            document.getElementById("wish").innerHTML = "Good morning!!!";
        }
        else if ((hours>=12) && (ampm == "PM") || (hours < 4) ) {
            document.getElementById("message").innerHTML = "LET'S HAVE LUNCH";
            document.getElementById("image").innerHTML = `<img src="./lunch-time.jpg" alt="" id="changeproperty">`;
            document.getElementById("wish").innerHTML = "GOOD AFTERNOON!!!";
        }
        else if ((hours>=4) && (hours<=8) && (ampm=="PM")) {
            document.getElementById("message").innerHTML = "LET'S HAVE DINNER";
            document.getElementById("image").innerHTML = `<img src="./dinner-time.jpg" alt="" id="changeproperty">`;
            document.getElementById("wish").innerHTML = "GOOD EVENING!!!";
        }
        else{
            document.getElementById("message").innerHTML = " IT'S TIME TO SLEEP";
            document.getElementById("image").innerHTML = `<img src="./bed-time.jpg" alt="" id="changeproperty">`;
            document.getElementById("wish").innerHTML = " Good night!!!";
        }
    }
}