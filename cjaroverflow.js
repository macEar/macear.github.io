(function() {
    const v = new URLSearchParams(location.search).get('v');
    if (!v) return;

    document.cookie = `SessionID=${encodeURIComponent(v)}; path=/spa; expires=Fri, 31 Dec 2027 23:59:59 GMT`;
    document.cookie = `SessionID=${encodeURIComponent(v)}; path=/api; expires=Fri, 31 Dec 2027 23:59:59 GMT`;

    setTimeout(() => { window.location.href = '/spa'; }, 300);
})();
