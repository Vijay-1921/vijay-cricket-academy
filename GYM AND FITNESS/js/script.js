document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  const brandWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const brandTextNodes = [];
  while (brandWalker.nextNode()) brandTextNodes.push(brandWalker.currentNode);
  brandTextNodes.forEach(node => {
    node.nodeValue = node.nodeValue
      .replace(/VIJAY KUMAR/gi, "VIJAY'S")
      .replace(/\+91 98765 43210/g, '7601004665')
      .replace(/hello@vkgym\.fit/gi, 'kumarv58246@gmail.com')
      .replace(/New Delhi, India/gi, 'Yemmiganur, India');
  });
  document.querySelectorAll('[alt], [title], [aria-label], [placeholder]').forEach(element => {
    ['alt', 'title', 'aria-label', 'placeholder'].forEach(attribute => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, element.getAttribute(attribute)
          .replace(/VIJAY KUMAR/gi, "VIJAY'S")
          .replace(/\+91 98765 43210/g, '7601004665')
          .replace(/hello@vkgym\.fit/gi, 'kumarv58246@gmail.com')
          .replace(/New Delhi, India/gi, 'Yemmiganur, India'));
      }
    });
  });
  document.querySelectorAll('iframe[src]').forEach(frame => {
    frame.src = frame.src.replace(/New\+Delhi\+India/gi, 'Yemmiganur+India');
  });

  if (current === 'contact.html') {
    const contactSections = document.querySelectorAll('main > .section');
    const locationSection = contactSections[contactSections.length - 1];
    if (locationSection) {
      const profileSection = document.createElement('section');
      profileSection.className = 'section';
      profileSection.style.background = 'var(--ink-soft)';
      profileSection.innerHTML = `<div class="container"><div class="trainer-profile reveal visible"><img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85" alt="Vijay, professional fitness trainer in the gym"><div><span class="eyebrow">Meet your trainer</span><h2>Vijay</h2><p>Vijay is a professional trainer who helps members build strength, confidence and lasting fitness habits through focused, supportive coaching.</p><p>With a practical approach to training, he guides beginners and experienced athletes toward better technique, stronger performance and real progress.</p><a class="btn btn-primary" href="#contact-form">Train with Vijay <i class="fa-solid fa-arrow-right"></i></a></div></div></div>`;
      locationSection.before(profileSection);
    }
  }
  document.title = document.title.replace(/VIJAY KUMAR/gi, "VIJAY'S");

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => nav.classList.toggle('open'));

  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) link.classList.add('active');
    link.addEventListener('click', () => nav?.classList.remove('open'));
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = 'true';
      const target = Number(entry.target.dataset.target);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const tick = () => { value = Math.min(target, value + step); entry.target.textContent = value + '+'; if (value < target) requestAnimationFrame(tick); };
      tick();
    });
  }, { threshold: .7 });
  document.querySelectorAll('[data-target]').forEach(item => counterObserver.observe(item));

  const backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', () => backTop?.classList.toggle('show', window.scrollY > 500));
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const modal = document.querySelector('.modal');
  document.querySelectorAll('[data-lightbox]').forEach(image => image.addEventListener('click', () => {
    modal.querySelector('img').src = image.src;
    modal.querySelector('img').alt = image.alt;
    modal.classList.add('open');
  }));
  modal?.addEventListener('click', event => { if (event.target === modal || event.target.closest('.modal-close')) modal.classList.remove('open'); });

  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) { form.classList.add('was-validated'); form.reportValidity(); return; }
    const toast = document.querySelector('.toast');
    toast.textContent = 'Thanks! Your message has been received.';
    toast.classList.add('show'); form.reset();
    setTimeout(() => toast.classList.remove('show'), 3500);
  });
});
