type AboutSection = {
	title: string;
	photo: string;
	description: string[];
	skills: string[];
};

type Project = {
	title: string;
	desc: string;
	slug: string;
	url?: string;
	img: string;
	badges: string[];
	buttons?: {
		text: string;
		link: string;
	}[];
	screenshots?: string[];
};
type ProjectsSection = {
	title: string;
	projects: Project[];
};

type ContactSection = {
	title: string;
	description: string[];
};

type FooterIcons = {
	url: string;
	svg: string;
	viewBox: string;
	fill: string;
	dark?: string;
	alt: string;
};
type FooterSection = {
	icons: FooterIcons[];
};

type UserData = {
	about: AboutSection;
	projects: ProjectsSection;
	contact: ContactSection;
	footer: FooterSection;
};

const userData: UserData = {
	about: {
		title: "About",
		photo: "/masa.png",
		description: [
			`Hey there! I'm a self-taught developer who is passionate about bringing ideas to life through technology. I'm always on the lookout for the latest innovations and love diving deep into new concepts to see how they can be applied in real-world scenarios`,
			`When I'm not coding, you'll find me fueled by curiosity, eagerly exploring new technologies and tinkering with side projects. I thrive on the excitement of learning something new and the satisfaction of turning that knowledge into practical solutions.`,
			`Whether it's building web applications, experimenting with emerging frameworks, or unraveling complex algorithms, I'm constantly seeking ways to challenge myself and push the boundaries of what's possible.`,
			// `Join me on this exhilarating journey as I continue to expand my skills, connect with fellow developers, and embrace the ever-evolving world of technology. Let's create something amazing together!`,
		],

		skills: ["React", "Nextjs", "JavaScript", "TypeScript", "SCSS", "Php", "WordPress", "Html", "Css", "Python"],
	},

	projects: {
		title: "Projects",
		projects: [
			{
				title: "This website",
				desc: "My second portfolio to showcase my projects and resume. It all began when I wanted to create a new simple portfolio with just a dark/light theme. But then one thing lead to another... began with React and Chakra UI... then came TypeScript... and finally Next.js(Pages), which I ended up migrating it to App Router with the release of Next.js 13.4",
				slug: "next-portfolio",
				url: "https://next-portfolio-mooshkid.vercel.app/",
				img: "/portfolio_next.png",
				badges: ["React", "Nextjs", "ChakraUI", "TypeScript"],
				buttons: [
					{
						text: "Website",
						link: "https://next-portfolio-mooshkid.vercel.app",
					},
					{
						text: "GitHub",
						link: "https://github.com/mooshkid/next-portfolio",
					},
				],
			},

			{
				title: "Mortgage Calculator",
				desc: "Practice project developed with create-react-app, MUI and Chart.js. This was my first react project and my first step towards learning react. I mostly followed the online tutorial with a few tweaks here and there, learning the fundamentals of react, including components, passing props as well as destructuring.",
				slug: "mortgage",
				url: "https://mooshkid.github.io/mortgage-calculator",
				img: "/mortgage.png",
				badges: ["React", "MUI", "Chartjs"],
				buttons: [
					{
						text: "App",
						link: "https://mooshkid.github.io/mortgage-calculator",
					},
					{
						text: "GitHub",
						link: "https://github.com/mooshkid/mortgage-calculator",
					},
				],
			},
			{
				title: "Weather App",
				desc: "Simple weather app that uses openweathermap.org API to display the weather details. I wanted to learn more about APIs and how to I could use and integrate it in to web apps, when I came across a javascript tutorial that did just that! I learend how to use javascript to fetch an api and then use that json data to update the user interface.",
				slug: "weather",
				url: "https://mooshkid.github.io/weather-app/",
				img: "/weather_app.png",
				badges: ["JavaScript", "Html", "Css"],
				buttons: [
					{ text: "App", link: "https://mooshkid.github.io/weather-app" },
					{ text: "GitHub", link: "https://github.com/mooshkid/weather-app" },
				],
			},
			{
				title: "LC PLUS Website",
				desc: "This is my latest project, a website for the advertising department for LC-JAPAN. This website was built with the purpose of promoting and extending the servcies to new clients. It's a customized child theme, built on the freemium theme - Arkhe. I used GSAP and swiper.js for animations and sliders respectively. I wanted to play and test out many different animations, so I used GSAP to create timelines, typewriter effects, scrolltriggers... etc.",
				slug: "lcplus",
				url: "https://lc-plus.net/",
				img: "/lc_plus2.png",
				badges: ["Php", "JavaScript", "SCSS", "GSAP", "WordPress"],
				buttons: [
					{ text: "Website", link: "https://lc-plus.net" },
					// { text: "GitHub", link: "https://github.com/" },
				],
				screenshots: [
					// "/lc_plus_monitor.png",
					"/lc_plus2.png",
					"/lc_plus3.png",
					"/lc_plus4.png",
					"/lc_plus5.png",
				],
			},
			{
				title: "Little Garden Website",
				desc: "Mobile-first custom WordPress theme that I built from scratch. This was my first time attempting to build a custom theme from scratch. It was very challenging but exciting and a rewarding project overall. I learned how to create custom post types and taxonomies. I used the ACF plugin to create custom fields so that the client can easily update their own content which required frequent updates. Also, created an instruction guide on how to create new blog/news.",
				slug: "littlegarden",
				url: "https://littlegarden-inter.com/",
				img: "https://dummyimage.com/969x720/cccccc/000000&text=No+Image+Available",
				badges: ["Php", "JavaScript", "SCSS", "WordPress"],
				buttons: [{ text: "Website", link: "https://littlegarden-inter.com" }],
				screenshots: [
					"/littlegarden_slider1.png",
					"/littlegarden_slider2.png",
					"/sample_slider.png",
					"/sample_slider.png",
					// "/littlegarden_slider3.png",
					// "/littlegarden_inter.png"
				],
			},

			{
				title: "My Portfolio #1",
				desc: "My first portfolio project with a mobile-first responsive design. Nothing particularly special lol. It was pretty much a site to test out and practice new skills which I aquired, such as: creating hamburger menus, simple JavaScript DOM manipulation, creating SCSS mixins, functions and color maps.",
				slug: "portfolio",
				url: "https://mooshkid.github.io/",
				img: "/portfolio.png",
				badges: ["JavaScript", "GSAP", "Html", "SCSS"],
				buttons: [
					{ text: "Website", link: "https://mooshkid.github.io" },
					{
						text: "GitHub",
						link: "https://github.com/mooshkid/mooshkid.github.io",
					},
				],
				screenshots: [
					// "/portfolio_slider1.png",
					"/portfolio_slider2.png",
					"/portfolio_slider3.png",
					"/portfolio.png",
					"/portfolio3.png",
				],
			},
		],
	},

	contact: {
		title: "Contact",
		description: [`Feel free to hit me up on any of my socials, `, `or fill out the form below <3`],
	},

	footer: {
		icons: [
			{
				url: "https://github.com/mooshkid/",
				svg: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z",
				viewBox: "0 0 512 512",
				fill: "#000",
				dark: "#fff",
				alt: "GitHub",
			},
			// {
			//   url: "https://twitter.com/mooshkid",
			//   svg: "M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z",
			//   viewBox: "0 0 512 512",
			//   fill: "#1DA1F2",
			//   alt: "Twitter",
			// },
			{
				url: "https://youtube.com/mooshkid25",
				svg: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
				viewBox: "0 0 24 24",
				fill: "#FF0000",
				alt: "YouTube",
			},
			{
				url: "https://discord.com/users/mooshkid#1641",
				svg: "M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612",
				viewBox: "0 0 16 16",
				fill: "#1DA1F2",
				alt: "Discord",
			},
			{
				url: "mailto:mooshkid@gmail.com",
				svg: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
				viewBox: "0 0 24 24",
				fill: "#D44638",
				alt: "Gmail",
			},
			{
				url: "https://www.buymeacoffee.com/mooshkid/",
				svg: "M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z",
				viewBox: "0 0 24 24",
				fill: "#ffdd00",
				alt: "Buy Me A Coffee",
			},
		],
	},
};

export default userData;
