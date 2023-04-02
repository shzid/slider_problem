$ ( function(){
    let hideBtn = $('.hide')
    let box = $('.box')
    let showBtn = $('.show')
    let togglerBtn = $('.toggler')
    hideBtn.click(function(){
        box.slideUp(1000)
    })
    showBtn.click(function(){
        box.slideDown(1000)
    })
    togglerBtn.click(function(){
        box.fadeToggle(1000)
    })
} )

$({
    id: "demo",
    folder: "Images",
    images: ["mountains-under-mist-morning-amazing-260nw-1725825019.jpg", "nature-image-for-website.jpg", "pexels-baskin-creative-studios-1766838.jpg", "pexels-david-besh-884788.jpg", "spring-nature-blossom-web-banner-header-24752960.jpg"],
    imgWidth: 700,
    speed: 2000,
  });