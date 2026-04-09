type SimpleIconProps = {
  label: string;
  className?: string;
};

export default function SimpleIcon({
  label,
  className = "",
}: SimpleIconProps) {
  return <span className={`simple-icon ${className}`.trim()}>{label}</span>;
}
