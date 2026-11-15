document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const chocolate = document.getElementById("chocolate").value;
            const quantity = document.getElementById("quantity").value;

            let price = 0;

            if (chocolate === "Dark Chocolate") 
            {
                price = 12;
            } 
            else if (chocolate === "Milk Chocolate")
            {
                price = 10;
            } 
            else if (chocolate === "Hazelnut Chocolate")
            {
                price = 15;
            }

            const total = quantity * price;

            document.getElementById("message").innerHTML =
                "Thank you, " + name +
                "! Your order of " + quantity + " " + chocolate +
                " has been received.<br>" +
                "Total Price: RM " + total.toFixed(2);
        });
    }

});