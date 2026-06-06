interface PageTemplateProps {
  title: string;
  heroBg?: string;
  leftCurve?: string;
  rightCurve?: string;
  children?: React.ReactNode;
}

export default function PageTemplate({
  title,
  heroBg,
  leftCurve,
  rightCurve,
  children,
}: PageTemplateProps) {
  return (
    <>
      {/* Hero row — 430px, image background with primary tint, left-aligned title */}
      <section className="relative h-[430px] overflow-hidden bg-primary flex-shrink-0 -mt-5">
        {heroBg && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        )}
        <div className="relative z-10 h-full flex items-center px-16">
          <h1 className="font-sans font-bold text-[128px] leading-[95%] tracking-normal text-center text-white w-full">{title}</h1>
        </div>
      </section>

      {/* Content row — left curve | children | right curve */}
      <section className="flex items-stretch flex-1 bg-[#f5f5f5]">
        {leftCurve && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={leftCurve} alt="" className="flex-shrink-0 w-auto max-h-[600px] self-start pointer-events-none" />
        )}

        <div className="flex-1 flex items-center gap-12 pl-12 py-16">
          {children}
        </div>

        {rightCurve && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={rightCurve} alt="" className="flex-shrink-0 w-auto max-h-[600px] self-start pointer-events-none" />
        )}
      </section>
    </>
  );
}
