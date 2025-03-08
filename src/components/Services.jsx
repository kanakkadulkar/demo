const  Services=()=> {
  const services = [
    {
      title: "Content Writing",
      description: "Get high-quality, engaging, and SEO-friendly content tailored to your brand’s voice. Perfect for websites, landing pages, and marketing materials.",
      icon: "📝", // Replace with an icon or image
    },
    {
      title: "Script Generation",
      description: "Need a compelling script? We craft captivating scripts for videos, podcasts, advertisements, and presentations that keep your audience hooked.",
      icon: "🎬", // Replace with an icon or image
    },
    {
      title: "Email Drafting",
      description: "Struggling to write emails? We create polished, persuasive, and professional emails that get responses—whether for business, marketing, or personal use.",
      icon: "📧", // Replace with an icon or image
    },
    {
      title: "Blog Writing",
      description: "Boost your online presence with insightful, well-researched, and reader-friendly blogs that inform, entertain, and convert your audience.",
      icon: "✍️", // Replace with an icon or image
    },
    {
      title: "Social Media Posts",
      description: "Capture attention with creative, trend-savvy social media content that drives engagement and strengthens your brand’s digital identity.",
      icon: "📱", // Replace with an icon or image
    },
    {
      title: "Editing & Proofreading",
      description: "Ensure your content is flawless and impactful. We refine your writing, correct errors, and enhance clarity to make your message shine.",
      icon: "🔍", // Replace with an icon or image
    },
  ];

  return (
    <section className="py-20 "style={{ backgroundColor: '#005883' ,fontFamily: 'Macondo, cursive' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold  text-center mb-12"style={{ color: '#E7D8C4' }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-sky-50 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-sky-900 mb-4">
                {service.title}
              </h3>
              <p className="text-sky-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;