// Smooth animated appearance like e-z.bio
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${0.18 * index}s`;
  });

  // Soft hover-lift physics on avatar
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.addEventListener('mousemove', (e) => {
      const r = avatar.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      avatar.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
    });
    avatar.addEventListener('mouseleave', () => {
      avatar.style.transform = 'translate(0,0)';
    });
  }

  // Soft glow pulse for username
  const username = document.querySelector('.username');
  if (username) {
    username.style.animation = 'glowPulse 2.5s ease-in-out infinite';
  }
});