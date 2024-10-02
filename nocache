function loadPopup() {
    // Check if Bootstrap CSS is already loaded
    if (!document.getElementById('bootstrapCSS')) {
        let bootstrapCSS = document.createElement('link');
        bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
        bootstrapCSS.rel = "stylesheet";
        bootstrapCSS.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
        bootstrapCSS.crossOrigin = "anonymous";
        bootstrapCSS.id = 'bootstrapCSS';
        document.head.appendChild(bootstrapCSS);
    }

    // Check if Bootstrap JS is already loaded
    if (!document.getElementById('bootstrapJS')) {
        let bootstrapJS = document.createElement('script');
        bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
        bootstrapJS.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
        bootstrapJS.crossOrigin = "anonymous";
        bootstrapJS.id = 'bootstrapJS';
        document.body.appendChild(bootstrapJS);
    }

    // Create popup HTML structure
    let popupHTML = `
    <div class="modal fade" id="customPopup" tabindex="-1" role="dialog" aria-labelledby="popupTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="popupTitle">Results</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="modalBody">
                    Loading...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;

    // Append the popup to the body if it doesn't exist
    if (!document.getElementById('customPopup')) {
        let div = document.createElement('div');
        div.innerHTML = popupHTML;
        document.body.appendChild(div);
    }

    // Show the modal
    let popup = new bootstrap.Modal(document.getElementById('customPopup'));
    
    // Call functions to get results and display them
    let results = getMetaInfo();
    results += noindexCheck();
    document.getElementById('modalBody').innerHTML = results;
    popup.show();
}

// Function to gather and display meta tags
function getMetaInfo() {
    let metaTags = document.getElementsByTagName('meta');
    let title = document.title;
    let metaInfo = {};
    metaInfo['Title'] = (title ? title : '<span style="color:red;">NOT FOUND</span>');

    for (let i = 0; i < metaTags.length; i++) {
        let metaTag = metaTags[i];
        let name = metaTag.getAttribute('name') || metaTag.getAttribute('property');
        let content = metaTag.getAttribute('content');
        if (name) {
            metaInfo[name.replace(/:/g, ' ')] = content || '<span style="color:red;">NOT FOUND</span>';
        }
    }

    // Create output
    let output = '<pre>';
    for (let key in metaInfo) {
        output += `<b>${key}:</b> ${metaInfo[key]}\n`;
    }
    output += '</pre>';
    return output;
}

// Function to check for noindex meta tag
function noindexCheck() {
    let metaTags = document.getElementsByTagName('meta');
    let noIndexPresent = false;

    for (let i = 0; i < metaTags.length; i++) {
        let metaTag = metaTags[i];
        if (metaTag.getAttribute('name') === 'robots' && metaTag.getAttribute('content').includes('noindex')) {
            noIndexPresent = true;
            break;
        }
    }
    
    return `<h2 style="color: ${noIndexPresent ? 'red' : 'green'};">Noindex tag is ${noIndexPresent ? 'present' : 'NOT present'}</h2>`;
}

// Call the function to load the popup when this script is executed
loadPopup();
