const EleBoard = require('../controllers/eleboard');

module.exports = function(app) {
    app.get("/elephants", EleBoard.getAllElephants);
    app.get("/elephants/:id", EleBoard.getElephantById);
    app.post("/elephants", EleBoard.createElephant);
    app.put("/elephants/:id", EleBoard.updateElephant);
    app.delete("/elephants/:id", EleBoard.deleteElephant);
}