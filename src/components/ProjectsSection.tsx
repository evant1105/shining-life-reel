import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const ProjectsSection = () => {
  // Data for the Pie Charts
  const sentimentData = [
    { name: 'Satisfied', value: 83.3 },
    { name: 'Confident', value: 16.7 },
  ];

  const arRatingData = [
    { name: 'Excellent (5/5)', value: 50 },
    { name: 'Good (4/5)', value: 33.3 },
    { name: 'Average', value: 16.7 },
  ];

  const COLORS = ['#1a1a1a', '#737373', '#e5e5e5']; // Black, Gray, Light Gray

  return (
    <section id="projects" className="py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-foreground tracking-tight">
            Selected UX Work
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mt-8" />
        </div>

        {/* Project Card */}
        <div className="bg-card border border-border max-w-5xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Project Info */}
            <div className="p-10 lg:p-14">
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                CASE STUDY
              </p>
              <h3 className="font-display text-3xl text-foreground mb-2 tracking-tight">
                MyCampus AR
              </h3>
              <p className="font-display text-xl text-foreground/70 italic mb-6">
                Navigation App
              </p>
              
              <div className="w-10 h-px bg-foreground mb-6" />
              
              <p className="text-xs tracking-widest text-muted-foreground mb-2">
                PROJECT ROLE
              </p>
              <p className="font-medium text-foreground mb-8">
                UX Strategist & Stakeholder Liaison
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8 font-light">
                The project aims to reduce users' mental burden by bridging the gap between the digital and physical world through Augmented Reality (AR). The application addresses the Gulf of Evaluation by translating abstract map data into real-world guidance using AR arrows and floating waypoints. Based on a PACT analysis, the target users include freshmen, new faculty, and campus visitors, with a strong focus on accessibility through route prioritization that avoids stairs and favors elevators to support users with limited mobility or heavy equipment.
              </p>
              
              <div className="space-y-3 text-sm text-muted-foreground border-t border-border pt-6">
                <p><span className="text-foreground font-medium">Domain:</span> Mobile UI/UX Design & AR</p>
                <p><span className="text-foreground font-medium">Tools:</span> Figma, User Research, Usability Testing</p>
              </div>
            </div>
            
            {/* Project Image */}
            <div className="bg-foreground p-10 flex items-center justify-center min-h-[450px]">
              <img 
                src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/ProjectMain.png" 
                alt="MyCampus AR Navigation App"
                className="max-w-full max-h-[380px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Additional Project Sections */}
        <div className="mt-24 space-y-24">
          {/* Problem Section */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
              THE CHALLENGE
            </p>
            <h3 className="font-display text-3xl text-foreground mb-8 tracking-tight">Problem</h3>
            <p className="text-muted-foreground leading-relaxed font-light">
              Many students and campus visitors struggle to find lecture halls, labs, offices, and facilities
              —especially when visiting for the first time. Traditional 2D maps are often confusing, lack 
              context, and do not reflect real-world surroundings. Approximately 67 percent of learners claim 
              to have encountered stress as a result of missing classes due to inadequate layouts.
            </p>
          </div>

          {/* Target Users */}
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
              USER PERSONAS
            </p>
            <h3 className="font-display text-3xl text-foreground mb-16 tracking-tight">Target Users</h3>
            <div className="grid sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
              {[
                { icon: "👤", label: "New university students" },
                { icon: "👥", label: "Visitors & parents" },
                { icon: "🎫", label: "Event participants" },
              ].map((user) => (
                <div key={user.label} className="text-center">
                  <div className="text-4xl mb-4 grayscale">{user.icon}</div>
                  <p className="text-foreground font-light tracking-wide">{user.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Usability Testing Summary (NEW SECTION) */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                VALIDATION
              </p>
              <h3 className="font-display text-3xl text-foreground tracking-tight">
                Usability Testing Summary
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column: Quantitative + Charts */}
              <div className="space-y-8">
                <div className="bg-background/50 border border-border p-8 rounded-sm h-full">
                  <h4 className="font-display text-xl text-foreground mb-6">Quantitative Findings</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground font-light mb-8">
                    The system received high approval ratings, with <strong>83.3%</strong> of respondents reporting they were "Satisfied". The AR core value proposition was validated, as half the users rated the interface as Excellent (5/5). Additionally, <strong>66.7%</strong> strongly agreed that the home page layout offered easy navigation.
                  </p>
                  
                  {/* Charts Container */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Chart 1: Satisfaction */}
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={sentimentData}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {sentimentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-2">Overall Satisfaction</p>
                    </div>

                    {/* Chart 2: AR Rating */}
                    <div className="flex flex-col items-center">
                      <div className="h-32 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={arRatingData}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {arRatingData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-2">AR Interface Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Qualitative */}
              <div>
                <div className="bg-background/50 border border-border p-8 rounded-sm h-full">
                  <h4 className="font-display text-xl text-foreground mb-6">Qualitative Feedback</h4>
                  <div className="space-y-6 text-sm leading-relaxed text-muted-foreground font-light">
                    <div>
                      <strong className="text-foreground font-medium block mb-2">Positive Reception</strong>
                      <p>
                        Users responded positively to the "Distributed Cognition" capabilities (such as the "Next Class" smart widget). Participants noted that it relieved the mental burden of manually opening schedules and searching through them.
                      </p>
                    </div>
                    <div>
                      <strong className="text-foreground font-medium block mb-2">Refinement & Iteration</strong>
                      <p>
                        Initial negative feedback highlighted that the directory was excessively long and map icons were challenging to view. These issues were directly addressed in the refinement stage by introducing <strong>search chips</strong> and <strong>high-contrast map icons</strong> to improve visibility and usability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Artifacts */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                VISUALIZATION
              </p>
              <h3 className="font-display text-3xl text-foreground tracking-tight">
                Design Artifacts
              </h3>
            </div>

            <div className="space-y-16">
              {/* Low-Fidelity Section */}
              <div className="bg-background/50 border border-border p-8 rounded-sm">
                 <h4 className="font-display text-xl text-foreground mb-8 text-center">Low-fidelity Wireframes</h4>
                 <div className="overflow-hidden rounded-sm border border-border/50">
                    <img 
                      src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/PaperPrototype.png" 
                      alt="Low-fidelity Wireframes"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
              </div>

              {/* High-Fidelity Section */}
              <div className="bg-background/50 border border-border p-8 rounded-sm">
                 <h4 className="font-display text-xl text-foreground mb-8 text-center">High-Fidelity UI Screens</h4>
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="overflow-hidden rounded-sm border border-border/50">
                      <img 
                        src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/HighFidel1.png" 
                        alt="High Fidelity Screen 1"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="overflow-hidden rounded-sm border border-border/50">
                      <img 
                        src="https://lxpnkhjpnwfluexbnkkl.supabase.co/storage/v1/object/public/images/HighFidel2.png" 
                        alt="High Fidelity Screen 2"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">
                PROCESS
              </p>
              <h3 className="font-display text-3xl text-foreground tracking-tight">
                Challenges & Solutions
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Challenge 1 */}
              <div className="bg-background/50 border border-border p-8 rounded-sm">
                <h4 className="font-display text-xl text-foreground mb-6">The "Verticality" Problem</h4>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground font-light">
                  <p>
                    <strong className="text-foreground font-medium block mb-1">Challenge:</strong> 
                    Usability testing revealed a spatial disconnect in multi-story wayfinding. 33% of users exhibited "icon blindness," failing to notice stair icons on 2D maps, which led to wasted time and navigation errors.
                  </p>
                  <p>
                    <strong className="text-foreground font-medium block mb-1">Solution:</strong> 
                    We implemented <em>Facility Prioritization Logic</em>. Users pre-select their route preference (Speed/Stairs vs. Accessibility/Elevators) before calculation. This algorithmic filtering reduces cognitive load and aligns the map with user intent.
                  </p>
                </div>
              </div>

              {/* Challenge 2 */}
              <div className="bg-background/50 border border-border p-8 rounded-sm">
                <h4 className="font-display text-xl text-foreground mb-6">Disjointed Workflows</h4>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground font-light">
                  <p>
                    <strong className="text-foreground font-medium block mb-1">Challenge:</strong> 
                    Users struggled with the "gulf of evaluation" when transitioning from physical entry to digital navigation. Complex menus created friction exactly when immediacy was needed.
                  </p>
                  <p>
                    <strong className="text-foreground font-medium block mb-1">Solution:</strong> 
                    We adopted an omnichannel strategy by placing physical QR code anchors at building entrances. Scanning these instantly launches the AR navigation layer via marker-based tracking, creating a seamless handover from the physical to the digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;