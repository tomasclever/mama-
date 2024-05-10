const imageUpload1 = document.getElementById('imageUpload1');
const selectedImage1 = document.getElementById('selectedImage1');

imageUpload1.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            selectedImage1.src = reader.result;
        });
        reader.readAsDataURL(file);
    }
});

const imageUpload2 = document.getElementById('imageUpload2');
const selectedImage2 = document.getElementById('selectedImage2');

imageUpload2.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            selectedImage2.src = reader.result;
        });
        reader.readAsDataURL(file);
    }
});