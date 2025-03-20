const Product = require("../model/product");
const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ price: { $gt: 30 } })
    .sort("name")
    .select("name price");

  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericfilters } = req.query;
  const queryobj = {};
  if (featured) {
    queryobj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryobj.company = company;
  }
  if (name) {
    queryobj.name = { $regex: name, $options: "i" };
  }
  let result = Product.find(queryobj);
  if (sort) {
    const sortlist = sort.split(",").join(" ");
    result = result.sort(sortlist);
  } else {
    result = result.sort("created");
  }
  if (fields) {
    const fieldlist = fields.split(",").join(" ");
    result = result.select(fieldlist);
  }
  if (numericfilters) {
    const operatorMap = {
      ">": "gt",
      ">=": "gte",
      "<": "lt",
      "<=": "lte",
      "=": "eq",
    };
    const regEx = /\b(>|>=|<|<=|=)\b/g;
    let filter = numericfilters.replace(
      regEx,
      (match) => `- ${operatorMap[match]} -`
    );
    const option = ["price", "rating"];
    filter = filter.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (option.includes(field)) {
        queryobj[field] = { [operator]: Number(value) };
      }
    });
    console.log(numericfilters);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const products = await result;
  res.status(200).json({ products });
};

module.exports = { getAllProducts, getAllProductsStatic };
