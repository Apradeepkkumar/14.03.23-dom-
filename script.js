function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}
function linebreak(tagname){
var br=document.createElement(tagname);
return br;
}
 var firstname=labels("labels","for","firstname","firstname");
 var br=linebreak("br");
 var input=inputs("input","type","firstname","name","firstname","id","firstname");
 var br1=linebreak("br")

 var middlename=labels("labels","for","middlename","middlename");
 var br6=linebreak("br");
 var input1=inputs("input","type","middletname","name","middlename","id","middlename");
 var br7=linebreak("br")

 var lastname=labels("labels","for","lastname","lastname");
 var br2=linebreak("br");
 var input2=inputs("input","type","lastname","name","lastname","id","lastname");
 var br3=linebreak("br")
 
 var email=labels("labels","for","email","email");
 var br4=linebreak("br");
 var input3=inputs("input","type","email","name","email","id","email");
 var br5=linebreak("br")

 var password=labels("labels","for","password","password");
 var br8=linebreak("br");
 var input4=inputs("input","type","password","name","password","id","password");
 var br9=linebreak("br")
 
 document.body.append(firstname,br,input,br1,middlename,br6,input1,br7,lastname,br2,input2,br3,email,br4,input3,br5,password,br8,input4,br9);
