/* --- DATA: SIMULACIÓN DE BASE DE DATOS LEGAL --- */
const wikiData = [
    // --- SECCIÓN 1: ACCESO, DAÑO Y SABOTAJE ---
    {
        titulo: "Acceso Indebido",
        ley: "Art. 6 - Ley Especial contra Delitos Informáticos",
        tags: ["hackeo", "facebook", "clave", "entrar", "novio", "pareja", "adivinar", "stalkear", "sesion abierta"],
        desc: "Entrar a una cuenta (correo, red social, banco) sin tener permiso del dueño, así hayas adivinado la clave o encontrado la sesión abierta."
    },
    {
        titulo: "Sabotaje o Daño de Sistemas",
        ley: "Art. 7 - Ley Especial contra Delitos Informáticos",
        tags: ["virus", "borrar", "dañar", "lento", "pc", "archivos", "formatear", "pantallazo", "destruir"],
        desc: "Dañar, borrar o alterar información de una computadora o teléfono intencionalmente. Incluye meter virus para dañar equipos."
    },
    {
        titulo: "Favorecimiento (Cómplice Tecnológico)",
        ley: "Art. 8 - Ley Especial contra Delitos Informáticos",
        tags: ["ayudar", "prestar pc", "facilitar", "herramienta", "tutorial hack", "enseñar"],
        desc: "Facilitar, prestar equipos o dar información para que otra persona cometa un delito informático. El cómplice también paga ante la ley."
    },
    {
        titulo: "Ciberterrorismo",
        ley: "Art. 24 - Ley Especial contra Delitos Informáticos",
        tags: ["estado", "gobierno", "luz", "agua", "servicio", "tumbar pagina", "saime", "banco de venezuela"],
        desc: "Atacar sistemas críticos del país (electricidad, telecomunicaciones, bancos estatales) para causar pánico o fallas masivas."
    },

    // --- SECCIÓN 2: PRIVACIDAD Y DATOS PERSONALES ---
    {
        titulo: "Espionaje Informático",
        ley: "Art. 11 - Ley Especial contra Delitos Informáticos",
        tags: ["leer", "fotos", "captures", "privado", "difundir", "chat", "whatsapp", "intimo"],
        desc: "Obtener y divulgar información privada (chats, fotos íntimas, audios) sin consentimiento del dueño."
    },
    {
        titulo: "Revelación Indebida de Data (Insider)",
        ley: "Art. 12 - Ley Especial contra Delitos Informáticos",
        tags: ["empleado", "banco", "vender datos", "lista de clientes", "chisme", "operadora", "movilnet"],
        desc: "Cuando alguien que trabaja con bases de datos (bancos, telefonía) revela, modifica o vende información confidencial de los clientes."
    },

    // --- SECCIÓN 3: FRAUDES Y ESTAFAS ECONÓMICAS ---
    {
        titulo: "Hurto Electrónico",
        ley: "Art. 13 - Ley Especial contra Delitos Informáticos",
        tags: ["zelle", "transferencia", "dinero", "robo", "cuenta vacia", "biopago"],
        desc: "Manipular un sistema bancario o financiero para sacar dinero de una cuenta ajena sin violencia, usando la tecnología."
    },
    {
        titulo: "Oferta Engañosa (Phishing)",
        ley: "Art. 14 - Ley Especial contra Delitos Informáticos",
        tags: ["estafa", "banco", "correo", "premio", "falso", "link", "marketplace", "hola soy maria"],
        desc: "Engañar a las personas usando medios digitales (correos, webs falsas, mensajes de WhatsApp) para obtener dinero o datos."
    },
    {
        titulo: "Falsificación de Documentos",
        ley: "Art. 15 - Ley Especial contra Delitos Informáticos",
        tags: ["capture falso", "pago movil editado", "photoshop", "recibo", "cedula falsa", "montaje"],
        desc: "Crear, modificar o alterar documentos digitales (como comprobantes de pago o cédulas) para engañar a alguien."
    },
    {
        titulo: "Fraude con Tarjetas (Clonación)",
        ley: "Art. 16 - Ley Especial contra Delitos Informáticos",
        tags: ["clonacion", "tarjeta", "punto de venta", "copiar banda", "pescadores", "credito"],
        desc: "Crear, copiar o alterar tarjetas de crédito/débito o usar datos de tarjetas ajenas para comprar por internet."
    },
    {
        titulo: "Posesión de Equipos de Falsificación",
        ley: "Art. 9 - Ley Especial contra Delitos Informáticos",
        tags: ["skimmer", "maquina", "lector", "clonadora", "aparato"],
        desc: "Tener en tu poder los aparatos (skimmers) o materiales destinados a clonar tarjetas o falsificar documentos, aunque no los hayas usado todavía."
    },

    // --- SECCIÓN 4: PROPIEDAD Y RECURSOS ---
    {
        titulo: "Hurto de Tecnologías (Robo de WiFi)",
        ley: "Art. 19 - Ley Especial contra Delitos Informáticos",
        tags: ["robar wifi", "colgarse", "internet gratis", "vecino", "cantv", "clave wifi"],
        desc: "Utilizar recursos tecnológicos (como el Wi-Fi del vecino o servidores) sin autorización y sin pagar por ello."
    },
    {
        titulo: "Violación de Propiedad Intelectual",
        ley: "Art. 25 - Ley Especial contra Delitos Informáticos",
        tags: ["pirateria", "crack", "serial", "licencia", "office gratis", "pelicula", "descargar"],
        desc: "Reproducir, divulgar o copiar software, música o películas protegidas por derechos de autor sin autorización (Piratería)."
    },

    // --- SECCIÓN 5: PROTECCIÓN INFANTIL ---
    {
        titulo: "Exhibición Pornográfica (Niños/Adolescentes)",
        ley: "Art. 20 - Ley Especial contra Delitos Informáticos",
        tags: ["nudes", "pack", "menores", "pornografía", "compartir", "abusador", "telegram"],
        desc: "El uso de tecnologías para exhibir, distribuir o poseer material pornográfico. La pena aumenta drásticamente si involucra a menores de edad."
    }
];

