function drawBoxes(numBoxes,boxWidth,boxHeight,boxSpacing){
    if(numBoxes>20){
       // console.log("too many boxes you crazy horse")
        return "too many boxes you crazy horse";

    }
    fill(255,0,0)
    stroke(255) 
    for(let i=0;i<numBoxes;i++){
        rect(i*boxSpacing,30,boxWidth,boxHeight)
    }
    return "completed"
}