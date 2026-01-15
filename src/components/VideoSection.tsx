import { useState } from "react";
import { Video } from "lucide-react";

const VideoSection = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  
  // Extract YouTube video ID from URL
  const getYoutubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(youtubeUrl);

  return (
    <section id="video" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="w-8 h-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-black text-foreground">
              Self-Introduction Video
            </h2>
          </div>
          <p className="text-muted-foreground">
            Watch my portfolio presentation and learn more about my work.
          </p>
        </div>

        {/* YouTube Embed Area */}
        <div className="max-w-4xl mx-auto">
          {videoId ? (
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
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
            <div className="aspect-video bg-muted rounded-lg flex flex-col items-center justify-center gap-6 border-2 border-dashed border-border">
              <Video className="w-16 h-16 text-muted-foreground" />
              <div className="text-center space-y-2">
                <p className="text-muted-foreground font-medium">
                  Paste your YouTube video URL below
                </p>
                <input
                  type="text"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full max-w-md px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}
          
          {/* URL Input (always visible for easy updates) */}
          {videoId && (
            <div className="mt-6 text-center">
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="Update YouTube URL..."
                className="w-full max-w-md px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
