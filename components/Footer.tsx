import Image from "next/image";

const productLinks = [
  { label: "Cocinas", href: "/cocinas" },
  { label: "Clósets", href: "/closets" },
  { label: "Baños", href: "/banos" },
  { label: "Puertas", href: "/puertas" },
];

const infoLinks = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Premium vs Plus", href: "#planes" },
  {
    label: "Cotizar",
    href: "https://wa.me/5219992171749?text=Hola%20Idera%2C%20me%20interesa%20una%20cotización",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 sm:px-12 md:px-16 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Identity */}
        <div>
          <Image
            src="/logo-color.png.jpg"
            alt="Idera Muebles"
            width={200}
            height={67}
            style={{ height: "50px", width: "auto" }}
          />
          <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-xs">
            Cocinas, clósets y muebles a medida en Mérida.
          </p>
        </div>

        {/* Products */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">
            Productos
          </p>
          <ul className="flex flex-col gap-3">
            {productLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">
            Información
          </p>
          <ul className="flex flex-col gap-3">
            {infoLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">
            Contacto
          </p>
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-black">Mérida, Yucatán</p>
              <p className="text-gray-400 mt-1 leading-relaxed">
                Tablaje 13633, carretera Mérida-Valladolid Kanasín
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href="tel:+529992171749"
                className="hover:text-black transition-colors"
              >
                +52 999 217 1749
              </a>
              <a
                href="mailto:contacto@ideramuebles.com"
                className="hover:text-black transition-colors"
              >
                contacto@ideramuebles.com
              </a>
            </div>
            <div className="text-gray-400">
              <p>Lun–Vie: 8:00 – 18:00</p>
              <p>Sáb: 9:00 – 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Idera Muebles. Todos los derechos reservados.</p>
        <p>Garantía 5 años en todos nuestros productos.</p>
      </div>
    </footer>
  );
}
