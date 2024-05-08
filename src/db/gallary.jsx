
const galleryImages = [];
for (let i = 1; i <= 8; i++) {
    const img = require(`../assets/img/gallary_img/gallary (${i}).jpg`);
    galleryImages.push({
        img: img,
        title: `Gallery${i}`
    });
}

// Exporting the array of gallery images
export const GalleryImg = galleryImages;