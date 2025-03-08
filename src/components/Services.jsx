const  Services=()=> {
    const services = [
      {
        title: "Content Writing",
        description: "Get high-quality content for your website.",
        icon: "", // Replace with an icon or image
      },
      {
        title: "Script Generation",
        description: "Generate scripts for videos, podcasts, and more.",
        icon: "🌴", // Replace with an icon or image
      },
      {
        title: "Email Drafting",
        description: "Craft professional emails effortlessly.",
        icon: "🍍", // Replace with an icon or image
      },
      {
        title: "Blog Writing",
        description: "Write blogs that resonate with your audience.",
        icon: "🌊", // Replace with an icon or image
      },
      {
        title: "Social Media Posts",
        description: "Create catchy posts for all platforms.",
        icon: "🌞", // Replace with an icon or image
      },
      {
        title: "Editing & Proofreading",
        description: "Polish your content to perfection.",
        icon: "🏄‍♂️", // Replace with an icon or image
      },
    ];
  
    return (
      <section className="py-20 "style={{ backgroundColor: '#005883' }}>
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