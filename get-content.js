
document.getElementById("test").addEventListener('click', () => {
  console.log("Popup DOM fully loaded and parsed");

  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      const allParagraphs = [];
      
      document.querySelectorAll('p').forEach((item) => {
        allParagraphs.push(item.innerHTML);
      });
      
      console.info('All P Tags > ', allParagraphs);
      return document.body.innerHTML;
  }

  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
      code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      //Here we have just the innerHTML and not DOM structure
      console.log('Popup script:')
      console.log(results[0]);
  });
});