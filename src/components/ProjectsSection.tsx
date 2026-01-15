const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground inline-flex items-center gap-3">
            <span className="w-4 h-4 bg-primary" />
            SELECTED UX WORK
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A collection of my UI/UX projects showcasing my design thinking, process, and outcomes.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-card shadow-xl max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Project Info */}
            <div className="p-8 lg:p-12">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-16 bg-primary" />
                <h3 className="text-2xl font-bold text-primary">
                  MyCampus AR
                  <br />
                  Navigation App (UI/UX
                  <br />
                  Project)
                </h3>
              </div>
              
              <p className="font-semibold text-foreground mb-4">
                Project Role: UX Strategist & Stakeholder Liaison
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The project aims to reduce users' mental burden by bridging the gap between the digital and physical world through Augmented Reality (AR). The application addresses the Gulf of Evaluation by translating abstract map data into real-world guidance using AR arrows and floating waypoints. Based on a PACT analysis, the target users include freshmen, new faculty, and campus visitors, with a strong focus on accessibility through route prioritization that avoids stairs and favors elevators to support users with limited mobility or heavy equipment.
              </p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Domain:</strong> Mobile UI/UX Design & Augmented Reality (AR)</p>
                <p><strong>Tools:</strong> Figma, User Research, Usability Testing</p>
              </div>
            </div>
            
            {/* Project Image */}
            <div className="bg-primary p-8 flex items-center justify-center min-h-[400px]">
              <img 
                src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/ProjectMain.png" 
                alt="MyCampus AR Navigation App"
                className="max-w-full max-h-[350px] object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Additional Project Sections */}
        <div className="mt-16 space-y-16">
          {/* Problem Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-foreground mb-6">PROBLEM</h3>
            <p className="text-muted-foreground">
              Many students and campus visitors struggle to find lecture halls, labs, offices, and facilities
              —especially when visiting for the first time. Traditional 2D maps are often confusing, lack 
              context, and do not reflect real-world surroundings. Approximately 67 percent of learners claim 
              to have encountered stress as a result of missing classes due to inadequate layouts.
            </p>
          </div>

          {/* Target Users */}
          <div className="text-center">
            <h3 className="text-3xl font-black text-foreground mb-12">TARGET USERS</h3>
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: "👤", label: "New university students" },
                { icon: "👥", label: "Visitors & parents" },
                { icon: "🎫", label: "Event participants" },
              ].map((user) => (
                <div key={user.label} className="text-center">
                  <div className="text-4xl text-primary mb-4">{user.icon}</div>
                  <p className="text-foreground font-medium">{user.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
