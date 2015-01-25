/**
 * Created by JonnyDiesel on 12/20/2014.
 */
function validateform()
{

    for(i=0; i<myform.elements.length; i++){

        //ensures there is something in certain fields
        if(myform.elements[i].className == 'reg' && myform.elements[i].value.length == 0){

            alert('please fill in the required fields');
            return false;
        }

    }

    var email = document.getElementById('email').value;
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');
        if(atpos < 1 || dotpos < atpos + 2 || dotpos+2 >= x.length)
        {

            alert('please type a valid email address');
            return false;
        }
}