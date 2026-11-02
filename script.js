$(document).ready(function () {
    $("#togglePassword").on("click", function () {
        const passwordInput = $("#password");
        const isHidden = passwordInput.attr("type") === "password";
        passwordInput.attr("type", isHidden ? "text" : "password");
        $(this).text(isHidden ? "Hide" : "Show");
    });
    function showMessage(message, type) {
        $("#message")
            .removeClass("error success")
            .addClass(type)
            .text(message)
            .show();
    }
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();
        const fullName = $("#fullName").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const password = $("#password").val();
        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            password === ""
        ) {
            showMessage(
                "Please fill in all the required fields.",
                "error"
            );
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showMessage(
                "Please enter a valid email address.",
                "error"
            );
            return;
        }
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            showMessage(
                "Phone number must contain exactly 10 digits.",
                "error"
            );
            return;
        }
        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(password)) {
            showMessage(
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number.",
                "error"
            );
            return;
        }
        showMessage(
            "Form submitted successfully!",
            "success"
        );
        this.reset();
        $("#password").attr("type", "password");
        $("#togglePassword").text("Show");
    });
});