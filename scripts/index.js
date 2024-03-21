const mainImgs = document.querySelectorAll('.main_img');
const containerMain = document.querySelector('.container-main')
let activeMainImg;



let timerBgrImage = setInterval(() => {
    nextBackgroundMain();
}, 7000);

 function nextBackgroundMain() {
    mainImgs.forEach(el => {
        if(!el.classList.contains('hidden')) {
            activeMainImg = el;
        }
    })
    activeMainImg.classList.add('hidden')
    if(activeMainImg != containerMain.lastElementChild) {
        activeMainImg.nextElementSibling.classList.remove('hidden')
    } else {
        containerMain.firstElementChild.classList.remove('hidden')
    }
    
 }

 const whyItems = document.querySelectorAll('.why_item');

 whyItems.forEach(item => {
    let itemTitle = item.querySelector('.why_title');
    let itemDesc = item.querySelector('.why_desc');

    itemTitle.addEventListener('click' , () => {
        itemTitle.classList.toggle('select');
        itemDesc.classList.toggle('select');
    })
 })






