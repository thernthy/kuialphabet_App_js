
const galleryImages = [];
for (let i = 1; i <= 6; i++) {
    const img = require(`../assets/categories/categories (${i}).jpg`);
    galleryImages.push({
        img: img,
        title: `Gallery${i}`
    });
}

// Exporting the array of gallery images
export const GalleryImg = galleryImages;