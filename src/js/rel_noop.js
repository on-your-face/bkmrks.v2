// ./js/rel_noop.js
export function initRelNoopener() {
    document.querySelectorAll('a.new_tab').forEach((link) => {
       link.setAttribute('rel', 'noopener noreferrer');
    });
 }