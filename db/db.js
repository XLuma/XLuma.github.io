export default {
	bio: {
		about: {
			text: [
				"Hello !",
				"My name is Louis-Gabriel. I am presently a student in computer programming at 42 Quebec, looking to get specialized in software development.",
				"I'm an active contributor to various modding scenes, especially Pokemon, which is where I found a passion in programming and especially scripting.",
				"Aside from technology, I like reading, traveling and learning."
			],  
		},
		contact: {
			text: [
				"To get in touch with me for business reasons or any other inquiry, feel free to send me an email at this address: lglaplante@gmail.com.",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "C, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Scripting Languages",
			skillName: "Python, C#",
			color: "2",
			percentage: "50",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "wxWidget",
			color: "6",
			percentage: "20",
		},
		{
			title: "Engines",
			skillName: "Unity, Unreal",
			color: "4",
			percentage: "20",
		},
		{
			title: "Version Control/Bug tracking",
			skillName: "GitHub, Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Debugging and testing",
			skillName: "lldb, blind debugging",
			color: "3",
			percentage: "70",
		},
		{
			title: "Editor",
			skillName: "VS Code, CLion",
			color: "6",
			percentage: "60",
		},
	],
	projects: {
		software: [
			{
				projectName: "42 Common Core",
				image: "images/pizzaorderchatbot.png",
				summary:
					"The 42's project lineup to learn C and C++.",
				preview:
					"https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
				techStack: ["C", "C++", "Github"],
			},
			{
				projectName: "Pointcrow's Universal Warp Randomizer",
				image: "images/whatsappbot.jpg",
				summary:
					"Software made in collaboration with 2 colleagues to randomize warp zones in various Pokemon games.",
				preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
				techStack: ["Python", "Reverse engineering", "ARM", "C", "Github", "Trello", "Scripting"],
			},
			{
				projectName: "Pokemon Brilliant Diamond/Shining Pearl randomization toolkit",
				image: "images/billgenerator.png",
				summary:
					"Toolkit I made in C to edit assets in Pokemon BDSP. Later rewritten in Python with a team of contributors.",
				preview: "https://github.com/vinaysomawat/Bill-Generator",
				techStack: ["C", "Python"],
			},
		],
		mods: [
			{
				projectName: "Pokemon Emerald HP timer challenge",
				image: "images/snylloair.png",
				summary:
					"Created by request from UnitedGamer, this mod decreases the HP of the current pok?mon in battle every second.",
				preview: "https://www.snylloair.com/",
				techStack: ["C", "Scripting"],
			},
			{
				projectName: "Pok?mon Sangria Edition",
				image: "images/AM-Logo-.png",
				summary:
					"Created for the esport org Optic Gaming, this mod groups known members and friends of the org with custom sprites and battles.",
				preview:
					"https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
				techStack: ["Scripting"],
			},
			{
				projectName: "Pok?mon Platinum: XLMode",
				image: "images/whatsappbot.jpg",
				summary: "Personal project to create a full-fledged mod of Pok?mon platinum, containing a lot of unique features.",
				preview: "https://github.com/XLuma/xlmode_c_injects",
				techStack: ["Scripting", "Reverse engineering", "Debugging", "C"]
			}
		],
	},
	experience: [
		{
			title: "Voyages AML",
			duration: "August 2021 - November 2021",
			subtitle: "Web Integrator",
			details: [
				"Contract work to update the Voyages AML website with up-to-date information.",
				"Working closely with the marketing team to ensure accuracy of information."
			],
			tags: [
				"JavaScript",
				"HTML",
				"Wordpress",
			],
			icon: "heartbeat",
		},
		{
			title: "Freelance for content creators",
			duration: "2017 - Present",
			subtitle: "Freelance modder/programmer",
			details: [
				"Work with content creators to create unique experiences on games.",
				"Collaborated with a lot of popular faces in the content creation industry.",
			],
			tags: [
				"C",
				"Client management",
				"Python",
				"Scripting",
			],
			icon: "qrcode",
		}
	],
	education: [
		{
			title: "42 Qu?bec programming course",
			duration: "2021-ongoing",
			subtitle: "42 Qu?bec",
			details: [
				"Acquired skills in C/C++.",
				"Learned to self-teach.",
			],
			tags: [
				"Object-oriented Programming",
				"Operating Systems",
				"Computer Networks",
				"Debugging",
				"Basic Algorithms",
			],
			icon: "graduation-cap",
		},
		{
			title: "High School Diploma",
			duration: "2012-2017",
			subtitle: "Saint-Jean-Eudes/Pointe-L?vy",
			details: [
				"Enhanced classes in PEI program at Saint-Jean-Eudes",
				"Heavily invested in student life at both schools",
			],
			tags: [""],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/XLuma",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page's template",
					link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/vinaysomawat/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/TheFanatiker",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Template made with &hearts; by Vinay Somawat.",
				"&copy; No Copyrights. Credits to Vinay for allowing usage of his blog as a template."
			],
		},
	],
};
