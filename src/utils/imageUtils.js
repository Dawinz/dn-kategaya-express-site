// Utility function to get the correct image path for both development and production
export const getImagePath = (imageName) => {
  // Simple approach: use relative paths that work in both environments
  return `./images/${imageName}`;
};

// Alternative approach using absolute paths
export const getImagePathAbsolute = (imageName) => {
  // Use absolute paths from root
  return `/images/${imageName}`;
};

// Alternative approach using public URL
export const getImagePathPublic = (imageName) => {
  // Use the public URL approach which is more reliable
  const baseUrl = process.env.PUBLIC_URL || '';
  const imagePath = `${baseUrl}/images/${imageName}`;
  
  console.log('Public URL image path:', {
    baseUrl,
    imageName,
    fullPath: imagePath
  });
  
  return imagePath;
};

// Predefined image paths for common images (using clean file names)
export const IMAGES = {
  LOGO: 'logo.jpeg',
  BUS_FLEET_1: 'bus-fleet-1.jpeg',
  BUS_FLEET_2: 'bus-fleet-2.jpeg',
  BUS_FLEET_3: 'bus-fleet-3.jpeg',
  BUS_FLEET_4: 'bus-fleet-4.jpeg',
  BUS_FLEET_5: 'bus-fleet-5.jpeg',
  BUS_FLEET_6: 'bus-fleet-6.jpeg',
  BUS_FLEET_7: 'bus-fleet-7.jpeg',
  BUS_FLEET_8: 'bus-fleet-8.jpeg',
  BUS_FLEET_9: 'bus-fleet-9.jpeg',
  BUS_FLEET_10: 'bus-fleet-10.jpeg',
  BUS_FLEET_11: 'bus-fleet-11.jpeg',
  BUS_FLEET_12: 'bus-fleet-12.jpeg',
  BUS_FLEET_13: 'bus-fleet-13.jpeg',
  BUS_FLEET_14: 'bus-fleet-14.jpeg',
  CTA_MOBILE: 'cta-mobile.png',
  CTA_TABLET: 'cta-tablet.png',
  CTA_DESKTOP: 'cta-desktop.png'
};