// Inicializar la página mostrando todo
document.addEventListener('DOMContentLoaded', () => {
    renderizarWiki(wikiData);
});

/* --- FUNCIÓN 1: RENDERIZADO DE TARJETAS --- */
function renderizarWiki(datos) {
    const contenedor = document.getElementById('resultadosWiki');
    contenedor.innerHTML = ''; // Limpiar

    if (datos.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; color: #888; padding: 20px;">
                <p>No encontramos un término legal exacto para eso. Intenta con palabras clave como "estafa" o "fotos".</p>
            </div>`;
        return;
    }

    datos.forEach(item => {
        const div = document.createElement('div');
        div.className = 'termino-item';
        div.innerHTML = `
            <span class="ley-tag">${item.ley}</span>
            <div class="termino-titulo">${item.titulo}</div>
            <p style="margin-top: 10px;">${item.desc}</p>
            <p class="termino-vulgar" style="margin-top:5px; font-size: 0.8rem;">
                Palabras clave: ${item.tags.join(', ')}
            </p>
        `;
        contenedor.appendChild(div);
    });
}

/* --- FUNCIÓN 2: FILTRO DE BÚSQUEDA --- */
function filtrarWiki() {
    const input = document.getElementById('buscadorLegal').value.toLowerCase();
    
    const resultados = wikiData.filter(item => {
        // Buscamos en el título y en los tags (palabras coloquiales)
        const enTitulo = item.titulo.toLowerCase().includes(input);
        const enTags = item.tags.some(tag => tag.includes(input));
        return enTitulo || enTags;
    });

    renderizarWiki(resultados);
}

/* --- FUNCIÓN 3: DESCARGA REAL --- */
function descargar(archivo) {
    // Preguntamos al usuario si quiere descargar
    const confirmacion = confirm(`¿Deseas descargar la infografía: "${archivo}" para compartirla en tu comunidad?`);
    
    if (confirmacion) {
        // Creamos un enlace temporal en memoria
        const link = document.createElement('a');
        
        // AQUÍ ESTÁ EL CAMBIO: Le decimos que busque en la carpeta 'img'
        link.href = 'img/' + archivo; 
        
        // El atributo download fuerza la descarga en vez de abrir la imagen
        link.download = archivo;
        
        // Añadimos el link al documento, hacemos clic y lo removemos
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual
        // (Opcional: puedes quitar el alert si prefieres que solo descargue)
        console.log("Descarga iniciada de: " + archivo);
    }
}
// --- FUNCIÓN DEL BUSCADOR (FILTRO) ---
// Escucha lo que el usuario escribe y filtra la lista en tiempo real
function filtrarTerminos() {
    const textoBusqueda = document.getElementById('buscadorLegal').value.toLowerCase();
    
    const listaFiltrada = terminosLegales.filter(item => {
        // Busca coincidencias en el título, en el nombre coloquial o en el ejemplo
        return item.titulo.toLowerCase().includes(textoBusqueda) || 
               item.coloquial.toLowerCase().includes(textoBusqueda) ||
               item.ejemplo.toLowerCase().includes(textoBusqueda);
    });

    mostrarTerminos(listaFiltrada);
}