
var url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e38be7bc428d4227a3cbdf4d859cf244';
var req = new Request(url);
fetch(url)
.then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);

        let first_article = json.articles[0];

        let desc = first_article.description;
        let title = first_article.title;

        let image_url = first_article.urlToImage;

        let url = first_article.url;

        document.getElementById("title1").innerHTML = title;

        document.getElementById("desc1").innerHTML = desc;

        image = document.getElementById('image1');
        image.src = image_url;

        go_to_url = document.getElementById('btn1');
        go_to_url.href = url;

        first_article = json.articles[1];

        desc = first_article.description;
        title = first_article.title;

        image_url = first_article.urlToImage;

        url = first_article.url;

        document.getElementById("title2").innerHTML = title;

        document.getElementById("desc2").innerHTML = desc;

        image = document.getElementById('image2');
        image.src = image_url;

        go_to_url = document.getElementById('btn3');
        go_to_url.href = url;

        first_article = json.articles[2];

        desc = first_article.description;
        title = first_article.title;

        author = first_article.author;
        image_url = first_article.urlToImage;

        url = first_article.url;

        document.getElementById("title3").innerHTML = title;

        document.getElementById("desc3").innerHTML = desc;

        image = document.getElementById('image3');
        image.src = image_url;

        go_to_url = document.getElementById('btn3');
        go_to_url.href = url;  
        
        first_article = json.articles[3];

        desc = first_article.description;
        title = first_article.title;

        author = first_article.author;
        image_url = first_article.urlToImage;

        url = first_article.url;

        document.getElementById("title4").innerHTML = title;

        document.getElementById("desc4").innerHTML = desc;

        image = document.getElementById('image4');
        image.src = image_url;

        go_to_url = document.getElementById('btn4');
        go_to_url.href = url;  


    }).catch(error => alert(error.message)); // catch error message
