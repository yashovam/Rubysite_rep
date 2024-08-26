//####################################### < IMPORTS > ###############################################
import fs from 'fs';
//#######################################  < .CODE >  ###############################################

//#######################################  <  shop-slider >  ########################################
function handleProductContainers() {
    const productContainers = [...document.querySelectorAll('.product')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
}

// Call function in header or wherever
handleProductContainers();
//###################################################################################################

//#############################  <  shop-table >  ###################################################
