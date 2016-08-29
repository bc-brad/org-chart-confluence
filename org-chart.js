var agents = [
		//individual agent arrays are added here.
		  //FORMAT: ['firstname.lastname', 'team-lead-firstname', 'date']
		  //EXAMPLE: ['pavel.chekov', 'kirk', '08/16/2012']
	];
 
	var managers = [
	  //individual manager arrays are added here.
	    //FORMAT:  ['firstname.lastname', 'management-team', 'date']
	    //EXAMPLE: ['james.kirk', 'enterprise', '06/22/2010']
	];
 
	function Person(name, team, startDate) {
		this.name = name;
		this.nameFormatted = function () {
			var name = this.name.split('.'),
				newName = '';
			name.forEach(function (v) {
					if (v !== name[1]) {
						newName += v.charAt(0).toUpperCase() + v.substring(1) + ' ';	
					} else {
						newName += v.charAt(0).toUpperCase() + v.substring(1);
					}
			});
			return newName;
		};
		this.team = team;
		this.startDate = startDate;
		this.tenure = function () {
			var startDate = (Date.parse(this.startDate) / 1000).toFixed(2),
				today = (new Date().getTime() / 1000).toFixed(2),
				tenure = ((today - startDate) / 31557600).toFixed(2);
			
			return tenure > 100 ? (tenure - 100).toFixed(2) : tenure;
		};
		this.photo = function () {
			var usrLogos = document.getElementsByClassName('userLogoLink');
			for (var i = 0; i < usrLogos.length; i++) {
				if (usrLogos[i].getAttribute('data-username') === this.name) {
					return usrLogos[i].firstElementChild.getAttribute("src");
				}
			}
		};
		this.createMarkup = function () {
			var markup = '';
			markup += '<div class="agent-div">'
					+ '<a href="https://intranet.bigcommerce.com/display/~' 
					+ this.name 
					+ '"><img src="' 
				    + this.photo() 
					+ '"></a><h3 style="color: #2B2935; opacity: 0.9">' 
					+ this.nameFormatted() 
					+ '</h3><p style="color: #6d6e7a">Hire Date: ' 
					+ this.startDate 
					+ '</p><p class="years-bc">' 
					+ this.tenure() 
					+ ' years at BC!</p></div>';
			return markup;
		};
	};
    
	for (var i = 0; i < agents.length; i++) {
		agents[i] = new Person(agents[i][0], agents[i][1], agents[i][2]);
	}
 	
	var teamLeads = document.getElementsByClassName('team-leads'),
		management = document.getElementsByClassName('management');
	(function () {
		agents = agents.sort(function (a, b) {
			a[2] = a.tenure();
			b[2] = b.tenure();
			return b[2] - a[2];
		});
		renderAgents();
		renderManagers();
	}) ();
 
	function renderAgents() {
		for (var i = 0; i < agents.length; i++) {
			for (var x = 0; x < teamLeads.length; x++) {
				if (teamLeads[x].getAttribute('id') === agents[i].team) {
					teamLeads[x].innerHTML += agents[i].createMarkup();
				}
			}
		}
	};
 
	function renderManagers() {
		for (var i = 0; i < managers.length; i++) {
			managers[i] = new Person(managers[i][0], managers[i][1], managers[i][2]);
			for (var x = 0; x < management.length; x++) {
				if (management[x].getAttribute('id') === managers[i].team) {
					management[x].innerHTML += managers[i].createMarkup();
				}
			}
		}
	};
	
	function sortABC() {
		var teamLeadDiv = document.getElementsByClassName('team-leads');
		for (var i = 0; i < teamLeadDiv.length; i++) {
			while (teamLeadDiv[i].childNodes[2]) {
				teamLeadDiv[i].removeChild(teamLeadDiv[i].childNodes[2]);
			}
		}
		agents = agents.sort(function (a, b){
   			return b.name > a.name ? -1 : 1;
		});
		renderAgents();
	};
 
	function sortTenure() {
		var teamLeadDiv = document.getElementsByClassName('team-leads');
		for (var i = 0; i < teamLeadDiv.length; i++) {
			while (teamLeadDiv[i].childNodes[2]) {
				teamLeadDiv[i].removeChild(teamLeadDiv[i].childNodes[2]);
			}
		}
		agents = agents.sort(function (a, b) {
			a[2] = a.tenure();
			b[2] = b.tenure();
			return b[2] - a[2];
		});
		renderAgents();
	};
