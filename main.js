const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sheet.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    gameEngine.start();

    const numPookas = 3
    const pookas = []
    for (let i = 0; i < numPookas; i++) {
        gameEngine.addEntity(new Pooka(gameEngine, canvas.width / 2, canvas.height / 2, ((2*Math.PI) / numPookas) * i));
    }
});
