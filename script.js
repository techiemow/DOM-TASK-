let div = document.createElement('div');
div.className = "container";
div.style.background ="#23404B"

let divheader = document.createElement("h1");
divheader.className = "text-center";
divheader.id = "title";
divheader.innerText = "Rest Countries";
divheader.style.color = "white"
div.append(divheader);


let row = document.createElement("div");
row.className = "row";


// Fetch countries data
fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    // here response.json is an object itself
    .then(countries => {
        countries.forEach((country, index) => {
            if (index % 3 === 0) {
                // Create a new row for every three countries
                row = document.createElement("div");
                row.className = "row mb-5";
                row.style.display = "flex";
                row.style.justifyContent = "space-evenly";
            }

            let col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
            col.style.display = "flex";
            col.style.justifyContent = "space-evenly";
        

            let card = document.createElement('div');
            card.className = 'card h-100';
            card.style.width = "18rem";

            // Create card header
            let cardHeader = document.createElement('div');
            cardHeader.className = "card-header";
            cardHeader.innerText = country.name;
            cardHeader.style.background = "#000000";
            cardHeader.style.color = "white";
            cardHeader.style.textAlign = "center"; // Center the text horizontally
            cardHeader.style.lineHeight = "2rem"; // Adjust line height to center vertically
            card.appendChild(cardHeader);
            

            // Create card body
            let cardBody = document.createElement("div");
            cardBody.className = "card-body";
            cardBody.style.background = " linear-gradient(to left, #4A5A57,#CEBF9C)";
            cardBody.style.display = "flex";
            cardBody.style.flexDirection = "column";
            cardBody.style.display = "flex";
            cardBody.style.justifyContent = "space-evenly";
            cardBody.style.alignItems = "center"
     
        
         

            // Create flag image
          
            let image = document.createElement("img");
            image.src = country.flags.png;
            image.className = "card-img-top py-3";
            image.alt = "Each Country's Flag";
            image.style.alignItems = "center";
            image.style.justifyContent = "center";

            cardBody.appendChild(image)

            //  Creating CARD-TEXT
            let cardText = document.createElement("div");
            cardText.className = "card-text";
    
            // Creating item for capital
            let item1 = document.createElement("p");
            item1.className = "list-group-item";
            if(country.capital){
                item1.textContent = `Capital: ${country.capital}`;
            item1.style.color = "white";
            cardText.appendChild(item1);
            }

            // Creating item for Region
            let item2 = document.createElement("p");
            item2.className = "list-group-item";
            item2.textContent = `Region: ${country.region}`;
            item2.style.color = "white";
            cardText.appendChild(item2);

            // Creating item for  Country's code
            let item3 = document.createElement("p");
            item3.className = "list-group-item";
            item3.textContent = `Country's Code: ${country.alpha3Code}`;
            item3.style.color = "white";
            cardText.appendChild(item3);

            cardBody.append(cardText)
   
            

            // Creating a button
            let button = document.createElement("a");
            if (country.latlng === undefined) {
                button.href = "#";
            } else {
            let laglnt = country.latlng;
            let lat = laglnt[0];
            let lon = laglnt[1];
            
            button.href = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=372110d045d45a38a1c970344a9449b5`;
            button.className = "btn btn-primary";
            button.textContent = "Click for Weather";
            button.style.alignItems = "center";
            button.style.justifyContent = "center";
            button.style.background = " linear-gradient(to left, #4A5A57,#CEBF9C)";
            button.style.border = "1px solid white";
            button.target = "_blank";
            }
            cardBody.appendChild(button);

            // Append card body to card
            card.appendChild(cardBody);

            // Append card to column
            col.appendChild(card);

            // Append column to row
            row.appendChild(col);

            // Append row to container
            div.appendChild(row);
        });
    });

// Append container to body
document.body.appendChild(div);




