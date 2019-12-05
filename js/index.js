const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// Example: Update the img src for the logo
//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src']);

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//End Images
//Nav Bar
let navcontent = document.querySelectorAll('a');
navcontent.forEach((item, count) => {
    item.textContent = siteContent["nav"][`nav-item-${count + 1}`];
    item.style.color = 'green'
});

let prenav = document.createElement('a');
prenav.textContent = 'Customer Login';
document.querySelector('nav').prepend(prenav);

let appnav = document.createElement('a');
  appnav.textContent = 'Employee Login';
  document.querySelector('nav').append(appnav);

let navstyle = document.querySelectorAll('a');
  navstyle.forEach(item => {
  item.style.color = 'green'
});

//End Nav Bar
//Header
let ctaheader = document.querySelector("h1");
ctaheader.textContent = siteContent.cta.h1;

let ctabutton = document.querySelector("button");
ctabutton.textContent = siteContent.cta.button;
//End Header
//Top Content
let texttop = document.querySelectorAll(".top-content p");
  texttop[0].textContent = siteContent['main-content']['features-content'];
  texttop[1].textContent = siteContent['main-content']['about-content'];

let h4top = document.querySelectorAll(".top-content h4");
  h4top[0].textContent = siteContent['main-content']['features-h4'];
  h4top[1].textContent = siteContent['main-content']['about-h4'];
//End Top
//Bottom Content
let textbottom = document.querySelectorAll(".bottom-content p");
  textbottom[0].textContent = siteContent['main-content']['services-content'];
  textbottom[1].textContent = siteContent['main-content']['product-content'];
  textbottom[2].textContent = siteContent['main-content']['vision-content'];

let h4bottom = document.querySelectorAll(".bottom-content h4");
  h4bottom[0].textContent = siteContent['main-content']['services-h4'];
  h4bottom[1].textContent = siteContent['main-content']['product-h4'];
  h4bottom[2].textContent = siteContent['main-content']['vision-h4'];
//End Bottom
//Contact Content
let textcontact = document.querySelectorAll(".contact p");
  textcontact[0].textContent = siteContent['contact']['address'];
  textcontact[1].textContent = siteContent['contact']['phone'];
  textcontact[2].textContent = siteContent['contact']['email'];

let h4contact = document.querySelectorAll(".contact h4");
  h4contact[0].textContent = siteContent['contact']['contact-h4'];
//End Contact
//Footer
let footertext = document.querySelectorAll(".footer p");
footertext[0].textContent = siteContent['footer']['copyright'];
//Footer