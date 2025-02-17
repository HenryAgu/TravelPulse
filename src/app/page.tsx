import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

interface News {
  image: string;
  location: string;
  date: string;
  duration: number;
  title: string;
  preview: string;
  link: string;
}

const news: News[] = [
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },

  {
    image: "/images/news.png",
    location: "Hawaii, United States",
    date: "Feb 27, 2023",
    duration: 8,
    title: "The Best Time to visit Hawaii",
    preview:
      "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions.",
    link: "",
  },
];

export default function Home() {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  const today: Date = new Date();
  return (
    <main>
      <Hero />
      <section className="py-14 md:py-32 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row gap-y-7 justify-between items-start md:items-end mb-10">
          <div className="flex flex-col gap-y-2 lg:gap-y-4">
            <h3 className="text-black font-bold text-[28px] lg:text-5xl">Top Travel Sories</h3>
            <p className="font-medium text-[#404040] text-base lg:text-2xl">
              Explore our latest stories from our active users
            </p>
          </div>
          <button className="border border-[#4169E1] py-3.5 px-10 rounded-[40px] text-[#4169E1] text-base md:text-lg font-semibold">
            View All Stories
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-20">
          {news.map((item, index) => (
            <div className="flex flex-col gap-y-2" key={index}>
              <Image
                src={item.image}
                width={744}
                height={491}
                className="w-full h-[300px] lg:h-[491px]"
                alt="image"
              />
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between my-2">
                <p className="text-base text-[#5B5B5B] font-medium">{item.location}</p>
                <div className="flex items-center gap-x-3 md:gap-x-3.5">
                  <p className="text-base text-[#5B5B5B] font-medium">{formatDate(today)}</p>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#767676]" />
                  <span className="text-base text-[#5B5B5B] font-medium">{item.duration} min read</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-black font-bold text-2xl lg:text-4xl">{item.title}</h4>
                <p className="lg:text-lg text-base text-black font-medium">{item.preview}</p>
                <Link href={item.link} className="mt-2 flex gap-x-4 items-center">
                  <span className="font-semibold text-[#4169E1] text-base">Read Full Post</span>
                  <Image
                    src="/images/link-arrow.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="h-2 w-2"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
