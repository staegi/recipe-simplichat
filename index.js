module.exports = Franz => class SimpliChat extends Franz {
  async validateUrl(url) {
    try {
      const resp = await window.fetch(`${url}/api/info`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();

      return Object.hasOwnProperty.call(data, 'version');
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
