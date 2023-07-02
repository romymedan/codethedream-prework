// Get the current URL
let currentURL = window.location.href;

// Create a URL object
let url = new URL(currentURL);

// Get the item_id (artwork id) parameter value
let params = new URLSearchParams(url.search);
let page = params.get("page") || 1;

//All artworks gallery with pages from 1 to 5
let prev = document.getElementById("prev");
let next = document.getElementById("next");


/**
 * Fetching an api response with the following fields: id,title,artist_display,image_id
 * @returns a list of artwork items
 */
async function getArtworks() {
    try {
        let url = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,image_id&page=${page}`;
        let response = await fetch(url);
        let json = await response.json();
        let dataList = json.data;
        console.log(json);
        return dataList.filter(item => item.image_id).map(item => `<div class="item">
            <h2>${item.title}</h2>
            <h3>${item.artist_display}</h3>
            <a href="details.html?item_id=${item.id}"><img width="200" src="https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg"></a>
        </div>  
        `).join("\n");
    } catch (error) {
        console.log(error);
    }
}

/**
 * display the return artworks
 */
async function displayArtworks() {
    updateURLParameter("page",page);

    let html = await getArtworks();
    console.log(html);

    let container = document.querySelector('.flex-container');
    container.innerHTML = html;
    let current = document.getElementById("current");
    current.innerText = "Current Page: " + page;
    debugger;
    if(page == 1){
        prev.disabled = true;
    } else if(page == 5){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

/**
 * Update URL with a query param (e.g. example.com?a=1&b=2)
 */
function updateURLParameter(key, value) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    params.set(key, value);

    window.history.pushState({}, '', `${url.pathname}?${params}`);
}

/**
 * The entry point for the page
 */
async function init() {
    let minPage = 1;
    let maxPage = 5;
    await displayArtworks();

    prev.addEventListener("click",function(){
        if(page > minPage){
            page--;
            displayArtworks();
        }
        
    });
    
    next.addEventListener("click",function(){
        if(page < maxPage){
            page++;
            displayArtworks();
        }
        
    });
}

init();


