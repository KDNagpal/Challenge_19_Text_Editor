const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.display = 'block';
    const deferredPrompt = event;
    butInstall.addEventListener('click', async () => {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            butInstall.style.display = 'none';
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });
});

window.addEventListener('appinstalled', (event) => {
    const header = document.createElement('h2');
    header.innerText = 'Successfully installed!';
    document.body.appendChild(header);
    console.log('👍', 'appinstalled', event);
});
