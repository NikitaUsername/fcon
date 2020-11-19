export function updateCanvas(canvas, image, emoji){
    
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var mainImg = new Image();
    var emojiImg = new Image();
    var gradient = ctx.createLinearGradient(0,200,0,500);
    mainImg.onload = function(){
        ctx.drawImage(mainImg, 0, 0);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 200, 790, 200);
        ctx.drawImage(emojiImg, 40,310);
    }
    gradient.addColorStop(0, 'rgba(30,194,185,0)');
    gradient.addColorStop(1, 'rgba(30,194,185,1)');
    mainImg.src = image;
    emojiImg.src = emoji; 
    return ctx;
}