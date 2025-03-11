export default async function ServicesDetails({ params }) {
  const param = await params;
  const id = param.id;
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Build modern, scalable, and high-performance web applications.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "Create cross-platform and native mobile applications.",
      image:
        "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Design visually stunning and user-friendly interfaces.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqak8ODA7SJv7hiRHv5dtzauFSK1AmGiYusQ&s",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Improve your website’s ranking with expert SEO strategies.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO3m3e3LWQiakj1BAwGwlNSnsR70YPNOcQw&s",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Boost your brand’s presence with online marketing campaigns.",
      image:
        "https://www.creativeitinstitute.com/images/course/course_1662724358.jpg",
    },
  ];

  const service = services.find((ser) => ser.id === id);

  if (!service) {
    return <p>Service not found!</p>;
  }
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
      <img
        src={service.image}
        alt={service.title}
        className="my-4 w-full max-w-md rounded-md"
      />
      <div>
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="text-lg">{service.description}</p>
      </div>
    </div>
  );
}
