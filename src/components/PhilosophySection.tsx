const PhilosophySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-8">
          MY DESIGN PHILOSOPHY
        </h2>
        
        <p className="text-muted-foreground leading-relaxed text-lg italic">
          I believe that effective design starts with empathy. My approach focuses on understanding{" "}
          <span className="underline decoration-primary decoration-2 underline-offset-4">users first</span>,{" "}
          <span className="underline decoration-primary decoration-2 underline-offset-4">validating ideas early</span>, and{" "}
          continuously improving through feedback. I also value accessibility and clarity, ensuring that users 
          can interact with digital products comfortably and confidently. My design is evidence-based, grounded 
          in user research consisting of surveys, interviews, and task analysis. I use real user knowledge 
          instead of assumptions when presenting problems and solutions.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
