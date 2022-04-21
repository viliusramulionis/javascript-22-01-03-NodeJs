class Cat {
    constructor(nuovargis = 1, alkis = 3, vienatve = 6, laime = 3) {
        this.name = 'PAWS'
        this.nuovargis = nuovargis
        this.alkis = alkis
        this.vienatve = vienatve
        this.laime = laime
    }

    sleep(decrease = 1) {
        this.nuovargis = this.checkZero(this.nuovargis, decrease)

        return this.nuovargis
    }

    feed(decrease = 1) {
        this.alkis = this.checkZero(this.alkis, decrease)

        return this.alkis
    }

    pet(decrease = 1, add = 1) {
        this.vienatve = this.checkZero(this.vienatve, decrease)
        this.laime += add

        return {vienatve: this.vienatve, laime: this.laime}
    }

    checkZero(check, decrease) {
        return ((check - decrease) >= 0) ? check - decrease : 0
    }

    status() {
        if(this.nuovargis > 3) {
            console.log(`${this.name} jaučiasi labai pavargusi`)
        }
        if(this.alkis > 3) {
            console.log(`${this.name} jaučiasi labai išalkusi`)
        }
        if(this.vienatve > 3) {
            console.log(`${this.name} jaučiasi labai vieniša`)
        }
        if(this.laime < 3) {
            console.log(`${this.name} jaučiasi labai nelaiminga`)
        }
    }
}

export default Cat