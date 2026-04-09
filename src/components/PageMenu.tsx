type MenuItem = {
  href: string;
  label: string;
};

type PageMenuProps = {
  items: MenuItem[];
};

export default function PageMenu({ items }: PageMenuProps) {
  return (
    <nav className="page-menu" aria-label="Secciones de la página">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="page-menu-link">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
