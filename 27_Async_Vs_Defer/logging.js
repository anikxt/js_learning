// Asynchronous vs Defer Loading

/* always using defer is recommended.  
probably not ever using async
and try to avoid normal loading unless you put it at the end of your body */

const startTime = new Date();

logWithTime('Start HTML Parse');

window.addEventListener('load', () => {
  logWithTime('Document Rendered');
});

function logWithTime(message) {
  console.log(new Date() - startTime + 'ms - ' + message);
}
