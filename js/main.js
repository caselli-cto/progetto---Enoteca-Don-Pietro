// DATI VINI (Database espanso per testare i filtri)
var WINES = [
    {
        id: 1,
        name: "Etna Rosso 'A Rina'",
        producer: "Girolamo Russo",
        region: "Sicilia",
        type: "Rosso",
        price: 38,
        description: "Nerello Mascalese in purezza. Elegante, minerale, figlio del vulcano.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "Grillo 'Integer'",
        producer: "Marco De Bartoli",
        region: "Sicilia",
        type: "Naturale",
        price: 45,
        description: "Macerato sulle bucce, non filtrato. Un'espressione arcaica e potente del Grillo.",
        image: "https://images.unsplash.com/photo-1572569664567-4e636b0cb680?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "d'Araprì Riserva Nobile",
        producer: "d'Araprì",
        region: "Puglia",
        type: "Spumante",
        price: 42,
        description: "Partner storico. Metodo Classico da Bombino Bianco. Bollicina cremosa e strutturata.",
        image: "https://images.unsplash.com/photo-1598155523122-38423ae4d6c6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Cerasuolo di Vittoria",
        producer: "COS",
        region: "Sicilia",
        type: "Rosso",
        price: 35,
        description: "Biologico, affinato in anfora. Note di ciliegia, terra rossa e spezie mediterranee.",
        image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "Catarratto",
        producer: "Barraco",
        region: "Sicilia",
        type: "Bianco",
        price: 32,
        description: "Artigianale, salino, di grande carattere. Un bianco che sa di mare e sole.",
        image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "Barolo Serralunga",
        producer: "Luigi Baudana",
        region: "Piemonte",
        type: "Rosso",
        price: 65,
        description: "Un classico intramontabile per le grandi occasioni. Potente e longevo.",
        image: "https://images.unsplash.com/photo-1474722883778-792e7992b306?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 7,
        name: "Chianti Classico",
        producer: "Castello di Ama",
        region: "Toscana",
        type: "Rosso",
        price: 48,
        description: "L'eleganza del Sangiovese nel cuore del Chianti. Note di viola e frutti rossi.",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 8,
        name: "Ribolla Gialla",
        producer: "Gravner",
        region: "Friuli",
        type: "Naturale",
        price: 95,
        description: "Un'icona del vino naturale. Fermentato in anfore georgiane interrate.",
        image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 9,
        name: "Prosecco Col Fondo",
        producer: "Casa Coste Piane",
        region: "Veneto",
        type: "Spumante",
        price: 28,
        description: "Il vero Prosecco della tradizione contadina, rifermentato in bottiglia. Secco e beverino.",
        image: "https://images.unsplash.com/photo-1594142404563-64dd22d05f33?auto=format&fit=crop&q=80&w=800"
    }
];

// DATI MENU
var MENU = [
    { category: "Dalla Sicilia", name: "Pane Cunzato", price: 10, desc: "Pane casereccio, pomodoro, acciughe di Sciacca, primo sale, origano" },
    { category: "Dalla Sicilia", name: "Caponata della Casa", price: 12, desc: "Melanzane, sedano, pinoli, uvetta, cacao amaro (ricetta di famiglia)" },
    { category: "Dalla Sicilia", name: "Cannolo Scomposto", price: 7, desc: "Ricotta di pecora fresca, cialda croccante, pistacchio di Bronte" },
    { category: "Taglieri", name: "Il Gran Tagliere", price: 24, desc: "Selezione di salumi artigianali e formaggi a latte crudo con confetture" },
    { category: "Taglieri", name: "Formaggi Erborinati", price: 16, desc: "Selezione di blu accompagnati da Passito" },
    { category: "Piccola Cucina", name: "Polpette al Sugo", price: 14, desc: "Manzo e maiale, lenta cottura nel pomodoro San Marzano" },
    { category: "Piccola Cucina", name: "Tartare di Fassona", price: 18, desc: "Battuta al coltello, capperi, senape antica" }
];

