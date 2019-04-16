async function copyToClipboard(stringToCopy) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(stringToCopy);
      console.log('string copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
}