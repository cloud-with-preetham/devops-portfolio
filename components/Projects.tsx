export default function Projects() {

  const projects = [
    {
      title: "CI/CD Pipeline with GitHub Actions",
      tech: "GitHub Actions, YAML, Linux"
    },
    {
      title: "Dockerized Application Deployment",
      tech: "Docker, Linux"
    },
    {
      title: "AWS EC2 Infrastructure Setup",
      tech: "AWS, Linux"
    },
    {
      title: "FastAPI AWS Integration API",
      tech: "Python, FastAPI, Boto3"
    }
  ];

  return (
    <section id="projects" className="py-32">

      <h2 className="text-3xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((p) => (
          <div
            key={p.title}
            className="border p-6 rounded-xl hover:bg-white hover:text-black transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {p.title}
            </h3>

            <p className="text-sm text-gray-400">
              {p.tech}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
