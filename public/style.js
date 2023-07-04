function setLeft(x)
{
document.getElementById("marginTarget").style.marginLeft=""+x+"%";
}

function setRight(x)
{
document.getElementById("marginTarget").style.marginRight=""+x+"%";
}

function setText(x, c)
{
document.getElementById("marginTarget").style.color=x;
var tds=c.parentNode.childNodes;
for (i=0;i<tds.length;i++)
	if (tds[i].className=="ts")
		tds[i].style.borderColor="gray";
c.style.borderColor="black";
}

function setBg(x, c)
{
document.getElementById("bgTarget").style.backgroundColor=x;
var tds=c.parentNode.childNodes;
for (i=0;i<tds.length;i++)
	if (tds[i].className=="bg")
		tds[i].style.borderColor="gray";
c.style.borderColor="black";
}