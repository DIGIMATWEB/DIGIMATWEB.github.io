
function generate() {
  const input = document.getElementById('imageUpload');
  const canvas = document.getElementById('preview');
  const ctx = canvas.getContext('2d');
  const downloadLink = document.getElementById('downloadLink');

  if (!input.files || !input.files[0]) {
    alert("Please upload an image first.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Simulate .patt file generation for placeholder
      const data = "Placeholder pattern data based on image content.";
      const blob = new Blob([data], { type: "text/plain" });
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.style.display = "inline-block";
      downloadLink.textContent = "Download Marker";
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(input.files[0]);
}
