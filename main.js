const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sheet.png");
ASSET_MANAGER.queueDownload("./algorithm0r.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    gameEngine.start();

    const numPookas = 3
    const pookas = []
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    for (let i = 0; i < numPookas; i++) {
        gameEngine.addEntity(new Pooka(gameEngine, centerX, centerY, ((2*Math.PI) / numPookas) * i));
    }
    gameEngine.addEntity(new Marriott(gameEngine, centerX, centerY, 0.2));
});
