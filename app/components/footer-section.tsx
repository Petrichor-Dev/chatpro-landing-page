export default function FooterSection() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left - Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white text-2xl font-bold">Chat</span>
              <span className="text-cyan-400 text-2xl font-bold">Pro</span>
              <span className="text-cyan-400 text-sm">✨</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Solusi AI ChatBot terdepan untuk meningkatkan Customer Service
              bisnis Anda
            </p>
            <p className="text-sm italic text-slate-500 mt-2">
              Chat Langsungg Beresi!
            </p>
          </div>

          {/* Halaman Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Halaman</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Harga
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-cyan-400 transition text-sm"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak Kami Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-slate-600 w-5 h-5 rounded flex-shrink-0"></div>
                <span className="text-slate-400 text-sm">
                  admin@chatproapp.id
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-600 w-5 h-5 rounded flex-shrink-0"></div>
                <span className="text-slate-400 text-sm">
                  +62 811-7008-2025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-600 w-5 h-5 rounded flex-shrink-0"></div>
                <span className="text-slate-400 text-sm">@chatpro.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 ChatPro. All rights reserved
          </p>

          {/* Footer Links */}
          <div className="flex gap-4 text-xs">
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Help Center
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Status
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Privacy & Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
