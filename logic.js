
$(document).ready(function(){
// Your code here...
//Pseudocode for onclick events
//Build first number
//Select operation
//Build second number
//Finished outputs: operand1 (float), operand2 (float), operator (string)
var operand1Arr=[];
var operand1;
var operand2Arr=[];
var operand2;
var operator=[];
$(".btn-primary").on("click",function(){
    if(operator.length===0){
        operand1Arr.push(this.getAttribute("value"));
        operand1 = Number(operand1Arr.join(""));
        $("#first-number").html(operand1);
    }
    else{
        operand2Arr.push(this.getAttribute("value"));
        operand2 = Number(operand2Arr.join(""));
        $("#second-number").html(operand2);
    }
    console.log(operand1, operand2, operator);  
});


$(".btn-danger").on("click",function(){
    if(operator.length===0&&operand1Arr.length>0){
        operator = this.getAttribute("value");
        $("#operator").html(this.innerHTML);
    }
    console.log(operand1, operand2, operator);
});
$(".btn-success").on("click",function(){
    //operand1, operand2, operator
    console.log(operand1, operand2, operator);
    //Function call to calculate result with parameters: operand1, operand2, operator
            var result;
            switch(operator) {
                case "plus" :
                    result = Number(operand1) + Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
                case "minus" :
                    result = Number(operand1) - Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
                case "times" :
                    result = Number(operand1) * Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
                case "divde" :
                    result = Number(operand1) / Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
                case "power" :
                    result = Number(operand1) ^ Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
                case "clear" :
                    result = Number(operand1) ^ Number(operand2);
                    $("#demo").html("The answer is " + result);
                    break;
            }
        $("#result").html(result);
});
$("#button-clear").on("click",function(){
    operand1Arr=[];
    operand1=0;
    operand2Arr=[];
    operand2=0;
    operator=[];
    result=0;
    $("#first-number").html("");
    $("#second-number").html("");
    $("#operator").html("");
    $("#result").html("");
    console.log(operand1,operand2,operator);
    
});
});

