class Pooka {
    constructor(game, origX, origY, polar, speed) {
        Object.assign(this, { game, origX, origY, polar });
        this.spritesheet = ASSET_MANAGER.getAsset("./sheet.png");
        
    };

    update() {
        const speed = 0.02

        this.polar += speed
    }

    draw(ctx) {
        const radius = 300;
        const scale = 5;
        const w = 13;
        const h = 12;
        const frame = Math.floor(((Date.now() / 1000) % 1) / 0.25);
        const sX = 1 + (frame % 2) * 33;
        const sY = 147 + (Math.floor(frame / 2) % 2) * 16;
        const dX = this.origX + Math.cos(this.polar) * radius - (w / 2);
        const dY = this.origY + Math.sin(this.polar) * radius - (h / 2);
        
        ctx.drawImage(this.spritesheet, sX, sY, w, h, dX, dY, w * scale, h * scale);
    };
};

