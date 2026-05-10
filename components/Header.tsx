import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Cocinas", href: "/cocinas" },
  { label: "Clósets", href: "/closets" },
  { label: "Baños", href: "/banos" },
  { label: "Puertas", href: "/puertas" },
  { label: "Proyectos", href: "#proyectos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-color.png.jpg"
            alt="Idera Muebles"
            width={200}
            height={67}
            priority
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Cotizar button */}
        <a
          href="https://wa.me/5219992171749?text=Hola%20Idera%2C%20me%20interesa%20una%20cotización"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 border border-black text-black text-sm font-medium px-5 py-2 hover:bg-black hover:text-white transition-colors"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}
