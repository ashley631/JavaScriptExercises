//*Number One*//
prompt("Enter a number")
var total=0;
for(var i = 1; i < 6; i++) {
	total = total + i;
}

console.log(total);


//*Number Two*//
var strconfirm = confirm("Do you want to play?");
        
        if (strconfirm == true) 
        {
           
            var x = prompt("Enter a word", "");
            var i;
            var text = x;
                do
                {
                    var strconfirm1 = confirm("Do you want to play again?");
                    if (strconfirm1 == true)
                    {
                        i="yes"
                        var y = prompt("Enter a word", "");
                        text = text + " " + y;
                        
                    }
                    else
                    {
                       
                        i = "no";
                        break;
                    }
                    
                }
                while (i != "no");

                console.log(text);
       }



//*Number Three*//

var x = prompt("Enter your name", "");
        var strconfirm = confirm("Would you like to print your name?");

        if (strconfirm == true)
        {
            var i;
            var text = "Hello. My name is" + " " + x;
            console.log(text);

            do
            {
                var strconfirm1 = confirm("Would you like to print this again?");
                if (strconfirm1 == true)
                {
                    i = "yes"
                    text = text + "!";
                    console.log(text);
                }
                else
                {
                    i = "no";
                }
            }
            while (i != "no");
       }

//*Number Four*//

confirm("Hello! Do you want to eat?");
var i = prompt("What time of day is it? Choices: Morning, Evening, Noon?");
switch(i) {
   case "Morning":
       console.log("Since it is morning, you should be eating eggs and toast");
       break;
   case "Noon":
       console.log("Since it is lunch, you should be having a salad");
       break;
   case "Evening":
        console.log("Since it is dinner, you should be having chicken and rice");
        break;
  default:
      console.log("Since its now past dinner, no eating for you");
}
