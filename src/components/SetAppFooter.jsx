export default function SetappFooter() {
  return (
    <footer className="bg-[#1F2227] pt-24">
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 border-b border-white/10 pb-12">
          <div className="md:col-span-2">
            {/* <p className="text-sm font-semibold mb-4">SETAPP</p> */}
            <a href="/" className="flex items-center mb-4 gap-4">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center rotate-45">
                <div className="grid grid-cols-2 gap-[2px] -rotate-45">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#2B2D32] rounded-[1px]"
                    />
                  ))}
                </div>
              </div>
              <span className="font-semibold text-lg">SETAPP</span>
            </a>
            <p className="text-sm text-white/60 mb-4">
              Updates from our team, written with love 💛
            </p>

            <div className="flex items-center bg-white/10 rounded-md overflow-hidden max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 outline-none flex-1"
              />
              <button className="px-4 text-white">→</button>
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Home"
            links={[
              "How it works",
              "All Apps",
              "Pricing",
              "Setapp for Teams",
              "Blog",
              "Podcast",
              "Downloads",
            ]}
          />

          <FooterColumn
            title="About"
            links={[
              "Support",
              "Education Discount",
              "Family Plan",
              "For Developers",
              "Gift Cards",
              "Redeem Gift Card Code",
              "Setapp Reviews",
              "Affiliate Program",
              "Mac Developer Survey 2023",
            ]}
          />

          <FooterColumn
            title="Getting started with Setapp"
            links={[
              "Remote access to other Macs",
              "Fix macOS Ventura problems",
              "Best productivity apps",
              "Best YouTube downloaders",
              "Uninstall apps",
            ]}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 text-xs text-white/40">
          <p>© 2023 MacPaw Way Ltd. · Privacy Policy</p>

          <div className="flex items-center gap-4">
            <span>English</span>
            <div className="flex gap-3">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Helper component */
function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-4">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li
            key={link}
            className="text-sm text-white/60 hover:text-white cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