// DATI EVENTI
var EVENTS = [
    {
        title: "Letture in Cantina",
        date: "Ogni Giovedì",
        desc: "Serate di reading letterario curate da Paolo Sus e ospiti. Un calice, una voce, una storia.",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Vinyl & Wine",
        date: "Venerdì e Sabato",
        desc: "Selezione musicale rigorosamente su vinile. Jazz, Soul e cantautorato italiano per accompagnare la degustazione.",
        image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Incontro col Produttore: d'Araprì",
        date: "25 Ottobre - 19:00",
        desc: "Degustazione guidata delle Grandi Bollicine del Sud con i produttori.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    }
];

// FAQ DATA
var FAQ = [
    { q: "Accettate prenotazioni?", a: "Sì, consigliamo vivamente di prenotare, specialmente nel weekend data la dimensione intima del locale." },
    { q: "Avete opzioni per vegetariani?", a: "Certamente, la nostra caponata e i formaggi sono ottime opzioni, così come diversi crostini." },
    { q: "Posso comprare il vino da portare via?", a: "Assolutamente sì. Siamo un'enoteca, applichiamo un prezzo diverso per l'asporto." },
    { q: "Siete accessibili?", a: "Il locale è a piano strada. Gli spazi sono un po' ristretti ma facciamo del nostro meglio per accogliere tutti." }
];

// UTILITY NAVIGAZIONE MOBILE
var mobileBtn = document.getElementById('mobile-menu-btn');
var mobileMenu = document.getElementById('mobile-menu');
if(mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function() {
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });
}

// ---------------------------------------------------------
// SISTEMA FILTRI VINI
// ---------------------------------------------------------

// Stato globale dei filtri
var currentFilters = {
    type: null,
    region: null
};

// Inizializza i filtri (Crea i bottoni)
function initFilters() {
    var filtersTypeContainer = document.getElementById('type-filters');
    var filtersRegionContainer = document.getElementById('region-filters');
    
    // Se non siamo nella pagina vini, esci
    if (!filtersTypeContainer || !filtersRegionContainer) return;

    // Estrai valori unici dai dati
    var types = [];
    var regions = [];
    
    WINES.forEach(function(w) {
        if (!types.includes(w.type)) types.push(w.type);
        if (!regions.includes(w.region)) regions.push(w.region);
    });

    types.sort();
    regions.sort();

    // Helper per creare bottoni
    function createButton(text, type, container) {
        var btn = document.createElement('button');
        btn.textContent = text;
        btn.className = 'block w-full text-left py-1 text-sm font-poppins text-gray-500 hover:text-primary transition-colors filter-btn';
        btn.dataset.value = text;
        btn.dataset.filterGroup = type; // 'type' o 'region'
        
        btn.onclick = function() {
            // Toggle logica: se clicco su quello attivo, lo disattivo
            if (currentFilters[type] === text) {
                currentFilters[type] = null;
            } else {
                currentFilters[type] = text;
            }
            updateFilterUI();
            renderWines();
        };
        container.appendChild(btn);
    }

    // Pulisci contenitori
    filtersTypeContainer.innerHTML = '';
    filtersRegionContainer.innerHTML = '';

    // Crea liste
    types.forEach(function(t) { createButton(t, 'type', filtersTypeContainer); });
    regions.forEach(function(r) { createButton(r, 'region', filtersRegionContainer); });

    // Bottone Reset Totale
    var resetAllBtn = document.getElementById('reset-filters');
    if(resetAllBtn) {
        resetAllBtn.onclick = function() {
            currentFilters.type = null;
            currentFilters.region = null;
            updateFilterUI();
            renderWines();
        };
    }

    // Bottone Reset Tipologia
    var resetTypeBtn = document.getElementById('reset-type');
    if(resetTypeBtn) {
        resetTypeBtn.onclick = function() {
            currentFilters.type = null;
            updateFilterUI();
            renderWines();
        }
    }

    // Bottone Reset Regione
    var resetRegionBtn = document.getElementById('reset-region');
    if(resetRegionBtn) {
        resetRegionBtn.onclick = function() {
            currentFilters.region = null;
            updateFilterUI();
            renderWines();
        }
    }
}

