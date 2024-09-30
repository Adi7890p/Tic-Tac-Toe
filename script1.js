let list = [1,2,3,4,5,6,7,8,9];
let lx = [],ly = [],logic = [];
let g = 0;
let ak = undefined;
let n = 0;
let m = null;
let i = null;
let l = null;
let a = null;
let p1 = document.querySelector('#p2');
let p2 = document.querySelector('#p1');
let bulb = document.querySelector("#bulb");
p1.style.visibility="hidden";
bulb.style.visibility="hidden";
let checky,checkx; 


function random(l){
    function lcg(seed) {
        let a = 1664525;
        let c = 1013904223;
        let m = 2 ** 32;
        seed = (a * seed + c) % m;
        return seed;
    }

    function getRandomIntInRange(min, max, seed) {
        let randomNumber = lcg(seed);
        return Math.floor(randomNumber / (2 ** 32) * (max - min + 1)) + min;
    }

    // Example usage:
    let seed = Date.now(); // Or any fixed seed value
    let min = 0;
    max = l;

    let randomInt = getRandomIntInRange(min, max, seed);
    // console.log(randomInt); // Will return a pseudorandom integer between 5 and 15
    // console.log(Date.now());
    return randomInt;
}
function xicon(i){
    let icox = document.createElement("i");
    icox.setAttribute("class","fa-solid fa-x");
    icox.style.color="#63E6BE";
    document.querySelectorAll(".box")[i].append(icox);    

}
function yicon(a){
    let icoy = document.createElement("i");
    icoy.setAttribute("class","fa-solid fa-o");
    icoy.style.color="#63E6BE";
    document.querySelectorAll(".box")[a].append(icoy);
}
function ai(n){

    if(n==1){
        r = random(l = (list.length)-1);
        rn = list[r];
    }
    else{
        logic = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[1,4,7],[2,5,8],[3,5,7],[3,6,9]];
        for(i=0;i<8;++i){
            checky = ly.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
            checkx = lx.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
            // below conditions for check winning of ak
            if (checky.length==2 && checkx.length==0){
                rn = logic[i].filter(value => !ly.includes(value));
                console.log('a1');
                g = 1;
                ak = 1;
                break;
            }
        }
        if(ak!=1){
            for(i=0;i<8;++i){
                console.log('h1');
                checky = ly.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
                checkx = lx.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
                if (checkx.length==2 && checky.length==0){
                    rn = logic[i].filter(value => !lx.includes(value));
                    console.log('a2');
                    g = 1;
                    break;
                }
            }
        }
        //not match any condition than generate random try
        if (g==0){
            r = random(l = (list.length)-1);
            rn = list[r];
            console.log('aari');
        }
        g=0;// if condition true than fo bypass random try
    }
    if(rn==1){b1.click();}
    if(rn==2){b2.click();}
    if(rn==3){b3.click();}
    if(rn==4){b4.click();}
    if(rn==5){b5.click();}
    if(rn==6){b6.click();}
    if(rn==7){b7.click();}
    if(rn==8){b8.click();}
    if(rn==9){b9.click();}

}

function win(){
    console.log("enter");
    for(i=0;i<8;++i){
        logic = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[1,4,7],[2,5,8],[3,5,7],[3,6,9]];
        checky = ly.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
        checkx = lx.filter(value => logic[i].includes(value));//check how many num of logic1 in ly
        if(checkx.length==3){
            n=undefined;
            alert("You Win!!!");
            p1.style.visibility="hidden";
            bulb.style.visibility="hidden";
            p2.style.visibility="hidden";  
        }
        if(checky.length==3 && checkx.length!=3){
            n=undefined;
            alert("Computer Win ,you lose!!!");
            p1.style.visibility="hidden";
            bulb.style.visibility="hidden";
            p2.style.visibility="hidden";  
        }
        if(checkx.length!=3 && checky.length!=3 && n==9){
            n=undefined;
            alert("Draw!!!");
            p1.style.visibility="hidden";
            bulb.style.visibility="hidden";
            p2.style.visibility="hidden";  
        }
    }
}

let b1 = document.getElementById("1");
b1.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";    
        i=0;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 1);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b1.onclick=null;
        
        
    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=0;
        yicon(a);
        ly.push(a+1);
        win();
        list = list.filter(value => value !== 1);
        b1.onclick=null;

    }

    
}

    
let b2 = document.getElementById("2");
b2.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=1;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 2);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b2.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=1;
        yicon(a);
        ly.push(a+1);
        win();
        list = list.filter(value => value !== 2);
        b2.onclick=null;
    }



    
}

let b3 = document.getElementById("3");
b3.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=2;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 3);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b3.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=2;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 3);
        b3.onclick=null;
        win();
    }



    
}
    
let b4 = document.getElementById("4");
b4.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=3;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 4);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b4.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=3;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 4);
        b4.onclick=null;
        win();
    }



    
}

let b5 = document.getElementById("5");
b5.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=4;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 5);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b5.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=4;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 5);
        b5.onclick=null;
        win();
    }



    
}
    
let b6 = document.getElementById("6");
b6.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=5;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 6);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b6.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=5;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 6);
        b6.onclick=null;
        win();
    }



    
}

let b7 = document.getElementById("7");
b7.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=6;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 7);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b7.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=6;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 7);
        b7.onclick=null;
        win();
    
    }


    
}
    
let b8 = document.getElementById("8");
b8.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=7;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 8);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b8.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=7;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 8);
        b8.onclick=null;
        win();
    }



    
}

let b9 = document.getElementById("9");
b9.onclick=()=>{
    n++;
    if(n%2==1){
        p1.style.visibility="visible";
        p2.style.visibility="hidden";        
        bulb.style.visibility="visible";       
        i=8;
        xicon(i);
        lx.push(i+1);
        win();
        list = list.filter(value => value !== 9);
        m = n;
        n = undefined;
        setTimeout(() => {
            n = m;
            ai(n);
        }, 1800);
        b9.onclick=null;

    }
    if(n%2==0){
        p1.style.visibility="hidden";
        p2.style.visibility="visible";
        bulb.style.visibility="hidden";
        a=8;
        yicon(a);
        ly.push(a+1);
        list = list.filter(value => value !== 9);
        b9.onclick=null;
        win();
    }

}
let res = document.getElementById("rebtn");
res.onclick=()=>{
    location.reload();
}
