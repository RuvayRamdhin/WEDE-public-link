/*Lightbox implementation reference*/
/*(W3Schools, 2025)*/

//Function to open the lightbox
function openLightbox(imagesrc){
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    lightboxImage.src = imagesrc;
    lightbox.style.display = "flex";
}

//Function to close the lightbox
function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}