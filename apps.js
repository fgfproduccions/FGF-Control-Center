// Llista d'apps del Control Center.
// Per afegir una app nova: copia un bloc i omple'n els camps.
// Cada app té el seu propi login. Aquesta llista no conté dades sensibles.
//
// - nom:      com surt a la icona
// - url:      adreça de l'app
// - icona:    una lletra o paraula curta (o un emoji)
// - imatge:   ruta a una imatge (opcional, substitueix la icona). Ex: "icones/app.png"
// - color:    color de la icona (opcional, per defecte taronja)
// - estat:    "activa" o "properament" (les properament no són clicables)

const APPS = [
  {
    nom: "Pavellons",
    descripcio: "Fitxes dels pavellons on fem streamings",
    url: "https://fgfpavellons.pages.dev",
    icona: "P",
    color: "#F7901E",
    estat: "activa",
  },
  {
    nom: "LiveU Control",
    descripcio: "Control de les motxilles LiveU Solo (cal Tailscale)",
    url: "https://macbook-air-m5.tail8dbb6b.ts.net",
    icona: "LU",
    imatge: "icones/liveu.png",
    color: "#FFFFFF",
    estat: "activa",
  },
  {
    nom: "Partits",
    descripcio: "Resum dels partits del cap de setmana",
    url: "",
    icona: "🏀",
    color: "#585858",
    estat: "properament",
  },
  {
    nom: "Grafisme",
    descripcio: "Arxius i serveis de grafisme",
    url: "",
    icona: "G",
    color: "#585858",
    estat: "properament",
  },
];
