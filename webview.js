const { ipcRenderer } = require('electron');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = Math.round(document.querySelectorAll('.unread.unread-mention, .badge--unread').length / 2);
    const indirectMessages = Math.round(document.querySelectorAll('.unread:not(.unread-mention), .sidebar-item--unread').length / 2);
    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
