let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");
let add_score=0;
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    let num;
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        
        document.querySelector("#die").setAttribute("src", images[dieOneValue]);
        let x = document.getElementById("demo").innerHTML;
        //let y=x.charAt(x.length - 1);
        //console.log(y);
        num = dieOneValue + 1;
        //console.log(num);
        
        // console.log("this is " ,x);
        // console.log("This is num", num);
        // console.log("Hi");
        if (x.charAt(x.length - 1)-'0' == num)
{
    add_score++;
    let final_score="Score : "+(add_score);
        document.querySelector("#Score").innerHTML = final_score;
        console.log(1);
    }
        else {
        //document.querySelector("#Score").innerHTML = "Score : 0";
        //alert('None');
        console.log("Hi2");
    }
    }
    );
}


roll();
