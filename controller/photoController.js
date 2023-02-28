let express = require('express')
let router = express.Router();

const photoService = require('../service/photoService');

// Create
router.post("/photos", (req, res) => {
    let newphoto = photoService.addphoto(req.body);
    res.status(200).send(newphoto);
  });
  
// Read One
router.get("/photos/:id", (req, res) => {
  const photosList = readJSONFile();
  // Fill in your code here
});

// Read All
router.get("/photos", (req, res) => {    //  req = request; res = response
  const photosList = photoService.getAllphotos();
  if (photosList!==undefined && photosList.length!==0) {
      res.status(200).send(photosList);
  } else {
      res.status(204).send('No photo found!');
  }
});

// Update
router.put("/photos/:id", (req, res) => {
  let foundphoto = photoService.updatephoto(req.params.id, req.body.name, req.body.img);
  if (foundphoto!==null) res.status(200).send(foundphoto);
  else res.status(204).send('No photo found');
});
  
// Delete
router.delete("/photos/:id", (req, res) => {
    let foundphoto = photoService.removephoto(req.params.id);
    if (foundphoto!==null) res.status(200).send(foundphoto);
    else res.status(204).send('No photo found');
});
  

module.exports = router;