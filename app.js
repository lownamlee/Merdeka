const ART = {
  "skyline": "assets/skyline.webp",
  "portrait-drawn-upper": "assets/portrait-drawn-upper.webp",
  "portrait-drawn-lower": "assets/portrait-drawn-lower.webp",
  "flag": "assets/flag.webp",
  "tower": "assets/tower.webp",
  "tower-night-upper": "assets/tower-night-upper.webp",
  "tower-night-lower": "assets/tower-night-lower.webp",
  "city-transition": "assets/city-transition.webp",
  "clouds": "assets/clouds.webp",
  "trees": "assets/trees.webp",
  "crowd": "assets/crowd.webp",
  "title": "assets/title.webp",
  "flare": "assets/flare.webp",
  "digits": "assets/digits.webp",
  "loading": "assets/loading.webp",
  "people": "assets/people.svg",
  "horizons": "assets/horizons.svg",
  "chapter-angklung": "assets/chapter-angklung.webp",
  "chapter-durian-stall": "assets/chapter-durian-stall.webp",
  "chapter-durian": "assets/chapter-durian.webp",
  "chapter-enggang": "assets/chapter-enggang.webp",
  "chapter-keris": "assets/chapter-keris.webp",
  "keris-cursor": "assets/keris-cursor.png",
  "chapter-malaysia": "assets/chapter-malaysia.webp",
  "chapter-melaka": "assets/chapter-melaka.webp",
  "chapter-rafflesia": "assets/chapter-rafflesia.webp"
};
const CHANTS = {
  "merdeka-1": "assets/merdeka-1.m4a",
  "merdeka-2": "assets/merdeka-2.m4a",
  "merdeka-3": "assets/merdeka-3.m4a"
};
const MUSIC = {
  "beyond-the-ridge": "assets/beyond-the-ridge.mp3"
};
const SOUNDS = {
  "keris-slash": "assets/keris-slash.mp3"
};
const MAPS = {
  "malaysia-states": "assets/malaysia-states.json"
};
const FONTS = {
  "montserrat": "assets/montserrat-latin-600.woff2",
  "quicksand": "assets/quicksand-latin-600.woff2"
};
const ASSET_BYTES = {
  "skyline": 346152,
  "portrait-drawn-upper": 151274,
  "portrait-drawn-lower": 121998,
  "flag": 143136,
  "tower": 40952,
  "tower-night-upper": 16756,
  "tower-night-lower": 12446,
  "city-transition": 210686,
  "clouds": 171438,
  "trees": 131318,
  "crowd": 73894,
  "title": 153970,
  "flare": 415610,
  "digits": 350556,
  "loading": 18072,
  "people": 398,
  "horizons": 390,
  "chapter-angklung": 129272,
  "chapter-durian-stall": 338186,
  "chapter-durian": 567956,
  "chapter-enggang": 346928,
  "chapter-keris": 295680,
  "keris-cursor": 423008,
  "keris-slash": 17325,
  "chapter-malaysia": 345358,
  "chapter-melaka": 388012,
  "chapter-rafflesia": 706564,
  "merdeka-1": 54519,
  "merdeka-2": 59002,
  "merdeka-3": 54553,
  "montserrat": 18688,
  "quicksand": 15864,
  "beyond-the-ridge": 4252652,
  "malaysia-states": 47787
};
const CHAPTERS = [
  {
    "key": "malaysia",
    "letter": "M",
    "title": "Malaysia",
    "eyebrow": "Many stories, one home",
    "lead": "From city skylines to rainforests and island shores, Malaysia brings a wealth of landscapes, traditions and flavours together.",
    "facts": [
      "13 states and three federal territories.",
      "Peninsular Malaysia and East Malaysia form the country’s two regions."
    ],
    "links": [
      {
        "label": "Explore Malaysia",
        "url": "https://www.malaysia.travel/index.php/about-malaysia",
        "publisher": "Tourism Malaysia"
      },
      {
        "label": "Travel atlas",
        "url": "https://storage.ebrochures.malaysia.travel/storage/IDB_PDF_MTG_EN.pdf",
        "publisher": "Tourism Malaysia"
      }
    ],
    "category": "Many stories, one home",
    "sources": [
      {
        "label": "Explore Malaysia",
        "url": "https://www.malaysia.travel/index.php/about-malaysia",
        "publisher": "Tourism Malaysia"
      },
      {
        "label": "Travel atlas",
        "url": "https://storage.ebrochures.malaysia.travel/storage/IDB_PDF_MTG_EN.pdf",
        "publisher": "Tourism Malaysia"
      }
    ],
    "media": {
      "file": "assets/chapter-malaysia.webp",
      "title": "Kuala Lumpur Skyline at dusk.jpg",
      "author": "Zukiman Mohamad at Pexels",
      "authorUrl": "https://www.pexels.com/@umaraffan499",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Skyline_at_dusk.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Kuala_Lumpur_Skyline_at_dusk.jpg",
      "caption": "Kuala Lumpur at dusk, with the Petronas Twin Towers and KL Tower.",
      "alt": "Kuala Lumpur at dusk, with the Petronas Twin Towers and KL Tower.",
      "fit": "cover",
      "width": 1800,
      "height": 1200,
      "bytes": 345358,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-malaysia",
      "source": "https://commons.wikimedia.org/wiki/File:Kuala_Lumpur_Skyline_at_dusk.jpg"
    },
    "gallery": [
      {
        "type": "map",
        "mapKey": "malaysia-states",
        "caption": "Explore Malaysia’s 13 states and three federal territories.",
        "source": "https://simplemaps.com/svg/country/my"
      }
    ]
  },
  {
    "key": "enggang",
    "letter": "E",
    "title": "Enggang",
    "eyebrow": "Sarawak’s forest icon",
    "lead": "With its sweeping wings and striking golden casque, the rhinoceros hornbill is one of Sarawak’s most recognisable birds.",
    "facts": [
      "Its scientific name is Buceros rhinoceros.",
      "It nests in natural cavities in large trees."
    ],
    "links": [
      {
        "label": "Sarawak’s wildlife",
        "url": "https://www.sarawaktourism.com/web/stories/story-view/sarawak-s-amazing-wildlife",
        "publisher": "Sarawak Tourism Board"
      },
      {
        "label": "Meet the hornbill",
        "url": "https://www.sarawaktourism.com/web/attachment/show/?docid=S2p5ZHNxaHBZdUo2aDc4N1pqWmo2Zz09OjpRNQkNjl0Y2EIBPK10fssA",
        "publisher": "Sarawak Tourism Board"
      }
    ],
    "category": "Sarawak’s forest icon",
    "sources": [
      {
        "label": "Sarawak’s wildlife",
        "url": "https://www.sarawaktourism.com/web/stories/story-view/sarawak-s-amazing-wildlife",
        "publisher": "Sarawak Tourism Board"
      },
      {
        "label": "Meet the hornbill",
        "url": "https://www.sarawaktourism.com/web/attachment/show/?docid=S2p5ZHNxaHBZdUo2aDc4N1pqWmo2Zz09OjpRNQkNjl0Y2EIBPK10fssA",
        "publisher": "Sarawak Tourism Board"
      }
    ],
    "media": {
      "file": "assets/chapter-enggang.webp",
      "title": "Buceros rhinoceros Kuala Lumpur.jpg",
      "author": "G.Mannaerts",
      "authorUrl": "//commons.wikimedia.org/wiki/User:Triton",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Buceros_rhinoceros_Kuala_Lumpur.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Buceros_rhinoceros_Kuala_Lumpur.jpg",
      "caption": "A rhinoceros hornbill at Kuala Lumpur Bird Park.",
      "alt": "A rhinoceros hornbill at Kuala Lumpur Bird Park.",
      "fit": "contain",
      "width": 1800,
      "height": 1200,
      "bytes": 346928,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-enggang",
      "source": "https://commons.wikimedia.org/wiki/File:Buceros_rhinoceros_Kuala_Lumpur.jpg"
    }
  },
  {
    "key": "rafflesia",
    "letter": "R",
    "title": "Rafflesia",
    "eyebrow": "A rare moment in bloom",
    "lead": "Rafflesia’s striking flowers bloom briefly on the forest floor, making each sighting a special part of a forest walk.",
    "facts": [
      "It draws its nutrients from a host vine called Tetrastigma.",
      "Sabah’s Tambunan centre helps protect this remarkable flower."
    ],
    "links": [
      {
        "label": "Rafflesia in Sabah",
        "url": "https://sabahtourism.com/destination/rafflesia-information-centre/",
        "publisher": "Sabah Tourism Board"
      },
      {
        "label": "Forest research",
        "url": "https://info.frim.gov.my/infocenter/Korporat/2022Publications/proceedings.pdf",
        "publisher": "Forest Research Institute Malaysia"
      }
    ],
    "category": "A rare moment in bloom",
    "sources": [
      {
        "label": "Rafflesia in Sabah",
        "url": "https://sabahtourism.com/destination/rafflesia-information-centre/",
        "publisher": "Sabah Tourism Board"
      },
      {
        "label": "Forest research",
        "url": "https://info.frim.gov.my/infocenter/Korporat/2022Publications/proceedings.pdf",
        "publisher": "Forest Research Institute Malaysia"
      }
    ],
    "media": {
      "file": "assets/chapter-rafflesia.webp",
      "title": "Rafflesia keithii near poring hot springs.jpg",
      "author": "Peripitus",
      "authorUrl": "",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rafflesia_keithii_near_poring_hot_springs.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/7/71/Rafflesia_keithii_near_poring_hot_springs.jpg",
      "caption": "Rafflesia keithii near Poring Hot Springs, Sabah.",
      "alt": "Rafflesia keithii near Poring Hot Springs, Sabah.",
      "fit": "contain",
      "width": 1800,
      "height": 1196,
      "bytes": 706564,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-rafflesia",
      "source": "https://commons.wikimedia.org/wiki/File:Rafflesia_keithii_near_poring_hot_springs.jpg"
    }
  },
  {
    "key": "durian",
    "letter": "D",
    "title": "Durian",
    "eyebrow": "The king of fruits",
    "lead": "Inside its thorny shell, durian reveals rich, creamy flesh and a bold aroma that makes it instantly recognisable.",
    "facts": [
      "Musang King is also known as Raja Kunyit.",
      "Red Prawn and Black Thorn are among Penang’s best-known varieties."
    ],
    "links": [
      {
        "label": "Meet the varieties",
        "url": "https://www.mypenang.gov.my/uploads/downloads/sFA_DurianBrochure_2026_ENG.pdf",
        "publisher": "Penang Global Tourism"
      },
      {
        "label": "Malaysia’s durian trail",
        "url": "https://www.malaysia.travel/storage/files/pdf/Durian-Tourism-Packages-2024.pdf",
        "publisher": "Tourism Malaysia"
      }
    ],
    "category": "The king of fruits",
    "sources": [
      {
        "label": "Meet the varieties",
        "url": "https://www.mypenang.gov.my/uploads/downloads/sFA_DurianBrochure_2026_ENG.pdf",
        "publisher": "Penang Global Tourism"
      },
      {
        "label": "Malaysia’s durian trail",
        "url": "https://www.malaysia.travel/storage/files/pdf/Durian-Tourism-Packages-2024.pdf",
        "publisher": "Tourism Malaysia"
      }
    ],
    "media": {
      "file": "assets/chapter-durian.webp",
      "title": "Durian in black.jpg",
      "author": "مانفی",
      "authorUrl": "//commons.wikimedia.org/wiki/User:%D9%85%D8%A7%D9%86%D9%81%DB%8C",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Durian_in_black.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Durian_in_black.jpg",
      "caption": "A durian opened to reveal its golden flesh.",
      "alt": "A durian opened to reveal its golden flesh.",
      "fit": "contain",
      "width": 1800,
      "height": 1557,
      "bytes": 567956,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-durian",
      "source": "https://commons.wikimedia.org/wiki/File:Durian_in_black.jpg"
    },
    "gallery": [
      {
        "file": "assets/chapter-durian-stall.webp",
        "title": "Durian (12593723854).jpg",
        "author": "KimonBerlin",
        "authorUrl": "https://www.flickr.com/people/81943113@N00",
        "license": "CC BY-SA 2.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Durian_(12593723854).jpg",
        "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Durian_%2812593723854%29.jpg",
        "caption": "Durians displayed for sale at a fruit stall.",
        "alt": "Durians displayed for sale at a fruit stall.",
        "fit": "cover",
        "width": 1800,
        "height": 1200,
        "bytes": 338186,
        "changes": "Resized and converted to WebP; no retouching.",
        "review": "Visually inspected; subject, sharpness and composition accepted.",
        "artKey": "chapter-durian-stall",
        "source": "https://commons.wikimedia.org/wiki/File:Durian_(12593723854).jpg"
      }
    ]
  },
  {
    "key": "melaka",
    "letter": "E",
    "title": "Empayar Melaka",
    "eyebrow": "A sultanate shaped by the sea",
    "lead": "Melaka grew into a thriving trading port in the 15th century, leaving a lasting mark on Malay culture and maritime heritage.",
    "facts": [
      "Its harbour brought together traders, goods and ideas.",
      "The palace museum offers a glimpse of life in the sultanate."
    ],
    "links": [
      {
        "label": "A trading crossroads",
        "url": "https://whc.unesco.org/en/list/1223/",
        "publisher": "UNESCO World Heritage Centre"
      },
      {
        "label": "The palace museum",
        "url": "https://www.mbmb.gov.my/en/tourism/history-places/melaka-sultanate-palace",
        "publisher": "Melaka Historic City Council"
      }
    ],
    "category": "A sultanate shaped by the sea",
    "sources": [
      {
        "label": "A trading crossroads",
        "url": "https://whc.unesco.org/en/list/1223/",
        "publisher": "UNESCO World Heritage Centre"
      },
      {
        "label": "The palace museum",
        "url": "https://www.mbmb.gov.my/en/tourism/history-places/melaka-sultanate-palace",
        "publisher": "Melaka Historic City Council"
      }
    ],
    "media": {
      "file": "assets/chapter-melaka.webp",
      "title": "Istana Kesultanan Melaka Royal Palace of Malacca.jpg",
      "author": "Irwan Shah Bin Abdullah / eHalal",
      "authorUrl": "https://ehalal.io/muslim-friendly-travel-2024/Malacca",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Istana_Kesultanan_Melaka_Royal_Palace_of_Malacca.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/7/72/Istana_Kesultanan_Melaka_Royal_Palace_of_Malacca.jpg",
      "caption": "Melaka Sultanate Palace Museum, a modern reconstruction of a 15th-century palace.",
      "alt": "Melaka Sultanate Palace Museum, a modern reconstruction of a 15th-century palace.",
      "fit": "cover",
      "width": 1800,
      "height": 1200,
      "bytes": 388012,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-melaka",
      "source": "https://commons.wikimedia.org/wiki/File:Istana_Kesultanan_Melaka_Royal_Palace_of_Malacca.jpg"
    }
  },
  {
    "key": "keris",
    "letter": "K",
    "title": "Keris",
    "eyebrow": "Craft passed through generations",
    "lead": "A symbol of Malay craftsmanship, the keris brings together a finely worked blade and an intricately carved hilt.",
    "facts": [
      "Its blade may be straight or shaped with graceful curves.",
      "Heirloom keris carry family stories from one generation to the next."
    ],
    "links": [
      {
        "label": "The forms of a keris",
        "url": "https://www.jmm.gov.my/en/content/mata-keris-dan-bentuknya",
        "publisher": "Department of Museums Malaysia"
      },
      {
        "label": "Keris craftsmanship",
        "url": "https://mdselama.gov.my/index.php/seni-warisan",
        "publisher": "Selama District Council"
      }
    ],
    "category": "Craft passed through generations",
    "sources": [
      {
        "label": "The forms of a keris",
        "url": "https://www.jmm.gov.my/en/content/mata-keris-dan-bentuknya",
        "publisher": "Department of Museums Malaysia"
      },
      {
        "label": "Keris craftsmanship",
        "url": "https://mdselama.gov.my/index.php/seni-warisan",
        "publisher": "Selama District Council"
      }
    ],
    "media": {
      "file": "assets/chapter-keris.webp",
      "title": "Malay Keris.jpg",
      "author": "Zamwan",
      "authorUrl": "//commons.wikimedia.org/wiki/User:Zamwan",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Malay_Keris.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Malay_Keris.jpg",
      "caption": "An ornate keris with its decorated hilt and sheath.",
      "alt": "An ornate keris with its decorated hilt and sheath.",
      "fit": "contain",
      "width": 1350,
      "height": 1800,
      "bytes": 295680,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-keris",
      "source": "https://commons.wikimedia.org/wiki/File:Malay_Keris.jpg"
    },
    "gallery": [
      {
        "type": "keris",
        "artKey": "keris-cursor",
        "caption": ""
      }
    ]
  },
  {
    "key": "angklung",
    "letter": "A",
    "title": "Angklung",
    "eyebrow": "Bamboo in harmony",
    "lead": "Gentle shakes bring bamboo tubes to life. Played together, their individual notes become a shared melody.",
    "facts": [
      "Each instrument contributes a note or chord.",
      "Angklung ensembles are part of Malaysia’s musical life."
    ],
    "links": [
      {
        "label": "Angklung in Malaysia",
        "url": "https://ir.uitm.edu.my/id/eprint/77194/",
        "publisher": "Universiti Teknologi MARA"
      },
      {
        "label": "Angklung Wat",
        "url": "https://www.indigotalents.com/angklung-wat/",
        "publisher": "Indigo Talents"
      }
    ],
    "video": {
      "title": "Angklung Wat — live ensemble",
      "label": "Watch · Angklung Wat",
      "sourceUrl": "https://www.indigotalents.com/angklung-wat/",
      "watchUrl": "https://www.youtube.com/watch?v=r4_c7XssYIg",
      "embedUrl": "https://www.youtube-nocookie.com/embed/r4_c7XssYIg?rel=0",
      "publisher": "Indigo Talents",
      "credit": "Indigo Talents"
    },
    "category": "Bamboo in harmony",
    "sources": [
      {
        "label": "Angklung in Malaysia",
        "url": "https://ir.uitm.edu.my/id/eprint/77194/",
        "publisher": "Universiti Teknologi MARA"
      },
      {
        "label": "Angklung Wat",
        "url": "https://www.indigotalents.com/angklung-wat/",
        "publisher": "Indigo Talents"
      }
    ],
    "media": {
      "file": "assets/chapter-angklung.webp",
      "title": "Angklung-titelbild.jpg",
      "author": "Kamillo",
      "authorUrl": "https://de.wikipedia.org/wiki/User:Kamillo",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Angklung-titelbild.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Angklung-titelbild.jpg",
      "caption": "An angklung ensemble bringing individual notes together in harmony.",
      "alt": "An angklung ensemble bringing individual notes together in harmony.",
      "fit": "cover",
      "width": 1000,
      "height": 808,
      "bytes": 129272,
      "changes": "Resized and converted to WebP; no retouching.",
      "review": "Visually inspected; subject, sharpness and composition accepted.",
      "artKey": "chapter-angklung",
      "source": "https://commons.wikimedia.org/wiki/File:Angklung-titelbild.jpg"
    }
  }
];
function createKerisExperience({ motion, getAudioContext, getSound, getVolume }) {
  function node(tag, className, text) {
    const item = document.createElement(tag); item.className = className;
    if (text) item.textContent = text;
    return item;
  }
  const panel = node('div', 'keris-play'), preview = node('img', 'keris-preview');
  panel.hidden = true; panel.setAttribute('aria-label', 'Try the keris');
  preview.dataset.art = 'keris-cursor'; preview.alt = 'A pixel-art keris with a silver wavy blade and a carved gold hilt'; preview.draggable = false;
  const button = node('button', 'keris-equip', 'Equip keris');
  button.type = 'button'; button.setAttribute('aria-pressed', 'false');
  const announcement = node('span', 'sr-only'); announcement.setAttribute('aria-live', 'polite');
  panel.append(preview, button, announcement);
  const canvas = node('canvas', 'keris-trail'), cursor = node('img', 'keris-cursor');
  canvas.setAttribute('aria-hidden', 'true'); cursor.setAttribute('aria-hidden', 'true');
  cursor.dataset.art = 'keris-cursor'; cursor.alt = ''; cursor.draggable = false;
  canvas.hidden = true; cursor.hidden = true; document.body.append(canvas, cursor);
  const context = canvas.getContext('2d'), sources = new Set();
  let equipped = false, listeners = null, frame = 0, points = [], sparks = [], last = null, touch = null, angle = 0;
  let lastSound = -Infinity, distanceSinceSound = 0, audio = null, gain = null, buffer = null, audioReady = null;
  function updateVolume() {
    if (gain) { gain.gain.cancelScheduledValues(audio.currentTime); gain.gain.setTargetAtTime(getVolume() * .58, audio.currentTime, .015) }
  }
  function prepareAudio() {
    audio = getAudioContext();
    if (!audio) return;
    if (!gain) { gain = audio.createGain(); gain.connect(audio.destination) }
    updateVolume();
    if (!audioReady) {
      audioReady = fetch(getSound()).then(response => {
        if (!response.ok) throw new Error('The keris sound is unavailable.');
        return response.arrayBuffer();
      }).then(bytes => audio.decodeAudioData(bytes)).then(decoded => { buffer = decoded }).catch(() => { audioReady = null });
    }
  }
  function slash(now, deliberate = false) {
    if (now - lastSound < 550 || (!deliberate && distanceSinceSound < 100)) return;
    if (!buffer || !audio || audio.state !== 'running' || getVolume() === 0) return;
    lastSound = now; distanceSinceSound = 0;
    const source = audio.createBufferSource(); source.buffer = buffer;
    source.playbackRate.value = .96 + Math.random() * .08; source.connect(gain);
    source.onended = () => { sources.delete(source); source.disconnect() };
    sources.add(source); source.start();
  }
  function stopAudio() {
    sources.forEach(source => { source.onended = null; source.stop(); source.disconnect() }); sources.clear();
  }
  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * ratio); canvas.height = Math.round(window.innerHeight * ratio);
    context?.setTransform(ratio, 0, 0, ratio, 0, 0);
    hidePointer();
  }
  function hidePointer() {
    cancelAnimationFrame(frame); frame = 0; points = []; sparks = []; last = null; distanceSinceSound = 0;
    cursor.hidden = true; canvas.hidden = true;
    document.documentElement.classList.remove('keris-cursor-active');
    context?.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  function draw(now) {
    frame = 0;
    if (!equipped || !context || motion.matches) return;
    points = points.filter(point => now - point.time < 240);
    sparks = sparks.filter(spark => now - spark.time < 300);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (points.length > 2) {
      const left = [], right = [];
      points.forEach((point, index) => {
        const before = points[Math.max(0, index - 1)], after = points[Math.min(points.length - 1, index + 1)];
        const dx = after.x - before.x, dy = after.y - before.y, length = Math.hypot(dx, dy) || 1;
        const width = Math.sin(index / (points.length - 1) * Math.PI) * point.width;
        left.push([point.x - dy / length * width, point.y + dx / length * width]);
        right.unshift([point.x + dy / length * width, point.y - dx / length * width]);
      });
      context.save();
      context.globalAlpha = Math.max(0, 1 - (now - points[points.length - 1].time) / 240);
      context.fillStyle = '#7b9fe0'; context.shadowColor = '#b6dfff'; context.shadowBlur = 12;
      context.beginPath();
      [...left, ...right].forEach(([x, y], i) => i ? context.lineTo(x, y) : context.moveTo(x, y));
      context.closePath(); context.fill();
      context.strokeStyle = '#fff7dd'; context.lineWidth = 2; context.lineCap = 'round'; context.lineJoin = 'round';
      context.beginPath();
      points.forEach((point, i) => i ? context.lineTo(point.x, point.y) : context.moveTo(point.x, point.y));
      context.stroke(); context.restore();
    }
    sparks.forEach(spark => {
      const age = (now - spark.time) / 300;
      context.globalAlpha = (1 - age) * .8; context.fillStyle = spark.colour;
      context.fillRect(spark.x + spark.dx * age, spark.y + spark.dy * age + age * age * 12, 2, 2);
    });
    context.globalAlpha = 1;
    if (points.length || sparks.length) frame = requestAnimationFrame(draw);
    else canvas.hidden = true;
  }
  function move(event) {
    if (!equipped || (event.pointerType === 'touch' && event.pointerId !== touch)) return;
    const now = performance.now(), x = event.clientX, y = event.clientY;
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    const elapsed = last ? now - last.time : Infinity;
    if (elapsed > 180) { points = []; distanceSinceSound = 0; last = null }
    const dx = last ? x - last.x : 0, dy = last ? y - last.y : 0, distance = Math.hypot(dx, dy);
    const speed = distance / Math.max(8, elapsed);
    cursor.hidden = false;
    document.documentElement.classList.toggle('keris-cursor-active', event.pointerType !== 'touch');
    if (distance > 2 && !motion.matches) {
      const target = Math.atan2(dy, dx) + Math.PI * .75;
      const delta = Math.atan2(Math.sin(target - angle), Math.cos(target - angle)); angle += delta * .3;
    }
    cursor.style.transform = `translate3d(${x - 6}px,${y - 5.28}px,0) rotate(${motion.matches ? 0 : angle}rad)`;
    if (last && distance >= 2) {
      distanceSinceSound += distance;
      if (!motion.matches) {
        if (!points.length) points.push({ ...last, width: 3 });
        points.push({ x, y, time: now, width: Math.min(11, 3 + speed * 4) });
        if (points.length > 24) points.shift();
        if (speed > 1) {
          for (let i = 0; i < 2; i++) sparks.push({ x, y, time: now, dx: (Math.random() - .5) * 34, dy: (Math.random() - .5) * 34, colour: i ? '#c5a358' : '#9ebbe8' });
          sparks = sparks.slice(-28);
        }
        canvas.hidden = false; if (!frame) frame = requestAnimationFrame(draw);
        if (speed > 1.1) slash(now);
      }
    }
    last = { x, y, time: now };
  }
  function press(event) {
    if (!panel.contains(event.target) || event.target.closest('button, a, input')) return;
    if (event.pointerType === 'touch') { touch = event.pointerId; panel.setPointerCapture(touch) }
    move(event); slash(performance.now(), true);
  }
  function release(event) {
    if (event.pointerId !== touch) return;
    if (panel.hasPointerCapture(touch)) panel.releasePointerCapture(touch);
    touch = null; hidePointer();
  }
  function deactivate() {
    equipped = false; listeners?.abort(); listeners = null;
    if (touch !== null && panel.hasPointerCapture(touch)) panel.releasePointerCapture(touch);
    touch = null; hidePointer(); stopAudio();
    panel.classList.remove('is-equipped'); button.setAttribute('aria-pressed', 'false'); button.textContent = 'Equip keris';
    announcement.textContent = 'Keris put away.';
  }
  button.addEventListener('click', event => {
    if (equipped) { deactivate(); return }
    equipped = true; angle = 0; lastSound = -Infinity; listeners = new AbortController();
    const options = { signal: listeners.signal, passive: true };
    panel.classList.add('is-equipped'); button.setAttribute('aria-pressed', 'true'); button.textContent = 'Put away';
    announcement.textContent = 'Keris equipped.';
    prepareAudio(); resize();
    document.addEventListener('pointermove', move, options);
    document.addEventListener('pointerdown', press, options);
    document.addEventListener('pointerup', release, options);
    document.addEventListener('pointercancel', release, options);
    document.addEventListener('pointerout', event => { if (!event.relatedTarget) hidePointer() }, options);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); deactivate(); button.focus({ preventScroll: true }) }
      else if (event.key === 'Tab') hidePointer();
    }, { signal: listeners.signal, capture: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) deactivate() }, options);
    window.addEventListener('blur', deactivate, options);
    window.addEventListener('resize', resize, options);
    window.addEventListener('scroll', hidePointer, { ...options, capture: true });
    motion.addEventListener('change', hidePointer, options);
    if (event.detail && event.pointerType !== 'touch') move(event);
  });
  return { panel, deactivate, updateVolume, setVisible(visible) { if (!visible) deactivate(); panel.hidden = !visible } };
}

