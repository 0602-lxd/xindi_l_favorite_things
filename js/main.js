// import your packages here

import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    let lightbox = document.querySelector(".lightboxes"),
        lbClose = lightbox.querySelector("button"),
        description = lightbox.querySelector("description");

    // console.log(thequote);
   
    function showHideLightbox(event) {
		console.log(event.target);

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => dedede(data)).catch(err =>popErrorBox(err));//request data index.php
        // console.log(lightbox);
        setTimeout(
            function(){
                lightbox.classList.toggle('show-lightbox');

                },
            300);
    }

    function clsoeHideLightbox() {
        setTimeout(
            function(){
                lightbox.classList.toggle('show-lightbox');
            },
            30);
    }
    
    function dedede(thumbs){
         // console.log(thumbs[0].description)
        let   lightSection = document.querySelector('.lightboxes'),
              description = document.querySelector('.description'),
              imagen = document.querySelector('.imagen');

//        let   myllight = lightSection.cloneNode(true),
//              myllightText = myllight.querySelector('.sdfsdfds').children;

                   // myllightText[3].innerHTML="";
                  // myllightText[3].innerHTML ="sdfewsfe";
                // myllightText[2].innerHTML=thumbs[0].description;
                  imagen.src = `images/${thumbs[0].avatar}`;
                  description.innerHTML = thumbs[0].description;
			

    }

    // stub * just a place for non-component-specific stuff
    console.log('loassdedss');
    function popErrorBox(message) {
		console.log(message);
        alert("Something has gone horribly, horribly wrong");
    }

//    function handleDataSet(data) {
//        let favouriteSection = document.querySelector('.favourite-section'),
//            favouriteTemplate = document.querySelector('.favourite-template').content;
//        for (let favouriteThings in data) {
//            let myFavourite = favouriteTemplate.cloneNode(true),
//                myFavouriteText = myFavourite.querySelector('.favouriteThings').children;
//
//            myFavouriteText[1].src = `images/${data[favouriteThings].avatar}`;
//            myFavouriteText[2].textContent = data[favouriteThings].name;
//            myFavouriteText[3].textContent = data[favouriteThings].type;
//            myFavouriteText[4].textContent = data[favouriteThings].reason;
//            // myFavouriteText[5].textContent = data[favouriteThings].description;
//
//            // add this new user to the view
//            favouriteSection.appendChild(myFavourite);
//        }
//    }

//    function retrieveProjectInfo() {
//        // debugger;
//        console.log(this.id);
//        // var id=this.id;
//        var dee='';
//        var x='';
//        dee= fetchData(`./includes/index.php?id=${this.id}`).then(data => console.log(data)).catch(err => console.log(err));
//        for (x in dee)
//        {
//            var dfre=dee[x];
//        }
//		// alert(dfre);
//        for(var key in dfre){
//            alert(key); 
//            alert(dfre[key]); 
//        }
//        // console.log(name);
//        // console.log(dfre['name']);
//    }

    function renderPortfolioThumbnails(thumbs) {
        let    favouriteSection = document.querySelector('.favourite-section'),
               favouriteTemplate = document.querySelector('.favourite-template').content;

        for (let favouriteThings in thumbs) {

            let  myFavourite = favouriteTemplate.cloneNode(true),
                 myFavouriteText = myFavourite.querySelector('.favouriteThings').children;

             favouriteTemplate.id        = thumbs[favouriteThings].ID;
             myFavouriteText[0].src       = `images/${thumbs[favouriteThings].avatar}`;
             myFavouriteText[0].id        = thumbs[favouriteThings].ID;
             myFavouriteText[1].innerHTML = thumbs[favouriteThings].name;
             myFavouriteText[2].innerHTML = thumbs[favouriteThings].type;
             myFavouriteText[3].innerHTML = thumbs[favouriteThings].reason;
//              myFavouriteText[4].innerHTML = thumbs[favouriteThings].description;
            // add this new user to the view
//             myFavouriteText[0].addEventListener("click", retrieveProjectInfo);
             myFavouriteText[0].addEventListener("click", showHideLightbox);
            lbClose.addEventListener("click", clsoeHideLightbox);
            favouriteSection.appendChild(myFavourite);
        }

    }
    // fetchData("./includes/index.php");
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err =>popErrorBox(err));
})();
