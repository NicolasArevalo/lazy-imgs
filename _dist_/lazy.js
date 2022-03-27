const isIntersecting = (entry) =>{
    return entry.isIntersecting
}


const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(entry => {
        if(entry.intersectionRatio > 0){
            
            const img = entry.target
            const url = img.dataset.src
            img.src = url
            loadedImages++
            printLog()
            observer.unobserve(img)
        }
    });
})
export const registrarImg = (img) =>{
    observer.observe(img);
}