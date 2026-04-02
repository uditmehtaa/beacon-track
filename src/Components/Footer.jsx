export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-3">roapp</h2>
          <p className="text-sm">
            Build, automate and scale your workflows faster.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white mb-3 text-sm font-semibold">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Integrations</li>
            <li>API</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white mb-3 text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white mb-3 text-sm font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        © 2026 roapp. All rights reserved.
      </div>
    </footer>
  );
}