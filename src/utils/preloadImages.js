/**
 * Preloads an array of images and retries loading up to a specified number of times on failure.
 * @param {string[]} srcArray - Array of image URLs to preload.
 * @returns {Promise<Object[]>} A promise that resolves when all images are either loaded successfully or have failed after retries.
 */
export const preloadImages = (srcArray) => {

    /**
     * Attempts to load a single image, retrying up to a specified number of times on failure.
     * @param {string} src - The URL of the image to load.
     * @param {number} retries - The number of times to retry loading the image on failure.
     * @returns {Promise<Object>} A promise that resolves with an object indicating the success or failure of the image load.
     */
    const loadImage = (src, retries = 3) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
  
        // On successful image load
        img.onload = () => {
          console.log(`Successfully loaded image: ${src}`);
          resolve({ src, success: true });
        };
  
        // On image load failure
        img.onerror = () => {
          if (retries > 0) {
            console.warn(`Retrying to load image: ${src}, attempts left: ${retries - 1}`);
            resolve(loadImage(src, retries - 1)); // Retry loading the image
          } else {
            console.error(`Failed to load image: ${src}`);
            resolve({ src, success: false }); // Resolve with failure after exhausting retries
          }
        };
      });
    };
  
    // Create an array of promises for preloading all images
    const promises = srcArray.map((src) => loadImage(src));
    
    // Return a promise that resolves when all image preload promises have resolved
    return Promise.all(promises);
  };
  