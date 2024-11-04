let NanMetrify
let graphic
// this what to create an intital rondom load but it didnt work 
 let random = Math.random () * 300 + 200
let multiplier = 1000



function preload () {
    NanMetrify = loadFont("NaNMetrify-B-Latin/09.MetrifyB-Gigawide/TTF/NaNMetrifyBGigawide-Blck.ttf"); 
}



function setup () {
    createCanvas(1800,600)

    graphic = createGraphics (1800,600)

    graphic.textSize(390)
    graphic.textAlign(CENTER, CENTER)
    graphic.fill ("#DADFE1")
    graphic.textFont(NanMetrify)
    graphic.textStyle(100);

    graphic.text("R&D",910,200)
}

function draw () {
background("#2c78f2")

const tileSize = 80 

const targetMultiplier = constrain(50 - scrollY / 10, 15, 50)
multiplier = lerp(multiplier, targetMultiplier, 0.05)

for (let x = 0; x < 180; x = x + 1 ) {
    for (let y = 0; y < 180; y = y + 1 ) {

const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 1) * multiplier;



        const sx = x * tileSize + distortion
        const sy = y * tileSize + (distortion / 10 )
        const sw = tileSize
        const sh = tileSize
        
        
        const dx = x * tileSize
        const dy = y * tileSize
        const dw = tileSize
        const dh = tileSize

        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh )
    }





}

}

