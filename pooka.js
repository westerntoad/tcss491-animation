class Pooka {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sheet.png");
        
    };

    update() { /* ~ unused ~ */ }

    draw(ctx) {
        let frame = Math.floor(((Date.now() / 1000) % 1) / 0.25);
        let sX = 1 + (frame % 2) * 33;
        let sY = 147 + (Math.floor(frame / 2) % 2) * 16;
        
        ctx.drawImage(this.spritesheet, sX, sY, 13, 12, this.x, this.y, 130, 120);
    };
};

