let textures = [];
function preload(){
    let TextureNum = 5;
    for(let i = 1; i <= TextureNum;i++){
        // let texture = loadImage("Images/Canvas0" + i + ".png"); //concatenation
        let t = loadImage(`Images/Canvas0${i}.png`); // backticks are 'template literals' and dollar sign curly brace is known as string interpolation
        textures.push(t); //adds textures to texture array
    }
}
function setup() {
    createCanvas(800, 800);
    background(255);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){
            tint(random(255))
            let t = random(textures);
            image(t, x, y, CELL_SIZE)
            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x=0;
    }

}
