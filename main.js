        
        let form = document.getElementById("form");
        let firstName = document.getElementById("txtFirstName");
        let lastName = document.getElementById("txtLastName");
        let email = document.getElementById("txtEmail");
        let phone = document.getElementById("txtPhone");
        let address = document.getElementById("txtAddress");
        let town = document.getElementById("txtTown");
        let postCode = document.getElementById("txtPostCode");
        let errorElement = document.getElementById("error");
            
        form.addEventListener('submit',(e) => {
            e.preventDefault();

            checkInputs();
        });

        function checkInputs() {
           // trim to remove the whitespaces
            let firstNameValue = firstName.value.trim();
            let lastNameValue = lastName.value.trim();
            let emailValue = email.value.trim();
            let phoneValue = phone.value.trim();
            let addressValue = address.value.trim(); 
            let townValue = town.value.trim();
            let postCodeValue = postCode.value.trim(); 

            
        
                
        if(firstNameValue === "" || firstNameValue == null){
            onError(firstName, "First Name cannot be empty") ;
        }else{
            onSuccess(firstName);
        }

        if(lastNameValue === ""){
            onError(lastName, "Last Name cannot be empty") ;
        }else{
            onSuccess(lastName);
        }

        if(emailValue === ""){
            onError(email, "Email is not valid") ;
        }else{
            onSuccess(email);
        }

        if(phoneValue === ""){
            onError(phone, "Phone Number not valid") ;
        }else{
            onSuccess(phone);
        }

        if(addressValue === ""){
            onError(address, "address cannot be empty") ;
        }else{
            onSuccess(address);
        }

        if(townValue === ""){
            onError(town, "town cannot be empty") ;
        }else{
            onSuccess(town);
        }
        
        if(postCodeValue === ""){
            onError(postCode, "postcode cannot be empty") ;
        }else{
            onSuccess(postCode);
        }
 

        }
        function onSuccess(input){
           const formControl = input.parentElement;
           formControl.className = 'form-control success';
           
        }

        function onError(input, txt){
            const formControl = input.parentElement;
            const small = formControl.querySelector('.small');
            console.log(small)
            small.innerText= txt;
            
        }

        
        /*function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }*/