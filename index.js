let screen = document.getElementById("result") ;
    let buttons = document.querySelectorAll('button') ;
    let screenValue = '' ;
    for(item of buttons)    {
        item.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML ;
            if(buttonText == "=")   {
                if(result.value == "")  {
                    alert("Nothing typed in!") ;
                    result.value = "Type something meaningful" ;
                    var timeout = setTimeout(() => {result.value = ""}, 2000) ; 
                }
                else{
                    screenValue = result.value ;
                    if((screenValue) >= 16331239353195370)    {
                        screenValue = "Infinity" ;
                        screen.value = screenValue ;
                    }
                    else{
                        
                        screenValue = eval(screenValue) ;
                        screen.value = Math.round(screenValue) ;
                        screen.value = screenValue ;
                    }
                   
                }
                
            }
           
            else if(buttonText == "tan")  {
                screenValue += "Math.tan(" ;
                screen.value = screenValue ;
            }
            else if(buttonText == "sin")  {
                screenValue += "Math.sin(" ;
                screen.value = screenValue ;
            }
            else if(buttonText == "cos")  {
                screenValue += "Math.cos(" ;
                screen.value = screenValue ;
            }
            else if(buttonText == "ln")  {
                screenValue += "Math.log(" ;
                screen.value = screenValue ;
            }
            else if(buttonText == "C")  {
                clearTimeout(timeout) ;
                screenValue = '' ;
                screen.value = screenValue ;
            }
            // if(screenValue > 16331239353195370) {
            //     screenValue = "Infinity" ;
            // }
            else{
                screenValue += buttonText ;
                screen.value = screenValue ;
                }
        }) ;    
    }