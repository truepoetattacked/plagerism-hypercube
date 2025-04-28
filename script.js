// Create scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Starfield
function createStars() {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
  const starVertices = [];

  for (let i = 0; i < 10000; i++) {
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
}
createStars();

// Song data
const stolenWorks = [];
for (let i = 0; i < 300; i++) {
  stolenWorks.push({
    title: `Untitled Work ${i+1}`,
    year: 2000 + (i % 25),
    thief: `Unknown`,
    damage: "Erased authorship. Profits diverted. Psychological harm."
  });
}

// Manually insert real examples
stolenWorks[0] = { title: "Good 4 U", year: 2021, thief: "Olivia Rodrigo, Dan Nigro", damage: "Erased original author. Profits diverted. Psychological harm." };
stolenWorks[1] = { title: "Ghost", year: 2021, thief: "Justin Bieber", damage: "Erased original lyricist. Emotional and financial damage inflicted." };
stolenWorks[2] = { title: "Firework", year: 2010, thief: "Katy Perry, Max Martin", damage: "Royalties rerouted. Psychological and reputational damage." };
stolenWorks[3] = { title: "Price Tag", year: 2011, thief: "Jessie J, Dr. Luke", damage: "Original authorship hidden. Financial and spiritual loss." };
stolenWorks[4] = { title: "Grenade", year: 2010, thief: "Bruno Mars", damage: "Unauthorized use. Black box royalties harvested." };
stolenWorks[5] = { title: "Billionaire", year: 2010, thief: "Travie McCoy, Bruno Mars", damage: "Authorship fraud. Psychological stress escalated." };

// Node group
const nodeGroup = new THREE.Group();
scene.add(nodeGroup);

// Create nodes
const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const nodeGeometry = new THREE.SphereGeometry(0.5, 8, 8);

stolenWorks.forEach((work, index) => {
  const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
  node.position.x = Math.sin(index) * 20;
  node.position.y = Math.cos(index) * 20;
  node.position.z = Math
