document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const chocolate = document.getElementById("chocolate").value;
            const quantity = document.getElementById("quantity").value;

            document.getElementById("message").innerHTML =
                "Thank you, " + name +
                "! Your order of " + quantity +
                " " + chocolate +
                " has been received (demo only).";

            form.reset();
        });
    }

});