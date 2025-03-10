
export default async function ServicesDetails({params}) {
  const param = await params;
  const id = param.id
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern, scalable, and high-performance web applications.",
      image: "/images/web-development.jpg",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "Create cross-platform and native mobile applications.",
      image: "/images/mobile-apps.jpg",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Design visually stunning and user-friendly interfaces.",
      image: "/images/ui-ux.jpg",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Improve your website’s ranking with expert SEO strategies.",
      image: "/images/seo.jpg",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Boost your brand’s presence with online marketing campaigns.",
      image: "/images/digital-marketing.jpg",
    },
  ];

  const service = services.find(ser => ser.id === id);

  if (!service) {
    return <p>Service not found!</p>;
  }
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold">{service.title}</h1>
    <img src={service.image} alt={service.title} className="my-4 w-full max-w-lg"/>
    <p className="text-lg">{service.description}</p>
  </div>
  )
}
