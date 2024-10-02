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
                    <h5 class="modal-title" id="popupTitle">ALERT</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    This is a dynamically loaded Bootstrap popup!
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

        // Wait for Bootstrap JS to be fully loaded before showing the popup
        setTimeout(() => {
            var popup = new bootstrap.Modal(document.getElementById('customPopup'));
            popup.show();
        }, 500); // Adjust delay as needed
    }
}

// Call the function to load the popup when this script is executed
loadPopup();
