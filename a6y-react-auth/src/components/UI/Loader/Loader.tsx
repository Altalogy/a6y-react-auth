import React from 'react'
import './Loader.css'

/**
 * @typedef ILoaderProps
 * @props {string} [className] - the CSS classes.
 */

export interface ILoaderProps {
  className?: string
}

/**
 * Renders the Loader component.
 *
 * @param {boolean} [className] - the CSS classes.
 *
 * @example
 * <Loader />
 */

export const Loader: React.FunctionComponent<ILoaderProps> = ({
  className = globalThis.A6YReactAuthConfig.components?.loader?.classNames
    ? globalThis.A6YReactAuthConfig.components?.loader?.classNames
    : '',
}: ILoaderProps) => {
  return (
    <div className={className}>
      <svg
        className='animate-spin'
        width='24'
        height='24'
        viewBox='0 0 47 47'
        fill='none'
        data-testid='loader-svg-spinner'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M23.5 47C36.4787 47 47 36.4787 47 23.5C47 10.5213 36.4787 0 23.5 0C10.5213 0 0 10.5213 0 23.5C0 36.4787 10.5213 47 23.5 47ZM23.5 42C33.7173 42 42 33.7173 42 23.5C42 13.2827 33.7173 5 23.5 5C13.2827 5 5 13.2827 5 23.5C5 33.7173 13.2827 42 23.5 42Z'
          fill='black'
          fillOpacity='0.1'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M46.9952 23.0191C46.9925 22.8902 46.9888 22.7613 46.9841 22.6324C46.8343 18.5785 45.6377 14.6325 43.5107 11.1782C42.6784 9.82665 41.7149 8.5684 40.6373 7.42003C40.3038 7.06467 39.9593 6.71968 39.6044 6.38561C38.1757 5.04124 36.5784 3.8755 34.8462 2.92048C32.0257 1.36549 28.9238 0.411179 25.7352 0.106526C24.3606 -0.0248086 23.2508 1.1208 23.2661 2.50157L23.2917 4.79504C23.293 4.90886 23.3862 4.99998 23.5001 4.99998V4.99998C33.7173 4.99998 42.0001 13.2827 42.0001 23.5C42.0001 25.6836 41.6217 27.7789 40.9271 29.7239C40.4629 31.0234 40.923 32.528 42.1482 33.1629V33.1629C43.3727 33.7973 44.8933 33.3226 45.3943 32.0377C46.3948 29.4722 46.9376 26.7478 46.995 23.9889C46.9983 23.8263 47 23.6633 47 23.5C47 23.3393 46.9984 23.179 46.9952 23.0191Z'
          fill={
            globalThis.A6YReactAuthConfig.components?.loader?.color
              ? globalThis.A6YReactAuthConfig.components?.loader?.color
              : '#3F4AF0'
          }
        />
      </svg>
    </div>
  )
}
