## How to open the project and run

### Demo
1. Open https://romymedan.github.io/codethedream-prework

   The art gallery includes 5 pages of the artwork, **previous** link disabled on the first page and the **next** link enabled only until 5 page. The art galery fetches `https://api.artic.edu/api/v1/artworks` API
2. Each artwork is clickable and can be opened by fetching `https://api.artic.edu/api/v1/artworks/${itemId}` API

### Run Locally

1. Clone the repo (`git clone git@github.com:romymedan/codethedream-prework.git`)
2. Go into the repo `cd codethedream-prework`
3. Launch a local http server (if you have python3 installed, type `python3 -m http.server
` or follow the instructions [here](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#using_python))

## Models used 

1. Artworks model https://api.artic.edu/docs/#artworks (both list and details)
2. Image model https://api.artic.edu/docs/#images 