const express = require("express");
const TravelPackage = require("../models/travelpackages");
const ReviewData = require("../models/TravelPackageRating");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../w2h-Frontend/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/admin/add", upload.single("packageImage"), (req, res) => {
  const newTravelPackage = new TravelPackage({
    packageName: req.body.packageName,
    destination: req.body.destination,
    discription: req.body.discription,
    date: req.body.date,
    noofdays: req.body.noofdays,
    noofnights: req.body.noofnights,
    vehical: req.body.vehical,
    perperson: req.body.perperson,
    packageImage: req.file.originalname,
  });
  newTravelPackage
    .save()
    .then(() => res.json("New Travel TravelPackage Added"))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

const item_per_page = 6
router.get("/", async (req, res) => {
  const page = req.query.page || 1;
  const query = {};
  try {
    const skip = (page-1)*item_per_page;
    const count = await TravelPackage.estimatedDocumentCount(query);
    const items = await TravelPackage.find(query).limit(item_per_page).skip(skip);
    const pageCount = count/item_per_page;
    const data = await TravelPackage.find();
    const dataMapping = await items?.map(async (da) => {
      const reviews = await ReviewData.find({ packageId: da._id });

      return {
        packageName: da.packageName,
        id: da._id,
        destination: da.destination,
        discription: da.discription,
        date: da.date,
        noofdays: da.noofdays,
        noofnights: da.noofnights,
        vehical: da.vehical,
        perperson: da.perperson,
        packageImage: da.packageImage,
        reviewsAvg:
          reviews.length === 0
            ? 0
            : reviews.map((re) => re.rating).reduce((a, b) => a + b) /
              reviews.length,
        pagination : {
          count,
          pageCount
        },
        items
      };
    });

    const promiseMappedData = await Promise.all(dataMapping);
    return res.json({
      success: true,
      existingPackage: promiseMappedData,
      items:items
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
});

router.get("/admin/:id", (req, res) => {
  let packageId = req.params.id;
  TravelPackage.findById(packageId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
});

// router.put("/admin/update/:id", upload.single("packageImage"), (req, res) => {
//   TravelPackage.findByIdAndUpdate(req.params.id)
//     .then((package) => {
//       package.packageName = req.body.packageName;
//       package.destination = req.body.destination;
//       package.discription = req.body.discription;
//       package.date = req.body.date;
//       package.noofdays = req.body.noofdays;
//       package.noofnights = req.body.noofnights;
//       package.vehical = req.body.vehical;
//       package.perperson = req.body.perperson;
//       package.packageImage=req.file.originalname;
//       package
//         .save()
//         .then(() => res.json("The TravelPackage is UPDATED successfully"))
//         .catch((err) => res.status(400).json(`Error: ${err}`));
//     })
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

router.delete("/admin/delete/:id", (req, res) => {
  TravelPackage.findByIdAndRemove(req.params.id).exec(
    (err, deletedTravelPackage) => {
      if (err)
        return res.status(400).json({
          message: "TravelPackage Delete unsuccesful",
          err,
        });
      return res.json({
        message: "TravelPackage Delete succesful",
        deletedTravelPackage,
      });
    }
  );
});







// router.get("/getallpackage", async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) - 1 || 0;
//     const limit = parseInt(req.query.limit) || 2;
//     const search = req.query.search || "";
//     let sort = req.query.sort || "rating";
//     let genre = req.query.genre || "All";

//     const genreOptions = [
//       "Wild life adventure",
//       "Mountain Trekking",
//       "Temples",
//     ];

//     genre === "All"
//       ? (genre = [...genreOptions])
//       : (genre = req.query.genre.split(","));
//     req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

//     let sortBy = {};
//     if (sort[1]) {
//       sortBy[sort[0]] = sort[1];
//     } else {
//       sortBy[sort[0]] = "asc";
//     }

//     const movies = await TravelPackage.find({ packageName: { $regex: search, $options: "i" } })
//       .where("genre")
//       .in([...genre])
//       .sort(sortBy)
//       .skip(page * limit)
//       .limit(limit);

//     const total = await TravelPackage.countDocuments({
//       genre: { $in: [...genre] },
//       packageName: { $regex: search, $options: "i" },
//     });

//     const response = {
//       error: false,
//       total,
//       page: page + 1,
//       limit,
//       genres: genreOptions,
//       movies,
//     };

//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: true, message: "Internal Server Error" });
//   }
// });

module.exports = router;
