import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker is not supported in this browser');
    return;
  }

  const wbox = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wbox.register();
    console.log('Service worker registered !!');
  } catch (error) {
    console.log('Failed to register service worker, please try again !!', error);
  }
};

export default swRegister;
