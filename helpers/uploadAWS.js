const s3 = require('../config/aws.js');
const short = require('short-uuid');

const uploadFile = async (file) => {
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: short.generate() + '-' + file.name,
        Body: file.data,
        ACL: 'public-read'
    };
    const data = await s3.upload(params).promise();
    return data.Location;
};

module.exports = uploadFile;