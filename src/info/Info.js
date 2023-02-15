import self from "../img/self.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Abhishek",
  lastName: "Bisht",
  initials: "ab",
  position: "a Frontend Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💼",
      text: "software developer at Editorialist",
    },
    {
      emoji: "📧",
      text: "18abhishek.b@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/bishty1810",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/bishty1810/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Abishty",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/bishty1810/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/Bishty1810",
      icon: "fa fa-twitter",
      label: "twitter",
    },
  ],
  bio: "Hello! I'm Abhsihek Bisht. I'm a software developer engineer for Editorialist. I did my engineering in electronics at Maharaja Agrasen College (Delhi University), I enjoy long walks, listening music, playing video games, watching football and I believe whatever you do give your best. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "vue",
      "nextjs",
      "nuxtjs",
      "nodejs",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "antdesign",
    ],
    exposedTo: ["php", "wordpress", "mysql"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    {
      label: "anime",
      emoji: "🎥",
    },
    {
      label: "video games",
      emoji: "🎮",
    },
    {
      label: "football",
      emoji: "⚽",
    },
  ],
  portfolio: [],
};
