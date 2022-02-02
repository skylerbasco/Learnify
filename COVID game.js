function check () {
  var selectedstrains = document.getElementById('strains').value;
  
  if(selectedstrains == 'SARS-Cov-2') {
     document.getElementById('result').innerHTMl = 'Correct';
     document.getElementById('result').style.color = 'green' ;   
  } else{
    document.getElementById('result').innerHTMl = 'Try again';
     document.getElementById('result').style.color ='red';  
  }
  
  document.getElementById('result').innerHTMl = selectedstrains
  
  var selectedsymptoms = document.getElementById('symptoms').value;
  
  if(selectedsymtptoms == 'All of the above') {
     document.getElementById('result').innerHTMl = 'Correct';
     document.getElementById('result').style.color = 'green';   
  } else{
    document.getElementById('result').innerHTMl = 'Try again';
     document.getElementById('result').style.color ='red';  
  }
  
  document.getElementById('result').innerHTMl = selectedsymptoms

var selectedprecaution = document.getElementById('precaution').value;
  
  if(selectedprecaution == 'All of the above') {
     document.getElementById('result').innerHTMl = 'Correct';
     document.getElementById('result').style.color = 'green';   
  } else{
    document.getElementById('result').innerHTMl = 'Try again';
     document.getElementById('result').style.color ='red';  
  }
  
  document.getElementById('result').innerHTMl = selectedprecaution
  
var selectedspread = document.getElementById('spread').value;
  
  if(selectedprecaution == 'A&C') {
     document.getElementById('result').innerHTMl = 'Correct';
     document.getElementById('result').style.color = 'green';   
  } else{
    document.getElementById('result').innerHTMl = 'Try again';
     document.getElementById('result').style.color ='red';  
  }
  
  document.getElementById('result').innerHTMl = selectedspread
  
  var selectedexperience = document.getElementById('experience').value;
  
  if(selectedexperience == 'Contact the emergency room') {
     document.getElementById('result').innerHTMl = 'Correct';
     document.getElementById('result').style.color = 'green';   
  } else{
    document.getElementById('result').innerHTMl = 'Try again';
     document.getElementById("result").style.color = "red";  
      
  }
  
  document.getElementById('result').innerHTMl = selectedexperience
}
   function togglePopup(){
    document.getElementById('popup-1').classList.toggle('active');
}