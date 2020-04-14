module.exports = {
  data: {
    name: 'Simple Greeting Dashboard',
    description:
      'This Chrome extension greets the user each time they open a new tab',
    version: '1.0',
  },

  entry: {
    background: true,
    popup: true,
    options: true,
  },
};
