type GradientTextProps = {
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
};

export const GradientText = ({
  children,
  gradientFrom = 'from-brand-green',
  gradientTo = 'to-brand-blue',
  className = '',
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
