const Vehicle = require('../models/Vehicle');

exports.getIndex = async (req, res) => {
    const vehicle = await Vehicle.find((data) => data);

    try {
        console.log(vehicle);
        // Data rendered as an object and passed down into index.ejs
        // res.status(200).render('index', { vehicle: vehicle });

        // Data returned as json so a fetch/axios requst can get it
        res.json(vehicle);

    } catch (error) {
        console.log(error);
    }
};

exports.getVehicle = async (req, res) => {
    const vehicleId = req.params.vehicleId;

    const vehicle = await Vehicle.findById(vehicleId, (vehicle) => vehicle);

    try {
        console.log(vehicle);
        res.status(200).render('vehicle', { vehicle: vehicle });
        
    } catch (error) {
        console.log(error);
    }
};

// exports.getAddAnime = (req, res) => {
//     res.status(200).render('edit-anime');
// };

// exports.postAnime = (req, res) => {
//     const { name, image, description } = req.body;

//     const anime = new Anime({ name: name, image: image, description: description });
//     anime.save();
//     console.log('Anime Added to the database');
//     res.status(201).redirect('/');
// };
