const title = "Educapp";

const description =
  "Educapp is a platform that allows you to create and share educational content.";

export default {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://educapp.vercel.app/",
    title,
    description,
    images: [
      {
        url: "",
        width: 1600,
        height: 800,
        alt: title,
        type: "image/png",
      },
    ],
    site_name: title,
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
