const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
let red = document.getElementById('r')
let blue = document.getElementById('b')
let green = document.getElementById('g')
let orange = document.getElementById('o')
let pink = document.getElementById('p')



let isDrawing = false;
ctx.strokeStyle = "blue"

function startDrawing(e){
    isDrawing = true
    draw(e)
 }

 
 function endDrawing(){
    isDrawing = false
    ctx.beginPath()
 }
 
  
 function changeColor(color){
     
     ctx.strokeStyle = color

 }

function draw(e){
    if(!isDrawing){
        return
    }

    ctx.lineWidth = 10;
    ctx.lineCap = "round";


    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mouseup', endDrawing)
canvas.addEventListener('mousemove', draw)