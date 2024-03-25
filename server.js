const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


cloudinary.config({ 
  cloud_name: 'dnqtrffer', 
  api_key: '895854635433254', 
  api_secret: 'oWORx9J6YylJ5CazvO3VNTTIyf0' 
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
