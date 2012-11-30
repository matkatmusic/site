function setupEvents()
{
	var targs = ["nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Bio",
	 			"give_me_jesus_infoPop", 
				"poor_butterfly_infoPop", 
				"nocturne_infoPop", 
				"untitled_infoPop", 
				"star_eyes_infoPop", 
				"amazing_grace_infoPop",
				"cheeze_infoPop",
				"hollywood_tango_infoPop",
				"peggys_tango_infoPop",
				"studio_orch_2k5_infoPop",
				"like_2_luv_you_infoPop",
				"vientos_infoPop",
				"operation_gpp_infoPop",
				"walt_vigs_infoPop",
	 			"give_me_jesus_player", 
				"poor_butterfly_player", 
				"nocturne_player", 
				"untitled_player", 
				"star_eyes_player", 
				"amazing_grace_player",
				"cheeze_player",
				"hollywood_tango_player",
				"peggys_tango_player",
				"studio_orch_2k5_player",
				"like_2_luv_you_player",
				"vientos_player",
				"operation_gpp_player",
				"walt_vigs_player"
				];
				
	var funcs = [ 	 navigateTo,  navigateTo,  navigateTo,  navigateTo,
					 gmjInfo,  pbInfo,  nocturneInfo,  untitledInfo,  starEyesInfo,  amazingGraceInfo, cheezeInfo, hollywoodTangoInfo, peggysTangoInfo, studioOrch2k5Info, like2LuvYouInfo, vientosInfo, operationGPPInfo, waltVigsInfo,
					 gmjInfo,  pbInfo,  nocturneInfo,  untitledInfo,  starEyesInfo,  amazingGraceInfo, cheezeInfo, hollywoodTangoInfo, peggysTangoInfo, studioOrch2k5Info, like2LuvYouInfo, vientosInfo, operationGPPInfo, waltVigsInfo
				];
	var args = ["nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Bio",
				"null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null",
				"null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null" ];
	var i;
	var a, b, c, d;
	for( i = 0; i < targs.length; i++ )
	{
		a = targs[i];
		b = funcs[i];
		c = args[i];
		d = document.getElementById( a );
		createEvent( d, b, c );
	}
	
}
function createEvent( elem, func, arg )
{
	elem.addEventListener( 'click', function(){ func( arg ); }, false );
}

function showText(loc, text)
{
	var a = document.getElementById( loc );
	while( a.hasChildNodes() )
	{
		a.removeChild( a.firstChild );
	}
	var nt = document.createTextNode( text );
	a.appendChild( nt );
}
function appendList( loc, list )
{
	//only call after calling showText()
	var a = document.getElementById( loc );
	//create a new list
}
function appendText()
{
	//create a appendedText object
	var a = document.getElementById( "main-content" )
	a = a.getElementsByTagName( "appendedtext" );
	var i, at;
	for( i = 0; i < a.length; i++ )
	{
		at = a[i];
		at.style.display = "inline";
	}
}
function unAppendAllText()
{
	var a = document.getElementById( "main-content" )
	a = a.getElementsByTagName( "appendedtext" );
	var i, at;
	for( i = 0; i < a.length; i++ )
	{
		at = a[i];
		at.style.display = "none";
	}
}
function navigateTo( loc )
{
	var i;
	var l = ["nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Bio"];
	var f = [ showJazz, showClassical, showContemporary, showBio ];
	var n;
	for( i = 0; i< l.length; i++)
	{
		if( loc == l[i] )
		{
			//clicked on this link
			document.getElementById( loc ).className="active";
			f[i]();	
		}
		else
		{
			//didn't click on this
			document.getElementById( l[i] ).className="";
		}
	}
}

