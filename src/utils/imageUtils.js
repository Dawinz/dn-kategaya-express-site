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

// Predefined image paths for common images
export const IMAGES = {
  LOGO: 'logo.jpeg',
  BUS_FLEET: 'WhatsApp Image 2025-08-23 at 20.27.10.jpeg',
  BUS_EXTERIOR: 'WhatsApp Image 2025-08-23 at 20.27.29.jpeg',
  BUS_SERVICE: 'WhatsApp Image 2025-08-23 at 20.27.43.jpeg',
  BUS_INTERIOR: 'WhatsApp Image 2025-08-23 at 20.28.02.jpeg',
  BUS_FEATURES: 'WhatsApp Image 2025-08-23 at 20.28.23.jpeg',
  BUS_DESIGN: 'WhatsApp Image 2025-08-23 at 20.28.50.jpeg',
  BUS_QUALITY: 'WhatsApp Image 2025-08-23 at 20.29.06.jpeg',
  BUS_SAFETY: 'WhatsApp Image 2025-08-23 at 20.29.24.jpeg',
  BUS_COMFORT: 'WhatsApp Image 2025-08-23 at 20.31.43.jpeg',
  BUS_EXCELLENCE: 'WhatsApp Image 2025-08-23 at 20.33.00.jpeg',
  BUS_FLEET_OVERVIEW: 'WhatsApp Image 2025-08-23 at 20.33.00 (1).jpeg'
};
