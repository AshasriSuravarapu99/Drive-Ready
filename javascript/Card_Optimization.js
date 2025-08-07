MyContent = [
    {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_mzAUvHCl_e3jg0Gh821Q0_Sd9HC9ADdg&s",
        "price" : 1200,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
        "price" : 1300,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikef76pBA_Wy2TeDOXhXFQSojlXcYxo3WbQ&s",
        "price" : 1400,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
        "price" : 1500,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoqXCIsdZ9qWmqRVuBEvzaw5VTldno30kThg&s",
        "price" : 1500,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_mzAUvHCl_e3jg0Gh821Q0_Sd9HC9ADdg&s",
        "price" : 1200,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2ce40BkWdXvgMffW8BefaU8jogoAzSNDA&s",
        "price" : 1300,
        "brand" : "puma"
    },
     {
        "Image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikef76pBA_Wy2TeDOXhXFQSojlXcYxo3WbQ&s",
        "price" : 1400,
        "brand" : "puma"
    }

]

var Cards = MyContent.map((ele)=>{
    return (`<div class="card">
            <div class="image-section">
                <img src="${ele.Image}">
            </div>
            <div class="info-section">
                <div class="price">Price:${ele.price}</div>
                <div class="brand">Brand:${ele.brand}</div>
            </div>
        </div>`)
});
document.getElementsByClassName('card-parent')[0].innerHTML = Cards.join(" ")