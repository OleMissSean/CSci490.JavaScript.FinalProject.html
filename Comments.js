/*
  Comments.js
  Sean Staz
  CSci 490 ~ Special Topics: JavaScript
  01/13/2014
*/

// *3.d* Demonstrate the handling of onfocus.
// *6* Demonstrate the use of AJAX to send and receive data to/from the web server
// *7* Uses server-side code to process the request.
// This script performs an Ajax request for the Comments Form.

/*
 * @param {Event} e
 * @return {undefined}
 */

// Function that handles the Ajax response.
function handleAjaxResponse(e) 
{
  // Get the event object:
  if (typeof e == "undefined") 
  {
    e = window.event;
  }
  // Get the event target:
  var xmlhttp = e.target || e.srcElement;
  // Check the readyState property:
  if (xmlhttp.readyState == 4) 
  {
    // Check the status code:
    if (xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status == 304) 
    {
        // Update the page:
        document.getElementById("contactForm").innerHTML = xmlhttp.responseText;
    } else 
    {
        // Status Error
        document.getElementById("theForm").submit();
    }
    /** @type {null} */
    xmlhttp = null;
  }// End of readyState IF.
}// End of handleAjaxResponse() function.

/*
 * @return {undefined}
 */
// Establish functionality on window load:
window.onload = function() 
{
  // Create the Ajax object:
  var client = getXMLHttpRequestObject();

  /** @type {function (Event): undefined} */
  // Function to be called when the readyState changes:
  client.onreadystatechange = handleAjaxResponse;

  /**
   * @return {?}
   */
  // Add an event handler to the form's submission:
  document.getElementById("theForm").onsubmit = function() 
  {

    /** @type {Array} */
    // Data Creation
    var values = ["name", "email", "comments"];
    /** @type {Array} */
    var replies = [];
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var valuesLen = values.length;
    //Pushing data into the replies array:
    for (;i < valuesLen;i++) 
    {
      replies.push(encodeURIComponent(values[i]) + "=" + encodeURIComponent(document.getElementById(values[i]).value));
    }
    // Log the Data to the console:
    console.log(replies);
    // *7* Uses server-side code to process the request.
    // Open the Ajax request:
    client.open("POST", "resources/Comments.php", true);
    client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // Send a request:
    client.send(replies.join("&"));
    return false;
  };// End of onsubmit function.

      'use strict';
    // Establish functionality on document ready:
    $(document).ready(function ()
    {
        // When input is focused change background color of the selection
        $("input").focus(function ()
        {
            $(this).css("background-color", "#cccccc");
        });
        $("input").blur(function ()
        {
            $(this).css("background-color", "#ffffff");
        });
    });
};// End of onload function.
