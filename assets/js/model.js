function btnfetch(btns){
    var tf = 0;
    var count = 0;
    var x = 0;
    var y = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            count++;
            if(count == btns){
                tf = 1;
                x = i;
                y = j;
                break;
            }
        }
        if(tf == 1)
            break;
    }
    matrix(x,y);
}
function draw(){
    var k = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(arrz[i][j] == -1)
            k++;
        }
    }
    if(k < 1)
        return 10;
    
}
function checkresult(vb ,count){
    vb = parseInt(vb);
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(j == 0 && arrz[i][j] == vb){
                count[0]++;
            }
            if(j == 1 && arrz[i][j] == vb){
                count[1]++;
            }
            if(j == 2 && arrz[i][j] == vb){
                count[2]++;
            }
            if(i == 0 && arrz[i][j] == vb){
                count[3]++;
            }
            if(i == 1 && arrz[i][j] == vb){
                count[4]++;
            }
            if(i == 2 && arrz[i][j] == vb){
                count[5]++;
            }
            if(i == j && arrz[i][j] == vb){
                count[6]++;
            }
            if(i+j == 2 && arrz[i][j] == vb){
                count[7]++;
            }
        }
    }
    for(var m =0; m < 8; m++){
        if(count[m] == 3)
            return vb;
    }

}