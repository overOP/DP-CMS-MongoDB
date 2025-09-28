const express = require("express");
const app = express();
const { connectToDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

// Database connection function call
connectToDatabase();
// const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://CMS:CMS@cluster0.5cgz7xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
  });
});


// Get All Blogs API
app.get("/getAllBlogs", async (req, res) => {
  const allBlogs = await Blog.find();
  try {
    res.status(200).json({
      message: "Get All Blogs API",
      data: allBlogs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Get Single Blog API
app.get("/getSingleBlog/:id", async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  try {
    res.status(200).json({
      message: "Get Single Blog API",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// Create Blog API
  app.post("/createBlog", async (req, res) => {
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description
    // Alternative(Destructuring)
    // const { title, subTitle, description } = req.body;

    // Insert to database 
    console.log("Request Body:", req.body);
    await Blog.create({
      title: title,
      subTitle: subTitle,
      description: description,
    });


  res.json({
    status: 201,
    message: "Create Blog API",
  });

  // Alternative
  // res.status(200).json({
  //   message: "Create Blog API",
  // });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
