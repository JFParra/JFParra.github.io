let buttonNew = document.getElementById("button-new");
let buttonSaveLink = document.getElementById("button-save-link");


function toolboxDrawerFileInit()
{
	buttonNew.onclick = toolboxNew;
	buttonSaveLink.onclick = toolboxGenerateLink;
	
}


function toolboxNew()
{
	if (!askUnsavedChanges())
		return;
	
	clearSongData();
	g_Editor.setUnsavedChanges(false);
	refreshURL(null);
}


function toolboxGenerateLink()
{
	var songData = g_Song.saveBinary();
	g_Editor.setUnsavedChanges(false);
	refreshURL(songData);
}



function toolboxSaveString()
{
	var songData = g_Song.saveJSON();
	var data = "data:text/plain," + encodeURIComponent(songData);
	window.open(data);
	g_Editor.setUnsavedChanges(false);
}



function toolboxSaveCompressed()
{
	var songData = g_Song.saveBinary();
	var data = "data:text/plain," + encodeURIComponent(songData);
	window.open(data);
	g_Editor.setUnsavedChanges(false);
}


