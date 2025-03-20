document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("changeColor").addEventListener("click", function() {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
    });

    document.getElementById("toggleVisibility").addEventListener("click", function() {
        let img = document.getElementById("toggleImage");
        img.style.display = img.style.display === "none" ? "block" : "none";
    });
});