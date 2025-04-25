async function wait(ms) {
    return new Promise((res, rej)=>{
        setTimeout(res, ms);
    })
}

async function start() {
    let music = new Audio("wavetapper.mp3")
    
    await new Promise((res, rej)=>{
        music.addEventListener("canplaythrough", (e)=>{
            res()
        })
    })

    console.log("loaded")

    music.play()

    await wait(2000)

    var height = window.innerHeight
    var width = window.innerWidth
    const red = window.open("Windows/red.html", "_Blank","popup=true,left=10,top=10")
    red.resizeTo(width / 3, height / 3)
    red.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50
    await wait(9000)

    const green = window.open("Windows/green.html", "_Blank","popup=true,left=10,top=10")
    green.resizeTo(width / 3, height / 3)
    green.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(8000)

    const blue = window.open("Windows/blue.html", "_Blank","popup=true,left=10,top=10")
    blue.resizeTo(width / 3, height / 3)
    blue.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(8500)

    const white = window.open("Windows/white.html", "_Blank","popup=true,left=10,top=10")
    white.resizeTo(width / 3, height / 3)
    white.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(4500)

    const purple = window.open("Windows/purple.html", "_Blank","popup=true,left=10,top=10")
    purple.resizeTo(width / 3, height / 3)
    purple.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(20000)

    const coral = window.open("Windows/coral.html", "_Blank","popup=true,left=10,top=10")
    coral.resizeTo(width / 3, height / 3)
    coral.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(9000)

    const teal = window.open("Windows/teal.html", "_Blank","popup=true,left=10,top=10")
    teal.resizeTo(width / 3, height / 3)
    teal.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(9000)

    const yellow = window.open("Windows/yellow.html", "_Blank","popup=true,left=10,top=10")
    yellow.resizeTo(width / 3, height / 3)
    yellow.moveTo(width / 2 - 250, height / 3)
 
    width += 50
    height += 50

    await wait(18000)

    const black = window.open("Windows/black.html", "_Blank","popup=true,left=10,top=10")
    black.resizeTo(width / 3, height / 3)
    black.moveTo(width / 2 - 250, height / 3)
  
    width += 50
    height += 50
    
    await wait(54000)

    const orange = window.open("Windows/orange.html", "_Blank","popup=true,left=10,top=10")
    orange.resizeTo(width / 3, height / 3)
    orange.moveTo(width / 2 - 250, height / 3)

    await wait(18000)

    red.close()
    green.close()
    blue.close()
    white.close()
    purple.close()
    coral.close()
    teal.close()
    yellow.close()
    black.close()
    orange.close()
    window.close()
}