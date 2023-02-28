const uuid = require("uuid");
const photoRepository = require('../repository/photoRepository');

module.exports.getAllphotos = () => {
    const photoList = photoRepository.readJSONFile();
    return photoList;
}

module.exports.addphoto = (newphoto) => {
    const photoList = photoRepository.readJSONFile();
    newphoto.id=uuid.v4.apply();
    photoList.push(newphoto);
    photoRepository.writeJSONFile(photoList)
    return newphoto
}

module.exports.updatephoto = (photoID, photoName, photoImg) => {
    const photoList = photoRepository.readJSONFile();
  
    let foundphoto=null;
    for (let i=0; i<photoList.length; i++) 
        if (photoList[i].id===photoID) {
            photoList[i].name=photoName;
            photoList[i].img=photoImg;
            foundphoto=photoList[i];
            break;
        }
  
    photoRepository.writeJSONFile(photoList);
    return foundphoto;
}

module.exports.removephoto = (id) => {
    const photoList = photoRepository.readJSONFile();
    
    for (let i=0; i<photoList.length; i++) 
        if (photoList[i].id===id) {
            photoList.splice(i, 1); 
            foundphoto=photoList[i];
            break;
        }
    
    photoRepository.writeJSONFile(photoList);
    return foundphoto
}