
function product(n,c,i,p,g,s){
    
    this.name =n;
    this.category=c;
    this.image =i;
    this.price =p;
    this.gender=g;
    this.sold =s;

 }

var cartarr = JSON.parse(localStorage.getItem("productdata")) || [];

function Submitfun(e){
     e.preventDefault();
    
     let form =document.querySelector("#form");
     let name =form.name.value;
     let category =form.category.value;
     let image = form.image.value;
     let price =form.price.value;
     let gender = form.gender.value;
     let sold =form.sold.value;
     
     
     let obj = new product(name,gender,category,price,sold,image)
     
    cartarr.push(obj);
    localStorage.setItem("productdata",JSON.stringify(cartarr))

 }