import { cn } from '@/src/utils/cn';
import { ComponentProps } from 'react';

export function H4({ className, ...rest }: ComponentProps<'h4'>) {
  const classNames = cn(
    'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
    className
  );
  return <h4 className={classNames} {...rest}></h4>;
}
