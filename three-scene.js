// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.144/build/three.module.js';

// let scene, camera, renderer, card;

// export function initScene() {
//     const canvas = document.getElementById("threeCanvas");

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//     renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

//     renderer.setSize(canvas.clientWidth, canvas.clientHeight);
//     document.body.appendChild(renderer.domElement);

//     const geometry = new THREE.BoxGeometry(3.5, 2, 0.1);
//     const material = new THREE.MeshStandardMaterial({ color: "#007bff" });
//     card = new THREE.Mesh(geometry, material);
//     scene.add(card);

//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(2, 2, 5).normalize();
//     scene.add(light);

//     camera.position.z = 5;
//     animate();
// }

// function animate() {
//     requestAnimationFrame(animate);
//     card.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// export function updateCardColor(color) {
//     card.material.color.set(color);
// }

//-----------

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.144/build/three.module.js';

let scene, camera, renderer, card, textureCanvas, textureContext, texture;

// 🎨 **Initialize 3D Scene**
export function initScene() {
    const canvas = document.getElementById("threeCanvas");

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.5);
    
    document.body.appendChild(renderer.domElement);

    // 📦 **Create Card Texture**
    textureCanvas = document.createElement("canvas");
    textureCanvas.width = 512;
    textureCanvas.height = 256;
    textureContext = textureCanvas.getContext("2d");
    
    texture = new THREE.CanvasTexture(textureCanvas);

    // 🃏 **Create 3D Card (Now a Box)**
    const geometry = new THREE.BoxGeometry(3.5, 2, 0.2);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    
    card = new THREE.Mesh(geometry, material);
    scene.add(card);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5).normalize();
    scene.add(light);

    camera.position.z = 5;
    animate();
}

// 🎞 **Animate (Rotate the Card)**
function animate() {
    requestAnimationFrame(animate);
    card.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// 🎨 **Update Card Texture**
export function updateCard(name, contact, color) {
    textureContext.fillStyle = color;
    textureContext.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

    textureContext.fillStyle = "#FFFFFF";
    textureContext.font = "bold 40px Arial";
    textureContext.fillText(name, 50, 100);
    textureContext.font = "30px Arial";
    textureContext.fillText(contact, 50, 160);

    texture.needsUpdate = true;
}

