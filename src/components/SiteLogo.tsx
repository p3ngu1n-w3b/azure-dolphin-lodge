type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <img
      className={`site-logo__image ${className}`.trim()}
      src="/images/logo.jpg"
      alt="Azur Dolphin Lodge Self Catering"
      width={320}
      height={320}
      decoding="async"
    />
  );
}
