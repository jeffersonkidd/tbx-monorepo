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
              src="data:image/jpeg;base64,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"   
              alt="Creator Profile"
              className="w-full h-full object-cover border-4 border-black relative z-10 filter grayscale contrast-125 group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform"
            />
            {/* Zap decoration */}
            <svg viewBox="0 0 24 24" className="absolute -top-6 -right-6 w-12 h-12 fill-white stroke-black stroke-[2] z-20 group-hover:rotate-12 transition-transform">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          
          <h1 className="font-['Bebas_Neue'] text-5xl text-center leading-none tracking-wide bg-black text-white px-4 py-2 -rotate-2 inline-block">
            @MONOFLY_CREATOR
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
