export default async () => {
    if (!('serviceWorker' in navigator)) {
        return;
    }
    // todo : getting error The script has an unsupported MIME type ('text/html').
    const swRegistration = await navigator.serviceWorker.register('/sw.js');
    console.log('swRegistration', swRegistration);
};
