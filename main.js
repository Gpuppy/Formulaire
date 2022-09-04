        const form = document.getElementById("#form");
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const address = document.getElementById('address');
        const town = document.getElementById('town');
        const postCode = document.getElementById('postCode');
            
        form.addEventListener('submit',e=>{
            e.preventDefault();
        
            form_verify();
        })
                
                  
            
    function form_verify() {
        const nameValue = firstName.value.trim();



        if(nameValue === ""){
            let message = "firstName ne peut pas etre vide";
            setError(firstName, message);
        }else if(!nameValue.match(/^[a-zA-Z]/)){
            let message = "firstName doit commencer par une lettre";
            setError(firstName, message)
        }else{
            let letterNum = nameValue.length;
            if(letterNum < 3) {
                let message ="firstName doit avoir au moins 3 caratères";
                setError(firstName, message)

            }else{ setSucces(firstName);
            }
        }
    }

    function setError(elem, message){
        const formControl = elem.parentElement;
        const small = formControl.getElementById('small');

        small.innerText = message

        formControl.className = "form-control error";
    }
    
