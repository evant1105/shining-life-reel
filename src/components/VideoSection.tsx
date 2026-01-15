import { Video } from "lucide-react";

const VideoSection = () => {
  const youtubeUrl = "https://www.youtube.com/watch?v=ytLYmz-kmfA";
  
  // Extract YouTube video ID from URL
  const getYoutubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(youtubeUrl);

  return (
    <section id="video" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] text-muted-foreground mb-4">
            INTRODUCTION
          </p>
          <h2 className="font-display text-3xl lg:text-4xl text-foreground tracking-tight">
            Self-Introduction Video
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mt-8 mb-6" />
          <p className="text-muted-foreground font-light">
            Watch my portfolio presentation and learn more about my work.
          </p>
        </div>

        {/* YouTube Embed Area */}
        <div className="max-w-4xl mx-auto">
          {videoId ? (
            <div className="aspect-video border border-border overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Self Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="aspect-video bg-secondary border border-border flex flex-col items-center justify-center gap-6">
              <Video className="w-16 h-16 text-muted-foreground" />
              <p className="text-muted-foreground font-light">
                Video not available
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;