function gmjInfo(e)
{
	var t = "This is an arrangement of \"Give Me Jesus\" that I wrote for the 33-piece Brass Band of Battle Creek.It was performed on their christmas 2005 concert.  It features Morris Robinson of the MET opera on Vocals and Wycliffe Gordon on Trombone.";
	showText('sidenav_info', t );
	showText('sidenav_title', "Info - Give Me Jesus" );
}
function pbInfo(e)
{
	var t = "This is my arrangement of Poor Butterfly for a 17piece big band.  It features the saxophones in a soli based on Cannonball Adderley's solo from 'Cannonball Takes Charge'!";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Poor Butterfly" );
	
}
function nocturneInfo(e)
{
	var t = "This is my arrangement of Chopin's Nocturne in Eb Major for woodwind quintet.";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Nocturne" );
}
function untitledInfo(e)
{
	var t = "This is a simple tune i wrote and spent a lot of time sequencing everything.  I'm playing everything either live, or programmed"
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Untitled(contemporary)" );
}
function starEyesInfo(e)
{
	var t = "this is a nonet recording of Star Eyes from my days at MSM.  it's one of the first pieces i had performed."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Star Eyes" );
}
function amazingGraceInfo(e)
{
	var t = "This is my arrangement of Amazing Grace.  it's a simple duet, piano and sax.   I'm playing both parts."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Amazing Grace" );
}
function cheezeInfo(e)
{
	var t = "This is my original piece 'I Luvs me Some Cheeze'.  It was a commission for the NYC All-City Jazz Ensemble, a high school jazz ensemble."
	t += "this version was updated for the Manhattan School of Music Jazz Orchestra while I was attending, to take advantage of the better players."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - I Luvs Me Some Cheeze" );
}

function hollywoodTangoInfo(e)
{
	var t = "This is a composition of mine for studio orchestra.   The recording is from my graduation recital for the Masters Program at MSM, where I put together a 45-piece band!";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Hollywood Tango" );
}
function peggysTangoInfo(e)
{
	var t = "This is my original composition.A friend commissioned me to write her a solo piano piece.This is the orchestration of that piece for the studio orchestra.I tend to write solo piano pieces (black and white) and then try to 'repaint' them in color with the orchestra.  This recording is from my master's graduation recital, where I put together a 45-piece band!"
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Peggy's Tango" );
}
function studioOrch2k5Info(e)
{
	var t = "Here is the first extended studio orchestra piece I wrote, from 2005.  It's a through-composed work, even though the intent at the school was to combine a jazz band with an orchestra, which usually insinuates improvisational sections.  However, when i see an orchestra in front of me, I try write everything out and leave nothing to chance."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Untitled Orch" );
}
function like2LuvYouInfo(e)
{
	var t = "Here's a pop/soul tune I wrote, produced, and recorded."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Like 2 Luv U" );
}
function vientosInfo(e)
{
	var t =	"This is an original composition for Jazz Orchestra.  It was inspired by debussy's Clair De Lune.It features an extended Brass introduction.  This particular recording is from an MSM Jazz Orchestra concert in early 2005.  Notable band personnel include:Adam Niewood(tenor sax), Phil Dizack(trumpet), Marcus Gilmore(drums), and John Benitez(bass)."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Vientos De La Primavera" );
}
function operationGPPInfo(e)
{
	var t = "This is a short film I had the privilege of composing the score to, and also providing all of the sound effects.   Laurance Rippy created all of the visuals."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Operation GPP!") ;
}
function waltVigsInfo(e)
{
	var t = "This is an orchestral piece of mine.   It is a transcription of a solo piano piece I wrote, as an experiment in orchestration.   The title is in reference to Nils VIgeland, a teacher i studied with at MSM and Walt Disney, as parts of the melody sound like sad disney-style music.  The recording was fairly noisy(coughing, hum), so I used some of my engineering skills to clean it up.";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Walt Vigs") ;
}