// Aggiorna l'aspetto dei bottoni (Grassetto/Colore) e Visibilità Reset
function updateFilterUI() {
    var buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(function(btn) {
        var group = btn.dataset.filterGroup;
        var val = btn.dataset.value;
        
        // Reset stile base
        btn.className = 'block w-full text-left py-1 text-sm font-poppins text-gray-500 hover:text-primary transition-colors filter-btn';

        // Applica stile attivo
        if (currentFilters[group] === val) {
            btn.classList.remove('text-gray-500');
            btn.classList.add('font-bold', 'text-accent', 'pl-2', 'border-l-2', 'border-accent');
        }
    });

    // Gestione visibilità pulsanti "Cancella" singoli
    var resetTypeBtn = document.getElementById('reset-type');
    var resetRegionBtn = document.getElementById('reset-region');

    if(resetTypeBtn) {
        if(currentFilters.type) resetTypeBtn.classList.remove('hidden');
        else resetTypeBtn.classList.add('hidden');
    }

    if(resetRegionBtn) {
        if(currentFilters.region) resetRegionBtn.classList.remove('hidden');
        else resetRegionBtn.classList.add('hidden');
    }
}

// Renderizza la griglia vini
function renderWines() {
    var grid = document.getElementById('wine-grid');
    var noResults = document.getElementById('no-results');
    
    if (!grid) return;

    grid.innerHTML = '';
    var count = 0;

    WINES.forEach(function(wine) {
        // Logica di filtro
        if (currentFilters.type && wine.type !== currentFilters.type) return;
        if (currentFilters.region && wine.region !== currentFilters.region) return;

        count++;
        
        // Creazione Card
        var card = document.createElement('div');
        card.className = 'bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col';
        
        var html = '';
        html += '<div class="relative h-80 overflow-hidden bg-[#F5F5F5]">';
        html += '<img src="' + wine.image + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">';
        html += '<span class="absolute top-4 left-4 bg-white/90 text-primary backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-sm">' + wine.region + '</span>';
        html += '</div>';
        
        html += '<div class="p-6 flex flex-col flex-grow">';
        html += '<span class="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">' + wine.type + '</span>';
        html += '<h3 class="font-playfair text-2xl text-primary mb-1 leading-tight group-hover:text-accent transition-colors">' + wine.name + '</h3>';
        html += '<p class="font-crimson italic text-gray-500 mb-4">' + wine.producer + '</p>';
        html += '<p class="font-poppins text-sm text-gray-600 font-light mb-6 flex-grow leading-relaxed line-clamp-3">' + wine.description + '</p>';
        
        html += '<div class="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">';
        html += '<span class="font-playfair text-xl text-primary">€' + wine.price + '</span>';
        html += '<a href="https://wa.me/393386828287?text=Buongiorno, vorrei informazioni sul vino ' + wine.name + '" target="_blank" class="text-xs font-bold text-gray-400 hover:text-accent uppercase transition-colors flex items-center gap-1"><i data-lucide="message-circle" class="w-3 h-3"></i> Info</a>';
        html += '</div></div>';

        card.innerHTML = html;
        grid.appendChild(card);
    });

    if (noResults) {
        noResults.style.display = (count === 0) ? 'block' : 'none';
    }
    
    // Ricarica icone Lucide per i nuovi elementi
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// LOGICA MENU
function renderMenu() {
    var container = document.getElementById('menu-container');
    if(!container) return;

    var categories = {};
    MENU.forEach(function(item) {
        if(!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
    });

    var order = ["Dalla Sicilia", "Taglieri", "Piccola Cucina", "Dolci"];
    
    order.forEach(function(cat) {
        if (!categories[cat]) return;
        
        var section = document.createElement('div');
        section.className = 'mb-16';
        var title = '<h3 class="font-playfair text-4xl text-primary border-b border-secondary/30 pb-4 mb-8 inline-block">' + cat + '</h3>';
        
        var list = '<div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">';
        categories[cat].forEach(function(item) {
            list += '<div class="group relative pl-4 border-l border-gray-200 hover:border-secondary transition-colors duration-300">';
            list += '<div class="flex justify-between items-baseline mb-2">';
            list += '<h4 class="font-playfair text-xl text-gray-800 font-medium">' + item.name + '</h4>';
            list += '<span class="font-poppins font-bold text-secondary text-lg">€' + item.price + '</span>';
            list += '</div>';
            list += '<p class="font-poppins text-sm text-gray-500 font-light italic">' + item.desc + '</p>';
            list += '</div>';
        });
        list += '</div>';

        section.innerHTML = title + list;
        container.appendChild(section);
    });
}

// LOGICA EVENTI (Aggiunta mancante)
function renderEvents() {
    var container = document.getElementById('events-container');
    if(!container) return;

    EVENTS.forEach(function(evt) {
        var card = document.createElement('div');
        card.className = 'flex flex-col md:flex-row bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100 group hover:shadow-lg transition-all';
        
        var html = '';
        html += '<div class="md:w-1/3 h-64 md:h-auto overflow-hidden relative">';
        html += '<img src="' + evt.image + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">';
        html += '<div class="absolute top-4 left-4 bg-accent text-white font-bold font-poppins text-xs px-3 py-1 uppercase tracking-widest">' + evt.date + '</div>';
        html += '</div>';

        html += '<div class="md:w-2/3 p-8 flex flex-col justify-center">';
        html += '<h3 class="font-playfair text-3xl text-primary mb-4">' + evt.title + '</h3>';
        html += '<p class="font-poppins text-gray-600 leading-relaxed">' + evt.desc + '</p>';
        html += '<div class="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2">';
        html += '<i data-lucide="music" class="w-5 h-5 text-secondary"></i>';
        html += '<span class="text-xs font-bold uppercase tracking-widest text-gray-400">Ingresso Libero</span>';
        html += '</div></div>';

        card.innerHTML = html;
        container.appendChild(card);
    });
}

// LOGICA FAQ (Aggiunta mancante)
function renderFAQ() {
    var container = document.getElementById('faq-container');
    if(!container) return;

    FAQ.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'border-b border-gray-200 pb-4';
        
        var html = '<h4 class="font-playfair text-lg text-primary mb-2">' + item.q + '</h4>';
        html += '<p class="font-poppins text-sm text-gray-500 leading-relaxed">' + item.a + '</p>';
        
        div.innerHTML = html;
        container.appendChild(div);
    });
}

