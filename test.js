(function() {
  // Load Bootstrap CSS
  var bootstrapCss = document.createElement('link');
  bootstrapCss.rel = 'stylesheet';
  bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
  bootstrapCss.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
  bootstrapCss.crossOrigin = 'anonymous';
  document.head.appendChild(bootstrapCss);

  // Load Bootstrap JS
  var bootstrapJs = document.createElement('script');
  bootstrapJs.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
  bootstrapJs.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
  bootstrapJs.crossOrigin = 'anonymous';
  document.body.appendChild(bootstrapJs);

  // Wait until Bootstrap JS is fully loaded before showing the modal
  bootstrapJs.onload = function() {
    // Create the modal HTML structure
    if (!document.getElementById('myAlertModal')) {
      var modalHtml = `
        <div class="modal fade" id="myAlertModal" tabindex="-1" aria-labelledby="alertLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="alertLabel">Alert</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h1>ALERT</h1>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>`;
      
      var div = document.createElement('div');
      div.innerHTML = modalHtml;
      document.body.appendChild(div);

      // Show the modal
      var modal = new bootstrap.Modal(document.getElementById('myAlertModal'));
      modal.show();
    }
  };
})();
