function FetchImages(){
    return fetch('http://directus.justinliu.co.uk/_/items/photos?fields=image.data.full_url.*,title.*,title_slug.*')
        .then(res => res.json())
        .then(data => data);
}

function FetchSingleImage({slug}) {
    return fetch(`http://directus.justinliu.co.uk/_/items/photos?filter[title_slug]=${slug}&fields=image.data.full_url.*,title.*,title_slug.*`)
        .then(res => res.json())
        .then(data => data);
}

export { FetchImages, FetchSingleImage };