// Inizializzazione Globale
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza filtri solo se siamo nella pagina vini
    if (document.getElementById('wine-grid')) {
        initFilters();
        renderWines();
    }
    
    // Inizializza menu se siamo nella pagina menu
    if (document.getElementById('menu-container')) {
        renderMenu();
    }

    // Inizializza eventi se siamo nella pagina eventi
    if (document.getElementById('events-container')) {
        renderEvents();
    }

    // FAQ
    if (document.getElementById('faq-container')) {
        renderFAQ();
    }

    // Icone
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// WhatsApp Form Handler
var bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    var btn = document.getElementById('btn-whatsapp-submit');
    if(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var name = document.querySelector('input[type="text"]').value;
            var date = document.querySelector('input[type="date"]').value;
            var time = document.querySelector('input[type="time"]').value;
            var pax = document.querySelector('select').value;
            
            if(!name || !date || !time) {
                alert("Per favore compila almeno Nome, Data e Ora.");
                return;
            }

            var text = "Ciao Don Pietro! Vorrei prenotare un tavolo.%0A%0A" + 
                       "👤 Nome: " + name + "%0A" + 
                       "📅 Data: " + date + "%0A" + 
                       "aaa Ora: " + time + "%0A" + 
                       "👥 Persone: " + pax;
            
            window.open("https://wa.me/393386828287?text=" + text, '_blank');
        });
    }
}