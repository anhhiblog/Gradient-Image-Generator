document.getElementById('generateBtn').addEventListener('click', function() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const canvas = document.getElementById('gradientCanvas');
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const canvas = document.getElementById('gradientCanvas');
    const link = document.createElement('a');
    link.download = 'gradient.png';
    link.href = canvas.toDataURL();
    link.click();
});