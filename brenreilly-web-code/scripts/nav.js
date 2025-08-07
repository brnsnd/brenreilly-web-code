const blobs = document.querySelectorAll('.blob');

// Set starting target positions
let targetX = 0;
let targetY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Get mouse position relative to center
  const dx = (e.clientX - centerX) / centerX;
  const dy = (e.clientY - centerY) / centerY;

  // Set new target based on movement
  targetX = dx;
  targetY = dy;
});

// Smooth movement loop
function animateBlobs() {
  blobs.forEach((blob, i) => {
    const intensity = 60 + i * 30; // each blob has increasing drift

    // Current offset from target
    const offsetX = targetX * intensity;
    const offsetY = targetY * intensity;

    // Ease into the new position using CSS transform
    blob.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  requestAnimationFrame(animateBlobs);
}

// Start animation loop
animateBlobs();
