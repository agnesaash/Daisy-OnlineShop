let images=[
    "images/a1.jpg",
    "images/a11.jpg",
    "images/a111.jpg"
];
let num=0;
let i=0;
let time=3000;
function next(){
    let slider=document.getElementById('slider1');
    num++;
    if(num>=images.length){
        num=0;
    }
    slider1.src=images[num];
}
function previous(){
    let slider=document.getElementById('slider1');
    num--;
    if(num<0){
        num=images.length-1;
    }
    slider1.src=images[num];
}