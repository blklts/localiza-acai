interface PageTemplateProps {
  title: string;
  titleClassName?: string;
  heroBg?: string;
  leftCurve?: string;
  rightCurve?: string;
  rightCurveClassName?: string;
  curvesAlign?: 'start' | 'end';
  children?: React.ReactNode;
}

export default function PageTemplate({
  title,
  titleClassName,
  heroBg,
  leftCurve,
  rightCurve,
  rightCurveClassName,
  curvesAlign = 'start',
  children,
}: PageTemplateProps) {
  const curveClass =
    curvesAlign === 'end'
      ? 'self-end max-h-[calc(100%-3rem)] max-w-[200px]'
      : 'self-start max-h-[600px]';

  return (
    <>
      {/* Hero row */}
      <section className="relative w-full h-[180px] md:h-[430px] overflow-hidden bg-primary flex-shrink-0 rounded-b-[20px] md:rounded-none md:-mt-5">
        {heroBg && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
        )}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">
          <h1 className={`font-sans font-bold md:text-[128px] md:leading-[95%] tracking-normal text-center text-white w-full ${titleClassName ?? 'text-[36px]'}`}>{title}</h1>
        </div>
      </section>

      {/* Content row — left curve | children | right curve */}
      {children && (
        <section className="flex items-stretch flex-1 w-full bg-[#f5f5f5]">
          {leftCurve && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={leftCurve} alt="" className={`hidden md:block flex-shrink-0 w-auto pointer-events-none ${curveClass}`} />
          )}

          <div className="flex-1 flex items-center gap-12 p-6 md:pl-12 md:py-16">
            {children}
          </div>

          {rightCurve && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={rightCurve} alt="" className={`hidden md:block flex-shrink-0 w-auto pointer-events-none ${rightCurveClassName ?? curveClass}`} />
          )}
        </section>
      )}
    </>
  );
}
