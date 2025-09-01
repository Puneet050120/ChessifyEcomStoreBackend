const { v4: uuidv4 } = require('uuid');

exports.uploadImage = async (req, res) => {
  try {
    // In real case: you'd handle file with multer and upload to S3
    const filename = `${uuidv4()}.jpg`;
    const dummyUrl = `https://mocked-s3-bucket.s3.amazonaws.com/uploads/${filename}`;

    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully (mock)',
      url: dummyUrl,
    });
  } catch (error) {
    console.error('Mock image upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Image upload failed',
    });
  }
};
