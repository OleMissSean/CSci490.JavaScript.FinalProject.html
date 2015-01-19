/*
  ajax.js
  Sean Staz
  CSci 490 ~ Special Topics: JavaScript
  01/13/2014
*/

// *6* Demonstrate the use of AJAX to send and receive data to/from the web server
// This script defines a function that creates an XMLHttpRequest object.

/**
 * @return {?}
 */
 // This function returns an XMLHttpRequest object.
function getXMLHttpRequestObject()
{
  /** @type {null} */
  var xmlhttpmethod = null;
  // Most browsers:
  if (window.XMLHttpRequest)
  {
    /** @type {XMLHttpRequest} */
    xmlhttpmethod = new XMLHttpRequest;
  } else 
  {
    if (window.ActiveXObject)
    {
      xmlhttpmethod = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
  }
  // Return the object:
  return xmlhttpmethod;
};// End of getXMLHttpRequestObject() function.
