const coolImages = require("cool-images");

const generateDataSet = (arrayLength) => {
  const array = Array(arrayLength);
  for (let i = 0; i < arrayLength; i++)
    array.push({
      image: coolImages.one(),
      price: Math.ceil(Math.random() * 10),
      title: `Card title ` + Math.ceil(Math.random() * 100),
    });
  return array;
};

module.exports = { generateDataSet };
