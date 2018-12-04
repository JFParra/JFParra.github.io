let selectedTab = 2;
let buttonPlay = document.getElementById("button-play");
let buttonRewind = document.getElementById("button-rewind");
let inputTempo = document.getElementById("input-tempo");


let buttonTabs =
[
	document.getElementById("tab-file"),
	document.getElementById("tab-markers"),
	document.getElementById("tab-notes-chords"),
	
];


let drawers =
[
	document.getElementById("toolbox-drawer-file"),
	document.getElementById("toolbox-drawer-markers"),
	document.getElementById("toolbox-drawer-notes-chords"),
	
];


function toolboxInit()
{
	toolboxDrawerFileInit();
	toolboxDrawerMarkersInit();
	toolboxDrawerNotesChordsInit();
	
	
	buttonPlay.onclick = () => g_Editor.togglePlay();
	buttonRewind.onclick = () => g_Editor.rewind();
	
	inputTempo.onkeydown = (ev) => ev.stopPropagation();
	inputTempo.onchange = toolboxTempoRefresh;
	
	
	
	
	for (let i = 0; i < buttonTabs.length; i++)
	{
		buttonTabs[i].onclick = () =>
		{
			selectedTab = i;
			toolboxRefresh();
		};
		
		buttonTabs[i].className = (selectedTab == i ?
			"toolbox-tab-selected" : "toolbox-tab");
			
		drawers[i].style.display = (selectedTab == i ?
			"grid" : "none");
	}
}


function toolboxRefresh()
{
	for (let i = 0; i < buttonTabs.length; i++)
	{
		buttonTabs[i].className = (selectedTab == i ?
			"toolbox-tab-selected" : "toolbox-tab");
			
		drawers[i].style.display = (selectedTab == i ?
			"grid" : "none");
	}
}


function toolboxPlaybackRefresh(isPlaying)
{
	buttonPlay.childNodes[1].innerHTML = isPlaying ? "stop" : "play_arrow";
}


function toolboxTempoRefresh()
{
	var tempo = parseInt(inputTempo.value);
	
	if (Theory.isValidBpm(tempo))
		g_Song.bpm = tempo;
}

