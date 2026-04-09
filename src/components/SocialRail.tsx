const socialItems = [
  { label: "Apple", short: "A" },
  { label: "Facebook", short: "f" },
  { label: "Instagram", short: "ig" },
  { label: "Spotify", short: "sp" },
  { label: "X", short: "X" },
  { label: "YouTube", short: "yt" },
  { label: "TikTok", short: "tk" },
];

type SocialRailProps = {
  direction?: "vertical" | "grid";
  tone?: "light" | "dark";
};

export default function SocialRail({
  direction = "vertical",
  tone = "light",
}: SocialRailProps) {
  return (
    <div className={`social-rail social-rail-${direction} social-rail-${tone}`}>
      {socialItems.map(({ label, short }) => (
        <a key={label} href="#" aria-label={label} className="social-icon-link">
          <span className="social-icon-text">{short}</span>
        </a>
      ))}
    </div>
  );
}
