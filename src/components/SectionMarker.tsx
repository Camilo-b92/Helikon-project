type SectionMarkerProps = {
  title: string;
  align?: "left" | "right";
};

export default function SectionMarker({ title, align = "left" }: SectionMarkerProps) {
  return (
    <div className={`section-marker${align === "right" ? " section-marker-right" : ""}`}>
      <span className="section-marker-icon" aria-hidden="true">◆</span>
      <h2 className="section-marker-title">{title}</h2>
    </div>
  );
}
