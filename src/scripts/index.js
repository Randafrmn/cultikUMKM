import 'regenerator-runtime';
import renderBatikList from '../scripts/utils/pages/daerah';
import renderBatikDetail from '../scripts/utils/pages/detail';
import { Router } from 'director/build/director';
import '../styles/main.css';

document.addEventListener("DOMContentLoaded", () => {
    const router = new Router();

    router.on('/daerah', () => {
        const detailContainer = document.getElementById('detail-container');
        if (detailContainer) {
            detailContainer.remove();
        }

        const mainContentContainer = document.querySelector('.main-content .container.main');
        let batikListContainer = document.getElementById('batik-list');
        if (!batikListContainer) {
            batikListContainer = document.createElement('div');
            batikListContainer.id = 'batik-list';
            batikListContainer.classList.add('batik-list'); // Ensure the correct class is added
            mainContentContainer.appendChild(batikListContainer);
        } else {
            // Ensure the correct class is present
            batikListContainer.classList.add('batik-list');
        }

        renderBatikList();
    });

    router.on('/detail/:id', (id) => {
        // Remove batik list container if exists
        const batikListContainer = document.getElementById('batik-list');
        if (batikListContainer) {
            batikListContainer.remove();
        }

        // Create and append detail container
        const mainContentContainer = document.querySelector('.main-content .container.main');
        let detailContainer = document.getElementById('detail-container');
        if (!detailContainer) {
            detailContainer = document.createElement('div');
            detailContainer.id = 'detail-container';
            detailContainer.classList.add('detail-container'); // Ensure the correct class is added
            mainContentContainer.appendChild(detailContainer);
        } else {
            // Ensure the correct class is present
            detailContainer.classList.add('detail-container');
        }

        renderBatikDetail(id);
    });

    router.configure({
        notfound: () => router.setRoute('/daerah')
    });

    router.init('/daerah');

    document.getElementById('scrollButton').addEventListener('click', () => {
        const mainContent = document.getElementById('content');
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });
});