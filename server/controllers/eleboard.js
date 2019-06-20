const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
const Elephant = mongoose.model("Elephant");

class EleBoard {
    getAllElephants (req, res) {
        Elephant.find({}, (err, elephants) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    status: "OK",
                    elephants: elephants
                });
            }
        });
    }
    
    getElephantById (req, res) {
        Elephant.findById(req.params.id, (err, ele) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    status: "OK",
                    elephant: ele
                });
            }
        });
    }
    
    createElephant (req, res) {
        let ele = new Elephant(req.body);
        ele.save(err => {
            if (err) {
                console.log(err);
            }
            else {
                res.json({
                    status: "OK"
                });
            }
        });
    }
    
    updateElephant (req, res) {
        Elephant.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                age: req.body.age,
                breed: req.body.breed
            },
            err => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json({
                        status: "OK"
                    });
                }
        });
    }
    
    deleteElephant (req, res) {
        Elephant.findByIdAndDelete(req.params.id, (err) => {
            if (err) {
                console.log(err);
                res.json({
                    status: "OK",
                    error: err
                });
            }
            else {
                res.json({
                    status: "OK"
                });
            }
        });
    }
    
}
module.exports = new EleBoard();