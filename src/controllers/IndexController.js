const news = [
  {
    title: "Saúde",
    content: [
      {
        img: "/img/saude.webp",
        description: "Lorem ipsum dolor sit, amet consectetur",
        redirect: "http://google.com",
      },
      {
        img: "/img/saude.webp",
        description: "Lorem ipsum dolor sit, amet consectetur",
        redirect: "http://google.com",
      },
      {
        img: "/img/saude.webp",
        description: "Lorem ipsum dolor sit, amet consectetur",
        redirect: "http://google.com",
      },
    ],
  },
  {
    title: "Agricultura",
    content: [
      {
        img: "/img/agricultura.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur",
        redirect: "http://google.com",
      },
      {
        img: "/img/agricultura.jpg",
        description: "Lorem ipsum dolor sit, amet consectetur",
        redirect: "http://google.com",
      },
    ]
  },
];
const indexController = {
  home: (req, res) => {
    res.render("index", {
      news
    });
  },
};

module.exports = indexController;
