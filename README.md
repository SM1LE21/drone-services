# Run Locally
To run the application:
``` 
npm run dev
````

To Build the application:
``` 
npm run build
````

To get the changes to the production branch, checkout production after building, then delete everything but dist/ node_modules/ and .gitignore. Next copy the content of dist/ to the root and delete the dist/.


SEO: to regenerate sitemap (only needed if new sections or pages are added) run (for this node is needed):
``` 
npm run sitemap
````

---

# Gallery Setup Guide

This guide explains how to generate shareable links for your images and videos from Google Drive, how to structure your JSON file for the gallery, and where to save the `gallery.json` file.

## Generating Shareable Links for Google Drive Files

### Steps to Generate Shareable Links

1. **Upload Your Files to Google Drive**:
   - Go to [Google Drive](https://drive.google.com/).
   - Upload the images and videos you want to include in your gallery.

2. **Get the Shareable Link**:
   - Right-click on the file you want to share.
   - Select "Get link".
   - Ensure the link settings allow anyone with the link to view the file.
   - Click "Copy link".

3. **Generate Direct Link**:
   - Go to [Google Drive Direct Link Generator](https://www.labnol.org/embed/google/drive/).
   - Paste the copied link into the input field.
   - Click "Generate Direct Link".
   - Use the generated direct link for your JSON file.

## JSON Structure

The JSON file organizes your images and videos into categories. Each category contains arrays of image and video links.

### Example Structure
```json
{
  "categories": {
    "Category1": {
      "images": [
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_IMAGE_LINK1",
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_IMAGE_LINK2"
      ],
      "videos": [
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_VIDEO_LINK1",
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_VIDEO_LINK2"
      ]
    },
    "Category2": {
      "images": [
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_IMAGE_LINK3",
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_IMAGE_LINK4"
      ],
      "videos": [
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_VIDEO_LINK3",
        "https://lh3.googleusercontent.com/drive-viewer/EXAMPLE_VIDEO_LINK4"
      ]
    }
  }
}

