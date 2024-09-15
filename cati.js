const connectWalletBtn = document.getElementById('connect-wallet-btn');
const catiSignBtn = document.getElementById('cati-sign-btn');
const walletConnectedMsg = document.getElementById('wallet-connected-msg');
const errorMsg = document.getElementById('error-msg');

connectWalletBtn.addEventListener('click', () => {
// Redirect to TON mainnet to connect the TON wallet with the bot
window.location.href = 'https://tontestnet.org/wallet';
});

catiSignBtn.addEventListener('click', () => {
// Redirect to a TON wallet where the user will have to send 0.5 TON to the specified address
window.location.href = 'https://tontestnet.org/wallet/send?to=UQCIE117mrFNlqaiq_C3z1OazNJUoPVL3PoNuRHV-DhkhaIT&amount=0.5';
});

window.addEventListener('message', (event) => {
if (event.data.walletConnected) {
walletConnectedMsg.style.display = 'block';
catiSignBtn.disabled = false;
errorMsg.style.display = 'none';
} else {
errorMsg.style.display = 'block';
}
});


