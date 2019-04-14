

let imgGallery = document.querySelector('#image-gallery-div');

// javascript way

let getAjaxv = () =>{

    // create ajax request
    let http = new XMLHttpRequest();

    // prepare the request
    http.open('GET','https://gist.githubusercontent.com/sandeepss123/ed82446ff5419c6425477e6e4ad44164/raw/53dba53fa6501e822440bf47dae3c28d21b812b4/image%2520gallery.json',true);

    // send the request
    http.send();

    // handle the request
    http.onreadystatechange = function () {

        if (http.readyState === 4 && http.status === 200){
            processData(http.responseText);
        }
    };


};


// process data

let processdata = (data) =>{
  let contactsArray = JSON.parse(data).contacts;
  dispalyImages(contactsArray);
};

// display images

let displayImages = (contactsArray) =>{
    let imageTag = '';
    contactsArray.forEach((contact) =>{
        imageTag += `<img src ="${contact.picture.large}"> \n`;
    });
    imgGallery.innerHTML = imageTag;
};
