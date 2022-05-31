// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg

setInterval(() => {
    const randomWidth = Math.floor(Math.random() * 100 + 40)
    const randomPosition = Math.floor(Math.random() * screen.width)
    const randomSpeed = Math.floor(Math.random() * 4000 + 2000)

    const spanEl = document.createElement('span')

    spanEl.style.width = `${randomWidth}px`
    spanEl.style.left = `${randomPosition}px`
    spanEl.style.animationDuration = `${randomSpeed}ms`

    document.body.append(spanEl)
}, 400)

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg