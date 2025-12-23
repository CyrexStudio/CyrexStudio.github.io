document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('py-2');
      nav.classList.remove('py-4');
    } else {
      nav.classList.add('py-4');
      nav.classList.remove('py-2');
    }
  });

  const menuButton = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const projectsContainer = document.getElementById('projects-container');

  if (projectsContainer) {
    fetch('projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de chargement du JSON');
        }
        return response.json();
      })
      .then(projects => {
        projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
      })
      .catch(error => {
        console.error('Erreur:', error);
        projectsContainer.innerHTML = '<p class="text-center text-red-400 col-span-full">Impossible de charger les projets. (Vérifiez que vous utilisez un serveur local)</p>';
      });
  }
});

function createProjectCard(project) {
  const tagsHtml = project.tags.map(tag =>
    `<span class="text-xs border border-white/20 px-2 py-1 rounded text-gray-300">${tag}</span>`
  ).join('');

  const githubBtn = project.github
    ? `<a href="${project.github}" class="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors" title="Code Source"><i class="fa-brands fa-github"></i></a>`
    : '';

  const mainBtnClass = project.github ? "flex-1" : "w-full";

  return `
        <div class="glass-card rounded-2xl p-1 flex flex-col h-full group">
            <div class="relative h-48 rounded-xl overflow-hidden bg-gray-900">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br ${project.gradient} group-hover:scale-105 transition-transform duration-700"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fa-solid ${project.icon} text-5xl text-white opacity-20 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                    <span class="bg-${project.color}-600 text-xs font-bold px-2 py-1 rounded text-white">${project.badge}</span>
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 flex-1">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${tagsHtml}
                </div>
                <div class="flex gap-3 mt-auto">
                    <a href="${project.link}" target="_blank" class="${mainBtnClass} py-2 bg-white/10 hover:bg-white/20 rounded-lg text-center text-sm font-semibold transition-colors">
                        <i class="fa-solid fa-eye mr-2"></i> ${project.github ? 'Voir' : 'Visiter le site'}
                    </a>
                    ${githubBtn}
                </div>
            </div>
        </div>
    `;
}