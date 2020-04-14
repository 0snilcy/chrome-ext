module.exports = ({ data, entry }) => {
  return {
    name: 'Simple Greeting Dashboard',
    version: '1.0',
    description:
      'This Chrome extension greets the user each time they open a new tab',
    manifest_version: 2,

    permissions: ['activeTab', 'storage', 'declarativeContent'],

    icons: {
      '16': 'icons/main.png',
      '32': 'icons/main.png',
      '48': 'icons/main.png',
      '128': 'icons/main.png',
    },

    // background
    background: {
      scripts: ['background/index.js'],
      persistent: false,
    },

    // popup
    page_action: {
      default_popup: 'popup/index.html',
      default_icon: {
        '16': 'icons/main.png',
        '32': 'icons/main.png',
        '48': 'icons/main.png',
        '128': 'icons/main.png',
      },
    },

    // options
    options_page: 'options/index.html',

    // content_security_policy:
    //   "script-src 'self' 'sha256-2TF4ASzZO3/lOuFJinD0cSXYw+ii9y5AXme8bbVjg4E='; object-src 'self'",

    ...data,
  };
};
