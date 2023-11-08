$(document).ready(function() {

    $("#form").submit(function(e) {
        e.preventDefault();

        var email = $("#email").val();

        var data = {
            email: email
        };

        $.ajax({
            url: "send_email.php", // Replace with your server-side script URL
            method: "POST",
            data: data,
            success: function(response) {
                if (response.success) {
                    $("#form").html("<div class='alert alert-success'>Your message has been sent successfully.</div>");
                } else {
                    $("#form").html("<div class='alert alert-danger'>" + response.error + "</div>");
                }
            },
            error: function(error) {
                console.error(error);
                $("#form").html("<div class='alert alert-danger'>An error has occurred. Please try again later.</div>");
            }
        });
    });
});

<html>
  <body>
    <script src="https://accounts.google.com/gsi/client" async></script>
    <script>
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
      }
      window.onload = function () {
        google.accounts.id.initialize({
          client_id: "YOUR_GOOGLE_CLIENT_ID"
          callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" }  // customization attributes
        );
        google.accounts.id.prompt(); // also display the One Tap dialog
      }
    </script>
    <div id="buttonDiv"></div>
  </body>
</html>