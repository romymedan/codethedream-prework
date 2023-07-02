//Artwork details page 

async function getArtwork() {
    // Get the current URL
    let currentURL = window.location.href;

    // Create a URL object
    let url = new URL(currentURL);

    // Get the item_id (artwork id) parameter value
    let params = new URLSearchParams(url.search);
    let itemId = params.get("item_id");

    //Fetch api response with the following fields: id,title,thumbnail,image_id,artist_display
    try {
        let url = `https://api.artic.edu/api/v1/artworks/${itemId}?fields=id,title,thumbnail,image_id,artist_display`;
        let response = await fetch(url);
        let json = await response.json();
        let item_details = json.data;
        console.log(json);
        return `<div class="item_details">
            <h2>${item_details.title}</h2>
            <h3>${item_details.artist_display}</h3>
            <img width="843" src="https://www.artic.edu/iiif/2/${item_details.image_id}/full/843,/0/default.jpg">
            <h3>${item_details.thumbnail.alt_text}</h3>
        </div>`;
    } catch (error) {
        console.log(error);
    }

} 

async function displayArtwork() {
    let html = await getArtwork();
    console.log(html);

    let container = document.querySelector('.flex-container-details');
    container.innerHTML = html;
}

displayArtwork();



