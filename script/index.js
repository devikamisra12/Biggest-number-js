

// biggest number 

let play = prompt("Would you like to play the Biggest number of the three numbers? y(yes) or n(no)?");

play = play.toLowerCase ();

if (play ==="n"|| play==="no") {
    alert("Refresh the page to play again , later")
}
else if (play === "y" || play=== "yes") {
    let x = prompt("Enter The first Number");
    let y= prompt("Enter The Second Number");
    let z = prompt("Enter The Third Number");
    
    // to get the biggest number

    let num = x ;
    if (num < y) {
        num = y ;
    }
    if (num < z) {
        num = z ;
    }
    alert(num);
}