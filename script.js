
let i = null;
let n =0;
let p1 = document.querySelector('#p2');
let p2 = document.querySelector('#p1');
p1.style.visibility="hidden";
let lx = [];
let ly = [];
function xicon(i){
    let icox = document.createElement("i");
    icox.setAttribute("class","fa-solid fa-x");
    icox.style.color="#63E6BE";
    document.querySelectorAll(".box")[i].append(icox);    

}
function yicon(i){
    let icoy = document.createElement("i");
    icoy.setAttribute("class","fa-solid fa-o");
    icoy.style.color="#63E6BE";
    document.querySelectorAll(".box")[i].append(icoy);
}
let cx1=0,cx2=0,cx3=0,cx4=0,cy1=0,cy2=0,cy3=0,cy4=0;
let resx = 0, resy = 0;
let mod = 0,mod1=0,mod2=0,mod3=0;
let x=null;
function mes(x){
    if(x==0){
        alert("Draw");
    }
    if(x==1){
        alert("Player1 is win!!!");
    }
    if(x==2){
        alert("Player2 is win!!!");
    }

}

function win(){
    if(n>=5){
        lx.sort();
        ly.sort();
        for(let r=0;r<lx.length;++r){
            for(let t=r+1;t<lx.length;++t){
                // //.log(lx[r]-lx[t],"minus");
                // console.log(r);
                resx = lx[r]-lx[t];
                resx = (resx)**2;
                resx = (resx)**0.5;
                if(lx[r]%3==1 && lx[r+1]-lx[r]==1 && lx[r+2]-lx[r+1]==1){
                    mod=1;
                }
                if(lx[r]%3==0 && lx.includes(lx[r]+2) && lx.includes(lx[r]+4)){
                    mod1=1;
                }           
                if(lx.includes(lx[r]+3) && lx.includes(lx[r]+6)){
                    mod2=1;
                }  
                if(lx[r]%3==1 && lx.includes(lx[r]+4) && lx.includes(lx[r]+8)){
                    mod3=1;
                }
                // console.log(resx,"resx");
                if(resx!=0){
                    console.log(resx,"resx");
                    if(resx==1){
                        cx1++;
                        //.log(cx1,"cx1");

                    }
                    if(resx==2){
                        cx2++;
                    }
                    if(resx==4){
                        cx4++;console.log(cx4);
                    }
                    if(resx==3){
                        cx3++;
                        console.log(cx3,"cx3");
                    }
                    
                    if(cx1==2 && mod==1){
                        mes(x=1);
                        n=10;
                        return;
                    }
                    if(cx2==2 && mod1==1) {
                        mes(x=1);
                        n=10;
                        return;
                    }
                    if(cx3==2 && mod2==1){
                        mes(x=1);
                        n=10;
                        return;
                    }

                    if(cx4==2 && mod3==1){
                        mes(x=1);
                        n=10;
                        return;
                    }
                    if(n==9){
                        mes(x=0);
                        return;
                    }
                    
                }

            }
           

        }
        cx1=0;
        cx2=0;
        cx3=0;
        cx4=0;
        mod=0;
        mod1=0;
        mod2=0;
        mod3=0;
        console.log("loop ended");
        for(let r=0;r<ly.length;++r){
            for(let t=r+1;t<ly.length;++t){
                resy = ly[r]-ly[t];
                console.log(r,"r");
                resy = (resy)**2;
                resy = (resy)**0.5;
                if(ly[r]%3==1 && ly[r+1]-ly[r]==1 && ly[r+2]-ly[r+1]==1){
                    mod=1;
                    //.log(ly[t]);
                }
                if(ly[r]%3==0 && ly.includes(ly[r]+2) && ly.includes(ly[r]+4)){
                    mod1=1;
                }            
                if(ly.includes(ly[r]+3) && ly.includes(ly[r]+6)){
                    mod2=1;
                }
                if(ly[r]%3==1 && ly.includes(ly[r]+4) && ly.includes(ly[r]+8)){
                    mod3=1;
                }
                if(resy!=0){
                    console.log(resy,"resy");
                    if(resy==1){
                        cy1++;
                        //.log(cy1,"cy1");
                    }
                    if(resy==2){
                        cy2++;
                    }
                    if(resy==4){
                        cy4++;
                    }
                    if(resy==3){
                        cy3++;
                        console.log(cy3,"cy3");
                    }
                    if(cy1==2 && mod==1){
                        mes(x=2);
                        n=10;
                        return;    
                    }
                    if(ly[r]%3==0 && ly.includes(ly[r]+2) && ly.includes(ly[r]+4)){
                        mes(x=2);
                        n=10;
                        return;
                    }
                    if(cy3==2 && mod2==1){
                        mes(x=2);
                        n=10;
                        return;
                    }
                    if(cy4==2 && mod3==1){
                        mes(x=2);
                        n=10;
                        return;
                    }
                    if(n==9){
                        mes(x=0);
                        return;
                    }
                    
                }

            }
        }
        cy1=0;
        cy2=0;
        cy3=0;
        cy4=0;
        mod=0;
        mod1=0;
        mod2=0;
        mod3=0;
    }

}

let b1 = document.getElementById("1");
b1.onclick=()=>{i=0;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b1.onclick=null;
}

    
let b2 = document.getElementById("2");
b2.onclick=()=>{i=1;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b2.onclick=null;
}

let b3 = document.getElementById("3");
b3.onclick=()=>{i=2;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b3.onclick=null;
}
    
let b4 = document.getElementById("4");
b4.onclick=()=>{i=3;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b4.onclick=null;
}

let b5 = document.getElementById("5");
b5.onclick=()=>{i=4;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b5.onclick=null;
}
    
let b6 = document.getElementById("6");
b6.onclick=()=>{i=5;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b6.onclick=null;
}

let b7 = document.getElementById("7");
b7.onclick=()=>{i=6;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b7.onclick=null;
}
    
let b8 = document.getElementById("8");
b8.onclick=()=>{i=7;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b8.onclick=null;
}

let b9 = document.getElementById("9");
b9.onclick=()=>{i=8;
    n++;
    if(n<10){
        if(n%2==0){
            p1.style.visibility="hidden";
            p2.style.visibility="visible";
            yicon(i);
            ly.push(i+1);
            win();
        }
        else{
            p1.style.visibility="visible";
            p2.style.visibility="hidden";
            xicon(i);
            lx.push(i+1);
            win();
        }
    }
    b9.onclick=null;
}


let res = document.getElementById("rebtn");
res.onclick=()=>{
    location.reload();
}
