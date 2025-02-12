document.getElementById("loginBtn").addEventListener("click", function () {
    const applicationNumber = document.getElementById("applicationNumber").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;  // Fetch DOB input

    // Set expected login credentials (Replace with actual values)
    const expectedApplicationNumber = "250310484347";  // Your actual application number
    const expectedPassword = "your_password";          // Your actual password
    const expectedDOB = "12-02-2025";                  // Ensure format: YYYY-MM-DD

    // Validate login
    if (applicationNumber === expectedApplicationNumber &&
        password === expectedPassword &&
        dob === expectedDOB) {
        window.location.href = "result.html";  // Redirect to result page
    } else {
        alert("Invalid login details. Please try again.");
    }
});