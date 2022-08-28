function generateSoundOrRemovePlayingStyle(event,process) {
    const keyList = Array.from(document.querySelectorAll('.key'));
    const audioList = document.querySelectorAll('audio');
    keyList.forEach((key,index) => {
        const isFoundMatch = key.dataset.key === event.code
        if (isFoundMatch) {
            if (process === "add") {   
                document.querySelectorAll('.key')[index].classList.add("playing");
                audioList[index].play();
            } else {
                document.querySelectorAll('.key')[index].classList.remove("playing");
            }
            
        }

    })
}

const listnersToAttach = ["keydown","keyup"]

listnersToAttach.forEach((listnerEvent) => {
    
document.addEventListener(listnerEvent, (event) => {
    let keysWithAction = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"]
    if (keysWithAction.includes(event.code)) {
        generateSoundOrRemovePlayingStyle(event, listnerEvent === "keydown" ? "add" : "remove")
    }
})
})

