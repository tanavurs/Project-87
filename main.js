canvas=new fabric.Canvas("myCanvas");

block_y=1;
block_x=1;

block_width = 350;
block_height = 430;

var block_image_object= "";

function ranger_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({
top:block_y,
left:block_x
});
   canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '82') {
console.log("r");
ranger_image("rr1.png")
}
if(keyPressed == '71'){
block_x = 250;
ranger_image("gr.png")
}
if(keyPressed == '89'){
block_x =405;
block_y=5
ranger_image("yr.png")
}
if(keyPressed == '80'){
block_x = 670;
block_y=1;
ranger_image("pr.png")
}
if(keyPressed == '66'){
block_x = 795;
block_y=-9;
ranger_image("br.png")
}
   }