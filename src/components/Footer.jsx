import { Link } from "react-router-dom";
import site from "../data/site.json";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const { brand, footer } = site;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 py-8 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
            <BrandLogo />

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/10 sm:block"
            />

            <p className="text-center text-xs text-ink-500 sm:text-left">
              &copy; {currentYear} {brand.name}. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          {footer.links?.length > 0 && (
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
            >
              {footer.links.map((link, index) => (
                <div key={link.href} className="flex items-center gap-4">
                  <Link
                    to={link.href}
                    className="text-xs text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>

                  {index < footer.links.length - 1 && (
                    <span aria-hidden="true" className="text-ink-700">
                      /
                    </span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Attribution */}
          <p className="text-center text-xs text-ink-500 md:text-right">
            Developed by{" "}
            <a
              href={footer.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-300 transition-colors hover:text-brand-400"
            >
              {footer.developer}
            </a>
            <span className="mx-1.5 text-ink-700">·</span>
            Powered by{" "}
            <a
              href={footer.poweredByUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-300 transition-colors hover:text-brand-400"
            >
              {footer.poweredBy}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
