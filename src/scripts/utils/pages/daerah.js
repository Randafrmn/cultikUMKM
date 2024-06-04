import batikData from '../../../public/data/dataDaerah.json';
import '../../../styles/main.css';

const renderBatikList = () => {
    const batikListContainer = document.getElementById('batik-list');
    const sectionTitleContainer = document.querySelector('.section-title');
    const batiks = batikData.batiks;

    sectionTitleContainer.textContent = 'Daerah Penghasil Batik';

    const batikItems = batiks.map(batik => `
        <div class="batik-item">
            <img class="batik-item-image" src="${batik.pictureId}" alt="${batik.province}">
            <div class="batik-item-content">
                <div class="province"><a href="/#/detail/${batik.id}">${batik.province}</a></div>
                <div class="line-item"></div>
                <div class="batik-item-bottom">
                    <div class="city"><p class="city-name">${batik.city}</p></div>
                    <div><a href="/#/detail/${batik.id}" class="teenyicons--arrow-right-solid"></a></div>
                </div>    
            </div>
        </div>
    `);

    batikListContainer.innerHTML = batikItems.join('');
};

export default renderBatikList;