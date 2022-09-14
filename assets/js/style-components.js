ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
    // reset: true
})

ScrollReveal().reveal('.header-content, .image-header', {delay: 100, origin: 'top'})
ScrollReveal().reveal('.article_class', {interval: 500, origin: 'left'})
ScrollReveal().reveal('.user_class, .email_class, .phone_class, .textarea_class, .button', {interval: 100, origin: 'left', delay: 200})

