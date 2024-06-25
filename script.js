
// ======== get URL ========
function appUrl() {
    location.href = "https://apps.apple.com/vn/app/pop-wave-blitz/id6480043741";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0f/b5/b2/0fb5b24f-bb01-d44d-64d5-dfdbb6a1092e/AppIcon-0-0-1x_U007emarketing-0-10-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/texture1.png",
  image2: "https://vn-appstore.com/id010597666/images/texture2.png",
  image3: "https://vn-appstore.com/id010597666/images/texture3.png",
  image4: "https://vn-appstore.com/id010597666/images/texture4.png",
  image5: "https://vn-appstore.com/id010597666/images/texture5.jpeg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e4/12/fa/e412fa74-0f5b-6e6a-652d-57712582ebbe/e4280118-8d3f-4670-acb4-a682a96a0ee8_ipad_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d0/c3/c2/d0c3c291-52c2-d000-524f-a6982c471e33/2ee7a723-f980-4586-8cb1-a810881064df_ipad_2.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f4/34/32/f434328f-2194-3331-e1dd-dc9e526b9f21/eaed6f93-2adf-4403-ac2b-993dec34f87f_ipad_3.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

