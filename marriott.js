class Marriott {
    constructor(game, x, y, scale) {
        Object.assign(this, { game, x, y, scale });
        this.image = ASSET_MANAGER.getAsset("./algorithm0r.png");
        
    };

    update() { /* ~ Unused ~ */ }

    draw(ctx) {
        const dW = this.image.width * this.scale;
        const dH = this.image.height * this.scale;
        ctx.drawImage(this.image, this.x - (dW / 2), this.y - (dH / 2), dW, dH);
    };
};

