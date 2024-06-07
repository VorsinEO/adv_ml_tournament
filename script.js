document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll('h1, h2');

    function generateNav(navElement) {
        const ul = document.createElement('ul');
        let currentH1Li = null;

        headers.forEach(header => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = header.textContent;
            a.href = '#' + header.id;

            li.appendChild(a);

            if (header.tagName.toLowerCase() === 'h1') {
                li.classList.add('h1-item');
                ul.appendChild(li);
                currentH1Li = li;  // Remember the current H1 <li>
            } else if (header.tagName.toLowerCase() === 'h2') {
                li.classList.add('h2-item');
                if (currentH1Li) {
                    // Find or create a nested <ul> under the current H1 <li>
                    let subUl = currentH1Li.querySelector('ul');
                    if (!subUl) {
                        subUl = document.createElement('ul');
                        currentH1Li.appendChild(subUl);
                    }
                    subUl.appendChild(li);
                } else {
                    ul.appendChild(li); // Fallback in case no H1 is found
                }
            }
        });

        navElement.appendChild(ul);
    }

    const navLeft = document.getElementById('dynamic-nav');
    generateNav(navLeft);
});