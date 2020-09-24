//Import exampleModel
Example = require('../model/exampleModel');

//Handle index actions
exports.index = function (req, res) {
  Example.get(function (err, resExample) {
    if(err) {
        res.json({
           status: "error",
           message: err
        });
    }
    res.json({
        status: "success",
        message: "Examples retrieved successfully",
        data: resExample
    });
  });
};

//Handle create example actions
exports.new = function (req, res) {
    var neoExample = new Example();
    neoExample.name = req.body.name ? req.body.name : neoExample.name;
    neoExample.gender = req.body.gender;
    neoExample.email = req.body.email;
    neoExample.phone = req.body.phone;

    //Save the neoExample and check for errors
    neoExample.save(function (err) {
        if(err) {
            res.json(err);
        } else {
            res.json({
                message: 'New Example created!',
                data: neoExample
            })
        }
    });
};

// Handle view example info
exports.view = function (req, res) {
    Example.findById(req.params.example_id, function (err, example) {
        if (err)
            res.send(err);
        res.json({
            message: 'Example details loading..',
            data: example
        });
    });
};

// Handle update Example info
exports.update = function (req, res) {
    Example.findById(req.params.example_id, function (err, example) {
        if (err)
            res.send(err);
        example.name = req.body.name ? req.body.name : example.name;
        example.gender = req.body.gender;
        example.email = req.body.email;
        example.phone = req.body.phone;
// save the Example and check for errors
        example.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Example Info updated',
                data: example
            });
        });
    });
};
// Handle delete Example
exports.delete = function (req, res) {
    Example.remove({
        _id: req.params.example_id
    }, function (err, example) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Example deleted'
        });
    });
};
