const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime(),
    createdDate:
      new Date().getMonth() +
      1 +
      "/" +
      new Date().getDate() +
      "/" +
      new Date().getFullYear(),
  };
};

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getTime(),
    createdDate:
      new Date().getMonth() +
      1 +
      "/" +
      new Date().getDate() +
      "/" +
      new Date().getFullYear(),
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
