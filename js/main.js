// DATI VINI
var WINES = [
    {
        id: 1,
        name: "Barolo Riserva 2016",
        producer: "Giacomo Conterno",
        region: "Piemonte",
        type: "Rosso",
        price: 85,
        description: "Strutturato, tannini eleganti, note di rosa appassita.",
        image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Etna Bianco Superiore",
        producer: "Benanti",
        region: "Sicilia",
        type: "Bianco",
        price: 45,
        description: "Minerale, salino, con sentori di ginestra.",
        image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Franciacorta Satèn",
        producer: "Ca' del Bosco",
        region: "Lombardia",
        type: "Spumante",
        price: 60,
        description: "Perlage finissimo, cremoso, note di pasticceria.",
        image: "https://images.unsplash.com/photo-1606758671604-037746535548?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Chianti Classico",
        producer: "Castello di Ama",
        region: "Toscana",
        type: "Rosso",
        price: 55,
        description: "Eleganza pura. Ciliegia scura e spezie dolci.",
        image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Ribolla Gialla",
        producer: "Gravner",
        region: "Friuli",
        type: "Naturale",
        price: 95,
        description: "Orange wine complesso, macerato in anfora.",
        image: "https://images.unsplash.com/photo-1566914565749-9f796c9f6580?q=80&w=800&auto=format&fit=crop"
    }
];

// DATI MENU
var MENU = [
    { category: "Cicchetti", name: "Tagliere Misto", price: 18, desc: "Salumi e formaggi selezionati" },
    { category: "Cicchetti", name: "Baccalà Mantecato", price: 12, desc: "Su crostini di polenta" },
    { category: "Piatti", name: "Risotto al Barolo", price: 22, desc: "Con salsiccia di Bra" },
    { category: "Piatti", name: "Guancia Brasata", price: 24, desc: "Cotta a bassa temperatura" },
    { category: "Dolci", name: "Tiramisù", price: 8, desc: "Classico della casa" }
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

    if (!grid) return; // Non siamo nella pagina vini

    // Setup Filtri (solo la prima volta)
    if (filtersTypeContainer && filtersTypeContainer.innerHTML.trim() === '') {
        var types = ['Tutti'];
        var regions = ['Tutte'];
        
        // Estrai unici
        WINES.forEach(function(w) {
            if (!types.includes(w.type)) types.push(w.type);
            if (!regions.includes(w.region)) regions.push(w.region);
        });

        // Crea bottoni Tipo
        types.forEach(function(t) {
            var btn = document.createElement('button');
            btn.className = 'block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 text-gray-600';
            btn.textContent = t;
            btn.onclick = function() { renderWines(t === 'Tutti' ? null : t, filterRegion); };
            if(filterType === t || (!filterType && t === 'Tutti')) btn.className += ' font-bold text-accent bg-gray-50';
            filtersTypeContainer.appendChild(btn);
        });

        // Crea bottoni Regione
        regions.forEach(function(r) {
            var btn = document.createElement('button');
            btn.className = 'block w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 text-gray-600';
            btn.textContent = r;
            btn.onclick = function() { renderWines(filterType, r === 'Tutte' ? null : r); };
            if(filterRegion === r || (!filterRegion && r === 'Tutte')) btn.className += ' font-bold text-primary bg-gray-50';
            filtersRegionContainer.appendChild(btn);
        });

        // Reset Listener
        var resetBtn = document.getElementById('reset-filters');
        if(resetBtn) resetBtn.onclick = function() { location.reload(); };
    }

    // Render Card
    grid.innerHTML = '';
    var count = 0;

    WINES.forEach(function(wine) {
        // Logica filtro
        if (filterType && wine.type !== filterType) return;
        if (filterRegion && wine.region !== filterRegion) return;

        count++;
        var card = document.createElement('div');
        card.className = 'bg-white rounded-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col';
        
        // Costruzione HTML sicura (string concat)
        var html = '';
        html += '<div class="relative h-64 overflow-hidden bg-gray-100">';
        html += '<img src="' + wine.image + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">';
        html += '<span class="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">' + wine.region + '</span>';
        html += '</div>';
        html += '<div class="p-6 flex flex-col flex-grow">';
        html += '<span class="text-xs text-secondary font-bold uppercase tracking-wider mb-1">' + wine.type + '</span>';
        html += '<h3 class="font-playfair text-2xl text-primary mb-1">' + wine.name + '</h3>';
        html += '<p class="font-crimson italic text-gray-500 mb-4">' + wine.producer + '</p>';
        html += '<p class="font-poppins text-sm text-gray-600 font-light mb-6 flex-grow">' + wine.description + '</p>';
        html += '<div class="flex justify-between items-center border-t border-gray-100 pt-4">';
        html += '<span class="font-playfair text-xl text-primary">€' + wine.price + '</span>';
        html += '<button class="text-xs font-bold text-accent uppercase hover:underline">Dettagli</button>';
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

    for (var cat in categories) {
        var section = document.createElement('div');
        section.className = 'mb-12';
        var title = '<h3 class="font-playfair text-3xl text-primary border-b border-gray-200 pb-2 mb-6 inline-block">' + cat + '</h3>';
        
        var list = '<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">';
        categories[cat].forEach(function(item) {
            list += '<div class="group">';
            list += '<div class="flex justify-between items-baseline mb-1">';
            list += '<h4 class="font-playfair text-xl text-gray-800 group-hover:text-accent transition-colors">' + item.name + '</h4>';
            list += '<span class="font-poppins font-bold text-secondary">€' + item.price + '</span>';
            list += '</div>';
            list += '<p class="font-poppins text-sm text-gray-500 font-light">' + item.desc + '</p>';
            list += '</div>';
        });
        list += '</div>';

        section.innerHTML = title + list;
        container.appendChild(section);
    }
}