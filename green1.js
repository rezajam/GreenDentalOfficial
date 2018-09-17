//=======MAIN CLOCK=========
function digi() {
    var date = new Date(),
        hour = date.getHours(),
        minute = checkTime(date.getMinutes()),
        ss = checkTime(date.getSeconds());

          function checkTime(i) {
            if( i < 10 ) {
              i = "0" + i;
            }
            return i;
          }

    if ( hour > 12 ) {
      hour = hour - 12;
      if ( hour == 12 ) {
        hour = checkTime(hour);
        document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";
      }
      else {
        hour = checkTime(hour);
        document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" PM";
      }
    }
    else {
        document.getElementById("tt").innerHTML = hour+":"+minute+":"+ss+" AM";;
    }
    var time = setTimeout(digi,1000);


// ======OPEN-CLOSED NEON LIGHT=========
          var dayNum = date.getDay();
          var hourNum = date.getHours();
          var Open = true;

          if( dayNum == 3 || dayNum == 0) {
              document.getElementById("openClosed").innerHTML = "<span id= \"neonRedText\" >(OFFICE IS CLOSED)</span>";
              Open = false;

          }else if (dayNum == 6) {
                  if(hourNum < 10 || hourNum > 15){
                    document.getElementById("openClosed").innerHTML = "<span id= \"neonRedText\">(OFFICE IS CLOSED)</span>";
                    Open = false;
                  }else {
                    document.getElementById("openClosed").innerHTML = "<span id= \"neonBlueText\">(OFFICE IS OPEN)</span>";
                    open = false;
                  }
          }else if (hourNum < 10 || hourNum > 17 ) {
              document.getElementById("openClosed").innerHTML = "<span id= \"neonRedText\">(OFFICE IS CLOSED)</span>";
              Open = false;
          }else {
              document.getElementById("openClosed").innerHTML = "<span id= \"neonBlueText\">(OFFICE IS OPEN)</span>";
          }



// =======another function is needed=======
      if( (dayNum == 1) ){
        if(Open){document.getElementById("BtmMonDay").innerHTML = "<span id=\"openBtm\">Monday</span>";
                 document.getElementById("BtmMonHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrMon").innerHTML = "<span id=\"openBoxOfficeHours\">Monday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmMonDay").innerHTML = "<span id=\"closedBtm\">Monday</span>";
                 document.getElementById("BtmMonHrs").innerHTML = "<span id=\"closedBtm\">10AM-6PM</span>";
                 document.getElementById("hrMon").innerHTML = "<span id=\"closedBoxOfficeHours\">Monday 10pm-6pm</span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }


      if( (dayNum == 2) ){
        if(Open){document.getElementById("BtmTueDay").innerHTML = "<span id=\"openBtm\">Tuesday</span>";
                 document.getElementById("BtmTueHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrTue").innerHTML = "<span id=\"openBoxOfficeHours\">Tuesday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmTueDay").innerHTML = "<span id=\"closedBtm\">Tuesday</span>";
                 document.getElementById("BtmTueHrs").innerHTML = "<span id=\"closedBtm\">10AM-6PM</span>";
                 document.getElementById("hrTue").innerHTML = "<span id=\"closedBoxOfficeHours\">Tuesday 10pm-6pm</span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }


      if( (dayNum == 3) ){
        if(Open){document.getElementById("BtmWedDay").innerHTML = "<span id=\"openBtm\">Wednesday</span>";
                 document.getElementById("BtmWedHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrWed").innerHTML = "<span id=\"openBoxOfficeHours\">Wednesday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmWedDay").innerHTML = "<span id=\"closedBtm\">Wednesday</span>";
                 document.getElementById("BtmWedHrs").innerHTML = "<span id=\"closedBtm\">CLOSED</span>";
                 document.getElementById("hrWed").innerHTML = "<span id=\"closedBoxOfficeHours\">Wednesday <b>CLOSED</b></span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }


      if( (dayNum == 4) ){
        if(Open){document.getElementById("BtmThuDay").innerHTML = "<span id=\"openBtm\">Thursday</span>";
                 document.getElementById("BtmThuHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrThu").innerHTML = "<span id=\"openBoxOfficeHours\">Thursday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmThuDay").innerHTML = "<span id=\"closedBtm\">Thursday</span>";
                 document.getElementById("BtmThuHrs").innerHTML = "<span id=\"closedBtm\">10AM-6PM</span>";
                 document.getElementById("hrThu").innerHTML = "<span id=\"closedBoxOfficeHours\">Thursday 10pm-6pm</span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }

      if( (dayNum == 5) ){
        if(Open){document.getElementById("BtmFriDay").innerHTML = "<span id=\"openBtm\">Friday</span>";
                 document.getElementById("BtmFriHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrFri").innerHTML = "<span id=\"openBoxOfficeHours\">Friday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN </span>";}

        else {   document.getElementById("BtmFriDay").innerHTML = "<span id=\"closedBtm\">Friday</span>";
                 document.getElementById("BtmFriHrs").innerHTML = "<span id=\"closedBtm\">10AM-6PM</span>";
                 document.getElementById("hrFri").innerHTML = "<span id=\"closedBoxOfficeHours\">Friday 10pm-6pm</span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }

      if( (dayNum == 6) ){
        if(Open){document.getElementById("BtmSatDay").innerHTML = "<span id=\"openBtm\">Saturday</span>";
                 document.getElementById("BtmSatHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrSat").innerHTML = "<span id=\"openBoxOfficeHours\">Saturday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmSatDay").innerHTML = "<span id=\"closedBtm\">Saturday</span>";
                 document.getElementById("BtmSatHrs").innerHTML = "<span id=\"closedBtm\">10AM-6PM</span>";
                 document.getElementById("hrSat").innerHTML = "<span id=\"closedBoxOfficeHours\">Saturday 10pm-6pm</span> <span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }

      if( (dayNum == 0) ){
        if(Open){document.getElementById("BtmSunDay").innerHTML = "<span id=\"openBtm\">Sunday</span>";
                 document.getElementById("BtmSunHrs").innerHTML = "<span id=\"openBtm\">10AM-6PM</span>";
                 document.getElementById("hrSun").innerHTML = "<span id=\"openBoxOfficeHours\">Sunday 10pm-6pm</span> <span id =\"openTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW OPEN</span>";}

        else {   document.getElementById("BtmSunDay").innerHTML = "<span id=\"closedBtm\">Sunday</span>";
                 document.getElementById("BtmSunHrs").innerHTML = "<span id=\"closedBtm\">CLOSED</span>";
                 document.getElementById("hrSun").innerHTML = "<span id=\"closedBoxOfficeHours\">Sunday <b>CLOSED</b><span id =\"closedTextOfficeHours\" >&nbsp &nbsp OFFICE IS NOW CLOSED</span>";}
      }



}
