const inputField = document.getElementById("password");

function generateRandomPassword() {
    let length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"; // Include special characters for stronger passwords
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length); // Fix the syntax error here: Math.random() instead of Math.random
        password += charset.charAt(randomIndex);
    }
    return password;
}

const generate = document.getElementById("btn");
generate.addEventListener("click", () => {
    const newPassword = generateRandomPassword();
    inputField.value = newPassword;
});

const copy = document.getElementById("copyCode");
copy.addEventListener("click", ()=>{
    inputField.select();
    inputField.setSelectionRange(0, 8);
    document.execCommand("copy");
    alert("Password copied to cipboard: " + inputField.value);
});