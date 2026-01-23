// src/components/SubHero.tsx

type SubHeroProps = {
  text: string;
};

const SubHero = ({ text }: SubHeroProps) => {
  return (
    <section className="w-full bg-[#f0f0e4] text-black py-10">
      <p className="text-center text-sm md:text-base opacity-90">
        {text}
      </p>
    </section>
  );
};

export default SubHero;