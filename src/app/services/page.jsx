import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Build modern, scalable, and high-performance web applications.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      description: "Create cross-platform and native mobile applications.",
      image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Design visually stunning and user-friendly interfaces.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqak8ODA7SJv7hiRHv5dtzauFSK1AmGiYusQ&s",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Improve your website’s ranking with expert SEO strategies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSO3m3e3LWQiakj1BAwGwlNSnsR70YPNOcQw&s",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Boost your brand’s presence with online marketing campaigns.",
      image: "https://www.creativeitinstitute.com/images/course/course_1662724358.jpg",
    },
  ];
  return (
    <div className="container mx-auto py-10 px-4">
    <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service.id} className="bg-slate-500 shadow-lg rounded-lg p-5 hover:shadow-xl transition">
          <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <Link href={`/services/${service.id}`}>
            <span className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Learn More
            </span>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

