const { response } = require("express");

const { uploadFileToServer } = require("../helpers");


const uploadFile = async (req, res = response) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  try {
    // images
    const filename = await uploadFileToServer(req.files, undefined, 'imgs');
    // text
    // const filename = await uploadFileToServer(req.files, ['txt', 'md'], 'text');
    
    res.json({
      filename
    })
  } catch (msg) {
    res.status(400).json({ msg })
  }
}

module.exports = {
  uploadFile,
}