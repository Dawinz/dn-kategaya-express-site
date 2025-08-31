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
    date: 'Date',
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
    premiumTravelExperience: 'DN Kategaya Express - Premium Travel Experience',
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
    
    // Homepage Features
    premiumComfort: 'PREMIUM COMFORT',
    premiumComfortDesc: 'Luxury seats, air conditioning, and spacious interiors for your comfort',
    onTimeDeparture: 'ON-TIME DEPARTURE', 
    onTimeDepartureDesc: 'Reliable schedules and punctual service you can depend on',
    safeTravel: 'SAFE TRAVEL',
    safeTravelDesc: 'Professional drivers and well-maintained vehicles for your safety',
    
    // Contact Page
    sendMessage: 'SEND US A MESSAGE',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    emailAddress: 'Email Address',
    enterEmail: 'Enter your email address',
    phoneNumber: 'Phone Number',
    enterPhone: 'Enter your phone number',
    message: 'Message',
    tellUsHelp: 'Tell us how we can help you...',
    sendMessageBtn: 'SEND MESSAGE',
    getTouchTitle: 'GET IN TOUCH',
    email: 'EMAIL',
    office: 'OFFICE',
    serviceHours: 'SERVICE HOURS',
    availableDaily: 'AVAILABLE DAILY',
    customerSupport: 'CUSTOMER SUPPORT',
    availableWhatsApp: 'Available 24/7 via WhatsApp',
    quickSupport: 'QUICK SUPPORT',
    needHelp: 'Need immediate assistance? Chat with us on WhatsApp for instant support!',
    chatWhatsApp: 'Chat on WhatsApp',
    thankYouMessage: 'Thank you for your message! We will get back to you soon.',
    
    // Booking Page
    selectYourSeats: 'SELECT YOUR SEATS',
    choosePreferredSeats: 'Choose your preferred seats for your journey',
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
    selectPickupStation: 'Select pickup station',
    selectDropoffStation: 'Select drop-off station',
    priceSummary: 'PRICE SUMMARY',
    serviceFee: 'Service Fee',
    total: 'Total',
    proceedToPayment: 'PROCEED TO PAYMENT',
    processing: 'PROCESSING...',
    securePayment: 'Secure Payment',
    sslEncryption: 'Your payment is processed securely with 256-bit SSL encryption',
    seat: 'Seat',
    seatsAisleSeparated: 'Seats 1-2 and 3-4 are separated by an aisle',
    pleaseSelectSeat: 'Please select at least one seat',
    fromCityPlaceholder: 'From City',
    toCityPlaceholder: 'To City',
    passenger: 'Passenger',
    searchJourney: 'SEARCH JOURNEY',
    searchingJourney: 'SEARCHING...',
    pleaseSelectDeparture: 'Please select departure city',
    pleaseSelectDestination: 'Please select destination city',
    citiesMustBeDifferent: 'Departure and destination cities must be different',
    pleaseSelectDate: 'Please select travel date',
    pleaseSelectPassengers: 'Please select number of passengers',
    
    // Regions
    regions: {
      'MWANZA MWZ': 'MWANZA MWZ',
      'DAR ES SALAAM DAR': 'DAR ES SALAAM DAR',
      'KAHAMA KAH': 'KAHAMA KAH',
      'MOSHI MSH': 'MOSHI MSH',
      'ARUSHA ARS': 'ARUSHA ARS'
    }
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
    premiumTravelExperience: 'DN Kategaya Express - Uzoefu wa Safari ya Kifahari',
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
    
    // Homepage Features
    premiumComfort: 'STAREHE YA HALI YA JUU',
    premiumComfortDesc: 'Viti vya kifahari, hewa baridi, na nafasi za starehe kwa safari yako',
    onTimeDeparture: 'KUONDOKA KWA WAKATI',
    onTimeDepartureDesc: 'Ratiba za kuaminika na huduma za usahihi unazoweza kutegemea',
    safeTravel: 'SAFARI SALAMA',
    safeTravelDesc: 'Madereva wa kitaalamu na magari yaliyotunzwa vizuri kwa usalama wako',
    
    // Contact Page
    sendMessage: 'TUMA UJUMBE',
    fullName: 'Jina Kamili',
    enterFullName: 'Ingiza jina lako kamili',
    emailAddress: 'Anwani ya Barua Pepe',
    enterEmail: 'Ingiza anwani yako ya barua pepe',
    phoneNumber: 'Namba ya Simu',
    enterPhone: 'Ingiza namba yako ya simu',
    message: 'Ujumbe',
    tellUsHelp: 'Tuambie jinsi tunavyoweza kukusaidia...',
    sendMessageBtn: 'TUMA UJUMBE',
    getTouchTitle: 'WASILIANA NASI',
    email: 'BARUA PEPE',
    office: 'OFISI',
    serviceHours: 'WAKATI WA HUDUMA',
    availableDaily: 'TUNAPATIKANA KILA SIKU',
    customerSupport: 'HUDUMA KWA WATEJA',
    availableWhatsApp: 'Tunapatikana saa 24/7 kupitia WhatsApp',
    quickSupport: 'MSAADA WA HARAKA',
    needHelp: 'Unahitaji msaada wa haraka? Ongea nasi WhatsApp kwa msaada wa papo hapo!',
    chatWhatsApp: 'Ongea WhatsApp',
    thankYouMessage: 'Asante kwa ujumbe wako! Tutakupigia hivi karibuni.',
    
    // Booking Page
    selectYourSeats: 'CHAGUA VITI VYAKO',
    choosePreferredSeats: 'Chagua viti unavyopendelea kwa safari yako',
    driver: 'DEREVA',
    available: 'Vimepatikana',
    selected: 'Vimechaguliwa',
    unavailable: 'Havipatikani', 
    tripDetails: 'MAELEZO YA SAFARI',
    route: 'Njia',
    departure: 'Kuondoka',
    arrival: 'Kuwasili',
    selectedSeats: 'VITI VILIVYOCHAGULIWA',
    noSeatsSelected: 'Hakuna viti vilivyochaguliwa',
    pickupDropoff: 'PAKUA NA SHUKA',
    pickupStation: 'Kituo cha Kupakua',
    dropoffStation: 'Kituo cha Kushuka',
    selectPickupStation: 'Chagua kituo cha kupakua',
    selectDropoffStation: 'Chagua kituo cha kushuka',
    priceSummary: 'MUHTASARI WA BEI',
    serviceFee: 'Ada ya Huduma',
    total: 'Jumla',
    proceedToPayment: 'ENDELEA KULIPA',
    processing: 'INACHAKATISHWA...',
    securePayment: 'Malipo Salama',
    sslEncryption: 'Malipo yako yanachakatishwa kwa usalama na SSL encryption 256-bit',
    seat: 'Kiti',
    seatsAisleSeparated: 'Viti 1-2 na 3-4 vimetenganishwa na njia',
    pleaseSelectSeat: 'Tafadhali chagua angalau kiti kimoja',
    fromCityPlaceholder: 'Kutoka Mji',
    toCityPlaceholder: 'Kwenda Mji',
    passenger: 'Abiria',
    searchJourney: 'TAFUTA SAFARI',
    searchingJourney: 'INATAFUTA...',
    pleaseSelectDeparture: 'Tafadhali chagua mji wa kuondoka',
    pleaseSelectDestination: 'Tafadhali chagua mji wa kwenda',
    citiesMustBeDifferent: 'Mji wa kuondoka na kwenda lazima uwe tofauti',
    pleaseSelectDate: 'Tafadhali chagua tarehe ya safari',
    pleaseSelectPassengers: 'Tafadhali chagua idadi ya abiria',
    
    // Regions
    regions: {
      'MWANZA MWZ': 'MWANZA MWZ',
      'DAR ES SALAAM DAR': 'DAR ES SALAAM DAR',
      'KAHAMA KAH': 'KAHAMA KAH',
      'MOSHI MSH': 'MOSHI MSH',
      'ARUSHA ARS': 'ARUSHA ARS'
    }
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

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      t,
      toggleLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};