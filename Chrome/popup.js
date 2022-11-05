    // User Options Settings
    function save_options() {
        var sugVid = document.getElementById('sugVid').checked;
        chrome.storage.sync.set({
          sugVid: sugVid
        }, function() {
            
          // Update status to let user know options were saved.
          var status = document.getElementById('status');
          status.textContent = 'Options saved.';
          setTimeout(function() {
            status.textContent = '';
          }, 750);
        });
      }
  
      function restore_options() {
        chrome.storage.sync.get({
          sugVid: true
        }, function(items) {
  
          document.getElementById('sugVid').checked = items.sugVid;
        });
      }
      document.addEventListener('DOMContentLoaded', restore_options);
  
      document.getElementById('save').addEventListener('click',save_options);