(() => {
  const scene = document.querySelector('.scene');
  const loader = document.querySelector('.loader');
  const numerals = document.querySelector('.numerals');
  const portrait = document.querySelector('.portrait');
  const orbitLayer = document.querySelector('.orbit-layer');
  const orbit = document.querySelector('.progress-orbit');
  const arc = document.querySelector('.arc');
  const soundWave = document.querySelector('.audio-wave');
  const fill = document.querySelector('.fill');
  const hero = document.querySelector('.hero');
  const titleLetters = document.querySelector('.title-letters');
  const titleEdges = [0, 300, 524, 762, 998, 1218, 1452, 1704];
  const titleColours = ['#9fdcf5', '#e65a63', '#f1c45b', '#80c9e5', '#ef7d68', '#7b9fe0', '#d9ba67'];
  [...'MERDEKA'].forEach((letter, index) => {
    const button = document.createElement('button'), x = titleEdges[index], width = titleEdges[index + 1] - x;
    button.type = 'button'; button.className = 'title-letter';
    button.setAttribute('aria-label', letter + ' — ' + CHAPTERS[index].title); button.setAttribute('aria-controls', 'chapter-' + CHAPTERS[index].key);
    button.style.left = (x / 1704 * 100) + '%'; button.style.width = (width / 1704 * 100) + '%';
    button.style.setProperty('--letter-color', titleColours[index]);
    button.style.setProperty('--mask-size', (1704 / width * 100) + '% ' + (923 / 240 * 100) + '%');
    button.style.setProperty('--mask-position', (x / (1704 - width) * 100) + '% ' + (190 / (923 - 240) * 100) + '%');
    button.addEventListener('click', event => navigateChapter(index, event));
    titleLetters.append(button);
  });
  const skip = document.querySelector('.skip');
  const replay = document.querySelector('.replay');
  const chantButton = document.querySelector('.merdeka-button');
  const chantCounter = document.querySelector('.chant-counter');
  const chantAudio = new Audio();
  chantAudio.preload = 'auto';
  const volumeControl = document.querySelector('.volume-control');
  const volumeButton = document.querySelector('.volume-toggle');
  const volumePanel = document.querySelector('.volume-panel');
  const volumeSliders = { music: document.getElementById('volume-music'), sounds: document.getElementById('volume-sounds') };
  const volumeLevels = { music: 1, sounds: 1 };
  const videoPlayers = new Set();
  let kerisExperience = null;
  const status = document.getElementById('status');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const timers = new Set();
  const digitBounceMs = 460, completedHoldMs = 100;
  let run = 0, frame = 0, ready = false, value = -1, assetProgress = 1, skipRequested = false;
  let chantCount = 0, chantPlaying = false, chantFocused = false;
  let musicRequested = false, musicStarted = false;
  let chantPlayback = 0, audioContext = null, audioAnalyser = null, audioGain = null, audioSamples = null, waveFrame = 0;
  let audioChannel = 'sounds', trackLevel = 1, audioUnlockUrl = null, youtubeReady = null;
  const waveOffsets = new Float32Array(192);
  let portraitSilhouette = null, flagOutline = null;
  const digitBoxes = [[113, 64, 214, 290], [549, 64, 129, 287], [889, 63, 190, 287], [1280, 62, 189, 290], [1651, 62, 211, 287], [112, 434, 193, 290], [500, 446, 208, 280], [892, 442, 196, 281], [1267, 445, 206, 281], [1667, 440, 204, 284]];
  const marks = document.querySelector('.orbit-marks');
  for (let i = 0; i < 72; i++) {
    const a = i * 5 * Math.PI / 180, b = (i * 5 + 2.3) * Math.PI / 180;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${125 + 110 * Math.cos(a)},${125 + 110 * Math.sin(a)} A110 110 0 0 1 ${125 + 110 * Math.cos(b)},${125 + 110 * Math.sin(b)}`);
    path.classList.add('orbit-mark'); path.style.animationDelay = (-i * 3.5 / 72) + 's'; marks.append(path);
  }
  function positionDigit(digit) {
    const [x, y, width, height] = digitBoxes[Number(digit.dataset.value)], w = digit.clientWidth, h = digit.clientHeight, scale = h * .76 / height;
    digit.style.backgroundSize = (1983 * scale) + 'px ' + (793 * scale) + 'px';
    digit.style.backgroundPosition = ((w - width * scale) / 2 - x * scale) + 'px ' + ((h - height * scale) / 2 - y * scale) + 'px';
  }
  function glyph(character) { const digit = document.createElement('span'); digit.className = 'digit'; digit.dataset.value = character; return digit }
  function cancelReel(reel) {
    if (reel.animation) { reel.animation.onfinish = null; reel.animation.cancel(); reel.animation = null }
  }
  function settleReel(reel, character) {
    cancelReel(reel); reel.dataset.value = character;
    const strip = reel.firstElementChild, digit = glyph(character); strip.replaceChildren(digit); positionDigit(digit);
  }
  function renderNumerals(n, force = false) {
    const text = String(n);
    while (numerals.children.length > text.length) { cancelReel(numerals.lastElementChild); numerals.lastElementChild.remove() }
    while (numerals.children.length < text.length) {
      const reel = document.createElement('span'), strip = document.createElement('span');
      reel.className = 'digit-reel'; strip.className = 'digit-strip'; reel.append(strip); numerals.append(reel);
    }
    [...numerals.children].forEach((reel, i) => {
      const previous = reel.dataset.value, next = text[i], terminal = n === 69 && i === text.length - 1;
      if (force || motion.matches || previous === undefined) { settleReel(reel, next); return }
      if (previous === next && !terminal) return;
      cancelReel(reel); reel.dataset.value = next;
      const strip = reel.firstElementChild, before = glyph(previous), after = glyph(next), up = (Math.floor(n / 4) + i) % 2 === 0;
      strip.replaceChildren(...(up ? [before, after] : [after, before]));
      [...strip.children].forEach(positionDigit);
      const height = reel.clientHeight, id = run, start = up ? 0 : -height, end = up ? -height : 0, direction = up ? -1 : 1;
      const keyframes = terminal
        ? [{ transform: `translateY(${start}px)`, offset: 0 }, { transform: `translateY(${end + direction * height * .13}px)`, offset: .5 }, { transform: `translateY(${end - direction * height * .055}px)`, offset: .76 }, { transform: `translateY(${end}px)`, offset: 1 }]
        : [{ transform: `translateY(${start}px)` }, { transform: `translateY(${end}px)` }];
      const animation = strip.animate(keyframes, { duration: terminal ? digitBounceMs : 54, easing: terminal ? 'cubic-bezier(.22,.61,.36,1)' : 'cubic-bezier(.16,.8,.25,1)', fill: 'forwards' });
      reel.animation = animation;
      animation.onfinish = () => { if (reel.animation === animation && run === id) settleReel(reel, next) };
    });
  }
  function alignLayers() {
    const w = scene.clientWidth, h = scene.clientHeight, style = getComputedStyle(scene);
    if (!w || !h) return;
    const cropX = parseFloat(style.getPropertyValue('--crop-x')) / 100, cropY = parseFloat(style.getPropertyValue('--crop-y')) / 100;
    const scale = Math.max(w / 1672, h / 941), offsetX = (w - 1672 * scale) * cropX, offsetY = (h - 941 * scale) * cropY;
    scene.style.setProperty('--art-width', (1672 * scale) + 'px'); scene.style.setProperty('--art-height', (941 * scale) + 'px');
    scene.style.setProperty('--art-left', offsetX + 'px'); scene.style.setProperty('--art-top', offsetY + 'px');
    const corner = Math.hypot(Math.max(orbit.offsetLeft, w - orbit.offsetLeft), Math.max(orbit.offsetTop, h - orbit.offsetTop));
    const clearRadius = orbit.clientWidth * (110 - 1.1 - 15) / 250;
    scene.style.setProperty('--orbit-exit-scale', Math.max(1, (corner + 48) / clearRadius));
    const towerX = 658 * scale + offsetX, portraitWidth = document.querySelector('.portrait').clientHeight * 1024 / 1536;
    scene.style.setProperty('--tower-x', towerX + 'px');
    const portraitCenterX = 545.5, fingertipX = w / 2 + (371.5 - portraitCenterX) / 1024 * portraitWidth;
    scene.style.setProperty('--portrait-left', (w / 2 + (.5 - portraitCenterX / 1024) * portraitWidth) + 'px');
    scene.style.setProperty('--chant-x', fingertipX + 'px');
    scene.style.setProperty('--chant-y', (portrait.offsetTop + 18 / 1536 * portrait.clientHeight - Math.max(8, h * .012)) + 'px');
    scene.style.setProperty('--tower-shift', (fingertipX - towerX) + 'px');
    scene.style.setProperty('--sun-x', (713 * scale + offsetX) + 'px');
    scene.style.setProperty('--sun-y', (610 * scale + offsetY) + 'px');
    scene.style.setProperty('--flare-width', (scale * 760) + 'px');
    [...numerals.children].forEach(reel => settleReel(reel, reel.dataset.value));
    maskOrbit();
  }
  function prepareOrbitMask() {
    const upper = portrait.querySelector('.upper'), lower = portrait.querySelector('.lower');
    if (!upper.naturalWidth || !lower.naturalWidth) return;
    portraitSilhouette = document.createElement('canvas');
    portraitSilhouette.width = upper.naturalWidth; portraitSilhouette.height = upper.naturalHeight + lower.naturalHeight;
    const context = portraitSilhouette.getContext('2d', { willReadFrequently: true });
    context.drawImage(upper, 0, 0); context.drawImage(lower, 0, upper.naturalHeight);
    const pixels = context.getImageData(0, 0, portraitSilhouette.width, portraitSilhouette.height);
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = 0;
      pixels.data[i + 3] = pixels.data[i + 3] > 8 ? 255 : 0;
    }
    context.putImageData(pixels, 0, 0); maskOrbit();
  }
  function maskOrbit() {
    if (!portraitSilhouette) return;
    const bounds = scene.getBoundingClientRect(), person = portrait.getBoundingClientRect();
    const mask = document.createElement('canvas'); mask.width = Math.ceil(bounds.width); mask.height = Math.ceil(bounds.height);
    const context = mask.getContext('2d');
    context.fillStyle = '#fff'; context.fillRect(0, 0, mask.width, mask.height);
    context.globalCompositeOperation = 'destination-out';
    context.drawImage(portraitSilhouette, person.left - bounds.left, person.top - bounds.top, person.width, person.height);
    const image = 'url("' + mask.toDataURL('image/png') + '")';
    orbitLayer.style.maskImage = image; orbitLayer.style.webkitMaskImage = image; orbitLayer.dataset.ready = 'true';
  }
  function prepareFlagMask() {
    const flag = document.querySelector('.flag'); if (!flag.naturalWidth) return;
    const canvas = document.createElement('canvas'), w = flag.naturalWidth, h = flag.naturalHeight;
    canvas.width = w; canvas.height = h;
    const context = canvas.getContext('2d', { willReadFrequently: true }); context.drawImage(flag, 0, 0);
    const pixels = context.getImageData(0, 0, w, h), edge = new Int16Array(w).fill(-1);
    for (let x = 0; x < w; x++)for (let y = h - 1; y >= 0; y--) { if (pixels.data[(y * w + x) * 4 + 3] > 96) { edge[x] = y; break } }
    flagOutline = { width: w, edge };
    for (let x = 0; x < w; x++) {
      const nearby = []; for (let i = Math.max(0, x - 5); i <= Math.min(w - 1, x + 5); i++)if (edge[i] >= 0) nearby.push(edge[i]);
      nearby.sort((a, b) => a - b); const bottom = edge[x] < 0 ? -1 : nearby[Math.floor(nearby.length / 2)], depth = bottom + 1;
      const fade = Math.min(depth * .65, Math.max(24, Math.min(150, depth * .22)));
      for (let y = 0; y < h; y++) {
        const i = (y * w + x) * 4, t = bottom < 0 ? 0 : Math.max(0, Math.min(1, (bottom - y) / fade));
        pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = 255; pixels.data[i + 3] = Math.round(t * t * (3 - 2 * t) * 255);
      }
    }
    context.putImageData(pixels, 0, 0); const mask = 'url("' + canvas.toDataURL('image/png') + '")';
    document.querySelectorAll('.flag').forEach(image => { image.style.maskImage = mask; image.style.webkitMaskImage = mask });
  }
  new ResizeObserver(alignLayers).observe(scene); alignLayers();
  function later(fn, ms) { const timer = setTimeout(() => { timers.delete(timer); fn() }, ms); timers.add(timer) }
  function applyAudioVolume() {
    const volume = volumeLevels[audioChannel], level = volume * trackLevel;
    chantAudio.muted = volume === 0;
    if (audioGain) {
      chantAudio.volume = 1;
      audioGain.gain.cancelScheduledValues(audioContext.currentTime);
      audioGain.gain.setTargetAtTime(level, audioContext.currentTime, .015);
    } else {
      chantAudio.volume = Math.min(1, level);
    }
  }
  function applyVideoVolume(player) {
    player.setVolume(Math.round(volumeLevels.sounds * 100));
    if (volumeLevels.sounds === 0) player.mute(); else player.unMute();
  }
  function setVolume(channel, value) {
    const next = Number(value);
    if (!Number.isFinite(next) || !Object.hasOwn(volumeLevels, channel)) return;
    const volume = volumeLevels[channel] = Math.max(0, Math.min(1, next)), slider = volumeSliders[channel];
    slider.value = Math.round(volume * 100);
    slider.setAttribute('aria-valuetext', volume === 0 ? 'Muted' : slider.value + '%');
    const muted = volumeLevels.music === 0 && volumeLevels.sounds === 0;
    volumeControl.classList.toggle('is-muted', muted);
    volumeButton.setAttribute('aria-label', muted ? 'Volume, all sounds muted' : 'Volume. Background music ' + Math.round(volumeLevels.music * 100) + '%, other sounds ' + Math.round(volumeLevels.sounds * 100) + '%');
    if (audioChannel === channel) applyAudioVolume();
    if (channel === 'sounds') { videoPlayers.forEach(applyVideoVolume); kerisExperience?.updateVolume() }
  }
  function closeVolumePanel(restoreFocus = false) {
    volumePanel.hidden = true; volumeButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) volumeButton.focus({ preventScroll: true });
  }
  function toggleVolumePanel() {
    if (!volumePanel.hidden) { closeVolumePanel(); return }
    volumePanel.hidden = false; volumeButton.setAttribute('aria-expanded', 'true');
    volumeSliders.music.focus({ preventScroll: true });
    connectChantAudio();
    if (musicRequested && !musicStarted) startSceneMusic();
  }
  function loadVideoAPI() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (youtubeReady) return youtubeReady;
    youtubeReady = new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = 'https://www.youtube.com/iframe_api'; script.async = true;
      const previousReady = window.onYouTubeIframeAPIReady;
      const timeout = setTimeout(() => fail(), 15000);
      function fail() {
        clearTimeout(timeout); script.remove(); youtubeReady = null;
        window.onYouTubeIframeAPIReady = previousReady;
        reject(new Error('Video controls could not load.'));
      }
      window.onYouTubeIframeAPIReady = () => {
        clearTimeout(timeout); previousReady?.(); resolve(window.YT);
      };
      script.onerror = fail; document.head.append(script);
    });
    return youtubeReady;
  }
  function attachVideoVolume(video) {
    let player = null, cancelled = false;
    loadVideoAPI().then(api => {
      if (cancelled) return;
      player = new api.Player(video, {
        events: {
          onReady(event) {
            if (cancelled) return;
            videoPlayers.add(event.target); applyVideoVolume(event.target);
          }
        }
      });
    }).catch(() => {
      if (!cancelled) status.textContent = 'Use the video’s volume control while the shared video control is unavailable.';
    });
    return () => { cancelled = true; if (player) { videoPlayers.delete(player); player.destroy() } };
  }
  function primeAudio() {
    if (audioUnlockUrl) return;
    const bytes = new Uint8Array(844), header = new DataView(bytes.buffer);
    bytes.set([82, 73, 70, 70], 0); header.setUint32(4, bytes.length - 8, true);
    bytes.set([87, 65, 86, 69, 102, 109, 116, 32], 8); header.setUint32(16, 16, true);
    header.setUint16(20, 1, true); header.setUint16(22, 1, true); header.setUint32(24, 8000, true);
    header.setUint32(28, 8000, true); header.setUint16(32, 1, true); header.setUint16(34, 8, true);
    bytes.set([100, 97, 116, 97], 36); header.setUint32(40, 800, true); bytes.fill(128, 44);
    audioUnlockUrl = URL.createObjectURL(new Blob([bytes], { type: 'audio/wav' }));
    chantAudio.src = audioUnlockUrl; chantAudio.loop = true;
    try { chantAudio.play().catch(() => { }); } catch { }
  }
  function stopSoundWave() {
    cancelAnimationFrame(waveFrame); waveFrame = 0;
    orbit.classList.remove('is-sounding'); waveOffsets.fill(0);
  }
  function connectChantAudio() {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) return;
    try {
      if (!audioContext) {
        audioContext = new Context();
        audioAnalyser = audioContext.createAnalyser(); audioAnalyser.fftSize = 2048;
        audioGain = audioContext.createGain();
        audioGain.gain.value = volumeLevels[audioChannel] * trackLevel;
        audioAnalyser.connect(audioGain); audioGain.connect(audioContext.destination);
        audioContext.createMediaElementSource(chantAudio).connect(audioAnalyser);
        audioSamples = new Float32Array(audioAnalyser.fftSize);
      }
      applyAudioVolume();
      if (audioContext.state !== 'running') audioContext.resume().catch(() => { });
    } catch {
      stopSoundWave();
    }
  }
  function startSoundWave() {
    stopSoundWave();
    if (!audioAnalyser || !audioSamples || motion.matches || !chantPlaying) return;
    orbit.classList.add('is-sounding');
    function draw() {
      if (!chantPlaying || chantAudio.paused || motion.matches || scene.dataset.phase === 'complete') { stopSoundWave(); return }
      audioAnalyser.getFloatTimeDomainData(audioSamples);
      let energy = 0;
      for (const sample of audioSamples) energy += sample * sample;
      energy = Math.sqrt(energy / audioSamples.length);
      let path = '';
      for (let i = 0; i < waveOffsets.length; i++) {
        const angle = i / waveOffsets.length * Math.PI * 2;
        const position = Math.min(i, waveOffsets.length - i) / (waveOffsets.length / 2);
        const sample = audioSamples[Math.floor(position * (audioSamples.length - 1))];
        const displacement = Math.max(-14, Math.min(18, sample * 46 + energy * 12));
        waveOffsets[i] += (displacement - waveOffsets[i]) * .65;
        const radius = 110 + waveOffsets[i];
        path += (i ? 'L' : 'M') + (125 + radius * Math.cos(angle)).toFixed(2) + ' ' + (125 + radius * Math.sin(angle)).toFixed(2);
      }
      soundWave.setAttribute('d', path + 'Z');
      soundWave.style.strokeWidth = 2 + Math.min(1.4, energy * 6);
      waveFrame = requestAnimationFrame(draw);
    }
    draw();
  }
  function stopChant() {
    chantPlayback++;
    chantAudio.onended = null; chantAudio.onerror = null; chantAudio.pause();
    chantAudio.currentTime = 0; chantAudio.loop = false;
    if (audioUnlockUrl) { URL.revokeObjectURL(audioUnlockUrl); audioUnlockUrl = null }
    chantPlaying = false; stopSoundWave();
  }
  function clear(preserveAudio = false) {
    run++; cancelAnimationFrame(frame); timers.forEach(clearTimeout); timers.clear();[...numerals.children].forEach(cancelReel);
    if (preserveAudio) stopSoundWave(); else stopChant();
    chantButton.inert = true;
    chantButton.setAttribute('aria-hidden', 'true');
  }
  function startSceneMusic() {
    musicRequested = true;
    if (musicStarted || chantPlaying || !ready) return;
    musicStarted = true;
    const id = ++chantPlayback;
    chantAudio.onended = null; chantAudio.onerror = null;
    chantAudio.src = MUSIC['beyond-the-ridge']; chantAudio.currentTime = 0; chantAudio.loop = true;
    audioChannel = 'music'; trackLevel = .5; connectChantAudio(); applyAudioVolume();
    try {
      chantAudio.play().catch(() => { if (id === chantPlayback) musicStarted = false; });
    } catch { musicStarted = false; }
  }
  function progress(amount, force = false) {
    const p = Math.min(69, Math.max(1, amount)), n = Math.floor(p), fraction = (p - 1) / 68;
    fill.style.transform = 'scaleX(' + fraction + ')'; arc.style.strokeDashoffset = 691.151 * (1 - fraction);
    skip.hidden = p <= 1; skip.inert = p <= 1;
    if (n === value && !force) return; value = n; renderNumerals(n, force || n === 1); loader.setAttribute('aria-valuenow', n);
  }
  function advanceLoadingProgress(current, target, elapsed) {
    const limit = Math.max(current, Math.min(69, target));
    let budget = Math.max(0, elapsed) * 68 / 4200;
    for (const [end, speed] of [[12, 1], [27, 1.65], [38, 1.15], [44, 2], [69, 1]]) {
      if (current >= end) continue;
      const distance = Math.min(Math.min(limit, end) - current, budget * speed);
      current += distance;
      budget -= distance / speed;
      if (current >= limit || budget <= 0) break;
    }
    return current;
  }
  function finish() {
    if (!ready || scene.dataset.phase === 'complete' || (!skipRequested && chantCount < 3)) return;
    const restoreFocus = chantFocused || document.activeElement === skip;
    clear(!skipRequested); progress(69, true);
    if (skipRequested) scene.classList.add('intro-skipped');
    scene.dataset.phase = 'complete'; scene.classList.add('daylight', 'sunlit'); scene.setAttribute('aria-busy', 'false');
    volumeControl.classList.add('is-light');
    startSceneMusic();
    loader.setAttribute('aria-hidden', 'true'); hero.removeAttribute('aria-hidden'); hero.inert = false; skip.hidden = true; skip.inert = true; replay.inert = false;
    document.querySelector('meta[name="theme-color"]').content = '#ede5dc';
    status.textContent = 'Merdeka. A brighter Malaysia, together.';
    if (restoreFocus) { if (skipRequested) hero.focus({ preventScroll: true }); else later(() => hero.focus({ preventScroll: true }), 850) }
  }
  function awaitChants() {
    if (!ready || scene.dataset.phase !== 'loading') return;
    if (skipRequested) { finish(); return }
    clear(); progress(69, true);
    scene.dataset.phase = 'chant-pending'; scene.setAttribute('aria-busy', 'false');
    loader.setAttribute('aria-hidden', 'true'); skip.hidden = true; skip.inert = true;
    chantAudio.src = CHANTS['merdeka-1'];
    status.textContent = 'Ready. Press Merdeka! three times, once for each chant.';
    later(() => {
      scene.dataset.phase = 'chant'; chantButton.inert = false; chantButton.hidden = false;
      chantButton.removeAttribute('aria-hidden'); chantButton.focus({ preventScroll: true });
    }, motion.matches ? 0 : 600);
  }
  function playChant() {
    if (scene.dataset.phase !== 'chant' || chantCount >= 3) return;
    chantFocused = document.activeElement === chantButton;
    stopChant();
    const id = chantPlayback;
    let settled = false, revealQueued = false;
    chantCount++; chantPlaying = true;
    chantButton.style.setProperty('--chant-scale', (1 + chantCount * .08).toFixed(2));
    chantCounter.textContent = 'x' + chantCount;
    chantCounter.dataset.count = String(chantCount);
    chantCounter.style.setProperty('--counter-scale', (1 + (chantCount - 1) * .18).toFixed(2));
    chantAudio.src = CHANTS['merdeka-' + chantCount];
    chantAudio.currentTime = 0; chantAudio.loop = false;
    audioChannel = 'sounds'; trackLevel = chantCount === 3 ? 1.5 : 1;
    if (chantCount === 3) {
      chantButton.hidden = true; chantButton.inert = true; chantButton.setAttribute('aria-hidden', 'true');
    } else {
      chantButton.setAttribute('aria-label', 'MERDEKA! Play chant ' + (chantCount + 1) + ' of 3');
    }
    status.textContent = 'Merdeka! Chant ' + chantCount + ' of 3. ' + (chantCount < 3 ? 'Press again for the next chant.' : 'Revealing Malaysia.');
    function queueReveal() {
      if (revealQueued || chantCount !== 3 || id !== chantPlayback) return;
      revealQueued = true;
      later(() => { if (id === chantPlayback) reveal() }, 300);
    }
    function complete(failed = false) {
      if (settled || id !== chantPlayback) return;
      settled = true;
      chantAudio.onended = null; chantAudio.onerror = null; chantAudio.pause();
      chantPlaying = false; stopSoundWave();
      if (musicRequested) startSceneMusic();
      if (scene.dataset.phase !== 'chant') return;
      if (chantCount === 3) { queueReveal(); return }
      status.textContent = (failed ? 'Audio could not play. ' : '') + 'Press Merdeka! for chant ' + (chantCount + 1) + ' of 3.';
    }
    chantAudio.onended = () => complete();
    chantAudio.onerror = () => complete(true);
    connectChantAudio(); applyAudioVolume();
    try {
      chantAudio.play().then(() => {
        queueReveal();
        if (id === chantPlayback && chantPlaying) startSoundWave();
      }).catch(() => complete(true));
    } catch { complete(true) }
  }
  function skipIntro() {
    if (scene.dataset.phase === 'complete') return;
    skipRequested = true;
    connectChantAudio();
    if (!ready) { primeAudio(); skip.disabled = true; skip.textContent = 'Loading…'; return }
    finish();
  }
  function reveal() {
    if (chantCount < 3 || scene.dataset.phase !== 'chant') return;
    chantButton.inert = true; chantButton.setAttribute('aria-hidden', 'true');
    if (motion.matches || skipRequested) { finish(); return }
    scene.dataset.phase = 'loader-exit'; loader.setAttribute('aria-hidden', 'true');
    status.textContent = 'Merdeka. Revealing Malaysia.';
    later(() => { scene.dataset.phase = 'building' }, 500);
    later(() => { scene.dataset.phase = 'aligning' }, 2000);
    later(() => { scene.dataset.phase = 'aligned' }, 3600);
    later(() => { scene.dataset.phase = 'awakening'; scene.classList.add('daylight'); startSceneMusic() }, 4100);
    later(() => { scene.dataset.phase = 'horizon'; scene.classList.add('sunlit') }, 5100);
    later(finish, 7300);
  }
  function start() {
    let restoreFocus = document.activeElement === replay;
    clear(); const id = run; scene.classList.add('resetting'); scene.classList.remove('daylight', 'sunlit', 'intro-skipped'); scene.dataset.phase = 'loading'; scene.setAttribute('aria-busy', 'true');
    volumeControl.classList.remove('is-light');
    musicRequested = false; musicStarted = false;
    scene.inert = false; scene.removeAttribute('aria-hidden');
    skipRequested = false; skip.disabled = false; skip.textContent = 'Skip intro';
    chantCount = 0; chantFocused = false; chantButton.setAttribute('aria-label', 'MERDEKA! Play chant 1 of 3');
    chantButton.style.setProperty('--chant-scale', '1');
    chantCounter.textContent = ''; delete chantCounter.dataset.count;
    chantCounter.style.setProperty('--counter-scale', '1');
    loader.removeAttribute('aria-hidden'); hero.setAttribute('aria-hidden', 'true'); hero.inert = true; replay.inert = true; skip.inert = false;
    progress(1, true); status.textContent = 'Loading the website.'; document.querySelector('meta[name="theme-color"]').content = '#0b1728';
    void scene.offsetWidth;
    let previousFrame = performance.now(), displayedProgress = 1;
    frame = requestAnimationFrame(() => {
      scene.classList.remove('resetting');
      function tick(now) {
        if (id !== run) return;
        if (motion.matches && ready) { awaitChants(); return }
        const target = ready ? 69 : Math.min(68, assetProgress);
        displayedProgress = advanceLoadingProgress(displayedProgress, target, now - previousFrame);
        previousFrame = now;
        progress(displayedProgress);
        if (restoreFocus && !skip.hidden) { skip.focus({ preventScroll: true }); restoreFocus = false }
        if (ready && value === 69) { later(awaitChants, digitBounceMs + completedHoldMs); return }
        frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
  }
  skip.addEventListener('click', skipIntro); replay.addEventListener('click', start);
  volumeButton.addEventListener('click', toggleVolumePanel);
  Object.entries(volumeSliders).forEach(([channel, slider]) => slider.addEventListener('input', () => setVolume(channel, Number(slider.value) / 100)));
  volumeControl.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !volumePanel.hidden) { event.preventDefault(); event.stopPropagation(); closeVolumePanel(true) }
  });
  volumeControl.addEventListener('focusout', event => { if (!volumeControl.contains(event.relatedTarget)) closeVolumePanel() });
  document.addEventListener('pointerdown', event => { if (!volumeControl.contains(event.target)) closeVolumePanel() });
  chantButton.addEventListener('click', playChant);
  scene.addEventListener('contextmenu', event => event.preventDefault());
  scene.addEventListener('dragstart', event => event.preventDefault());
  motion.addEventListener('change', () => {
    if (motion.matches) stopSoundWave(); else if (chantPlaying) startSoundWave();
    if (!motion.matches || !ready || activeChapter >= 0 || chapterBusy) return;
    if (scene.dataset.phase === 'loading') awaitChants();
    else if (chantCount === 3 && scene.dataset.phase !== 'chant') finish();
  });
  const assetPaths = { ...ART, ...CHANTS, ...MUSIC, ...SOUNDS, ...MAPS, ...FONTS };
  const openingAssets = ['crowd', 'portrait-drawn-upper', 'portrait-drawn-lower', 'digits', 'loading'];
  const remainingAssets = Object.keys(assetPaths).filter(key => !openingAssets.includes(key));
  const downloadedBytes = new Map(), decodedAssets = new Set();
  const boot = document.querySelector('.boot-loader');
  const bootTrack = document.querySelector('.boot-track'), bootFill = document.querySelector('.boot-fill');
  const loadError = document.querySelector('.load-error'), retry = document.querySelector('.load-retry');
  let loadingAssets = false, loaderStarted = false;

  function downloadFraction(keys) {
    const total = keys.reduce((sum, key) => sum + ASSET_BYTES[key], 0);
    const received = keys.reduce((sum, key) => sum + Math.min(ASSET_BYTES[key], downloadedBytes.get(key) || 0), 0);
    return total ? received / total : 1;
  }

  function updateDownloadProgress() {
    const opening = downloadFraction(openingAssets);
    bootFill.style.transform = 'scaleX(' + opening + ')';
    bootTrack.setAttribute('aria-valuenow', Math.floor(opening * 100));
    assetProgress = 1 + downloadFraction(remainingAssets) * 68;
  }

  async function downloadAsset(key) {
    if (decodedAssets.has(key)) return;
    downloadedBytes.set(key, 0);
    const response = await fetch(assetPaths[key]);
    if (!response.ok) throw new Error('Could not load ' + key + ': ' + response.status);
    let blob;
    if (response.body) {
      const reader = response.body.getReader(), chunks = [];
      let received = 0;
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value); received += value.byteLength;
          downloadedBytes.set(key, received); updateDownloadProgress();
        }
      } finally {
        reader.releaseLock();
      }
      blob = new Blob(chunks, { type: response.headers.get('content-type') || (key in CHANTS ? 'audio/mp4' : key in MUSIC || key in SOUNDS ? 'audio/mpeg' : assetPaths[key].endsWith('.svg') ? 'image/svg+xml' : assetPaths[key].endsWith('.png') ? 'image/png' : 'image/webp') });
    } else {
      blob = await response.blob();
      downloadedBytes.set(key, blob.size); updateDownloadProgress();
    }
    if (key in CHANTS) blob = blob.slice(0, blob.size, 'audio/mp4');
    if (key in MUSIC || key in SOUNDS) blob = blob.slice(0, blob.size, 'audio/mpeg');
    const url = URL.createObjectURL(blob);
    try {
      if (key in CHANTS) {
        CHANTS[key] = url;
      } else if (key in MUSIC) {
        MUSIC[key] = url;
      } else if (key in SOUNDS) {
        SOUNDS[key] = url;
      } else if (key in MAPS) {
        mountMalaysiaMap(JSON.parse(await blob.text()));
        URL.revokeObjectURL(url);
      } else if (key in FONTS) {
        const family = key === 'quicksand' ? 'Quicksand' : 'Montserrat';
        const font = new FontFace(family, await blob.arrayBuffer(), { style: 'normal', weight: '600', display: 'swap' });
        await font.load(); document.fonts.add(font);
        URL.revokeObjectURL(url);
      } else {
        const pictures = [...document.querySelectorAll('[data-art]')].filter(image => image.dataset.art === key);
        if (!pictures.length) pictures.push(new Image());
        await Promise.all(pictures.map(async image => {
          image.draggable = false;
          image.src = url;
          await image.decode();
        }));
        ART[key] = url;
        if (key === 'digits') scene.style.setProperty('--digits-image', 'url("' + url + '")');
        if (key === 'title') hero.style.setProperty('--title-image', 'url("' + url + '")');
      }
      decodedAssets.add(key);
      downloadedBytes.set(key, ASSET_BYTES[key]); updateDownloadProgress();
    } catch (error) {
      URL.revokeObjectURL(url);
      throw error;
    }
  }

  async function loadStage(keys) {
    const results = await Promise.allSettled(keys.map(downloadAsset));
    if (results.some(result => result.status === 'rejected')) throw new Error('An asset could not load.');
  }

  async function loadWebsite() {
    if (loadingAssets || ready) return;
    loadingAssets = true; loadError.hidden = true;
    try {
      if (!loaderStarted) {
        await loadStage(openingAssets);
        prepareOrbitMask();
        scene.classList.add('critical-ready');
        boot.hidden = true; loaderStarted = true;
        start();
      }
      await loadStage(remainingAssets);
      prepareFlagMask();
      ready = true; assetProgress = 69;
      if (skipRequested) finish();
    } catch (error) {
      loadError.hidden = false;
      status.textContent = 'Some assets could not load. Try again to continue.';
    } finally {
      loadingAssets = false;
    }
  }

  retry.addEventListener('click', loadWebsite);
  const chapterHost = document.getElementById('chapters');
  const homeFlag = scene.querySelector('.flag');
  const chapterViews = [];
  let chapterScrollPosition = 0;
  let activeChapter = -1, chapterBusy = false, lastLetter = 0, warpFrame = 0, activeTransition = null, transitionCancelled = false;
  let warpAnimations = [];
  const displacement = document.getElementById('chapter-displacement');
  const chapterColours = titleColours;
  const chapterPapers = ['#f3f2eb', '#f0f1e7', '#f5efea', '#f6f1e5', '#f5eee3', '#eeeae1', '#f1efe5'];
  function element(tag, classes, text) { const node = document.createElement(tag); if (classes) node.className = classes; if (text !== undefined) node.textContent = text; return node }
  function externalLink(label, url, classes) { const link = element('a', classes, label); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; return link }
  function mountMalaysiaMap(data) {
    const host = document.querySelector('[data-map="malaysia-states"]');
    if (!host) throw new Error('The Malaysia map is missing.');
    const media = host.parentElement;
    function svgElement(tag, attributes = {}) {
      const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
      return node;
    }
    const svg = svgElement('svg', { class: 'malaysia-map-drawing', role: 'group', 'aria-label': 'Interactive map of Malaysia. Focus or select a state to see its name.' });
    const west = svgElement('g'), east = svgElement('g');
    const callout = svgElement('g', { class: 'map-callout', visibility: 'hidden', 'aria-hidden': 'true' });
    const leader = svgElement('polyline', { class: 'map-leader' }), dot = svgElement('circle', { r: 3.5 });
    const name = svgElement('text', { class: 'map-name', 'text-anchor': 'middle' });
    callout.append(leader, dot, name); svg.append(west, east, callout);
    const announcement = element('span', 'sr-only'); announcement.setAttribute('role', 'status');
    const regions = new Map();
    let compact = false, hovered = null, focused = null, selected = null;
    function redraw() {
      const active = hovered || focused || selected;
      regions.forEach(({ node }, id) => {
        node.classList.toggle('is-active', id === active);
        node.setAttribute('aria-pressed', String(id === active));
      });
      const state = regions.get(active)?.state;
      callout.setAttribute('visibility', state ? 'visible' : 'hidden');
      announcement.textContent = state ? state.name + (state.territory ? ', federal territory' : '') : '';
      if (!state) return;
      const [sx, sy] = state.anchor;
      const x = state.east ? sx + (compact ? -480 : -115) : sx * (compact ? 1.3 : 1.05) + (compact ? 51 : 70);
      const y = state.east ? sy + (compact ? 440 : 70) : sy * (compact ? 1.3 : 1.05) + (compact ? 0 : 70);
      const labelX = compact ? 250 : Math.max(200, Math.min(770, x + (state.east ? 60 : -30)));
      const labelY = compact ? (state.east ? 778 : 416) : (y < 230 ? 50 : 427);
      const endY = labelY < y ? labelY + 14 : labelY - 23;
      leader.setAttribute('points', `${x},${y} ${x},${endY} ${labelX},${endY}`);
      dot.setAttribute('cx', x); dot.setAttribute('cy', y);
      name.setAttribute('x', labelX); name.setAttribute('y', labelY); name.textContent = state.name;
    }
    data.states.forEach((state, index) => {
      const node = svgElement('g', { class: 'map-state', tabindex: '0', role: 'button', 'aria-label': state.name + (state.territory ? ', federal territory' : ''), 'aria-pressed': 'false' });
      node.style.setProperty('--state-colour', titleColours[index % titleColours.length]);
      node.append(svgElement('path', { class: 'map-region', d: state.path }));
      if (state.territory) {
        node.append(svgElement('circle', { class: 'map-territory-dot', cx: state.anchor[0], cy: state.anchor[1], r: 2.5 }));
        node.append(svgElement('circle', { class: 'map-hit-area', cx: state.anchor[0], cy: state.anchor[1], r: 5 }));
      }
      function select() { selected = state.id; redraw() }
      node.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = state.id; redraw() } });
      node.addEventListener('pointerleave', () => { if (hovered === state.id) { hovered = null; redraw() } });
      node.addEventListener('focus', () => { focused = state.id; redraw() });
      node.addEventListener('blur', () => { focused = null; redraw() });
      node.addEventListener('click', event => { event.stopPropagation(); select() });
      node.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select() }
      });
      (state.east ? east : west).append(node);
      regions.set(state.id, { node, state });
    });
    function clearSelection() {
      hovered = null; focused = null; selected = null; redraw();
    }
    svg.addEventListener('click', clearSelection);
    host.addEventListener('keydown', event => { if (event.key === 'Escape') clearSelection() });
    host.replaceChildren(svg, announcement);
    function layout(width) {
      if (!width) return;
      compact = width < 560;
      media.classList.toggle('map-compact', compact);
      svg.setAttribute('viewBox', compact ? '0 20 500 780' : '95 25 775 430');
      west.setAttribute('transform', compact ? 'translate(51 0) scale(1.3)' : 'translate(70 70) scale(1.05)');
      east.setAttribute('transform', compact ? 'translate(-480 440)' : 'translate(-115 70)');
      redraw();
    }
    layout(media.clientWidth || window.innerWidth);
    new ResizeObserver(entries => layout(entries[0].contentRect.width)).observe(host);
  }
  function layoutChapter(page) {
    if (page.hidden || !flagOutline) return;
    const flag = page.querySelector('.chapter-flag'), main = page.querySelector('.chapter-main');
    const copy = page.querySelector('.chapter-copy'), figure = page.querySelector('.chapter-figure');
    const scale = flag.clientWidth / flagOutline.width;
    if (!scale || !main.clientWidth) return;
    const minimum = Math.max(88, Math.min(120, page.clientHeight * .14));
    function clearance(column) {
      const left = main.offsetLeft + column.offsetLeft - flag.offsetLeft;
      const first = Math.max(0, Math.floor(left / scale));
      const last = Math.min(flagOutline.width - 1, Math.ceil((left + column.offsetWidth) / scale));
      let bottom = -1;
      for (let x = first; x <= last; x++) bottom = Math.max(bottom, flagOutline.edge[x]);
      return Math.ceil(Math.max(minimum, flag.offsetTop + (bottom + 1) * scale + 24));
    }
    const stacked = Math.abs(copy.offsetLeft - figure.offsetLeft) < 1;
    page.style.setProperty('--copy-clearance', clearance(copy) + 'px');
    page.style.setProperty('--media-clearance', (stacked ? 0 : clearance(figure)) + 'px');
  }
  function updateChapterLayout() {
    const footerHeight = Math.ceil(chapterFooter.getBoundingClientRect().height);
    if (footerHeight) document.documentElement.style.setProperty('--chapter-footer-height', footerHeight + 'px');
    chapterViews.forEach(layoutChapter);
    if (activeChapter >= 0) selectChapterLetter(activeChapter);
  }
  const chapterFooter = element('footer', 'chapter-footer'), chapterBack = element('button', 'chapter-back', 'BACK');
  chapterBack.type = 'button'; chapterBack.setAttribute('aria-label', 'Back to Merdeka');
  chapterBack.addEventListener('click', event => navigateChapter(-1, event));
  const chapterNav = element('nav', 'chapter-nav'), chapterDot = element('span', 'chapter-nav-dot');
  chapterFooter.hidden = true;
  chapterNav.setAttribute('aria-label', 'Explore MERDEKA'); chapterDot.setAttribute('aria-hidden', 'true');
  const chapterButtons = CHAPTERS.map((chapter, index) => {
    const button = element('button', '', chapter.letter); button.type = 'button';
    button.setAttribute('aria-label', chapter.letter + ' — ' + chapter.title); button.setAttribute('aria-controls', 'chapter-' + chapter.key);
    button.style.setProperty('--letter-color', chapterColours[index]);
    button.addEventListener('click', event => navigateChapter(index, event)); chapterNav.append(button); return button;
  });
  chapterNav.append(chapterDot); chapterFooter.append(chapterBack, chapterNav); chapterHost.append(chapterFooter);
  CHAPTERS.forEach((chapter, index) => {
    const page = element('section', 'chapter-screen'); page.id = 'chapter-' + chapter.key; page.dataset.key = chapter.key;
    page.hidden = true; page.inert = true; page.tabIndex = -1; page.setAttribute('aria-labelledby', page.id + '-title');
    page.style.setProperty('--accent', chapterColours[index]); page.style.setProperty('--paper', chapterPapers[index]);
    const chapterFlag = homeFlag.cloneNode(false); chapterFlag.classList.add('chapter-flag'); chapterFlag.setAttribute('aria-hidden', 'true');
    const scrollArea = element('div', 'chapter-scroll'); page.scrollArea = scrollArea;
    const main = element('main', 'chapter-main'), copy = element('div', 'chapter-copy');
    const title = element('h1', 'chapter-title', chapter.title); title.id = page.id + '-title'; title.tabIndex = -1;
    copy.append(element('p', 'chapter-kicker', chapter.category), title, element('p', 'chapter-lead', chapter.lead));
    const facts = element('ul', 'chapter-facts'); chapter.facts.forEach(fact => facts.append(element('li', '', fact))); copy.append(facts);
    const sources = element('div', 'chapter-sources'); sources.setAttribute('aria-label', 'Sources and further reading');
    chapter.sources.forEach(source => sources.append(externalLink(source.label, source.url))); copy.append(sources);
    const figure = element('figure', 'chapter-figure'), media = element('div', 'chapter-media'), photo = element('img');
    photo.dataset.art = 'chapter-' + chapter.key; photo.alt = chapter.media.alt; photo.draggable = false; photo.decoding = 'async';
    media.style.setProperty('--photo-fit', chapter.media.fit);
    if (chapter.key === 'durian') media.style.background = '#151515';
    media.append(photo);
    const caption = element('figcaption', 'chapter-caption'); caption.append(element('p', '', chapter.media.caption));
    const credit = element('span', 'chapter-credit');
    function showCredit(item) {
      credit.hidden = item.type === 'keris';
      if (credit.hidden) { credit.replaceChildren(); return }
      if (item.type === 'map') { credit.replaceChildren(externalLink('Map · Simplemaps', item.source)); return }
      const author = externalLink(item.author, item.source); author.title = item.changes;
      credit.replaceChildren(author, document.createTextNode(' · '), externalLink(item.license, item.licenseUrl));
    }
    showCredit(chapter.media);
    if (chapter.gallery) {
      const mapItem = chapter.gallery.find(item => item.type === 'map'), kerisItem = chapter.gallery.find(item => item.type === 'keris');
      let mapHost;
      if (mapItem) {
        mapHost = element('div', 'malaysia-map'); mapHost.dataset.map = mapItem.mapKey; mapHost.hidden = true; media.append(mapHost);
      }
      if (kerisItem) {
        kerisExperience = createKerisExperience({
          motion,
          getAudioContext: () => { connectChantAudio(); return audioContext },
          getSound: () => SOUNDS['keris-slash'],
          getVolume: () => volumeLevels.sounds
        });
        media.append(kerisExperience.panel); page.stopMedia = kerisExperience.deactivate;
      }
      const tabs = element('div', 'chapter-gallery' + (mapItem || kerisItem ? ' has-labels' : '')); tabs.setAttribute('role', 'group'); tabs.setAttribute('aria-label', mapItem ? 'Malaysia views' : kerisItem ? 'Keris views' : 'Photographs');
      [chapter.media, ...chapter.gallery].forEach((item, i) => {
        const button = element('button', '', mapItem ? (i === 0 ? 'Skyline' : 'Map') : kerisItem ? (i === 0 ? 'Heritage' : 'Try it') : String(i + 1).padStart(2, '0')); button.type = 'button'; button.setAttribute('aria-label', item.type === 'keris' ? 'Try the keris cursor' : item.caption);
        button.setAttribute('aria-pressed', String(i === 0));
        button.addEventListener('click', () => {
          const isMap = item.type === 'map', isKeris = item.type === 'keris';
          photo.hidden = isMap || isKeris; if (mapHost) mapHost.hidden = !isMap;
          if (kerisItem) kerisExperience.setVisible(isKeris);
          media.classList.toggle('is-map', isMap);
          media.classList.toggle('is-keris', isKeris);
          if (!isMap && !isKeris) { photo.src = ART[item.artKey]; photo.alt = item.alt; media.style.setProperty('--photo-fit', item.fit) }
          caption.hidden = isKeris; caption.firstChild.textContent = item.caption; showCredit(item);
          [...tabs.children].forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
        }); tabs.append(button);
      }); media.append(tabs);
    }
    if (chapter.video) {
      let detachVideoVolume = null;
      const watch = element('button', 'chapter-watch'); watch.type = 'button';
      const play = element('span', '', '▶'); play.setAttribute('aria-hidden', 'true');
      watch.append(play, element('span', '', chapter.video.label)); media.append(watch);
      const stopVideo = () => {
        detachVideoVolume?.(); detachVideoVolume = null;
        media.querySelector('iframe')?.remove(); media.querySelector('.chapter-video-close')?.remove();
        photo.hidden = false; watch.hidden = false; caption.firstChild.textContent = chapter.media.caption; showCredit(chapter.media);
      };
      page.stopMedia = stopVideo;
      watch.addEventListener('click', () => {
        const video = element('iframe'), videoUrl = new URL(chapter.video.embedUrl);
        videoUrl.searchParams.set('enablejsapi', '1'); videoUrl.searchParams.set('origin', location.origin); videoUrl.searchParams.set('mute', '1');
        video.src = videoUrl.href;
        video.title = chapter.video.title; video.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'; video.allowFullscreen = true;
        video.referrerPolicy = 'strict-origin-when-cross-origin';
        const close = element('button', 'chapter-video-close', '×'); close.type = 'button'; close.setAttribute('aria-label', 'Close video');
        close.addEventListener('click', () => { stopVideo(); watch.focus() });
        photo.hidden = true; watch.hidden = true; media.append(video, close); close.focus({ preventScroll: true });
        detachVideoVolume = attachVideoVolume(video);
        caption.firstChild.textContent = chapter.video.title;
        credit.replaceChildren(externalLink('Watch on YouTube', chapter.video.watchUrl), document.createTextNode(' · ' + chapter.video.credit));
      });
    }
    caption.append(credit); figure.append(media, caption); main.append(copy, figure);
    scrollArea.append(chapterFlag, main); page.append(scrollArea);
    page.addEventListener('contextmenu', event => event.preventDefault()); page.addEventListener('dragstart', event => event.preventDefault());
    chapterHost.append(page); chapterViews.push(page);
  });
  function dotPosition(index) {
    const button = chapterButtons[index]; return 'translateX(' + (button.offsetLeft + (button.offsetWidth - 3) / 2) + 'px)';
  }
  function selectChapterLetter(index) {
    chapterFooter.style.setProperty('--accent', chapterColours[index]);
    chapterButtons.forEach((button, i) => { if (i === index) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current') });
    chapterDot.style.transform = dotPosition(index); chapterDot.style.backgroundColor = chapterColours[index];
  }
  function setChapterView(index, keepOutgoing = null) {
    const changingChapter = index !== activeChapter;
    if (changingChapter && activeChapter >= 0) {
      chapterScrollPosition = chapterViews[activeChapter].scrollArea.scrollTop;
    }
    activeChapter = index; document.body.classList.toggle('chapter-mode', index >= 0);
    chapterFooter.hidden = index < 0;
    if (index >= 0) {
      chapterFooter.style.setProperty('--paper', chapterPapers[index]); chapterFooter.style.setProperty('--accent', chapterColours[index]);
      selectChapterLetter(index);
    }
    [scene, ...chapterViews].forEach(view => {
      const selected = view === (index < 0 ? scene : chapterViews[index]);
      view.hidden = !selected && view !== keepOutgoing; view.inert = !selected;
      if (selected) view.removeAttribute('aria-hidden'); else view.setAttribute('aria-hidden', 'true');
    });
    updateChapterLayout();
    if (changingChapter && index >= 0) chapterViews[index].scrollArea.scrollTop = chapterScrollPosition;
    document.title = index < 0 ? 'Merdeka — A Brighter Malaysia, Together' : CHAPTERS[index].title + ' — Merdeka';
    document.querySelector('meta[name="theme-color"]').content = index < 0 ? '#ede5dc' : chapterPapers[index];
  }
  function stopWarp() {
    transitionCancelled = true;
    cancelAnimationFrame(warpFrame); warpAnimations.forEach(animation => animation.cancel());
    if (activeTransition) activeTransition.skipTransition();
  }
  async function decodeChapterPhoto(view) {
    const picture = view.querySelector('.chapter-media img'); if (!picture) return;
    let timeout;
    await Promise.race([picture.decode().catch(() => { }), new Promise(resolve => { timeout = setTimeout(resolve, 1200) })]); clearTimeout(timeout);
  }
  async function switchChapter(index) {
    chapterBusy = true; transitionCancelled = false;
    const from = activeChapter, outgoing = chapterViews[from], incoming = chapterViews[index], direction = index > from ? 1 : -1;
    const easing = 'cubic-bezier(.22,.61,.23,1)';
    const completions = new Map();
    const animate = (node, frames, options) => {
      const animation = node.animate(frames, { fill: 'both', easing, ...options });
      completions.set(animation, animation.finished.then(() => { }, () => { }));
      warpAnimations.push(animation); return animation;
    };
    try {
      await decodeChapterPhoto(incoming); outgoing.stopMedia?.();
      if (!motion.matches && !transitionCancelled) {
        animate(chapterDot, [
          { transform: dotPosition(from), backgroundColor: chapterColours[from] },
          { transform: dotPosition(index), backgroundColor: chapterColours[index] }
        ], { duration: 540 });
        selectChapterLetter(index); outgoing.inert = true;
        const exits = [outgoing.querySelector('.chapter-copy'), outgoing.querySelector('.chapter-figure')].map((node, i) =>
          animate(node, [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: i === 1 ? 'translateX(' + (-direction * 16) + 'px)' : 'translateY(-7px)' }], { duration: 160 })
        );
        await Promise.all(exits.map(animation => completions.get(animation)));
      }
      setChapterView(index); incoming.inert = true;
      if (!motion.matches && !transitionCancelled) {
        animate(incoming, [{ backgroundColor: chapterPapers[from] }, { backgroundColor: chapterPapers[index] }], { duration: 380 });
        animate(chapterFooter, [{ backgroundColor: chapterPapers[from] }, { backgroundColor: chapterPapers[index] }], { duration: 380 });
        [...incoming.querySelector('.chapter-copy').children].forEach((node, i) =>
          animate(node, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 350, delay: i * 24 })
        );
        animate(incoming.querySelector('.chapter-figure'), [
          { opacity: 0, transform: 'translateX(' + (direction * 20) + 'px) scale(.99)' },
          { opacity: 1, transform: 'translateX(0) scale(1)' }
        ], { duration: 430 });
        await Promise.all(completions.values());
      }
    } finally {
      warpAnimations.forEach(animation => animation.cancel()); warpAnimations = [];
      setChapterView(index); chapterBusy = false; chapterButtons[index].focus({ preventScroll: true });
    }
  }
  function animateDistortion(reverse, duration) {
    const began = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - began) / duration);
      const strength = reverse ? 85 * Math.pow(t, 2) : 125 * Math.pow(1 - t, 3);
      displacement.setAttribute('scale', strength.toFixed(2));
      if (t < 1) warpFrame = requestAnimationFrame(tick);
    }; tick(began);
  }
  async function navigateChapter(index, event) {
    if (chapterBusy || index === activeChapter || scene.dataset.phase !== 'complete') return;
    if (activeChapter >= 0 && index >= 0) { await switchChapter(index); return }
    chapterBusy = true; transitionCancelled = false;
    const from = activeChapter, outgoing = from < 0 ? scene : chapterViews[from], incoming = index < 0 ? scene : chapterViews[index];
    if (from < 0 && index >= 0) lastLetter = index;
    const trigger = event?.currentTarget, box = trigger?.getBoundingClientRect();
    const x = event?.detail && Number.isFinite(event.clientX) ? event.clientX : box ? box.left + box.width / 2 : innerWidth / 2;
    const y = event?.detail && Number.isFinite(event.clientY) ? event.clientY : box ? box.top + box.height / 2 : innerHeight / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 80;
    const origin = x + 'px ' + y + 'px', closed = 'circle(0px at ' + origin + ')', open = 'circle(' + radius + 'px at ' + origin + ')';
    const reverse = index < 0, duration = 1650, easing = 'cubic-bezier(.65,0,.25,1)';
    const root = document.documentElement;
    const oldFrames = reverse
      ? [{ clipPath: open, filter: 'url(#chapter-warp)', opacity: 1 }, { clipPath: closed, filter: 'url(#chapter-warp)', opacity: 1 }]
      : [{ filter: 'blur(0px)', opacity: 1 }, { filter: 'blur(7px)', opacity: .42 }];
    const newFrames = reverse
      ? [{ filter: 'blur(7px)', opacity: .5 }, { filter: 'blur(0px)', opacity: 1 }]
      : [{ clipPath: closed, filter: 'url(#chapter-warp)' }, { clipPath: open, filter: 'url(#chapter-warp)' }];
    try {
      await decodeChapterPhoto(incoming);
      outgoing.stopMedia?.(); scene.classList.add('scene-paused');
      if (motion.matches || transitionCancelled) { setChapterView(index); return }
      root.classList.add('is-warping'); root.dataset.warpDirection = reverse ? 'back' : 'forward';
      if (typeof document.startViewTransition === 'function') {
        activeTransition = document.startViewTransition(() => setChapterView(index));
        try {
          await activeTransition.ready;
          animateDistortion(reverse, duration);
          warpAnimations = [
            root.animate(oldFrames, { duration, easing, fill: 'both', pseudoElement: '::view-transition-old(root)' }),
            root.animate(newFrames, { duration, easing, fill: 'both', pseudoElement: '::view-transition-new(root)' })
          ];
          await Promise.allSettled(warpAnimations.map(animation => animation.finished));
          await activeTransition.finished;
        } catch (error) {
          activeTransition.skipTransition(); await activeTransition.updateCallbackDone.catch(() => { }); setChapterView(index);
        }
      } else {
        setChapterView(index, outgoing); incoming.inert = true;
        outgoing.style.position = 'fixed'; outgoing.style.inset = '0'; outgoing.style.zIndex = reverse ? '31' : '30';
        incoming.style.zIndex = reverse ? '30' : '31';
        animateDistortion(reverse, duration);
        warpAnimations = [outgoing.animate(oldFrames, { duration, easing, fill: 'both' }), incoming.animate(newFrames, { duration, easing, fill: 'both' })];
        if (index >= 0) warpAnimations.push(chapterFooter.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 450, delay: duration - 450, fill: 'both' }));
        await Promise.allSettled(warpAnimations.map(animation => animation.finished));
      }
    } finally {
      cancelAnimationFrame(warpFrame); warpAnimations.forEach(animation => animation.cancel()); warpAnimations = []; activeTransition = null;
      displacement.setAttribute('scale', '0');
      [outgoing, incoming].forEach(view => { view.style.removeProperty('position'); view.style.removeProperty('inset'); view.style.removeProperty('z-index') });
      setChapterView(index); root.classList.remove('is-warping'); delete root.dataset.warpDirection;
      if (index < 0) { scene.classList.remove('scene-paused'); alignLayers() }
      chapterBusy = false;
      const target = index < 0 ? titleLetters.children[lastLetter] : incoming.querySelector('.chapter-title'); target?.focus({ preventScroll: true });
    }
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && activeChapter >= 0 && !chapterBusy) { event.preventDefault(); navigateChapter(-1, event) }
  });
  const chapterLayoutObserver = new ResizeObserver(updateChapterLayout);
  chapterLayoutObserver.observe(chapterFooter); chapterViews.forEach(page => chapterLayoutObserver.observe(page));
  addEventListener('resize', () => { if (chapterBusy) stopWarp(); updateChapterLayout() });
  motion.addEventListener('change', () => { if (motion.matches && chapterBusy) stopWarp() });
  document.addEventListener('visibilitychange', () => { if (document.hidden && chapterBusy) stopWarp() });

  loadWebsite();
})();
