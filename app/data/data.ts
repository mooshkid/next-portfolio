type Skill = {
  text: string;
  color: string;
};
type AboutSection = {
  title: string;
  description: string[];
  skills: Skill[];
};

type Project = {
  title: string;
  desc: string;
  url: string;
  img: string;
};
type ProjectsSection = {
  title: string;
  projects: Project[];
};

type FooterIcons = {
  url: string;
  img: string;
  alt: string;
}
type FooterSection = {
  icons: FooterIcons[];
}


type UserData = {
  about: AboutSection;
  projects: ProjectsSection;
  footer: FooterSection;
};

const userData: UserData = {
  about: {
    title: "About",

    description: [
      `Hey there! I'm a self-taught developer who is passionate about bringing ideas to life through technology. I'm always on the lookout for the latest innovations and love diving deep into new concepts to see how they can be applied in real-world scenarios`,
      `When I'm not coding, you'll find me fueled by curiosity, eagerly exploring new technologies and tinkering with side projects. I thrive on the excitement of learning something new and the satisfaction of turning that knowledge into practical solutions.`,
      `Whether it's building web applications, experimenting with emerging frameworks, or unraveling complex algorithms, I'm constantly seeking ways to challenge myself and push the boundaries of what's possible.`,
      // `Join me on this exhilarating journey as I continue to expand my skills, connect with fellow developers, and embrace the ever-evolving world of technology. Let's create something amazing together!`,
    ],

    // from chakra-ui
    // Pass the colorScheme prop to customize the color of the Badge. colorScheme can be any color key that exists in theme.colors
    skills: [
      { text: "html", color: "blue" },
      { text: "css", color: "orange" },
      { text: "js", color: "yellow" },
      { text: "python", color: "purple" },
      { text: "html", color: "blue" },
      { text: "css", color: "orange" },
      { text: "js", color: "yellow" },
      { text: "python", color: "purple" },
      { text: "html", color: "blue" },
      { text: "css", color: "orange" },
      { text: "js", color: "yellow" },
      { text: "python", color: "purple" },
    ],
  },

  projects: {
    title: "Projects",
    projects: [
      {
        title: "My project 1",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
      {
        title: "another project",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
      {
        title: "third time is the charm",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
      {
        title: "is python a snake?",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
      {
        title: "5th",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
      {
        title: "something unimportant",
        desc: "some description for my project",
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
      },
    ],
  },

  footer: {
    icons: [
      {
        url: "https://github.com/mooshkid/",
        img: "/lc+_watch.png",
        alt: "GitHub",
      },
      {
        url: "https://twitter.com/mooshkid",
        img: "/lc+_watch.png",
        alt: "Twitter",
      },
      {
        url: "https://youtube.com/",
        img: "/lc+_watch.png",
        alt: "YouTube",
      },
      {
        url: "https://google.com/",
        img: "/lc+_watch.png",
        alt: "Gmail",
      },
      {
        url: "https://mooshkid.github.io/",
        img: "/lc+_watch.png",
        alt: "Coffee",
      }
    ]
  }
  
};

export default userData;
