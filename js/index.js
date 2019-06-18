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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
nav.forEach(function(a, i){
  a.textContent = siteContent["nav"][`nav-item-${i + 1}`];
});

let cta = document.querySelector(".cta-text h1");
cta.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent  = siteContent["cta"]["button"];

let codeCircle = document.querySelector('#cta-img');
codeCircle.setAttribute('src', siteContent["cta"]["img-src"]);

let pageh4 = document.querySelectorAll(".text-content h4");
let pageContent = document.querySelectorAll(".text-content p");
let middleImg = document.querySelector('.middle-img');
pageh4[0].textContent = siteContent["main-content"]["features-h4"];
pageContent[0].textContent = siteContent["main-content"]["features-content"];
pageh4[1].textContent = siteContent["main-content"]["about-h4"];
pageContent[1].textContent = siteContent["main-content"]["about-content"];

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

pageh4[2].textContent = siteContent["main-content"]["services-h4"];
pageContent[2].textContent = siteContent["main-content"]["services-content"];
pageh4[3].textContent = siteContent["main-content"]["product-h4"];
pageContent[3].textContent = siteContent["main-content"]["product-content"];
pageh4[4].textContent = siteContent["main-content"]["vision-h4"];
pageContent[4].textContent = siteContent["main-content"]["vision-content"];

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]["contact-h4"];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].textContent = siteContent["contact"]["address"];
contactContent[1].textContent = siteContent["contact"]["phone"];
contactContent[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];