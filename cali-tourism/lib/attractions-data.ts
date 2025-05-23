// DOCUMENTACIÓN: Datos de las atracciones turísticas de Cali
// Este archivo contiene un array con la información detallada de todas las atracciones turísticas.
// Cada atracción incluye datos como nombre, categoría, ubicación, coordenadas, calificación y más.
// Proporciona información detallada como descripciones, horarios, precios y datos curiosos.
// Incluye URLs para imágenes y videos de YouTube para cada atracción.
// Sirve como fuente de datos centralizada para toda la aplicación.
// En un entorno real, estos datos podrían provenir de una API o base de datos.

// Este archivo contiene los datos de las atracciones turísticas de Cali
// En un entorno real, estos datos podrían venir de una API o base de datos

export const attractionsData = [
  {
    id: "cristo-rey",
    name: "Cristo Rey",
    category: "cultura",
    location: "Oeste de Cali",
    latitude: 3.4489,
    longitude: -76.5639,
    rating: 4.7,
    reviews: 1250,
    shortDescription: "Monumento emblemático con vistas panorámicas de la ciudad",
    description:
      "Monumento religioso ubicado en lo alto de una colina con impresionantes vistas panorámicas de Cali. Similar al Cristo Redentor de Río de Janeiro pero a menor escala. Desde aquí podrás ver toda la ciudad y tomar fotos espectaculares, ¡una chimba total!",
    hours: "Lun-Dom: 8:00 AM - 5:00 PM",
    price: "Entrada gratuita",
    visitDuration: "1-2 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Iq_QSuHOXKM",
    facts: [
      "Fue construido en 1953 para conmemorar los 50 años del fin de la Guerra de los Mil Días",
      "Mide 26 metros de altura, de los cuales 5 metros corresponden a la estatua",
      "Es uno de los símbolos más reconocibles de Cali y un punto de referencia para los caleños",
      "Desde su mirador se puede ver toda la ciudad de Cali y el Valle del Cauca",
    ],
    funFact:
      "Durante la construcción del monumento, los materiales fueron transportados a lomo de mula debido a la dificultad de acceso a la cima del cerro.",
    bestTime: "Al atardecer, para ver la puesta de sol sobre la ciudad",
    tips: [
      "Lleva agua y protector solar, ya que hay poco refugio del sol",
      "Es recomendable subir en taxi o transporte privado, especialmente si vas al atardecer",
      "Hay vendedores ambulantes donde puedes comprar bebidas y snacks típicos",
      "Ten cuidado con tus pertenencias, especialmente cámaras y celulares",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Vista+desde+Cristo+Rey",
        author: "María González",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Monumento+Cristo+Rey",
        author: "Carlos Pérez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Atardecer+en+Cristo+Rey",
        author: "Juan Martínez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Panorámica+de+Cali",
        author: "Ana Rodríguez",
      },
    ],
  },
  {
    id: "zoologico",
    name: "Zoológico de Cali",
    category: "naturaleza",
    location: "Santa Teresita",
    latitude: 3.4528,
    longitude: -76.5418,
    rating: 4.6,
    reviews: 3200,
    shortDescription: "Uno de los mejores zoológicos de Latinoamérica con especies nativas",
    description:
      "Considerado uno de los mejores zoológicos de Latinoamérica, alberga más de 2.500 animales de 233 especies, muchas de ellas nativas de Colombia. Ofrece experiencias educativas y de conservación. ¡Está muy bacano, ve! Los niños la pasan de maravilla.",
    hours: "Mar-Dom: 9:00 AM - 5:00 PM",
    price: "Adultos: $30.000 COP, Niños: $20.000 COP",
    visitDuration: "3-4 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Yx-HbIbJVF4",
    facts: [
      "Es el zoológico más grande de Colombia y uno de los más importantes de Latinoamérica",
      "Fue fundado en 1969 y renovado completamente en 2001",
      "Tiene programas de conservación para especies en peligro de extinción como el cóndor andino",
      "Cuenta con más de 25 hectáreas de terreno con ambientes naturales para los animales",
    ],
    funFact:
      "El zoológico de Cali tiene un programa especial llamado 'Noche en el Zoo' donde los visitantes pueden quedarse después del horario normal y observar el comportamiento nocturno de los animales.",
    bestTime: "Entre semana para evitar multitudes, preferiblemente en la mañana",
    tips: [
      "Compra las entradas en línea para evitar filas",
      "Lleva repelente de insectos, especialmente en temporada de lluvias",
      "El recorrido completo puede tomar hasta 4 horas, planifica tu visita",
      "Hay restaurantes dentro del zoológico, pero puedes llevar tu propia comida y comer en áreas designadas",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Tigre+en+Zoológico+de+Cali",
        author: "Pedro Sánchez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Aves+exóticas",
        author: "Laura Gómez",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Reptiles",
        author: "Diego Vargas",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Monos+en+hábitat",
        author: "Valentina Restrepo",
      },
    ],
  },
  {
    id: "san-antonio",
    name: "Barrio San Antonio",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4486,
    longitude: -76.5372,
    rating: 4.8,
    reviews: 1800,
    shortDescription: "Barrio histórico con arquitectura colonial y excelentes restaurantes",
    description:
      "Barrio histórico con calles empedradas y casas coloniales coloridas. Hogar de artistas, cafés bohemios y restaurantes. Desde la colina se puede disfrutar de hermosas vistas de la ciudad. Un lugar con mucho ambiente y sabor caleño, ¡qué delicia!",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "2-3 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Es el barrio más antiguo de Cali, fundado en el siglo XVIII",
      "La Capilla de San Antonio, construida en 1747, es uno de los edificios más antiguos de la ciudad",
      "El barrio es conocido por su ambiente bohemio y artístico",
      "Cada año se celebra aquí la tradicional 'Feria de San Antonio'",
    ],
    funFact:
      "En San Antonio vivió el famoso poeta colombiano Jorge Isaacs, autor de la novela 'María', considerada una de las obras más importantes de la literatura romántica latinoamericana.",
    bestTime: "Domingo por la tarde, cuando hay más ambiente y actividades culturales",
    tips: [
      "Visita la Capilla de San Antonio y sube a la colina para tener una vista panorámica de Cali",
      "Prueba los tradicionales 'cholados' (postre típico) que venden en la plaza",
      "Los domingos hay un mercado de artesanías donde puedes comprar recuerdos únicos",
      "Muchos restaurantes ofrecen música en vivo por las noches, especialmente los fines de semana",
    ],
    googlePhotosLoading: false,
    googlePhotos: [
      {
        url: "/placeholder.svg?height=400&width=400&text=Calles+de+San+Antonio",
        author: "Andrés Mejía",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Iglesia+San+Antonio",
        author: "Sofía Castro",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Artesanías+locales",
        author: "Javier Ospina",
      },
      {
        url: "/placeholder.svg?height=400&width=400&text=Vista+desde+la+colina",
        author: "Camila Duque",
      },
    ],
  },
  {
    id: "boulevard",
    name: "Boulevard del Río",
    category: "cultura",
    location: "Centro de Cali",
    latitude: 3.4516,
    longitude: -76.5322,
    rating: 4.5,
    reviews: 1500,
    shortDescription: "Moderno espacio urbano junto al río Cali, perfecto para pasear",
    description:
      "Moderno paseo peatonal a lo largo del río Cali. Ideal para caminar, hacer ejercicio o disfrutar de eventos culturales. Conecta varios puntos de interés de la ciudad. Un lugar muy agradable pa' caminar y disfrutar de la brisa caleña.",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "1-2 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Fue inaugurado en 2013 como parte del proyecto de renovación urbana de Cali",
      "Tiene una extensión de 1.2 kilómetros a lo largo del río Cali",
      "Cuenta con iluminación LED que cambia de color en fechas especiales",
      "Es uno de los espacios públicos más concurridos de la ciudad",
    ],
    funFact:
      "Durante la construcción del Boulevard, se encontraron restos arqueológicos de la época precolombina que ahora se exhiben en el Museo Arqueológico La Merced.",
    bestTime: "Al atardecer o en las noches de fin de semana cuando hay eventos culturales",
    tips: [
      "Los jueves y viernes por la noche suele haber presentaciones culturales gratuitas",
      "Cerca del Boulevard hay varios restaurantes y cafés con terrazas con vista al río",
      "Es un lugar seguro para caminar, pero siempre es recomendable estar atento a tus pertenencias",
      "Hay estaciones de bicicletas públicas donde puedes alquilar una para recorrer todo el Boulevard",
    ],
  },
  {
    id: "plaza-cayzedo",
    name: "Plaza de Cayzedo",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4512,
    longitude: -76.5335,
    rating: 4.3,
    reviews: 950,
    shortDescription: "Plaza principal e histórica de la ciudad",
    description:
      "Plaza principal de Cali, rodeada de edificios históricos como la Catedral Metropolitana y el Palacio Nacional. Punto de encuentro para los caleños y centro de la vida urbana. Un lugar con mucha historia y ambiente local.",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "30 minutos",
    image: "/placeholder.svg?height=300&width=500",
    images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Originalmente se llamaba Plaza Mayor, luego Plaza de la Constitución y finalmente Plaza de Cayzedo",
      "Fue nombrada en honor a Joaquín de Cayzedo y Cuero, prócer de la independencia",
      "La estatua central de Joaquín de Cayzedo fue instalada en 1913",
      "Es el kilómetro cero de Cali, desde donde se miden todas las distancias",
    ],
    funFact:
      "En la Plaza de Cayzedo se encuentra el famoso 'Árbol de las Palomas', un samán centenario que es hogar de cientos de palomas y se ha convertido en un símbolo de la plaza.",
    bestTime: "Entre semana por la mañana, cuando hay menos gente y puedes apreciar mejor la arquitectura",
    tips: [
      "Visita la Catedral Metropolitana de San Pedro Apóstol ubicada frente a la plaza",
      "Los vendedores ambulantes ofrecen comida típica como empanadas y arepas",
      "Hay guías turísticos informales que por una propina te cuentan la historia de la plaza",
      "Es un buen punto de partida para un recorrido a pie por el centro histórico de Cali",
    ],
  },
  {
    id: "tres-cruces",
    name: "Cerro de las Tres Cruces",
    category: "naturaleza",
    location: "Norte de Cali",
    latitude: 3.4689,
    longitude: -76.5425,
    rating: 4.7,
    reviews: 1100,
    shortDescription: "Mirador natural con impresionantes vistas y rutas de senderismo",
    description:
      "Mirador natural con tres cruces en su cima. Ofrece impresionantes vistas panorámicas de Cali. Popular entre deportistas para hacer senderismo y ejercicio al aire libre. ¡Te vas a quedar aterrado con esas vistas, parce!",
    hours: "5:00 AM - 6:00 PM",
    price: "Gratuito",
    visitDuration: "2-3 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Iq_QSuHOXKM",
    facts: [
      "Las tres cruces fueron colocadas originalmente para ahuyentar a los espíritus malignos",
      "Se encuentra a una altura de 1.480 metros sobre el nivel del mar",
      "Es un destino popular para deportistas que suben a diario, especialmente al amanecer",
      "Desde la cima se puede ver toda la ciudad de Cali y el Valle del Cauca",
    ],
    funFact:
      "Cada Viernes Santo, miles de caleños suben al Cerro de las Tres Cruces como parte de una tradición religiosa, convirtiéndose en una de las peregrinaciones más importantes de la región.",
    bestTime: "Temprano en la mañana (5-7 AM) para ver el amanecer y evitar el calor",
    tips: [
      "Sube acompañado, especialmente si vas muy temprano o al atardecer",
      "Lleva suficiente agua, protector solar y un sombrero",
      "Usa zapatos cómodos para caminar, preferiblemente con buen agarre",
      "En la cima hay vendedores que ofrecen bebidas y frutas frescas para recuperar energía",
    ],
  },
  {
    id: "museo-tertulia",
    name: "Museo La Tertulia",
    category: "cultura",
    location: "Oeste de Cali",
    latitude: 3.4489,
    longitude: -76.5422,
    rating: 4.5,
    reviews: 850,
    shortDescription: "Importante museo de arte moderno y contemporáneo",
    description:
      "Museo de arte moderno y contemporáneo con exposiciones nacionales e internacionales. Cuenta con salas de exhibición, cinemateca y espacios para eventos culturales. Un lugar muy interesante para los amantes del arte.",
    hours: "Mar-Dom: 10:00 AM - 6:00 PM",
    price: "Adultos: $10.000 COP, Estudiantes: $5.000 COP",
    visitDuration: "1-2 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Fue fundado en 1956 como un espacio para tertulias literarias y artísticas",
      "Es el primer museo de arte moderno de Colombia",
      "Su colección incluye más de 1.300 obras de arte",
      "Ha sido sede de importantes bienales internacionales de arte gráfico",
    ],
    funFact:
      "El edificio del Museo La Tertulia fue diseñado por el arquitecto Manuel Lago, quien se inspiró en el Museo Guggenheim de Nueva York para crear un espacio que integrara el arte con la naturaleza circundante.",
    bestTime: "Jueves por la tarde, cuando suelen inaugurarse nuevas exposiciones",
    tips: [
      "Consulta la programación de la cinemateca, que proyecta películas de arte y ensayo",
      "Los domingos hay visitas guiadas gratuitas a las 11:00 AM y 3:00 PM",
      "La cafetería del museo tiene una terraza con vista al río Cali",
      "Hay descuentos especiales para estudiantes y adultos mayores",
    ],
  },
  {
    id: "barrio-granada",
    name: "Barrio Granada",
    category: "gastronomia",
    location: "Norte de Cali",
    latitude: 3.4689,
    longitude: -76.5322,
    rating: 4.6,
    reviews: 2100,
    shortDescription: "Zona gastronómica con restaurantes de alta cocina y bares",
    description:
      "Barrio conocido por su oferta gastronómica de alta calidad. Cuenta con numerosos restaurantes, bares y cafés que ofrecen cocina local e internacional. Ideal para disfrutar de la vida nocturna. ¡Qué delicia, ve! Aquí se come muy bueno.",
    hours: "Varía según establecimiento",
    price: "Varía según establecimiento",
    visitDuration: "2-4 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Se transformó de un barrio residencial a una zona gastronómica en los años 90",
      "Cuenta con más de 100 establecimientos entre restaurantes, bares y cafés",
      "Es conocido como el 'Barrio del Sabor' por su variada oferta culinaria",
      "Los jueves, viernes y sábados es cuando tiene mayor actividad nocturna",
    ],
    funFact:
      "Cada año en octubre se celebra el 'Festival Gastronómico de Granada', donde los restaurantes ofrecen menús especiales y hay demostraciones culinarias en vivo por chefs reconocidos.",
    bestTime: "Viernes o sábado por la noche para disfrutar del ambiente más animado",
    tips: [
      "Reserva con anticipación en los restaurantes más populares, especialmente los fines de semana",
      "Prueba el 'sancocho de gallina', un plato típico vallecaucano que varios restaurantes ofrecen",
      "Hay opciones para todos los presupuestos, desde comida callejera hasta restaurantes de lujo",
      "Después de cenar, visita alguno de los bares de cocteles que han ganado reconocimiento internacional",
    ],
  },
  {
    id: "monumento-belalcazar",
    name: "Monumento a Sebastián de Belalcázar",
    category: "historia",
    location: "Oeste de Cali",
    latitude: 3.4522,
    longitude: -76.5439,
    rating: 4.4,
    reviews: 780,
    shortDescription: "Estatua del fundador de Cali con vistas panorámicas",
    description:
      "Monumento dedicado al fundador de Cali, ubicado en una colina con excelentes vistas de la ciudad. Punto de referencia histórico y cultural importante. Un lugar obligado para conocer la historia de Cali.",
    hours: "Acceso libre 24/7",
    price: "Gratuito",
    visitDuration: "30 minutos",
    image: "/placeholder.svg?height=300&width=500",
    images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
    youtubeId: "Iq_QSuHOXKM",
    facts: [
      "Fue inaugurado en 1937 durante el cuarto centenario de la fundación de Cali",
      "La estatua fue creada por el escultor español Victorio Macho",
      "Representa a Sebastián de Belalcázar a caballo señalando el valle donde fundó la ciudad",
      "Se encuentra en el cerro de San Antonio, a 1.013 metros sobre el nivel del mar",
    ],
    funFact:
      "En 2020, el monumento fue derribado por miembros de comunidades indígenas como protesta, argumentando que Belalcázar representaba la opresión colonial. Posteriormente fue restaurado y reubicado, generando un intenso debate sobre la memoria histórica.",
    bestTime: "Al atardecer, cuando la luz es perfecta para fotografías",
    tips: [
      "Combina esta visita con un recorrido por el Barrio San Antonio, que está muy cerca",
      "Desde el mirador puedes identificar los principales edificios y barrios de Cali",
      "Ten cuidado con tus pertenencias, especialmente cámaras y celulares",
      "Hay vendedores ambulantes que ofrecen bebidas y snacks típicos",
    ],
  },
  {
    id: "ermita",
    name: "La Ermita",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4522,
    longitude: -76.5322,
    rating: 4.7,
    reviews: 1300,
    shortDescription: "Iglesia gótica emblemática en el centro de la ciudad",
    description:
      "Iglesia de estilo gótico con una arquitectura única y distintiva. Uno de los símbolos más reconocibles de Cali, ubicada junto al río Cali en el centro de la ciudad. Una joya arquitectónica que no te podés perder.",
    hours: "Lun-Dom: 8:00 AM - 7:00 PM",
    price: "Gratuito",
    visitDuration: "30-45 minutos",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "La iglesia actual fue construida en 1942, pero el templo original data del siglo XVIII",
      "Su estilo arquitectónico es neogótico, poco común en Colombia",
      "Según la leyenda, se construyó en el lugar donde un comerciante fue salvado milagrosamente de ahogarse",
      "Sus vitrales fueron importados de Europa y son considerados obras de arte",
    ],
    funFact:
      "La Ermita alberga la imagen del 'Señor de la Caña', una figura de Cristo hecha de caña de azúcar que, según la tradición, fue encontrada flotando en el río Cali y no pudo ser quemada ni destruida, lo que se consideró un milagro.",
    bestTime: "Temprano en la mañana o al final de la tarde, cuando hay menos visitantes",
    tips: [
      "Si tienes suerte, podrás escuchar el órgano que se toca durante algunas misas",
      "Toma tiempo para apreciar los detalles de los vitrales, que cuentan historias bíblicas",
      "Respeta el silencio y la vestimenta adecuada al entrar, ya que es un lugar de culto activo",
      "Combina esta visita con un recorrido por el Boulevard del Río, que está justo al lado",
    ],
  },
  {
    id: "iglesia-merced",
    name: "Iglesia La Merced",
    category: "historia",
    location: "Centro de Cali",
    latitude: 3.4506,
    longitude: -76.5339,
    rating: 4.5,
    reviews: 920,
    shortDescription: "Iglesia colonial con importante valor histórico y arquitectónico",
    description:
      "Una de las iglesias más antiguas de Cali, construida en estilo colonial. Alberga un museo arqueológico con piezas precolombinas y de la época colonial. Un tesoro histórico en el corazón de Cali.",
    hours: "Lun-Sáb: 9:00 AM - 5:00 PM",
    price: "Entrada al museo: $5.000 COP",
    visitDuration: "1 hora",
    image: "/placeholder.svg?height=300&width=500",
    images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Es la iglesia más antigua de Cali, construida en 1541",
      "Fue el primer convento de la ciudad, fundado por los mercedarios",
      "El museo arqueológico que alberga tiene más de 700 piezas precolombinas",
      "Su arquitectura es una mezcla de estilos colonial y republicano",
    ],
    funFact:
      "Durante una restauración en los años 70, se descubrieron pasadizos secretos bajo la iglesia que conectaban con otros edificios coloniales, posiblemente usados durante la época de la independencia.",
    bestTime: "Martes o jueves por la mañana, cuando hay menos visitantes en el museo",
    tips: [
      "No te pierdas la colección de orfebrería precolombina en el museo arqueológico",
      "Hay visitas guiadas disponibles que te explicarán la historia de la iglesia y sus tesoros",
      "Toma fotos del claustro interior, que es uno de los mejor conservados de la época colonial",
      "Cerca hay varios cafés donde puedes descansar después de la visita",
    ],
  },
  {
    id: "teatro-isaacs",
    name: "Teatro Jorge Isaacs",
    category: "cultura",
    location: "Centro de Cali",
    latitude: 3.4516,
    longitude: -76.5339,
    rating: 4.6,
    reviews: 750,
    shortDescription: "Teatro histórico con arquitectura republicana",
    description:
      "Teatro histórico construido en 1931 con hermosa arquitectura republicana. Sede de importantes eventos culturales, conciertos y presentaciones artísticas. Un lugar con mucha historia y cultura caleña.",
    hours: "Varía según eventos",
    price: "Varía según evento",
    visitDuration: "2-3 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Fue nombrado en honor al escritor caleño Jorge Isaacs, autor de 'María'",
      "Originalmente se llamaba Teatro Municipal y fue renombrado en 1931",
      "Ha sido restaurado varias veces, la más reciente en 2015",
      "Tiene capacidad para 1.100 espectadores",
    ],
    funFact:
      "El Teatro Jorge Isaacs fue diseñado por el arquitecto español Mariano Santamaría, quien se inspiró en los teatros de ópera europeos. La acústica es tan perfecta que se dice que se puede escuchar el susurro de un actor desde cualquier asiento.",
    bestTime: "Durante el Festival Internacional de Arte de Cali en junio",
    tips: [
      "Consulta la programación en línea antes de visitar, ya que solo abre para eventos",
      "Si no hay función, a veces ofrecen visitas guiadas al edificio histórico",
      "Los asientos del balcón ofrecen la mejor vista del escenario y la decoración interior",
      "Llega con al menos 30 minutos de anticipación para apreciar la arquitectura del edificio",
    ],
  },
  {
    id: "parque-perro",
    name: "Parque del Perro",
    category: "gastronomia",
    location: "Sur de Cali",
    latitude: 3.4322,
    longitude: -76.5422,
    rating: 4.4,
    reviews: 1700,
    shortDescription: "Zona de restaurantes y vida nocturna popular entre jóvenes",
    description:
      "Área popular para la vida nocturna con numerosos bares, restaurantes y cafés. Punto de encuentro para jóvenes y lugar ideal para disfrutar de la gastronomía local. ¡Muy buena rumba, parcero! Aquí la gente se goza la noche caleña.",
    hours: "Varía según establecimiento",
    price: "Varía según establecimiento",
    visitDuration: "2-4 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Su nombre oficial es Parque Panamericano, pero todos lo conocen como 'Parque del Perro'",
      "El nombre se debe a una estatua de un perro que se encontraba en el parque",
      "Se ha convertido en uno de los principales centros gastronómicos y de entretenimiento de Cali",
      "Los jueves, viernes y sábados es cuando tiene mayor actividad nocturna",
    ],
    funFact:
      "El Parque del Perro es famoso por ser el lugar donde muchos futbolistas profesionales de Cali comenzaron jugando en las canchas improvisadas. Algunos de ellos, ahora famosos, regresan ocasionalmente a compartir con los jóvenes del barrio.",
    bestTime: "Jueves por la noche, cuando hay 'Juernes' (fiesta de jueves) con promociones especiales",
    tips: [
      "Prueba la 'lulada', una bebida típica hecha con lulo (fruta local) que varios establecimientos ofrecen",
      "Los restaurantes alrededor del parque tienen terrazas perfectas para ver gente pasar",
      "Si buscas ambiente más tranquilo, ve entre semana; los fines de semana es muy animado",
      "Hay opciones para todos los gustos: desde hamburguesas gourmet hasta cocina internacional",
    ],
  },
  {
    id: "juanchito",
    name: "Juanchito",
    category: "salsa",
    location: "Este de Cali",
    latitude: 3.4689,
    longitude: -76.5122,
    rating: 4.3,
    reviews: 1400,
    shortDescription: "Barrio famoso por sus discotecas de salsa",
    description:
      "Barrio conocido por sus discotecas de salsa y ambiente festivo. Centro de la cultura salsera de Cali, donde se puede disfrutar de música en vivo y bailar hasta el amanecer. ¡Aquí sí que se goza la salsa, oíste!",
    hours: "Principalmente noches y fines de semana",
    price: "Varía según establecimiento",
    visitDuration: "4-6 horas",
    image: "/placeholder.svg?height=300&width=500",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    youtubeId: "Rl-Gy6UPRTw",
    facts: [
      "Técnicamente no pertenece a Cali sino al municipio de Candelaria, pero es considerado parte de la cultura caleña",
      "Se hizo famoso en los años 70 y 80 como epicentro de la salsa en Colombia",
      "Muchas canciones de salsa mencionan a Juanchito como símbolo de la rumba caleña",
      "Los domingos son especialmente populares para ir a bailar, en lo que se conoce como 'Domingo de Juanchito'",
    ],
    funFact:
      "Juanchito es mencionado en la famosa canción 'Cali Pachanguero' del Grupo Niche, uno de los himnos no oficiales de la ciudad, donde se dice 'Del Callejón del Chivo hasta Juanchito, se forman unas rumbas con el Grupo Niche'.",
    bestTime: "Domingo por la tarde y noche, cuando hay más ambiente y orquestas en vivo",
    tips: [
      "Ve en grupo y preferiblemente con alguien que conozca la zona",
      "Usa ropa y zapatos cómodos para bailar toda la noche",
      "Aprende algunos pasos básicos de salsa antes de ir para disfrutar más la experiencia",
      "Toma transporte seguro para ir y volver, especialmente de noche",
    ],
  },
]
