class Pooka {
    constructor(game, origX, origY, polar) {
        Object.assign(this, { game, origX, origY, polar });
        this.isDancing = false;
        this.spritesheet = ASSET_MANAGER.getAsset("./sheet.png");
        
    };

    update() {
        this.isDancing = Math.floor(((Date.now() / 1000) % 3) / 1) >= 2

        if (!this.isDancing) {
            this.polar += 0.005
        }
    }

    draw(ctx) {
        const radius = 300;
        const scale = 5;
        const w = 13;
        const h = 12;

        let dX = this.origX + Math.cos(this.polar) * radius - ((w * scale) / 2);
        let dY = this.origY + Math.sin(this.polar) * radius - ((h * scale) / 2);
        let sX = 1
        let sY = 147

        if (this.isDancing) {
            const frame = Math.floor(((Date.now() / 1000) % 1) / 0.25);
            sX += (frame % 2) * 33;
            sY += (Math.floor(frame / 2) % 2) * 16;
        } else {
            sY += Math.floor(((this.polar + Math.PI) % (Math.PI * 2)) / Math.PI) * 16;

            const frame = Math.floor(((Date.now() / 1000) % 0.25) / 0.125);
            sX += (frame % 2) * 16;
            sY -= (frame % 2) * 2;
            dY -= (frame % 2) * 20
        }
        
        ctx.drawImage(this.spritesheet, sX, sY, w, h, dX, dY, w * scale, h * scale);
    };
};

