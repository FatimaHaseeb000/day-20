
function save(){
         var fn=document.getElementById('first-name').value;
         check(fn);
         var ln=document.getElementById('last-name').value;
         check(ln);
         var e=document.getElementById('email').value;
         check(e);
         var ph=document.getElementById('phone').value;
         check(ph);
         var pass=document.getElementById('pwd').value;
         check(pass);
         localStorage.setItem("FirstName",fn);
        localStorage.setItem("LastName",ln);
        localStorage.setItem("Email",e);
        localStorage.setItem("PhoneNo",ph);
        localStorage.setItem("Password",pass);

}
function check(v){
    if (v==="")
    {
        alert('Please fill the field')
    }
   
}
function show(){
    var fnD=localStorage.getItem("FirstName")
    var lnD=localStorage.getItem("LastName")
    var eD=localStorage.getItem("Email")
    var phD=localStorage.getItem("PhoneNo")
    var passD=localStorage.getItem("Password")

   document.getElementById('d-name').textContent= 'Name:'+fnD+' '+lnD
   
   document.getElementById('d-email').textContent='Email:'+ eD
   document.getElementById('d-phone').textContent= 'Phone:'+phD
  
    
    
    
    
}