walk(document.body);

function walk(node) 
{
	// I stole this function from someone who stole this function from here:
	// http://is.gd/mwZp7E
	
	// MLB added the check for the date, because it's only spooky if it's in spooktober ...

	var d = new Date();
	if(d.getMonth()==9) // 9 is spooktober
	{
		var child, next;

		switch ( node.nodeType )
		{
			case 1:  // Element
			case 9:  // Document
			case 11: // Document fragment
				child = node.firstChild;
				while ( child ) 
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;

			case 3: // Text node
				handleText(node);
				break;
		}
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bSpooky\b/g, "Spoopy");
	v = v.replace(/\bspooky\b/g, "spoopy");
	v = v.replace(/\b.*Halloween\b/g, "Spookloween");
	v = v.replace(/\b.*halloween\b/g, "spookloween");
	v = v.replace(/\bAllhallowe\'en\b/g, "Allspooklowe\'en");
	v = v.replace(/\ballhallowe\'en\b/g, "allspooklowe\'en");
	v = v.replace(/\bHallows\b/g, "Spookles");
	v = v.replace(/\bhallows\b/g, "spookles");
	textNode.nodeValue = v;
}
