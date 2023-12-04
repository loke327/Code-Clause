function submitSurvey() {
    // Get form element
    var form = document.getElementById("surveyForm");

    // Validate form
    if (form.checkValidity()) {
        // Collect survey responses
        var formData = new FormData(form);
        var responses = {};

        formData.forEach(function(value, key){
            responses[key] = value;
        });

        // In a real-world scenario, you would send the responses to a server for storage
        console.log("Survey Responses:", responses);

        // Optional: Display a thank you message or redirect the user
        alert("Thank you for completing the survey!");
    } else {
        // If the form is not valid, show an error message or handle it as needed
        alert("Please answer all questions before submitting.");
    }
}
