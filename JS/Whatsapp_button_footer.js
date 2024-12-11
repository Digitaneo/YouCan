<script>
window.addEventListener("load", function() {
    const footerSocialList = document.querySelector(".list-unstyled.footer-social");
    if (footerSocialList) {

        const newItem = document.createElement("li");
        newItem.innerHTML = '<a target="_blank" href="https://wa.me/+9647736127841" class="wa"><i class="yc yc-whatsapp"></i></a>';
        
        footerSocialList.insertBefore(newItem, footerSocialList.firstChild);

        const newIcon = newItem.querySelector("i");
        newIcon.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg")';
        newIcon.style.backgroundSize = "cover";
        newIcon.style.backgroundRepeat = "no-repeat";
        newIcon.style.display = "inline-block";
        newIcon.style.width = "101%";
        newIcon.style.height = "101%";
        newIcon.style.backgroundColor = "#25D366";
        newIcon.style.borderRadius = "50%";
        newIcon.style.padding = "10%";

        console.log("New WhatsApp icon with green background added to the beginning of the footer social list.");
    } else {
        console.log("No footer social list found.");
    }
});
</script>