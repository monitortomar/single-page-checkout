const Product = require("../model/product_model");
const Promo = require("../model/promo_model");

const express = require("express");
const router = express.Router();

const addProduct = () => {
  Product.find({}, (err, result) => {
    if (err) {
      return { success: false, error: err };
    }
    if (!result.length) {
      addProductData(err, (data) => {});
    }
  });
};

const addProductData = () => {
  Product.insertMany(
    [
      {
        id: 1,
        name: "Managed Security Services",
        url: "https://picsum.photos/id/180/300/200",
        price: "$2549.99",
      },
      {
        id: 2,
        name: "Engineering & integration",
        url: "https://picsum.photos/id/0/300/200",
        price: "$1025.50",
      },
      {
        id: 3,
        name: "Training",
        url: "https://picsum.photos/id/1/300/200",
        price: "$100",
      },
    ],
    (err, product) => {
      if (err) {
        return { success: false, error: err };
      }
      if (!product.length) {
        return { success: false, error: "No data found" };
      }

      return { success: true, data: product };
    }
  );
};

const addPromo = () => {
  Promo.find({}, (err, result) => {
    if (err) {
      return { success: false, error: err };
    }
    if (!result.length) {
      addPromoData(err, (data) => {});
    }
  });
};

const addPromoData = () => {
  Promo.insertMany(
    [
      {
        code: "RRD4D32",
        description: "10% discount for orders above $5000 (pre-discount)",
        status: false,
      },
      {
        code: "44F4T11",
        description: "15% discount for orders above $10000 (pre-discount)",
        status: false,
      },
    ],
    (err, promo) => {
      if (err) {
        return { success: false, error: err };
      }
      if (!promo.length) {
        return { success: false, error: "No data found" };
      }

      return { success: true, data: promo };
    }
  );
};

addProduct();
addPromo();

router.get("/product", (req, res) => {
  Product.find((err, product) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!product.length) {
      Product.insertMany(
        [
          {
            id: 1,
            name: "Managed Security Services",
            price: "$2549.99",
          },
          {
            id: 2,
            name: "Engineering & integration",
            price: "$1025.50",
          },
          {
            id: 3,
            name: "Training",
            price: "$100",
          },
        ],
        (err, pro) => {
          if (err) {
            return { success: false, error: err };
          }
          if (!product.length) {
            return { success: false, error: "No data found" };
          }
          return { success: true, data: pro };
        }
      );
    }

    return res.status(200).json({ success: true, data: product });
  });
});

router.get("/promo", (req, res) => {
  Promo.find({}, (err, promo) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!promo.length) {
      return res.status(400).json({ success: false, error: "No data found" });
    }

    return res.status(200).json({ success: true, data: promo });
  });
});

router.post("/update_promo", (req, res) => {
  const data = req.body;
  Promo.updateOne(data, { $set: { status: true } }, (err, promo) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!promo.length) {
      return res.status(400).json({ success: false, error: "No data found" });
    }

    return res.status(200).json({ success: true, data: promo });
  });
});

module.exports = router;
