
let mainContainer_topMobile=document.querySelector('.mainContainer')
let left_topmobile_btn=document.querySelector('.left_topmobile_btn')
let right_topmobile_btn=document.querySelector('.right_topmobile_btn')
let mobile_carouselImageContainer = document.querySelector('.mobile_carouselImageContainer')
let move_to_mobile_ele=document.getElementById('move_to_mobile_ele')


const carouselImages = [
    {
      imageUrl:
        "	https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/BAU/CLP/TILES/20Jan/04_3.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/CatPage/Dec/redmi.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Jan24/iQOO/CatPage/TOP-DEALS.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/realme/Brandstore/27dec/WINTER_TOP-DEALS.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/19thJan/TOP-DEALS_M34.jpg",
    },

    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Banhita/MSOAPPLE/NEWAPPLE/BAUCLP/WINTER_TOP-DEALS_3.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Banhita/MSOAPPLE/NEWAPPLE/BAUCLP/D103632795_TOP-DEALS.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Banhita/MSOAPPLE/NEWAPPLE/BAUCLP/_topdeals_22.jpg",
    },

    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Banhita/MSOAPPLE/NEWAPPLE/BAUCLP/TOP-DEALS_2.jpg",
    },
    {
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Jan24/iQOO/CatPage/TOP-DEALS_02.jpg",
    },
  ];


let slideIndex=0


  carouselImages.map((imageObj) =>{
let div=document.createElement('div')
div.className='mobile_carouselImageContainer'

let pic=document.createElement('img')
pic.className='mobile_carouselImage'
pic.src=imageObj.imageUrl
div.appendChild(pic)
mainContainer_topMobile.appendChild(div)

  })


  left_topmobile_btn.addEventListener('click', function () {
    slideIndex = (slideIndex + carouselImages.length-1) % (carouselImages.length-3);
    mainContainer_topMobile.style.transform = `translateX(-${slideIndex * 100}px)`;
    console.log('asdfdsf')
});

  right_topmobile_btn.addEventListener('click', function () {
    slideIndex = (slideIndex +1) % (carouselImages.length-3);
    console.log(slideIndex)
    mainContainer_topMobile.style.transform = `translateX(-${slideIndex * 100}px)`;
});

move_to_mobile_ele.addEventListener('click',()=>{
    if(!istrue){
      window.location.href = 'login.html';
    }else{
      window.location.href = 'mobile_teb.html';
    }
  })