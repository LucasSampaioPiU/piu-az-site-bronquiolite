// Favicon
var pngElement = document.createElement('link');
pngElement.rel = 'icon';
pngElement.type = 'image/png';
pngElement.href = 'https://ik.imagekit.io/agenciapiu/AstraZeneca%20-%20Campanha%20Bronquiolite/forma-4-amarelo.svg';
document.head.appendChild(pngElement);

// Substitui as tags <img> pela conteúdo SVG inline quando possuem a classe "svg-inline"

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as imagens com a classe "svg-inline"
    const images = document.querySelectorAll('img.svg-inline');

    images.forEach(img => {
        const imgUrl = img.src;
        
        // Faz a requisição do arquivo SVG
        fetch(imgUrl)
            .then(response => response.text())
            .then(svgContent => {
                // Cria um elemento temporário para parsear o SVG
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = svgContent;

                // Extrai o elemento SVG do conteúdo
                const svgElement = tempDiv.querySelector('svg');

                if (svgElement) {
                    // Copia classes da imagem original para o SVG
                    svgElement.className = img.className;
                    
                    // Copia atributos relevantes (opcional)
                    svgElement.setAttribute('role', img.getAttribute('role') || 'img');
                    if (img.id) svgElement.id = img.id;
                    
                    // Mantém estilos
                    svgElement.style.cssText = img.style.cssText;

                    // Substitui a imagem pelo SVG
                    img.parentNode.replaceChild(svgElement, img);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar SVG:', error);
            });
    });
});

// Mapa

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-map-nav-item');
    const mapItems = document.querySelectorAll('.tab-map-item');
    const grafismoSection = document.querySelector('.grafismo-section'); // Seleciona o elemento .grafismo-section
    let currentIndex = 0;
    let autoPlayInterval;

    function activateTab(index) {
        currentIndex = index; // Atualiza o índice atual
        
        // Remove 'active' de todas as abas e itens do mapa
        tabs.forEach(tab => tab.classList.remove('active'));
        mapItems.forEach(item => item.classList.remove('active'));
        
        // Adiciona 'active' à aba e ao item do mapa atuais
        tabs[currentIndex].classList.add('active');
        mapItems[currentIndex].classList.add('active');

        // Ativa o .grafismo-section por 1 segundo
        activateGrafismoSection();
    }

    function activateGrafismoSection() {
        grafismoSection.classList.add('active');
        setTimeout(() => {
            grafismoSection.classList.remove('active');
        }, 300); // Remove a classe 'active' após 1 segundo
    }

    function nextTab() {
        currentIndex = (currentIndex + 1) % tabs.length;
        activateTab(currentIndex);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextTab, 4000); // 4 segundos
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Eventos nos botões
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            stopAutoPlay();
            activateTab(index);
            startAutoPlay(); // Reinicia o autoplay após clique manual
        });
    });

    // Inicialização
    mapItems.forEach((item, index) => {
        if(index !== 0) item.classList.add('active');
    });
    
    activateTab(0);
    startAutoPlay(); // Inicia o carrossel automaticamente
});

// Checklist

// Seleciona todos os checkboxes e o elemento notice
const checkboxes = document.querySelectorAll('.check-list-1 .item');
const noticeElement = document.querySelector('.notice-check-list');

// Função para verificar se todos os checkboxes estão marcados
function checkAllChecked() {
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    
    if (allChecked) {
        noticeElement.classList.add('active');
    } else {
        noticeElement.classList.remove('active');
    }
}

// Adiciona o event listener para cada checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', checkAllChecked);
});

// Verifica inicialmente ao carregar a página
checkAllChecked();

// Compartilhar link

const btnCompartilhe = document.getElementById('btn_compartilhe');
const noticeShare = document.querySelector('.notice-share');
let timeoutID = null;

btnCompartilhe.addEventListener('click', function() {
    // Adiciona classe active
    noticeShare.classList.add('active');
    
    // Copia o link da página
    const url = window.location.href;
    navigator.clipboard.writeText(url)
        .then()
        .catch(err => {
            console.error('Erro ao copiar link:', err);
        });

    // Reset do timeout
    if(timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        noticeShare.classList.remove('active');
    }, 4000);
});

// Nav

const btnMenu = document.getElementById('btn_menu');
const navSite = document.querySelector('.nav-site');
const textBtnMenu = document.querySelector('#btn_menu span:first-child');
const itemNavSite = document.querySelectorAll('.nav-site ul li a');

function toggleScroll() {
    if(navSite.classList.contains('active')) {
        // Bloqueia scroll quando menu está aberto
        document.body.style.overflow = 'hidden';
    } else {
        // Restaura scroll padrão
        document.body.style.overflow = 'auto';
    }
}

btnMenu.addEventListener('click', function() {
    navSite.classList.toggle('active');
    textBtnMenu.textContent = navSite.classList.contains('active') ? 'Fechar' : 'Menu';
    toggleScroll();
})

itemNavSite.forEach(item => {
    item.addEventListener('click', () => {
        navSite.classList.remove('active'); // Remove a classe ativa
        textBtnMenu.textContent = 'Menu'; // Volta texto original
        toggleScroll();
    });
});