function showJazz(e)
{
	var showList = ["poor_butterfly",
					"star_eyes", 
					"cheeze",
					"vientos" ];
	var hideList = ["untitled",	
	 				"give_me_jesus", 
	 				"nocturne", 
					"amazing_grace", 
					"hollywood_tango", 
					"peggys_tango",
					"studio_orch_2k5",
					"like_2_luv_you",
					"operation_gpp"
					];
	var repList = ["cheeze", "poor_butterfly", "star_eyes", "vientos" ];
	showPlayers( showList );
	hidePlayers( hideList );
	repositionPlayers( repList ); 	
	var t = "Here are some jazz pieces i've written or arranged.  They're primarily for big bands.  Click the 'i' or press Play for more info about each song."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Jazz Music" );
	unAppendAllText();
}
function showClassical(e)
{
	var showList = ["give_me_jesus", 
					"nocturne", 
					"hollywood_tango", 
					"peggys_tango",
					"studio_orch_2k5", 
					"walt_vigs"
					];
	var hideList = ["poor_butterfly", 
	 				"untitled",
					"star_eyes", 
					"amazing_grace",
					"cheeze",
					"like_2_luv_you",
					"vientos",
					"operation_gpp"
					];
	var repList = [ "hollywood_tango", "studio_orch_2k5", "peggys_tango", "give_me_jesus", "walt_vigs", "nocturne" ];
	showPlayers( showList );
	hidePlayers( hideList );	
	repositionPlayers( repList );
	var t = "Here are some classical pieces i've written or arranged.  Primarily for large groups.  Click the 'i' or press Play for more info about each song."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Classical Music" );
	unAppendAllText();
}
function showContemporary(e)
{
	var showList = ["untitled", 
					"amazing_grace",
					"like_2_luv_you",
					"operation_gpp"  ];
	var hideList = ["nocturne", 
					"give_me_jesus", 
					"poor_butterfly", 
					"star_eyes", 
					"cheeze", 
					"hollywood_tango", 
					"peggys_tango",
					"studio_orch_2k5",
					"vientos",
					"walt_vigs"
					];
	var repList = ["like_2_luv_you", "untitled", "amazing_grace", "operation_gpp" ];
	showPlayers( showList );
	hidePlayers( hideList );
	repositionPlayers( repList );
	var t ="Here are some productions that I've created in my studio.   Click the 'i' or press Play for more info about each song. ";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Contemporary Music" );
	unAppendAllText();
}
function showBio(e)
{
	var vids = ["nocturne",
				"give_me_jesus", 
				"star_eyes", 
				"untitled", 
				"cheeze", 
				"peggys_tango",
				"studio_orch_2k5",
				"hollywood_tango",
				"poor_butterfly",
				"like_2_luv_you",
				"vientos",
				"walt_vigs"
				];
	//find one of each category.
	var i;
	var cats = ["classical","jazz","contemporary"];
	var cat = 0;
	var a, b;	
	var showList = [];
	while( cat < 3 )
	{
		i = Math.floor( Math.random()*vids.length );	//select a random vid out of our list of vids
		a = document.getElementById( vids[i] );			//get the document element
		if( a.getAttribute("category") == cats[cat] )	//if the document element's category == desired category
		{
			showList.push( vids[i] );					//stick it on the list of vids to show
			cat++; //search for next category			//repeat, searching for next category type
		}
	}
	//now stick all the rest onto the hideList, end with amazing grace
	showList.push( "amazing_grace" ); 					//stick amazing grace onto the list of vids to show
	
	cat = i = 0;										//reset index of category list
	while( cat < 3 )
	{
		a = document.getElementById( vids[i] );			//get a vid from our list of vids
		b = document.getElementById( showList[cat] );	//get a vid from our list of vids we're going to show
		if( a == b )									//if they match
		{
			//match.  remove it from list of vids.
			vids.splice(i, 1)							//remove the vid we're going to show from the list of vids
			cat++;										//move to the next category
			i=0;										//start the search over for next category movie
		}
		else
		{
			i++;										//no match. compare next video in list. 
	 	}					
	}
	
	vids.push( "operation_gpp" );						//don't include operation_gpp on the bio page.
	hidePlayers( vids );								//Hide all videos in the vids[] array
	showPlayers( showList );							//show all videos in the showList[] array.
	repositionPlayers( showList );						//reposition the videos in the showList[] array
	
	var t = "Charles Schiermeyer is a freelancing teacher, composer and performer currently living in New York City.  "
		t +="   He is a graduate of the Manhattan School of Music, holding both a Bachelors and Masters degree from the school. "
		t +="   Originally from Seattle, Charles moved to NYC in 2003 to study with Grammy winning composer Michael Abene."
		t +="   He plays all saxophones, piano, flute, clarinet, guitar, and some trumpet."
		t +="   Charles has written for such groups as the Brass Band of Battle Creek, Michigan, and the New York Youth Symphony's Jazz Band Classic."
		t +="   He is also a recipient of awards and scholarships from ASCAP."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - About" );
	appendText();
	
}

function showPlayers( showList )
{
	var i;
	var a;
	for( i = 0; i < showList.length; i++ )
	{
		a = document.getElementById( showList[i] );
		a.style.display = "block";
	}
}
function hidePlayers( hideList )
{
	var i;
	var a;
	for( i = 0; i < hideList.length; i++ )
	{
		a = document.getElementById( hideList[i] );
		a.style.display = "none";
	}	
}
function repositionPlayers( repList )
{
	//remember to order repList in the display order.
	//everything is always attached to main-content
	var i, a;
	var d = document.getElementById( "main-content" );
	for( i = 0; i < repList.length; i++ )
	{
		a = document.getElementById( repList[i] );
		d.appendChild( a );
	}
}