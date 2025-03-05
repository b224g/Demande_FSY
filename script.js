function checkName() {
    const name = document.getElementById("username").value.trim().toLowerCase();
    const validNames = ["fatou", "fatoumata", "sy savane", "fatoumata sy savane"];
    
    if (validNames.includes(name)) {
        document.getElementById("loveMessage").innerText = 
            "Boubacar Biro Barry, né le 16/11/1996, vous aime beaucoup ❤️. " +
            "Voulez-vous l'épouser ? Il veut que vous soyez sa femme. ❤️";
        document.getElementById("message").style.display = "block";
    } else {
        alert("Désolé, ce message n'est pas pour vous !");
    }
}

function showPhotos() {
    document.getElementById("photos").style.display = "block";
}

function confirmLove() {
    document.getElementById("confirmation").style.display = "block";
}
