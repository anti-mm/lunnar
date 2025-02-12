async function checkSchoolStatus() {
    try {
      // Fetch the page content
      const response = await fetch("/hcps");
      const html = await response.text();
  
      // Create a temporary DOM to parse the content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
  
      // Find the alert div
      const alertDiv = doc.querySelector("alert-title");
  
      if (alertDiv) {
        const alertText = alertDiv.textContent.toLowerCase();
  
        if (alertText.includes("early")) {
          document.getElementById("status-message").innerText = "The school is having an early dismissal";
        } else if (alertText.includes("delayed")) {
          document.getElementById("status-message").innerText = "School is delayed for 2 hours, sleep in!";
        } else if (alertText.includes("closed")) {
          document.getElementById("status-message").innerText = "YIPEEE WE ARE CLOSED TAKE THE DAY OFF!!!";
        } else {
          document.getElementById("status-message").innerText = "No alert status detected.";
        }
      } else {
        document.getElementById("status-message").innerText = "No alert div found.";
      }
    } catch (error) {
      document.getElementById("status-message").innerText = "Failed to retrieve the page.";
    }
  }
  
  // Run the function
  checkSchoolStatus();
  