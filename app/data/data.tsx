type Skill = {
  title: string;
  color: string;
};

type AboutSection = {
  title: string;
  description: string[];
  skills: Skill[];
};

type UserData = {
  about: AboutSection;
};

const userData: UserData = {
  about: {
    title: "my about page title",

    description: [
      `Hey there! I'm a self-taught developer who is passionate about bringing ideas to life through technology. I'm always on the lookout for the latest innovations and love diving deep into new concepts to see how they can be applied in real-world scenarios`,
      `When I'm not coding, you'll find me fueled by curiosity, eagerly exploring new technologies and tinkering with side projects. I thrive on the excitement of learning something new and the satisfaction of turning that knowledge into practical solutions.`,
      `Whether it's building web applications, experimenting with emerging frameworks, or unraveling complex algorithms, I'm constantly seeking ways to challenge myself and push the boundaries of what's possible.`,
      // `Join me on this exhilarating journey as I continue to expand my skills, connect with fellow developers, and embrace the ever-evolving world of technology. Let's create something amazing together!`,
    ],

    skills: [
      { title: "html", color: "blue" },
      { title: "css", color: "orange" },
      { title: "js", color: "yellow" },
      { title: "python", color: "purple" },
    ],
  },
};

export default userData;
