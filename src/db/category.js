export const Categories = [
    "occupations and trades",
    "clothing and attire",
    "art and craft terms",
    "emotional and psychological",
    "traditional practices",
    "family and kinship",
    "geographical",
    "historical",
    "common words", 
    "nature and environment",
    "social customs and etiquette",
    "religious or spiritual",
    "food and cuisine",
    "education and learning",
]

export const CategoriesOpj = [];
Categories.map((category, index) => {
    CategoriesOpj.push(
        {
            id:index + 1,
            name:category
        }
    )
})

