$( document ).ready(function(){
    const $number = $('.js-number');
    let acc1 = "";
    let acc2 = "";
    const $process = $('.js-process');
    let operation = false;
    let MathOperation = "";
    const $container = $('.js-total');
    const $equal = $('.js-equal');
    const $add = $('.js-add');
    const $substract = $('.js-substract');
    const $multiplication = $('.js-multiplication');
    const $division = $('.js-division');
    const $remove = $('.js-remove');
    const $delete = $('.js-delete');
    
    $number.click(printNumberPressed);
    function printNumberPressed(){
        let valNumber = $(this).text();
        if(operation){
            acc2 = acc1;
            acc1 = "";
            acc1 += valNumber;
            $process.text(acc1);
            operation = false;
        } else {
            acc1 += valNumber;
            $process.text(acc1);
        }
    };
        
    

    
    $delete.click(deleteNumbers);
    function deleteNumbers(){
        let newprocess = $('.js-process').text();
        let newacc1 = newprocess.substring(0, newprocess.length-1);
        $process.text(newacc1);
        operation = false;
        acc1 = newacc1;
    };
        
    
    
    $add.click(addNumbers)
    function addNumbers(){
        if((acc1) && (acc2)){
            equalClick();
            acc1 = $container.text();
            $process.empty();
            MathOperation = "add";
            acc1 = "";
            acc2 = $container.text();
        } else { 
            operation = true;
            MathOperation = "add";
        }
    };
        
    

    $substract.click(substract);
    function substract(){
        if((acc1) && (acc2)){
            equalClick();
            acc1 = $container.text();
            $process.empty();
            MathOperation = "substract";
            acc1 = "";
            acc2 = $container.text();
        } else { 
            operation = true;
            MathOperation = "substract";
        }
    };
        
    

    $multiplication.click(multiplicationNumbers);
    function multiplicationNumbers(){
        if((acc1) && (acc2)){
            equalClick();
            acc1 = $container.text();
            $process.empty();
            MathOperation = "multiplication";
            acc1 = "";
            acc2 = $container.text();
        } else { 
            operation = true;
            MathOperation = "multiplication";
        }
    };

    $division.click(divisionNumbers);
    function divisionNumbers(){
        if((acc1) && (acc2)){
            equalClick();
            acc1 = $container.text();
            $process.empty();
            MathOperation = "division";
            acc1 = "";
            acc2 = $container.text();
        } else { 
            operation = true;
            MathOperation = "division";
        }
    };

    function equalClick() {
        acc1 = parseInt(acc1);
        acc2 = parseInt(acc2);
        if (MathOperation === "add"){
            $container.text(acc1 + acc2);
        } else if(MathOperation === "substract") {
            $container.text(acc2 - acc1);
        }else if(MathOperation === "multiplication") {
            $container.text(acc2 * acc1);
        }else if(MathOperation === "division") {
            $container.text(acc2 / acc1);
        }
    };

    $equal.click(equalClick);

    $remove.click(removeNumbers);
    function removeNumbers(){
        operation = false;
        $process.empty();
        $container.empty(); 
        MathOperation = "";
        acc1 = "";
    };
        
    
})
    




