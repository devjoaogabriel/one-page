ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
})

ScrollReveal().reveal('.header-content, .image-header', {delay: 100, interval: 250, origin: 'top'})
ScrollReveal().reveal('.effect', {interval: 500, origin: 'left', delay: 100})
ScrollReveal().reveal('.user_class, .email_class, .phone_class, .textarea_class, .button, .title_form', {interval: 100, origin: 'top', delay: 100})

