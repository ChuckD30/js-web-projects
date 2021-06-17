// Category variables
const caption = document.getElementById('caption')
const generateCaptionBtn = document.getElementById('generate')
const uploadBtn = document.getElementById('uploadBtn')
const image = document.getElementById('output');
const uploadedImage = document.getElementById('uploadedImage')
const finalCaption = document.getElementById('finalCaption')
const saveBtn = document.getElementById('save')

const categories = [
    {
        type: "food",
        captions: ["Home is wherever my food is.", 
                   "Let’s say, I’ll be taking some for the road.",
                   "I'm not drooling, you are!",
                   "Another one bites the crust.",
                   "Diet who?"
                ]
    },
    {
        type: "travel",
        captions: [
            "View from the other side 😍😍",
            "Be back never.",
            "Life is short and the world is wide. I better get started.",
            "I think I’ve found my happy place.",
            "I need a six-month-long vacation twice a year."
        ]
    },
    {
        type: "love",
        captions: [
            "This one is a keeper (significant other).",
            "Love you to the moon and back! ♥️",
            "How did I get so lucky?",
            "You stole my heart, but I’ll let you keep it.",
            "Comment someone below that you cannot live without."

        ]
    },
    {
        type: "art",
        captions: [
            "Art is the journey of a free soul.",
            "Art isn’t a talent, it’s an experience.",
            "What is your favorite art piece?",
            "Worth a thousand words.",
            "Life imitates art."
        ]
    },
]

// Get Capption from Category
function generateCaption() {
    var category = document.getElementById("category");
    var selectedCategory = category.value;

    for (let i = 0; i < categories.length; i++) {
        if (selectedCategory === categories[i].type) {
            var randomIndex = Math.floor(Math.random() * (categories[i].captions.length));
            var selectedCaption = categories[i].captions[randomIndex]
            caption.innerText = selectedCaption
            }
        }
}

function loadFile (event) {
	image.src = URL.createObjectURL(event.target.files[0]);

    if (image.src) {
        uploadBtn.innerText = "Change Image"
    }
};

function saveToGallery() {
    uploadedImage.src = image.src
    finalCaption.innerText = caption
}

generateCaptionBtn.addEventListener('click', generateCaption)
saveBtn.addEventListener('click', saveToGallery)
