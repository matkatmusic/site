function setupEvents()
{
	var targs = ["nav_Gospel", "nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Tech", "nav_Bio",
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
				"classical_set_infoPop",
				"vientos_infoPop",
				"operation_gpp_infoPop",
				"walt_vigs_infoPop",
				"great_is_thy_infoPop",
				"seven_steps_infoPop",
				"love_for_sale_infoPop",
				"gee_baby_infoPop",
				"soulful_sax_infoPop",
				"gospel_medley_infoPop",
				"jessica_reedy_infoPop",
				"sentimental_mood_infoPop",
				"eq_strings_infoPop",
				"mpc_tenor_infoPop",
				"mpc_alto_infoPop",
				"mic_tenor_infoPop",
				"mic_alto_infoPop",
				"cv4_mic_infoPop",
				"wivi_ewi_infoPop", 
				"classic_strings_infoPop",
				
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
				"classical_set_player",
				"vientos_player",
				"operation_gpp_player",
				"walt_vigs_player",
				"great_is_thy_player",
				"seven_steps_player",
				"love_for_sale_player",
				"gee_baby_player", 
				"soulful_sax_player", 
				"gospel_medley_player", 
				"jessica_reedy_player", 
				"sentimental_mood_player",
				"eq_strings_player", 
				"mpc_tenor_player",
				"mpc_alto_player",
				"mic_tenor_player",
				"mic_alto_player",
				"cv4_mic_player", 
				"wivi_ewi_player",
				"classic_strings_player"
				];
				
	var funcs = [ 	 navigateTo,  navigateTo,  navigateTo,  navigateTo, navigateTo, navigateTo,
					 gmjInfo,  pbInfo,  nocturneInfo,  untitledInfo,  starEyesInfo,  amazingGraceInfo, cheezeInfo, hollywoodTangoInfo, peggysTangoInfo, studioOrch2k5Info, like2LuvYouInfo, classicalSetInfo, vientosInfo, operationGPPInfo, waltVigsInfo, greatIsThyInfo, sevenStepsInfo, loveForSaleInfo, geeBabyInfo, soulfulSaxInfo, gospelMedleyInfo, jessicaReedyInfo, sentimentalMoodInfo, eqStringsInfo, mpcTenorInfo, mpcAltoInfo, micTenorInfo, micAltoInfo, cv4MicInfo, wiviEwiInfo, classicStringsInfo,																				
					 gmjInfo,  pbInfo,  nocturneInfo,  untitledInfo,  starEyesInfo,  amazingGraceInfo, cheezeInfo, hollywoodTangoInfo, peggysTangoInfo, studioOrch2k5Info, like2LuvYouInfo, classicalSetInfo, vientosInfo, operationGPPInfo, waltVigsInfo, greatIsThyInfo, sevenStepsInfo, loveForSaleInfo, geeBabyInfo, soulfulSaxInfo, gospelMedleyInfo, jessicaReedyInfo, sentimentalMoodInfo, eqStringsInfo, mpcTenorInfo, mpcAltoInfo, micTenorInfo, micAltoInfo, cv4MicInfo, wiviEwiInfo, classicStringsInfo
				];
	var args = ["nav_Gospel", "nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Tech", "nav_Bio",
				"null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", 
				"null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null", "null"  ];
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
	var l = ["nav_Gospel", "nav_Jazz", "nav_Classical", "nav_Contemporary", "nav_Tech", "nav_Bio",];
	var f = [ showGospel, showJazz, showClassical, showContemporary, showTech, showBio ];
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

function classicalSetInfo(e)
{
	var t = "These are sketches i produced under the following guidelines.  Spend 1 hour sketching in Finale on an 8-stave score, then spend ~1 hour orchestrating it into a full score in Finale.  When the score was finished, sequence it.  The goal was to produce short orchestral pieces very quickly that sounded great and were complete musical thoughts.";
	showText( 'sidenav_info', t );
	showText( 'sidenav_title', "Info - Classical Sketches")
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

function greatIsThyInfo(e)
{
	var t = "This is the video of the tracking session for this hymn, co-produced by my friend Rodlin Pierre.";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Great Is Thy Faithfulness");
}

function sevenStepsInfo(e)
{
	var t = "Taken from my 2005 recital from Manhattan School of Music.   it features Bob Albanese on piano, and Max Seigel on Bass Trombone. ";
	showText( 'sidenav_info', t);
	showText('sidenav_title', "Info - Seven Steps To Heaven" );
}

function loveForSaleInfo(e)
{
	var t = "Taken from my 2005 recital from Manhattan School of Music.  it features Dave Richards on Tenor Sax, and a young Philip Dizack on Trumpet";
	showText( 'sidenav_info', t);
	showText('sidenav_title', "Info - Love For Sale" );	
}

function geeBabyInfo(e)
{
	var t = "Taken from my 2005 recital from Manhattan School of Music, it features Mel Flannery on vocals";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Gee Baby" );
}

function soulfulSaxInfo(e)
{
	var t = "Just playin' around with a track that has a funky groove.   It was one of the first things I recorded when i first got that AKG 414 mic";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Soulful Sax" );
}

function gospelMedleyInfo(e)
{
	var t = "This is an excerpt from my gospel medley, which I never finished programming.   I was learning the limits of what my sample libraries could do.  they never sound as good as a real orchestra, sadly.";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Gospel Medley Snippet");
}

function jessicaReedyInfo(e)
{
	var t = "I did the horns and strings on this song for Jessica Reedy's album.  It was my first project for an artist, and started my career as a horn/string arranger for the gospel genre";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Moving Forward");
	
}

function sentimentalMoodInfo(e)
{
	var t = "This is my arrangement of In A Sentimental Mood.   It's probably my most popular video to date.  Everyone really likes the strings!";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - In A Sentimental Mood");	
}

function eqStringsInfo(e)
{
	var t = "This is a video showing off how ClassicAPI.com's LC53A EQs sound on a string library. ";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - EQing String Libraries");	
}

function mpcTenorInfo(e)
{
	var t = "This is a little video showing off a Theo Wanne Durga 9 Tenor mouthpiece";
	showText('sidenav_info', t );
	showText('sidenav_title', "Info - Mouthpiece Review: Durga 9 for Tenor");
}
function mpcAltoInfo(e)
{
	var t = "This is a little video showing off a Theo Wanne Durga 8 Alto mouthpiece";
	showText('sidenav_info', t );
	showText('sidenav_title', "Info - Mouthpiece Review: Durga 8 for Alto");
}

function micTenorInfo(e)
{
	var t = "This is a litle shootout comparing a Miktek CV4 against an AKG C414B-ULS on a tenor sax";
	showText('sidenav_info', t );
	showText('sidenav_title', "Info - Mic Shootout for Tenor Sax");
}

function micAltoInfo(e)
{
	var t = "This is a litle shootout comparing a Miktek CV4 tube condenser against an AKG C414B-ULS solid state condenser against an AMT Wi-5 Wireless mic on an alto sax";
	showText('sidenav_info', t );
	showText('sidenav_title', "Info - Mic Shootout for Alto Sax");
}

function cv4MicInfo(e)
{
	var t = "This is a little voiceover test showing the MikTek CV4 on plain speaking";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - CV4 Mic Test: VoiceOvers" );
}

function wiviEwiInfo(e)
{
	var t = "This is a little video showing how I do programming with the EWI for brass/horns to make them sound authentica, cuz most clients can't afford a real horn section anymore";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Programming Horns with the EWI & WIVI" );
}
function classicStringsInfo(e)
{
	var t = "This is a short song showing off some of my ballad string writing in the classic 50s/60's style";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Classic Strings ala Chuck" );
}

function showGospel(e)
{
	var showList = ["great_is_thy", "jessica_reedy", "amazing_grace", "like_2_luv_you", "soulful_sax", "give_me_jesus", "gospel_medley"];
	/*
	var hideList = ["walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus",
					"vientos", "poor_butterfly", "star_eyes", "cheeze", "seven_steps", "love_for_sale", "gee_baby",
					"operation_gpp", "untitled", 
					];
	*/
	var repList = ["great_is_thy", "jessica_reedy", "gospel_medley", "like_2_luv_you", "soulful_sax", "amazing_grace", "give_me_jesus"];
	videoList( showList );
	//hidePlayers( hideList );
	repositionPlayers( repList );
	var t = "These are some songs in the Gospel/RnB genre that I produced, helped produced, or contributed something to.  Click the 'i' for more info about each song.";
	showText( 'sidenav_info', t );
	showText( 'sidenav_title', "Info - Gospel Music" );
	//unAppendAllText();
	appendText();
}
function showTech(e)
{
	var showList = ["eq_strings", "mpc_tenor", "mpc_alto", "mic_tenor", "mic_alto", "cv4_mic", "wivi_ewi" ];
	var repList = ["eq_strings", "mpc_tenor", "mpc_alto", "mic_tenor", "mic_alto", "cv4_mic", "wivi_ewi" ];
	videoList( showList );
	//hidePlayers( hideList );
	repositionPlayers( repList );
	var t = "These are various videos I've created related to the tech-side of music creation and production";
	showText( 'sidenav_info', t );
	showText( 'sidenav_title', "Info - Technology" );
	appendText();
}
function showJazz(e)
{
	var showList = ["classic_strings", "poor_butterfly", "star_eyes", "cheeze", "vientos", "seven_steps", "love_for_sale", "gee_baby" ];
	/*
	var hideList = [ "walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus",
					"operation_gpp", "untitled", "amazing_grace", "like_2_luv_you",
					"great_is_thy"
					];
	*/				
	var repList = ["classic_strings", "cheeze", "seven_steps", "gee_baby", "poor_butterfly", "love_for_sale", "star_eyes", "vientos" ];
	videoList( showList );
	//hidePlayers( hideList );
	repositionPlayers( repList ); 	
	var t = "Here are some jazz pieces I've written or arranged.  They're primarily for big bands.  Click the 'i' for more info about each song."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Jazz Music" );
	appendText();
}
function showClassical(e)
{
	var showList = ["walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus", "gospel_medley"];
	/*
	var hideList = [ 	"vientos", "poor_butterfly", "star_eyes", "cheeze", "seven_steps", "love_for_sale", "gee_baby",
						"operation_gpp", "untitled", "amazing_grace", "like_2_luv_you",
						"great_is_thy"						
					];
	*/				
	var repList = [ "classical_set", "studio_orch_2k5", "hollywood_tango", "peggys_tango", "give_me_jesus", "walt_vigs", "nocturne", "gospel_medley"  ];
	videoList( showList );
	//hidePlayers( hideList );	
	repositionPlayers( repList );
	var t = "Here are some classical pieces I've written or arranged.  Primarily for large groups.  Click the 'i' for more info about each song."
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Classical Music" );
	appendText();
}
function showContemporary(e)
{
	var showList = ["sentimental_mood", "untitled", "like_2_luv_you", "operation_gpp", "great_is_thy", "soulful_sax"  ];
	/*
	var hideList = [ "walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus", 
					"vientos", "poor_butterfly", "star_eyes", "cheeze", "seven_steps", "love_for_sale", "gee_baby",
					
					];
	*/
	var repList = ["great_is_thy", "sentimental_mood", "like_2_luv_you", "soulful_sax", "untitled", "operation_gpp" ];
	videoList( showList );
	// hidePlayers( hideList );
	repositionPlayers( repList );
	var t ="Here are some productions that I've created in my studio.   Click the 'i' for more info about each song. ";
	showText('sidenav_info', t);
	showText('sidenav_title', "Info - Contemporary Music" );
	appendText();
}
function showBio(e)
{
	//operation_gpp is excluded from this list
	var vids = [ "untitled", "like_2_luv_you", "sentimental_mood",
				"walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus",
				"vientos", "poor_butterfly", "star_eyes", "cheeze", "seven_steps", "love_for_sale", "gee_baby", "classic_strings",
				"great_is_thy", "soulful_sax", "gospel_medley", "jessica_reedy"
				
				];
	//find one of each category.
	var i;
	var cats = ["classical","jazz","contemporary", "gospel"];
	var cat = 0;
	var a, b;	
	var showList = [];
	while( cat < cats.length )
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
	//showList.push( "amazing_grace" ); 					//stick amazing grace onto the list of vids to show
	
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
	
	//vids.push( "operation_gpp" );						//don't include operation_gpp on the bio page.
	//hidePlayers( vids );								//Hide all videos in the vids[] array
	videoList( showList );							//show all videos in the showList[] array.
	repositionPlayers( showList );						//reposition the videos in the showList[] array
	
	var t = "Charles Schiermeyer is a composer and performer currently living in New York City.  "
		t +="   He is a graduate of the Manhattan School of Music, holding both a Bachelors and Masters degree from the school. "
		t +="   Originally from Seattle, Charles moved to NYC in 2003 to study with Grammy-winning composer Michael Abene."
		t +="   He plays all saxophones, piano, flute, clarinet, guitar, and some trumpet."
		t +="   Charles has written professionally for Jessica Reedy, Jonathan Nelson, Javen, New York Youth Symphony, Brass Band Of Battle Creek, and other professional ensembles."
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



function videoList( vidList )
{
	//vids in the vidList are shown.
	//all other vids in the video masterList are hidden
	var i;
	var j;
	var a;
	
	var masterList = [ "walt_vigs", "nocturne", "hollywood_tango", "peggys_tango", "studio_orch_2k5", "classical_set", "give_me_jesus",
						"vientos", "poor_butterfly", "star_eyes", "cheeze", "seven_steps", "love_for_sale", "gee_baby", "classic_strings", 
						"operation_gpp", "untitled", "amazing_grace", "like_2_luv_you", "sentimental_mood", 
						"great_is_thy", "soulful_sax", "gospel_medley", "jessica_reedy",
						"eq_strings", "mpc_tenor", "mpc_alto", "mic_tenor", "mic_alto", "cv4_mic", "wivi_ewi"
						];
						
	for( i = 0; i < vidList.length; i++ )
	{
		a = document.getElementById( vidList[i] );
		a.style.display = "block";
		j = masterList.indexOf( vidList[i] );	//find our video in the masterList
		masterList.splice( j, 1 ); //remove it from the master list
	}
	for( i = 0; i < masterList.length; i++ )	//set everything in the masterList to hidden
	{
		a = document.getElementById( masterList[i] );
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