import inquirer from "inquirer";
 
let myBalance = 10000;
let pinCode = 4321;

 let pinAnswer =await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message: "Enter your pin "
    }
])
if (pinAnswer.pin === pinCode){
    console.log("your pin is correct");
    let opreationsAns = await inquirer.prompt
    (
        [
            {
                name: "oprations",
                type:"list",
                message:"select your opreations",
                choices:["withdraw", "checkBalance"]
    
             }
        ]
    )
    if (opreationsAns.oprations === 'withdraw' )
    {
        let amountAns = await inquirer.prompt
        (
            [
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount"
                }
            ]
        );
        if (amountAns.amount > myBalance){
            console.log("insufficent Balance")
        }
        else if (   myBalance -=  amountAns.amount){
      
         console.log("your remaining balance is "+ myBalance)
        }
    }

    
    else if (opreationsAns.oprations === "checkBalance"){
        console.log("your balance is "+ myBalance
        
        
        )
    }
}
else 
 {
    console.log("your pin is wrong")
 }
 //console.log(pinAnswer)