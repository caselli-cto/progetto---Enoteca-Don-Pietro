// DATI VINI (Focus Artigianale / Autoctoni / Sicilia)
var WINES = [
    {
        id: 1,
        name: "Etna Rosso 'A Rina'",
        producer: "Girolamo Russo",
        region: "Sicilia",
        type: "Rosso",
        price: 38,
        description: "Nerello Mascalese in purezza. Elegante, minerale, figlio del vulcano.",
        image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Grillo 'Integer'",
        producer: "Marco De Bartoli",
        region: "Sicilia",
        type: "Naturale",
        price: 45,
        description: "Macerato sulle bucce, non filtrato. Un'espressione arcaica e potente del Grillo.",
        image: "https://images.unsplash.com/photo-1566914565749-9f796c9f6580?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "d'Araprì Riserva Nobile",
        producer: "d'Araprì",
        region: "Puglia",
        type: "Spumante",
        price: 42,
        description: "Partner storico. Metodo Classico da Bombino Bianco. Bollicina cremosa e strutturata.",
        image: "https://images.unsplash.com/photo-1606758671604-037746535548?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Cerasuolo di Vittoria",
        producer: "COS",
        region: "Sicilia",
        type: "Rosso",
        price: 35,
        description: "Biologico, affinato in anfora. Note di ciliegia, terra rossa e spezie mediterranee.",
        image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Catarratto",
        producer: "Barraco",
        region: "Sicilia",
        type: "Bianco",
        price: 32,
        description: "Artigianale, salino, di grande carattere. Un bianco che sa di mare e sole.",
        image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Barolo del Comune di Serralunga",
        producer: "Luigi Baudana",
        region: "Piemonte",
        type: "Rosso",
        price: 65,
        description: "Un classico intramontabile per le grandi occasioni. Potente e longevo.",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop"
    }
];

// DATI MENU (Piccola Cucina / Sicilia)
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
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Vinyl & Wine",
        date: "Venerdì e Sabato",
        desc: "Selezione musicale rigorosamente su vinile. Jazz, Soul e cantautorato italiano per accompagnare la degustazione.",
        image: "https://images.unsplash.com/photo-1484876065684-262a47918cd7?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Incontro col Produttore: d'Araprì",
        date: "25 Ottobre - 19:00",
        desc: "Degustazione guidata delle Grandi Bollicine del Sud con i produttori.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
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

