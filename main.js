Canvas=new fabric.Canvas("MYcanvas1");
var px=10,py=10;
var blockW=30,blockH=30;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(140);
        player_object.scaleToHeight(140);
        player_object.set({
            top:py,
            left:px
        });
        Canvas.add(   player_object);
    });
}
function new_Img(GetImg){
    fabric.Image.fromURL(GetImg,function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockW);
        block_object.scaleToHeight(blockH);
        block_object.set({
            top:py,
            left:px
        });
        Canvas.add(block_object);
    });
}




window.addEventListener("keydown",ark);
function ark(e){
    keypress=e.keyCode;
    if (e.shiftKey==true&&keypress=="80"){
        blockW=blockW+10;
        blockH=blockH+10;
        document.getElementById("CurrentWidth").innerHTML=blockW;
        document.getElementById("CurrentHeight").innerHTML=blockH;
    }
    if (e.shiftKey==true&&keypress=="77"){
        blockW=blockW-10;
        blockH=blockH-10;
        document.getElementById("CurrentWidth").innerHTML=blockW;
        document.getElementById("CurrentHeight").innerHTML=blockH;
    }

    if (keypress=="38"){
        Up();
    }
    if (keypress=="40"){
        Down();
    }
    if (keypress=="37"){
        Left();
    }
    if (keypress=="39"){
        Right();
    }
    if (keypress=="72"){
        new_Img("caption_america_left_hand.png");
    }
    if (keypress=="87"){
        new_Img("hulk_face.png");
    }
    if (keypress=="76"){
        new_Img("hulk_left_hand.png");
    }
    if (keypress=="76"){
        new_Img("hulk_legs.png");
    }
    if (keypress=="82"){
        new_Img("hulk_right_hand");
    }
    if (keypress=="66"){
        new_Img("hulkd_body.png");
    }
    if (keypress=="66"){
        new_Img("ironman_body.png");
    }
    if (keypress=="70"){
        new_Img("ironman_face.png");
    }
    if (keypress=="76"){
        new_Img("iron_man_left_hand.png");
    }
    if (keypress=="82"){
        new_Img("ironman_right_hand.png");
    }
    if (keypress=="66"){
        new_Img("spiderman_body.png");
    }
    if (keypress=="70"){
        new_Img("spiderman_face.png");
    }
    if (keypress=="76"){
        new_Img("spiderman_left_hand.png");
    }
    if (keypress=="76"){
        new_Img("spiderman_legs.png");
    }
    if (keypress=="82"){
        new_Img("spiderman_right_hand.png");
    }
    if (keypress=="70"){
        new_Img("thor_face.png");
    }
    if (keypress=="76"){
        new_Img("thor_left_hand.png");
    }
    if (keypress=="82"){
        new_Img("thor_right_hand.png");
    }
}
function Up(){
    if (py>=0){
        py=py-blockH;
        Canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if (py<=500){
        py=py+blockH;
        Canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if (px>=0){
        px=px-blockH;
        Canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if (px<=750){
        px=px+blockH;
        Canvas.remove(player_object);
        player_update();
    }
}