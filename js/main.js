function closeBanner() {
    document.getElementById('construction-banner').style.display = 'none';
}

function copyAddress() {
    const address = document.getElementById('contractAddress').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert('Contract Address Copied!');
    });
}
