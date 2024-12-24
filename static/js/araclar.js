// Araçlar için örnek veri (Bu veriyi dinamik olarak sunucudan alabilirsiniz)
const araclar = [
    { ad: "Araç 1", resim: "static/images/vehicle1.jpg", aciklama: "Araç 1 hakkında açıklama" },
    { ad: "Araç 2", resim: "static/images/vehicle2.jpg", aciklama: "Araç 2 hakkında açıklama" },
    { ad: "Araç 3", resim: "static/images/vehicle3.jpg", aciklama: "Araç 3 hakkında açıklama" }
];

// Araç kartlarını dinamik olarak ekleyen fonksiyon
function aracKartlariniEkle() {
    const container = document.getElementById('vehicle-cards-container');
    
    araclar.forEach(arac => {
        const kart = document.createElement('div');
        kart.classList.add('col-md-4');
        
        kart.innerHTML = `
            <div class="card shadow-sm border-light" style="height: 100%;">
                <img src="${arac.resim}" class="card-img-top" alt="${arac.ad}">
                <div class="card-body">
                    <h5 class="card-title">${arac.ad}</h5>
                    <p class="card-text">${arac.aciklama}</p>
                    <a href="#" class="btn btn-primary">Daha Fazla Bilgi</a>
                </div>
            </div>
        `;
        
        container.appendChild(kart);
    });
}

// Sayfa yüklendikten sonra fonksiyonu çağırıyoruz
window.onload = aracKartlariniEkle;
