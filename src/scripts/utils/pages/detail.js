import batikData from '../../../public/data/dataDaerah.json';
import '../../../styles/main.css';

const renderBatikDetail = (id) => {
    const batikListContainer = document.getElementById('detail-container');
    const sectionTitleContainer = document.querySelector('.section-title');
    const batik = batikData.batiks.find(batik => batik.id === id);

    sectionTitleContainer.textContent = 'Detail Daerah';

    if (batik) {
        batikListContainer.innerHTML = `
            <div class="detail-content">
                <img class="detail-image" src="${batik.pictureId}" alt="${batik.province}">
                <div class="detail-info">
                    <h2 class="detail-title">${batik.province}</h2>
                    <p class="detail-city">${batik.city}</p>
                    <p class="detail-description">${batik.description}</p>
                </div>
            </div>
            <h1 class="section-title">Motif Batik</h1>
            <div class="motif-content">
                <img class="motif-image" src="${batik.motif_batik}" alt="${batik.province}">
                <div class="motif-info">
                    <h2 class="motif-title">${batik.nama_batik}</h2>
                    <p class="motif-history">${batik.sejarah}</p>
                    <p class="motif-description">${batik.makna_batik}</p>
                </div>
            </div>
        `;
    } else {
        batikListContainer.innerHTML = 'Data not found';
    }
};

export default renderBatikDetail;