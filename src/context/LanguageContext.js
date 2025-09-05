import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navbar
    home: 'Home',
    routes: 'Routes',
    gallery: 'Gallery',
    contact: 'Contact',
    
    // Hero Section
    welcomeTitle: 'WHY CHOOSE DN KATEGAYA EXPRESS',
    welcomeSubtitle: 'Experience the difference with our premium bus services',
    bookNow: 'BOOK YOUR JOURNEY',
    
    // Form Labels
    from: 'FROM',
    to: 'TO',
    date: 'TRAVEL DATE',
    passengers: 'PASSENGERS',
    
    // Booking Form
    selectSeats: 'SELECT YOUR SEATS',
    chooseSeats: 'Choose your preferred seats for your journey',
    driver: 'DRIVER',
    available: 'Available',
    selected: 'Selected',
    unavailable: 'Unavailable',
    tripDetails: 'TRIP DETAILS',
    route: 'Route',
    departure: 'Departure',
    arrival: 'Arrival',
    selectedSeats: 'SELECTED SEATS',
    noSeatsSelected: 'No seats selected',
    pickupDropoff: 'PICKUP & DROP-OFF',
    pickupStation: 'Pickup Station',
    dropoffStation: 'Drop-off Station',
    selectPickup: 'Select pickup station',
    selectDropoff: 'Select drop-off station',
    priceSummary: 'PRICE SUMMARY',
    seats: 'Seats',
    serviceFee: 'Service Fee',
    total: 'Total',
    proceedPayment: 'PROCEED TO PAYMENT',
    processing: 'PROCESSING...',
    securePayment: 'Secure Payment',
    sslEncryption: 'Your payment is processed securely with 256-bit SSL encryption',
    
    // Routes
    ourRoutes: 'OUR ROUTES',
    discoverDestinations: 'Discover all the destinations we serve with our premium bus services',
    price: 'Price',
    duration: 'Duration',
    bookThisRoute: 'Book This Route',
    routeInformation: 'ROUTE INFORMATION',
    departureTimes: 'DEPARTURE TIMES',
    morning: 'Morning: 6:00 AM - 8:00 AM',
    afternoon: 'Afternoon: 2:00 PM - 4:00 PM',
    evening: 'Evening: 8:00 PM - 10:00 PM',
    amenities: 'AMENITIES',
    airConditioning: 'Air Conditioning',
    comfortableSeats: 'Comfortable Reclining Seats',
    freeWifi: 'Free WiFi',
    chargingPorts: 'Charging Ports',
    entertainment: 'Entertainment System',
    hours: 'hours',
    
    // Popular Routes
    popularRoutes: 'POPULAR ROUTES',
    
    // Contact
    contactUs: 'CONTACT US',
    getInTouch: 'Get in touch with us for bookings and inquiries',
    
    // Gallery
    ourGallery: 'OUR GALLERY',
    viewImages: 'View our fleet and facilities',
    premiumLuxuryBus: 'Premium Luxury Bus',
    comfortableInterior: 'Comfortable Interior',
    modernFleet: 'Modern Fleet',
    professionalService: 'Professional Service',
    premiumTravelExperience: 'DNKategaya Express - Premium Travel Experience',
    clickToView: 'Click to view',
    
    // Footer
    companySlogan: 'Premium Journeys, Easy Tickets',
    companyDescription: 'Experience premium bus travel across Tanzania with our modern fleet, professional drivers, and exceptional service. Your comfort and safety are our top priorities.',
    quickLinks: 'QUICK LINKS',
    contactInfo: 'CONTACT INFO',
    phone: 'Phone',
    headquarters: 'Headquarters: Dar es Salaam, Tanzania',
    followUs: 'Follow Us:',
    allRightsReserved: 'All rights reserved.',
    
    
    
    // Regions
    regions: {
      'MWANZA MWZ': 'MWANZA MWZ',
      'DAR ES SALAAM DAR': 'DAR ES SALAAM DAR',
      'KAHAMA KAH': 'KAHAMA KAH',
      'MOSHI MSH': 'MOSHI MSH',
      'ARUSHA ARS': 'ARUSHA ARS'
    },
    
    // Additional Home Page Content
    findPerfectJourney: 'Find Your Perfect Journey',
    whyChooseUs: 'Why Choose DNKategaya Express',
    experienceDifference: 'Experience the difference with our premium bus services',
    premiumComfort: 'Premium Comfort',
    premiumComfortDesc: 'Luxury seats, air conditioning, and spacious interiors for your comfort',
    onTimeDeparture: 'On-Time Departure',
    onTimeDepartureDesc: 'Reliable schedules and punctual service you can depend on',
    safeTravel: 'Safe Travel',
    safeTravelDesc: 'Professional drivers and well-maintained vehicles for your safety',
    ourModernFleet: 'Our Modern Fleet',
    travelInComfort: 'Travel in comfort with our well-maintained buses',
    popularRoutes: 'Popular Routes',
    travelToMajorCities: 'Travel to major cities in the Lake Victoria region',
    whatCustomersSay: 'What Our Customers Say',
    joinSatisfiedTravelers: 'Join thousands of satisfied travelers',
    excellentService: 'Excellent service! The buses are clean, comfortable, and always on time. Highly recommend!',
    safeReliable: 'Safe and reliable transportation. The drivers are professional and the journey was smooth.',
    bestBusService: 'Best bus service in Tanzania! Affordable prices and great customer service.',
    
    // Hero Section
    travelAcrossTanzania: 'Travel Across Tanzania',
    trustedPartner: 'Your trusted partner for safe and comfortable bus transportation across Tanzania',
    experienceBeauty: 'Experience the beauty of Tanzania with reliable, punctual, and comfortable bus services',
    
    // Search Form
    selectDeparture: 'Select departure...',
    selectDestination: 'Select destination...',
    passenger: 'Passenger',
    passengers: 'Passengers',
    searchBookNow: '🔍 Search & Book Now',
    searching: 'Searching...',
    tip: '💡 Tip: Book early for the best prices and seat selection',
    popularRoutesLabel: 'Popular Routes:',
    
    // Routes Page
    ourRoutes: 'Our Routes',
    exploreNetwork: 'Explore our network of routes in the Lake Victoria region',
    duration: 'Duration',
    frequency: 'Frequency',
    price: 'Price',
    bookThisRoute: 'Book This Route',
    routeNetwork: 'Route Network',
    extensiveNetwork: 'Our extensive network covers major cities and towns across Tanzania',
    interactiveMap: 'Interactive route map coming soon',
    cantFindRoute: 'Can\'t Find Your Route?',
    contactCustomRoutes: 'Contact us for custom routes and special arrangements',
    contactUs: 'Contact Us',
    bookNow: 'Book Now',
    daily: 'Daily',
    
    // Contact Page
    contactUs: 'Contact Us',
    getInTouchQuestions: 'Get in touch with us for any questions or inquiries',
    sendMessage: 'Send Message',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    emailAddress: 'Email Address',
    enterEmail: 'Enter your email address',
    phoneNumber: 'Phone Number',
    enterPhone: 'Enter your phone number',
    message: 'Message',
    enterMessage: 'Enter your message',
    sendMessageBtn: 'Send Message',
    contactInformation: 'Contact Information',
    phoneSupport: 'Phone Support',
    callDirectly: 'Call us directly for immediate assistance:',
    emailSupport: 'Email Support',
    sendEmail: 'Send us an email for detailed inquiries:',
    officeLocation: 'Office Location',
    visitOffice: 'Visit our office in Dar es Salaam:',
    darEsSalaam: 'Dar es Salaam, Tanzania',
    businessHours: 'Business Hours',
    mondayFriday: 'Monday - Friday: 7:00 AM - 8:00 PM',
    saturday: 'Saturday: 7:00 AM - 6:00 PM',
    sunday: 'Sunday: 8:00 AM - 5:00 PM',
    followUs: 'Follow Us',
    whatsapp: '📱 WhatsApp',
    facebook: '📘 Facebook',
    
    // Gallery Page
    ourGallery: 'Our Gallery',
    discoverFleet: 'Discover our modern fleet and premium transportation services',
    companyLogo: 'Company Logo',
    modernBusFleet: 'Modern Bus Fleet',
    premiumBusExterior: 'Premium Bus Exterior',
    professionalService: 'Professional Service',
    comfortableInterior: 'Comfortable Interior',
    advancedFeatures: 'Advanced Features',
    elegantDesign: 'Elegant Design',
    premiumQuality: 'Premium Quality',
    safetyFeatures: 'Safety Features',
    passengerComfort: 'Passenger Comfort',
    serviceExcellence: 'Service Excellence',
    fleetOverview: 'Fleet Overview',
    whyChooseDN: 'Why Choose DNKategaya Express',
    modernFleet: 'Modern Fleet',
    modernFleetDesc: 'Our buses feature the latest amenities, climate control, and entertainment systems for ultimate comfort and safety',
    punctualService: 'Punctual Service',
    punctualServiceDesc: 'We value your time and ensure all departures and arrivals are on schedule with real-time tracking',
    safetyFirst: 'Safety First',
    safetyFirstDesc: 'Professional drivers, regular maintenance, and advanced safety features for your complete peace of mind',
    readyToTravel: 'Ready to Travel?',
    bookJourney: 'Book your journey with DNKategaya Express today and experience premium transportation',
    clickToView: 'Click to view',
    
    // Footer
    yourJourneyPriority: 'Your Journey, Our Priority',
    premiumJourneys: 'Premium Journeys, Easy Tickets',
    companyDescription: 'Experience premium bus travel across Tanzania with our modern fleet, professional drivers, and exceptional service. Your comfort and safety are our top priorities.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    phone: 'Phone',
    headquarters: 'Headquarters: Dar es Salaam, Tanzania',
    followUs: 'Follow Us:',
    allRightsReserved: 'All rights reserved.',
    
    // Navbar
    home: 'Home',
    routes: 'Routes',
    gallery: 'Gallery',
    contact: 'Contact',
    support: 'Support',
    terms: 'Terms',
    privacy: 'Privacy'
  },
  
  sw: {
    // Navbar
    home: 'Nyumbani',
    routes: 'Njia',
    gallery: 'Picha',
    contact: 'Mawasiliano',
    
    // Hero Section
    welcomeTitle: 'KWA NINI UCHAGUE DN KATEGAYA EXPRESS',
    welcomeSubtitle: 'Ona tofauti na huduma zetu bora za mabasi',
    bookNow: 'WEKESHA SAFARI YAKO',
    
    // Form Labels
    from: 'KUTOKA',
    to: 'KWENDA',
    date: 'TAREHE YA SAFARI',
    passengers: 'ABIRIA',
    
    // Booking Form
    selectSeats: 'CHAGUA VITI VYAKO',
    chooseSeats: 'Chagua viti unavyopendelea kwa safari yako',
    driver: 'DEREVA',
    available: 'Vimepatikana',
    selected: 'Vimechaguliwa',
    unavailable: 'Havipatikani',
    tripDetails: 'MAELEZO YA SAFARI',
    route: 'Njia',
    date: 'Tarehe',
    departure: 'Kuondoka',
    arrival: 'Kuwasili',
    selectedSeats: 'VITI VILIVYOCHAGULIWA',
    noSeatsSelected: 'Hakuna viti vilivyochaguliwa',
    pickupDropoff: 'PAKUA NA SHUKA',
    pickupStation: 'Kituo cha Kupakua',
    dropoffStation: 'Kituo cha Kushuka',
    selectPickup: 'Chagua kituo cha kupakua',
    selectDropoff: 'Chagua kituo cha kushuka',
    priceSummary: 'MUHTASARI WA BEI',
    seats: 'Viti',
    serviceFee: 'Ada ya Huduma',
    total: 'Jumla',
    proceedPayment: 'ENDELEA KULIPA',
    processing: 'INACHAKATISHWA...',
    securePayment: 'Malipo Salama',
    sslEncryption: 'Malipo yako yanachakatishwa kwa usalama na SSL encryption 256-bit',
    
    // Routes
    ourRoutes: 'NJIA ZETU',
    discoverDestinations: 'Gundua maeneo yote tunayohudumia na huduma zetu bora za mabasi',
    price: 'Bei',
    duration: 'Masaa',
    bookThisRoute: 'Wekesha Njia Hii',
    routeInformation: 'TAARIFA ZA NJIA',
    departureTimes: 'MUDA WA KUONDOKA',
    morning: 'Asubuhi: 6:00 AM - 8:00 AM',
    afternoon: 'Mchana: 2:00 PM - 4:00 PM',
    evening: 'Jioni: 8:00 PM - 10:00 PM',
    amenities: 'HUDUMA',
    airConditioning: 'Hewa Baridi',
    comfortableSeats: 'Viti vya Starehe',
    freeWifi: 'WiFi Bure',
    chargingPorts: 'Vituo vya Kuchaji',
    entertainment: 'Mfumo wa Burudani',
    hours: 'masaa',
    
    // Popular Routes
    popularRoutes: 'NJIA MAARUFU',
    
    // Contact
    contactUs: 'WASILIANA NASI',
    getInTouch: 'Wasiliana nasi kwa mahitaji ya booking na maswali',
    
    // Gallery
    ourGallery: 'PICHA ZETU', 
    viewImages: 'Ona mabasi yetu na vifaa',
    premiumLuxuryBus: 'Basi la Kifahari',
    comfortableInterior: 'Ndani ya Starehe',
    modernFleet: 'Mabasi ya Kisasa',
    professionalService: 'Huduma ya Kitaalamu',
    premiumTravelExperience: 'DNKategaya Express - Uzoefu wa Safari ya Kifahari',
    clickToView: 'Bonyeza kuona',
    
    // Footer
    companySlogan: 'Safari za Kifahari, Tiketi kwa Urahisi',
    companyDescription: 'Pata uzoefu wa safari bora ya mabasi kote Tanzania na mabasi yetu ya kisasa, madereva wa kitaalamu, na huduma bora. Starehe na usalama wako ni kipaumbele chetu.',
    quickLinks: 'VIUNGO VYA HARAKA',
    contactInfo: 'TAARIFA ZA MAWASILIANO',
    phone: 'Simu',
    headquarters: 'Makao Makuu: Dar es Salaam, Tanzania',
    followUs: 'Tufuate:',
    allRightsReserved: 'Haki zote zimehifadhiwa.',
    
    
    
    // Regions
    regions: {
      'MWANZA MWZ': 'MWANZA MWZ',
      'DAR ES SALAAM DAR': 'DAR ES SALAAM DAR',
      'KAHAMA KAH': 'KAHAMA KAH',
      'MOSHI MSH': 'MOSHI MSH',
      'ARUSHA ARS': 'ARUSHA ARS'
    },
    
    // Additional Home Page Content
    findPerfectJourney: 'Tafuta Safari Yako Bora',
    whyChooseUs: 'Kwa Nini Uchague DNKategaya Express',
    experienceDifference: 'Ona tofauti na huduma zetu bora za mabasi',
    premiumComfort: 'Starehe ya Hali ya Juu',
    premiumComfortDesc: 'Viti vya kifahari, hewa baridi, na nafasi za starehe kwa safari yako',
    onTimeDeparture: 'Kuondoka Kwa Wakati',
    onTimeDepartureDesc: 'Ratiba za kuaminika na huduma za usahihi unazoweza kutegemea',
    safeTravel: 'Safari Salama',
    safeTravelDesc: 'Madereva wa kitaalamu na magari yaliyotunzwa vizuri kwa usalama wako',
    ourModernFleet: 'Mabasi Yetu ya Kisasa',
    travelInComfort: 'Safiri kwa starehe na mabasi yetu yaliyotunzwa vizuri',
    popularRoutes: 'Njia Maarufu',
    travelToMajorCities: 'Safiri kwenda miji mikubwa katika eneo la Ziwa Victoria',
    whatCustomersSay: 'Wateja Wetu Wanasema Nini',
    joinSatisfiedTravelers: 'Jiunge na maelfu ya wasafiri walioridhika',
    excellentService: 'Huduma bora! Mabasi ni safi, ya starehe, na daima yana wakati. Tunapendekeza sana!',
    safeReliable: 'Usafiri salama na wa kuaminika. Madereva ni wa kitaalamu na safari ilikuwa laini.',
    bestBusService: 'Huduma bora ya mabasi Tanzania! Bei nafuu na huduma bora kwa wateja.',
    
    // Hero Section
    travelAcrossTanzania: 'Safiri Kote Tanzania',
    trustedPartner: 'Mshirika wako wa kuaminika kwa usafiri salama na wa starehe wa mabasi kote Tanzania',
    experienceBeauty: 'Pata uzoefu wa uzuri wa Tanzania na huduma za kuaminika, za usahihi, na za starehe za mabasi',
    
    // Search Form
    selectDeparture: 'Chagua kuondoka...',
    selectDestination: 'Chagua kwenda...',
    passenger: 'Abiria',
    passengers: 'Abiria',
    searchBookNow: '🔍 Tafuta na Wekesha Sasa',
    searching: 'Inatafuta...',
    tip: '💡 Kidokezo: Wekesha mapema kwa bei bora na uchaguzi wa viti',
    popularRoutesLabel: 'Njia Maarufu:',
    
    // Routes Page
    ourRoutes: 'Njia Zetu',
    exploreNetwork: 'Gundua mtandao wetu wa njia katika eneo la Ziwa Victoria',
    duration: 'Muda',
    frequency: 'Mzunguko',
    price: 'Bei',
    bookThisRoute: 'Wekesha Njia Hii',
    routeNetwork: 'Mtandao wa Njia',
    extensiveNetwork: 'Mtandao wetu mpana unashughulikia miji mikubwa na vijiji kote Tanzania',
    interactiveMap: 'Ramani ya njia ya kujumuisha inakuja hivi karibuni',
    cantFindRoute: 'Hauwezi Kupata Njia Yako?',
    contactCustomRoutes: 'Wasiliana nasi kwa njia za kawaida na mipangilio maalum',
    contactUs: 'Wasiliana Nasi',
    bookNow: 'Wekesha Sasa',
    daily: 'Kila Siku',
    
    // Contact Page
    contactUs: 'Wasiliana Nasi',
    getInTouchQuestions: 'Wasiliana nasi kwa maswali au uhitaji wowote',
    sendMessage: 'Tuma Ujumbe',
    fullName: 'Jina Kamili',
    enterFullName: 'Ingiza jina lako kamili',
    emailAddress: 'Anwani ya Barua Pepe',
    enterEmail: 'Ingiza anwani yako ya barua pepe',
    phoneNumber: 'Namba ya Simu',
    enterPhone: 'Ingiza namba yako ya simu',
    message: 'Ujumbe',
    enterMessage: 'Ingiza ujumbe wako',
    sendMessageBtn: 'Tuma Ujumbe',
    contactInformation: 'Taarifa za Mawasiliano',
    phoneSupport: 'Msaada wa Simu',
    callDirectly: 'Piga simu moja kwa moja kwa msaada wa haraka:',
    emailSupport: 'Msaada wa Barua Pepe',
    sendEmail: 'Tutume barua pepe kwa maswali ya kina:',
    officeLocation: 'Mahali pa Ofisi',
    visitOffice: 'Tembelea ofisi yetu Dar es Salaam:',
    darEsSalaam: 'Dar es Salaam, Tanzania',
    businessHours: 'Masaa ya Biashara',
    mondayFriday: 'Jumatatu - Ijumaa: 7:00 AM - 8:00 PM',
    saturday: 'Jumamosi: 7:00 AM - 6:00 PM',
    sunday: 'Jumapili: 8:00 AM - 5:00 PM',
    followUs: 'Tufuate',
    whatsapp: '📱 WhatsApp',
    facebook: '📘 Facebook',
    
    // Gallery Page
    ourGallery: 'Picha Zetu',
    discoverFleet: 'Gundua mabasi yetu ya kisasa na huduma bora za usafiri',
    companyLogo: 'Alama ya Kampuni',
    modernBusFleet: 'Mabasi ya Kisasa',
    premiumBusExterior: 'Nje ya Basi la Kifahari',
    professionalService: 'Huduma ya Kitaalamu',
    comfortableInterior: 'Ndani ya Starehe',
    advancedFeatures: 'Vipengele vya Juu',
    elegantDesign: 'Muundo wa Kifahari',
    premiumQuality: 'Ubora wa Hali ya Juu',
    safetyFeatures: 'Vipengele vya Usalama',
    passengerComfort: 'Starehe ya Abiria',
    serviceExcellence: 'Ubora wa Huduma',
    fleetOverview: 'Muhtasari wa Mabasi',
    whyChooseDN: 'Kwa Nini Uchague DNKategaya Express',
    modernFleet: 'Mabasi ya Kisasa',
    modernFleetDesc: 'Mabasi yetu yana vipengele vya hivi karibuni, udhibiti wa hali ya hewa, na mifumo ya burudani kwa starehe na usalama kamili',
    punctualService: 'Huduma ya Usahihi',
    punctualServiceDesc: 'Tunathamini wakati wako na kuhakikisha kuondoka na kuwasili kote kwa wakati na ufuatiliaji wa wakati halisi',
    safetyFirst: 'Usalama Kwanza',
    safetyFirstDesc: 'Madereva wa kitaalamu, matengenezo ya kawaida, na vipengele vya usalama vya juu kwa amani yako kamili',
    readyToTravel: 'Uko Tayari Kusafiri?',
    bookJourney: 'Wekesha safari yako na DNKategaya Express leo na pata uzoefu wa usafiri wa kifahari',
    clickToView: 'Bonyeza kuona',
    
    // Footer
    yourJourneyPriority: 'Safari Yako, Kipaumbele Chetu',
    premiumJourneys: 'Safari za Kifahari, Tiketi kwa Urahisi',
    companyDescription: 'Pata uzoefu wa safari bora ya mabasi kote Tanzania na mabasi yetu ya kisasa, madereva wa kitaalamu, na huduma bora. Starehe na usalama wako ni kipaumbele chetu.',
    quickLinks: 'Viungo vya Haraka',
    contactInfo: 'Taarifa za Mawasiliano',
    phone: 'Simu',
    headquarters: 'Makao Makuu: Dar es Salaam, Tanzania',
    followUs: 'Tufuate:',
    allRightsReserved: 'Haki zote zimehifadhiwa.',
    
    // Navbar
    home: 'Nyumbani',
    routes: 'Njia',
    gallery: 'Picha',
    contact: 'Mawasiliano',
    support: 'Msaada',
    terms: 'Masharti',
    privacy: 'Faragha'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const getLanguageFlag = () => {
    return currentLanguage === 'en' ? '🇬🇧' : '🇹🇿';
  };

  const getLanguageName = () => {
    return currentLanguage === 'en' ? 'English' : 'Kiswahili';
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      t,
      toggleLanguage,
      getLanguageFlag,
      getLanguageName
    }}>
      {children}
    </LanguageContext.Provider>
  );
};