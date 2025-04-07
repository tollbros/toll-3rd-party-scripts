function loadThirdPartyScript() {
    const script = document.createElement('script');
    script.src = "./external-assets/third-party.js"; 
    script.onload = function() {
        console.log('3rd party script loaded successfully.');
        const theElement = document.getElementById('content_space');
        thirdPartyInit(theElement); 

    };
    script.onerror = function() {
        console.error('Failed to load the 3rd party script.');
    };
    document.head.appendChild(script);
}

function loadThirdPartyCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './external-assets/third-party.css'; 
    link.onload = function() {
        console.log('3rd party CSS loaded successfully.');
    };
    link.onerror = function() {
        console.error('Failed to load the 3rd party CSS.');
    };
    document.head.appendChild(link);
}

function loadThirdPartyAssets() {
    loadThirdPartyCSS();
    loadThirdPartyScript();
}

window.Toll = {};

Toll.doThing = function(myValue) {
    console.log('Toll.doThing called with value:', myValue);
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `third-party div clickded: <strong>${myValue}</strong>`;

}

document.getElementById('toggleButton').addEventListener('click', loadThirdPartyAssets);