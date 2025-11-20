
const license ="https://pratikhacker.pythonanywhere.com/api/verify";
const button = document.querySelector("#submit");
const licenseform= document.querySelector("#licenseform");
licenseform.addEventListener("submit", async function(event){
    event.preventDefault();

    const licensekey = document.querySelector("#licensekey").value;

    const response = await fetch(license,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({license_key: licensekey })

    });

    const data = await response.json();
    document.querySelector("#result").innerText=
        data.valid ? "✅ Your License Key is valid!" : "❌ Invalid Key.";

});
