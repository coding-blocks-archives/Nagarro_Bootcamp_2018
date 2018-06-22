interface Food {
    taste: string
    isEdibleRaw: boolean
}

class Fruit implements Food {
    public taste: string = 'sour'
    public isEdibleRaw: boolean = false
    constructor(taste?: string) {
        if (taste) {
            this.taste = taste
        }
    }
}

let mango: Food = {
    taste: 'sweet',
    isEdibleRaw: true
}