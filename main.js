
//sudo npx live-server

import { initScene, updateCard } from './three-scene.js';

document.addEventListener("DOMContentLoaded", () => {
    initScene();

    document.getElementById("generateCard").addEventListener("click", () => {
        const name = document.getElementById("name").value || "Your Name";
        const contact = document.getElementById("contact").value || "Your Contact";
        const color = document.getElementById("color").value;

        updateCard(name, contact, color);
    });
});