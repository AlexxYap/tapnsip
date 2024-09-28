document.getElementById("coffee-cup").addEventListener("click", function() {
    document.getElementById("message").textContent = "Sip! That was refreshing!";
    
    setTimeout(function() {
      document.getElementById("message").textContent = "Tap the coffee to take another sip!";
    }, 2000);
  });
  