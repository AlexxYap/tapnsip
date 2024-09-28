let sips = 0;
const maxSips = 3;
const coffeeImages = ["c1.png", "c2.png", "c3.png"];
const sipSound = document.getElementById("sip-sound");

document.getElementById("coffee-cup").addEventListener("click", function() {
    // Play the sip sound
    sipSound.play();

    // Change the message to indicate a sip was taken
    document.getElementById("message").textContent = "Sip! That was refreshing!";

    // Change the coffee image as the coffee gets lesser
    sips++;
    if (sips < maxSips) {
        document.getElementById("coffee-cup").src = coffeeImages[sips];
    } else {
        document.getElementById("message").textContent = "The coffee is finished!";
    }

    // After a delay, change the message back to allow another sip
    setTimeout(function() {
        if (sips < maxSips) {
            document.getElementById("message").textContent = "Tap the coffee to take another sip!";
        }
    }, 2000);
});
