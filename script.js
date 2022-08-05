(function(){//putting all codes in local variable scope
    "use strict";

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

//passing the event object into the function
    function handleFormSubmit(event){
    //prevent default action of form
        event.preventDefault();

    //extracting value
        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;

    //clear out the form fields by looping through and set to empty
        for(var i=0; i < detailsForm.element; i++){
            detailsForm.elements[i].value = ""; //all values to empty string
        }

    //run function that creates new card
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        const wishListContainer = document.querySelector("#destinations_container");

    //if required, change the header (.children selects all the elements underneath)
        if(wishListContainer.children.length == 0){
            document.getElementById("title").innerHTML = "My wish List";
        }

    //add the card
        document.querySelector("#destinations_container").appendChild(destCard);
    }
    
    function createDestinationCard(name, location, photoURL, description){
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.setAttribute("alt", name);

        const constandtPhotoUrl = "images/signpost.jpg";

        if(photoURL.length == 0){
            img.setAttribute("src", name);
        }
        else {
            img.setAttribute("src", photoURL);
        }
        
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0){
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = "description";
            cardBody.appendChild(cardText);
        }

    //when the buttton remove is clicked, innertext changes to remove
        const cardDeletBtn = document.createElement("button");
        cardDeletBtn.innerText = "Remove";

        cardDeletBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeletBtn);

        card.appendChild(cardBody);

        return card;
    }

//function that will take off the event
    function removeDestination(event){  
        const card = event.target.parentElement.parentElement; //target all parent element
        card.remove();
    }

})();
