        
        let firstName = document.getElementById("txtFirstName");
        let lastName = document.getElementById("txtLastName");
        let email = document.getElementById("txtEmail");
        let phone = document.getElementById("txtPhone");
        let address = document.getElementById("txtAddress");
        let town = document.getElementById("txtTown");
        let postCode = document.getElementById("txtPostCode");
        let form = document.querySelector("form");

            
        function validateInput(){
            console.log("validate input");
        }
       
        if(firstName.value.trim()===""){
            onError(firstName, "User Name cannot be empty") ;
        }else{
            onSuccess(firstName);
        }

        if(lastName.value.trim()===""){
            onError(lastName, "Last Name cannot be empty") ;
        }else{
            onSuccess(lastName);
        }

        if(email.value.trim()===""){
            onError(email, "Email is not valid") ;
        }else{
            onSuccess(email);
        }

        if(phone.value.trim()===""){
            onError(phone, "Phone Number not valid") ;
        }else{
            onSuccess(phone);
        }

        if(address.value.trim()===""){
            onError(address, "address cannot be empty") ;
        }else{
            onSuccess(address);
        }

        if(town.value.trim()===""){
            onError(town, "town cannot be empty") ;
        }else{
            onSuccess(town);
        }


        document.querySelector("button")
        .addEventListener("submit",()=>{
            Event.preventDefault();
            validateInput();
        });

        function onSuccess(input){
            let parent=input.parentElement;
            let messageEle=parent.querySelector("small");
            messageEle.style.visibility="hidden";
            parent.classList.remove("error");
            parent.classList.add("success");
        }

        function onError(input){
            let parent=input.parentElement;
            let messageEle=parent.querySelector("small");
            messageEle.style.visibility="visible";
            messageEle.innerText="message";
            parent.classList.add("error");
            parent.classList.remove("success");
        }

        function isValidEmail(email){
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
         }
         
         