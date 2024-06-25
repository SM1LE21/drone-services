/**
 * Preloads an array of images and retries loading up to a specified number of times on failure.
 * @param {string[]} srcArray - Array of image URLs to preload.
 * @returns {Promise<Object[]>} A promise that resolves when all images are either loaded successfully or have failed after retries.
 */
export const preloadImages = (srcArray) => {
  const loadImage = (src, retries = 3) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        console.log(`Successfully loaded image: ${src}`);
        resolve({ src, success: true });
      };

      img.onerror = () => {
        if (retries > 0) {
          console.warn(`Retrying to load image: ${src}, attempts left: ${retries - 1}`);
          resolve(loadImage(src, retries - 1));
        } else {
          console.error(`Failed to load image: ${src}`);
          resolve({ src, success: false });
        }
      };
    });
  };

  const promises = srcArray.map((src) => loadImage(src));

  return Promise.all(promises);
};
