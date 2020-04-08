
var mybutton = document.getElementById("myBtn");



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}
var cont = document.getElementById("full");
var cont1 = document.getElementById("buyingsite");
var cont2 = document.getElementById("cart");
function buyingsite()
{



  cont.style.display="none";
  cont1.style.display ="block";
}
function back()
{
  cont.style.display="block";
  cont1.style.display ="none";
  var len1 = spec.length;
  document.getElementById("cart-integer").innerHTML ="("+spec.length+")";
  
}
var arr = [];
var pr =[];



var i=0;




var spec = [];
var i=0;
var k=0;
function added(name,price,address)
{
  spec[i] = new detail(name,price,address);
  i++;
  document.getElementById("message").style.display='none';
 
  alert("Item added Successfully!!");
k++;

}
function cartdisplay()
{
  cont.style.display = 'none';
  cont2.style.display='block';
  var len;
  len = spec.length;
  var val;
  var val2;
 
  for(i=0;i<k;i++)
  {
    if(ar[i]==i)
    {
      document.getElementById("dis"+i).style.display='none';
      document.getElementById("d"+i).style.display='none';
      document.getElementById("card-d"+i).style.display='none';

    }
    else{
    document.getElementById("dis"+i).style.display='block';
    document.getElementById("d"+i).style.display='block';
    document.getElementById("card-d"+i).style.display='block';
  }
    document.getElementById("displayadded"+i).innerHTML =spec[i].Name;
    
    val2= "$"+spec[i].Price;
    document.getElementById("dded"+i).innerHTML =val2;
    val = spec[i].Address;
    document.getElementById("dis"+i).setAttribute("src",val);


  }
}
function backhome()
{
  cont.style.display='block';
  cont2.style.display = 'none';
 

}
var ar = [];
function delet(num)
{
  ar.push(num);

  document.getElementById("displayadded"+num).style.display ='none';
  document.getElementById("dded"+num).style.display='none';
  document.getElementById("dis"+num).style.display='none';
  document.getElementById("d"+num).style.display='none';
  document.getElementById("card-d"+num).style.display='none';
  
  spec.length--;
  document.getElementById("cart-integer").innerHTML ="("+spec.length+")";
  if(spec.length=='0')
  {
  document.getElementById("message").style.display='block';
  }
  alert("Item deleted successfully");

}


function detail(name, price, address) {
  this.Name= name;
  this.Price = price;
  this.Address = address;
}



