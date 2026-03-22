export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#030303] relative z-10 w-full text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-2xl font-bold font-heading text-white tracking-tighter mb-2">
            NOVA TECH <span className="text-[#00f0ff]">AFRICA</span>
          </h4>
          <p className="text-gray-500 text-sm">Building Africa&apos;s Digital Future. &copy; {new Date().getFullYear()}</p>
        </div>
        
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white hover:text-[#00f0ff] transition-colors">Twitter</a>
          <a href="#" className="hover:text-white hover:text-[#00f0ff] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
