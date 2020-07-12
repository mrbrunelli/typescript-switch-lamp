class Lamp {
    private imgOn!: HTMLImageElement
    private imgOff!: HTMLImageElement

    constructor() {
        this.imgOn = document.querySelector('#on')
        this.imgOff = document.querySelector('#off')
        this.powerOff()
    }

    private powerOn() {
        this.imgOn.style.display = 'block'
        this.imgOff.style.display = 'none'
    }

    private powerOff() {
        this.imgOff.style.display = 'block'
        this.imgOn.style.display = 'none'
    }

    mouseListener() {
        this.imgOff.addEventListener('mouseover', () => {
            this.powerOn()
        })

        this.imgOn.addEventListener('mouseout', () => {
            this.powerOff()
        })
    }

}

const lamp = new Lamp()

window.addEventListener('load', () => {
    lamp.mouseListener()
})
