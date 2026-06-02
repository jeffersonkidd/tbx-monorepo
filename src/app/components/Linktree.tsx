import { Instagram, Twitter, Youtube, Github, Mail, ArrowRight } from 'lucide-react';

const links = [
  { title: 'MY LATEST VIDEO: WHY BRUTALISM?', url: '#' },
  { title: 'JOIN THE DISCORD CABAL', url: '#' },
  { title: 'BUY ME A COFFEE (OR INK)', url: '#' },
  { title: 'MERCH: THE BLACK & WHITE COLLECTION', url: '#' },
];

export function Linktree() {
  return (
    <div className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center p-4 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 3px, transparent 4px)', backgroundSize: '16px 16px' }}></div>
      
      {/* Container */}
      <div className="relative z-10 w-full max-w-md bg-white border-8 border-black shadow-[16px_16px_0px_0px_#000] p-8 pb-12">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 relative">
          <div className="w-32 h-32 mb-6 relative group cursor-pointer">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
            <img 
              src="./profile.jpeg"
              alt="Creator Profile"
              className="w-full h-full object-cover border-4 border-black relative z-10 filter grayscale contrast-125 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform"
            />
            {/* Zap decoration */}
            <svg viewBox="0 0 24 24" className="absolute -top-6 -right-6 w-12 h-12 fill-white stroke-black stroke-[2] z-20 group-hover:rotate-12 transition-transform">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          
          <h1 className="font-['Bebas_Neue'] text-5xl text-center leading-none tracking-wide bg-black text-white px-4 py-2 -rotate-2 inline-block">
            @TIBBIE_X
          </h1>
          <p className="mt-4 font-bold text-center border-b-4 border-black pb-4 w-full">
            Art. Code. Chaos. Design System Overlord.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url}
              className="group relative block w-full bg-white border-4 border-black p-4 text-center hover:bg-black hover:text-white transition-colors hover:-translate-y-1 hover:-translate-x-1 shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none"
            >
              <span className="font-['Bebas_Neue'] text-2xl tracking-wide relative z-10 flex items-center justify-center gap-2">
                {link.title}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" strokeWidth={3} />
              </span>
            </a>
          ))}
        </div>

        {/* Socials Section */}
        <div className="mt-10 flex justify-center gap-6">
          {[
            { icon: Twitter, url: '#' },
            { icon: Instagram, url: '#' },
            { icon: Youtube, url: '#' },
            { icon: Github, url: '#' },
            { icon: Mail, url: '#' },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.url}
              className="w-14 h-14 flex items-center justify-center border-4 border-black bg-white hover:bg-black hover:text-white hover:-translate-y-2 hover:rotate-6 transition-all shadow-[4px_4px_0px_0px_#000]"
            >
              <social.icon className="w-8 h-8" strokeWidth={2.5} />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
