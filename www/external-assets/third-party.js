

function thirdPartyInit(targetElement) {
    console.log('third-party.js - thirdPartyInit called');
    
    console.log('targetElement:', targetElement);
    if (!targetElement) {
        console.error('targetElement is not provided');
        return;
    }

    const clicker = function(evt) {
        console.log('third-party.js - div clicked!');
        Toll.doThing(evt.target.id);
    };

    targetElement.innerHTML = '';  
    for (let i = 0; i < 3; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("thirdParty");
        newDiv.id = `third-party-div-${i + 1}`; // Assign a unique ID for each div
        newDiv.addEventListener('click', clicker); // Add click event listener to the new div
        newDiv.textContent = `This is div ${i + 1} added by third-party script`;
        newDiv.style.border = '1px solid black';
        newDiv.style.margin = '5px';
        newDiv.style.padding = '10px';

        targetElement.appendChild(newDiv);
    }
}

console.log('third-party.js  - file loaded and parsed');