class Marriott {
    constructor(game, x, y, scale) {
        Object.assign(this, { game, x, y, scale });
        this.origX = x;
        this.origY = y;
        this.image = ASSET_MANAGER.getAsset("./algorithm0r.png");
        
    };

    update() {
        const state = Math.floor(((Date.now() / 1000) % 1.5) / (1.5 / 4));

        if (Math.floor(state/ 2) % 2 == 0) {
            this.y = this.origY + 20;
        } else {
            this.y = this.origY;
        }
    }

    draw(ctx) {
        const dW = this.image.width * this.scale;
        const dH = this.image.height * this.scale;
        ctx.drawImage(this.image, this.x - (dW / 2), this.y - (dH / 2), dW, dH);
    };
};

