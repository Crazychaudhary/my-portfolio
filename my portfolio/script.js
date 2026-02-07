// Data for the projects
// I put the score here to sort them later
const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        desc: "Admin panel to manage orders and inventory.",
        stack: ["React", "Tailwind", "Node"],
        link: "#",
        score: 85
    },
    {
        id: 2,
        title: "Task Master",
        desc: "Simple Todo list with drag and drop features.",
        stack: ["JS", "CSS", "HTML"],
        link: "#",
        score: 95
    },
    {
        id: 3,
        title: "Weather App",
        desc: "Shows current weather using OpenWeather API.",
        stack: ["React", "API"],
        link: "#",
        score: 90
    }
];

const container = document.getElementById('projects-container');
const themeBtn = document.getElementById('theme-btn');

// Sort by score (descending) so best projects show first
projects.sort((a, b) => b.score - a.score);

// Function to render cards
function loadProjects() {
    let html = '';

    projects.forEach(p => {
        // Create tags string
        let tagsHtml = '';
        p.stack.forEach(tech => {
            tagsHtml += `<span class="tag">${tech}</span>`;
        });

        // specific card structure
        html += `
            <div class="card">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="tags">${tagsHtml}</div>
                <a href="${p.link}" class="link" target="_blank">View Code</a>
            </div>
        `;
    });

    // inject into the DOM
    container.innerHTML = html;
}

// Dark mode toggle logic
// Inside themeBtn.addEventListener...
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // HUMAN TOUCH: Rotate the button slightly on click for fun
    themeBtn.style.transform = "rotate(5deg)";
    setTimeout(() => themeBtn.style.transform = "rotate(0deg)", 200);

    // ... existing text toggle logic ...
});

// Run this on load
loadProjects();