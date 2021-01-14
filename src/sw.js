window.self.addEventListener('install', event => {
    console.log('install event', event);
});
window.self.addEventListener('activate', event => {
    console.log('activate event', event);
});
