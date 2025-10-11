import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95',
      {
        // Variants
        'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg hover:shadow-xl': variant === 'primary',
        'bg-gradient-to-r from-accent to-accent-light text-primary shadow-lg hover:shadow-xl': variant === 'secondary',
        'border-2 border-accent text-accent hover:bg-accent hover:text-primary': variant === 'outline',
        'text-muted hover:bg-gold-subtle': variant === 'ghost',
        
        // Sizes
        'h-9 px-4 text-sm': size === 'sm',
        'h-11 px-6 text-base': size === 'md',
        'h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg': size === 'lg',
      },
      className
    );

    return (
      <button
        ref={ref}
        className={baseClasses}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
