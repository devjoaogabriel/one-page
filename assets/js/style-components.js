const ScrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1900,
    delay: 200,
    // reset: true
})

ScrollAnimation.reveal('.header-content, .image-header', {delay: 100, interval: 250})
ScrollAnimation.reveal('.article_class', {interval: 500, origin: 'left'})
ScrollAnimation.reveal('.scrolleffect, .title_form', {interval: 100, delay: 100})

