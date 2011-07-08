var request;  // global request object to be used by different methods.

function getRequestObject()
{
  if (window.ActiveXObject) {
    return(new ActiveXObject("Microsoft.XMLHTTP"));
  } else if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else {
    return(null);                 
                                   
  }
}
function sendTextRequest(){
       request = getRequestObject();

       request.onreadystatechange = handleResponse;

       request.open("GET","Test.txt", true);

       request.send(null);
}
function handleResponse() {
      if( request.readyState == 4  && 
         request.status == 200 ) {
         newsText = request.responseText;
         newsDiv = document.getElementById("schedule");
         newsDiv.innerHTML = newsText;
     }
}