// LOGICA VINI (Render e Filtri)
function renderWines(filterType, filterRegion) {
    var grid = document.getElementById('wine-grid');
    var filtersTypeContainer = document.getElementById('type-filters');
    var filtersRegionContainer = document.getElementById('region-filters');
    var noResults = document.getElementById('no-results');

    if (!grid) return;

    if (filtersTypeContainer && filtersTypeContainer.innerHTML.trim() === '') {
        var types = ['Tutti'];
        var regions = ['Tutte'];
        
        WINES.forEach(function(w) {
            if (!types.includes(w.type)) types.push(w.type);
            if (!regions.includes(w.region)) regions.push(w.region);
        });

        types.forEach(function(t) {
            var btn = document.createElement('button');
            btn.className = 'block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 text-gray-600 font-poppins';
            btn.textContent = t;
            btn.onclick = function() { renderWines(t === 'Tutti' ? null : t, filterRegion); };
            if(filterType === t || (!filterType && t === 'Tutti')) btn.className += ' font-bold text-accent bg-gray-50';
            filtersTypeContainer.appendChild(btn);
        });

        regions.forEach(function(r) {
            var btn = document.createElement('button');
            btn.className = 'block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 text-gray-600 font-poppins';
            btn.textContent = r;
            btn.onclick = function() { renderWines(filterType, r === 'Tutte' ? null : r); };
            if(filterRegion === r || (!filterRegion && r === 'Tutte')) btn.className += ' font-bold text-primary bg-gray-50';
            filtersRegionContainer.appendChild(btn);
        });

        var resetBtn = document.getElementById('reset-filters');
        if(resetBtn) resetBtn.onclick = function() { location.reload(); };
    }

    grid.innerHTML = '';
    var count = 0;

    WINES.forEach(function(wine) {
        if (filterType && wine.type !== filterType) return;
        if (filterRegion && wine.region !== filterRegion) return;

        count++;
        var card = document.createElement('div');
        card.className = 'bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col';
        
        var html = '';
        html += '<div class="relative h-72 overflow-hidden bg-gray-50">';
        html += '<img src="' + wine.image + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">';
        html += '<span class="absolute top-4 left-4 bg-primary/90 text-white backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest">' + wine.region + '</span>';
        html += '</div>';
        html += '<div class="p-6 flex flex-col flex-grow">';
        html += '<span class="text-xs text-secondary font-bold uppercase tracking-wider mb-1">' + wine.type + '</span>';
        html += '<h3 class="font-playfair text-2xl text-primary mb-1">' + wine.name + '</h3>';
        html += '<p class="font-crimson italic text-gray-500 mb-4">' + wine.producer + '</p>';
        html += '<p class="font-poppins text-sm text-gray-600 font-light mb-6 flex-grow leading-relaxed">' + wine.description + '</p>';
        html += '<div class="flex justify-between items-center border-t border-gray-100 pt-4">';
        html += '<span class="font-playfair text-xl text-primary">€' + wine.price + '</span>';
        // WhatsApp button for each wine (ordering/info)
        html += '<a href="https://wa.me/393386828287?text=Buongiorno, vorrei informazioni sul vino ' + wine.name + '" target="_blank" class="text-xs font-bold text-accent uppercase hover:underline flex items-center gap-1"><i data-lucide="message-circle" class="w-3 h-3"></i> Info</a>';
        html += '</div></div>';

        card.innerHTML = html;
        grid.appendChild(card);
    });

    if (noResults) {
        noResults.style.display = (count === 0) ? 'block' : 'none';
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

    // Ordine specifico categorie
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

// LOGICA EVENTI
function renderEvents() {
    var container = document.getElementById('events-container');
    if(!container) return;

    EVENTS.forEach(function(evt) {
        var card = document.createElement('div');
        card.className = 'flex flex-col md:flex-row gap-8 bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-100';
        
        var html = '';
        html += '<div class="md:w-1/3 h-48 md:h-auto overflow-hidden rounded-sm">';
        html += '<img src="' + evt.image + '" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">';
        html += '</div>';
        html += '<div class="md:w-2/3 flex flex-col justify-center">';
        html += '<span class="text-accent font-bold font-poppins text-xs uppercase tracking-widest mb-2">' + evt.date + '</span>';
        html += '<h3 class="font-playfair text-2xl text-primary mb-3">' + evt.title + '</h3>';
        html += '<p class="font-poppins text-gray-600 text-sm leading-relaxed mb-6">' + evt.desc + '</p>';
        html += '<a href="https://wa.me/393386828287?text=Ciao, vorrei prenotare per l\'evento: ' + evt.title + '" target="_blank" class="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase hover:text-secondary transition-colors">Prenota Posto <i data-lucide="arrow-right" class="w-4 h-4"></i></a>';
        html += '</div>';

        card.innerHTML = html;
        container.appendChild(card);
    });
}

// LOGICA FAQ
function renderFAQ() {
    var container = document.getElementById('faq-container');
    if(!container) return;

    FAQ.forEach(function(item) {
        var div = document.createElement('div');
        div.className = 'border-b border-gray-200 pb-4';
        div.innerHTML = '<h4 class="font-playfair text-lg text-primary mb-2">' + item.q + '</h4><p class="font-poppins text-sm text-gray-500">' + item.a + '</p>';
        container.appendChild(div);
    });
}

// WhatsApp Form Handler (Simulazione)
var bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    var btn = document.getElementById('btn-whatsapp-submit');
    if(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get values safely
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
