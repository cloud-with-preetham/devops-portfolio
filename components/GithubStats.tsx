export default function GithubStats() {
  return (
    <section className="py-32">

      <h2 className="text-4xl font-bold text-center mb-12">
        GitHub Activity
      </h2>

      <div className="flex flex-col items-center gap-6">

        <img
          src="https://github-readme-stats.vercel.app/api?username=cloud-with-preetham&show_icons=true&theme=dark"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=cloud-with-preetham&layout=compact&theme=dark"
        />

      </div>

    </section>
  );
}
