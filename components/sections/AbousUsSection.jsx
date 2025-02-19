import * as teamData from "/data/teamData.json"
import ImageCard from '../fragments/Card';

const AboutUsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          {teamData.map((member) => (
            <ImageCard
              key={member.id}
              title={member.title}
              subtitle={member.subtitle}
              image={member.image}
              github={member.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;