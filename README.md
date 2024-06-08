
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