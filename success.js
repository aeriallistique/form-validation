
const params = new URLSearchParams(window.location.search);
document.getElementById("displayFirstName").textContent = params.get("firstName") || "John Doe";
document.getElementById("displayLastName").textContent = params.get("lastName") || "John Doe";
document.getElementById("displayCompany").textContent = params.get("company") || "Company Name";
document.getElementById("displayJobTitle").textContent = params.get("jobTitle") || "Job Title";
document.getElementById("displayEmail").textContent = params.get("email") || "example@email.com";
document.getElementById("displayPhone").textContent = params.get("phone") || "123-456-7890";

