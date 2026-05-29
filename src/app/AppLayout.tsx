import { Outlet, useNavigate, useLocation } from 'react-router';

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  const toggleView = () => {
    if (isDashboard) {
      navigate('/linktree');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Mono'] overflow-x-hidden selection:bg-black selection:text-white">
      {/* Shared Header for the Logo */}
      <div className="fixed top-0 left-0 w-full z-50 p-4 pointer-events-none flex justify-between items-start">
        <button 
          onClick={toggleView}
          className="pointer-events-auto group relative flex items-center gap-3 bg-black text-white px-4 py-3 border-4 border-black hover:bg-white hover:text-black transition-all active:translate-y-1 active:translate-x-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
        >
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current stroke-current" strokeWidth="4" strokeLinejoin="round">
              {/* Brutalist Angel Wing */}
              <path d="M20,80 L35,60 L20,40 L45,35 L60,10 L75,35 L90,25 L80,55 L95,70 L65,65 L55,90 Z" fill="white" />
              <path d="M45,35 L65,65 M75,35 L55,90" stroke="black" strokeWidth="6" className="group-hover:stroke-white transition-colors" />
            </svg>
          </div>
          <span className="font-['Bebas_Neue'] text-3xl tracking-widest mt-1">MONOFLY</span>
          
          {/* Comic tool tip */}
          <div className="absolute -bottom-14 -right-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-white text-black border-4 border-black px-3 py-1 font-bold text-sm shadow-[4px_4px_0px_0px_#000] rotate-3 whitespace-nowrap z-50">
            SWITCH VIEW!
          </div>
        </button>
      </div>

      <div className="pt-24 min-h-screen w-full relative">
        <Outlet />
      </div>
    </div>
  );
}