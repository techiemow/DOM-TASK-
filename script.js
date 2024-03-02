
    function submitForm() {
        // Get form values
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const state = document.getElementById("State").value;
        const country = document.getElementById("Country").value;

        // Get gender value
        let gender = "";
        const genderInputs = document.querySelectorAll('input[id="Gender"]');
        genderInputs.forEach(input => {
            if (input.checked) {
                gender = input.name;
            }
        });

        // Get selected food options
        const selectedFoods = document.querySelectorAll('input[name="food"]:checked');
        if (selectedFoods.length < 2) {
            alert("Please select at least two food options.");
            return;
        }

        // Extract the food values
        const foods = Array.from(selectedFoods).map(food => food.value);
        
        // Create a new row
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>#</td> 
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${foods.join(", ")}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append the new row to the table
        document.getElementById("dataTable").getElementsByTagName('tbody')[0].appendChild(newRow);

        // Reset form fields
        document.getElementById("form").reset();
    }

