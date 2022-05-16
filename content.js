if(typeof init === 'undefined') {
    const init = function(){
        const injectElement = document.createElement("div")
        injectElement.className = "twitterExt-element"
        injectElement.innerHTML = "twitterExt is activated."
        document.body.appendChild(injectElement)
    }
    init()
}