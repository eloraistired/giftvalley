import * as React from 'react';

const FlowerIcon = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" ref={ref} {...props}>
    <rect fill="none" height="256" width="256" />
    <path d="M115,103.2a28,28,0,0,1,26,0h0c7.3-15.4,15-34.6,15-47.2a28,28,0,0,0-56,0c0,12.6,7.7,31.8,15,47.2Z" opacity="0.5" fill="currentColor" />
    <path d="M100,126.8a27.8,27.8,0,0,1,3.8-12.8,26.5,26.5,0,0,1,9.2-9.6h0C103.3,90.3,90.5,74,79.6,67.8a28,28,0,0,0-28,48.4c10.9,6.3,31.4,9.3,48.4,10.6Z" opacity="0.5" fill="currentColor" />
    <path d="M113,151.6a26.5,26.5,0,0,1-9.2-9.6,27.8,27.8,0,0,1-3.8-12.8h0c-17,1.3-37.5,4.3-48.4,10.6a28,28,0,1,0,28,48.4c10.9-6.2,23.7-22.5,33.4-36.6Z" opacity="0.5" fill="currentColor" />
    <path d="M141,152.8a28,28,0,0,1-26,0h0c-7.3,15.4-15,34.6-15,47.2a28,28,0,0,0,56,0c0-12.6-7.7-31.8-15-47.2Z" opacity="0.5" fill="currentColor" />
    <path d="M156,129.2a27.8,27.8,0,0,1-3.8,12.8,26.5,26.5,0,0,1-9.2,9.6h0c9.7,14.1,22.5,30.4,33.4,36.6a28,28,0,0,0,28-48.4c-10.9-6.3-31.4-9.3-48.4-10.6Z" opacity="0.5" fill="currentColor" />
    <path d="M143,104.4a26.5,26.5,0,0,1,9.2,9.6,27.8,27.8,0,0,1,3.8,12.8h0c17-1.3,37.5-4.3,48.4-10.6a28,28,0,0,0-28-48.4C165.5,74,152.7,90.3,143,104.4Z" opacity="0.5" fill="currentColor" />
    <circle cx="128" cy="128" fill="none" r="28" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
));

FlowerIcon.displayName = 'FlowerIcon';

const BirthdayIcon = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <g opacity="0.5" fill="currentColor">
      <path d="M102.4,198.4,57.6,153.6,37.9,207.9a7.9,7.9,0,0,0,10.2,10.2Z" />
    </g>
    <path d="M76.8,100.8l78.4,78.4,41-14.9a8,8,0,0,0,2.9-13.2L104.9,56.9a8,8,0,0,0-13.2,2.9Z" opacity="0.5" fill="currentColor" />
    <path
      d="M37.9,207.9,91.7,59.8a8,8,0,0,1,13.2-2.9l94.2,94.2a8,8,0,0,1-2.9,13.2L48.1,218.1A7.9,7.9,0,0,1,37.9,207.9Z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M168,72s0-24,24-24,24-24,24-24" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="102.4" x2="57.6" y1="198.4" y2="153.6" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="144" x2="144" y1="16" y2="40" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="216" x2="232" y1="112" y2="128" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="216" x2="240" y1="80" y2="72" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="76.8" x2="155.2" y1="100.8" y2="179.2" />
  </svg>
));

BirthdayIcon.displayName = 'BirthdayIcon';

const Heart = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path
      d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
      opacity="0.5"
      fill="currentColor"
    />
    <path
      d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
));

Heart.displayName = 'Heart';

const Gift = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <rect fill="none" height="48" rx="8" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" width="192" x="32" y="80" />
    <path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="80" y2="208" />
    <path d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z" opacity="0.5" fill="currentColor" />
  </svg>
));

Gift.displayName = 'Gift';

const Butterfly = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path
      d="M224,120c-7.8,31.1-29,32.8-36.9,32.4h0A36,36,0,1,1,128,180a36,36,0,1,1-59.1-27.6h0c-7.9.4-29.1-1.3-36.9-32.4S17.1,48,48,48s80,48,80,80c0-32,49.1-80,80-80S232,88,224,120Z"
      opacity="0.5"
      fill="currentColor"
    />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="56" y2="180" />
    <path
      d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
));

Butterfly.displayName = 'Butterfly';

const Balloon = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path
      d="M224,120c-7.8,31.1-29,32.8-36.9,32.4h0A36,36,0,1,1,128,180a36,36,0,1,1-59.1-27.6h0c-7.9.4-29.1-1.3-36.9-32.4S17.1,48,48,48s80,48,80,80c0-32,49.1-80,80-80S232,88,224,120Z"
      opacity="0.5"
      fill="currentColor"
    />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="56" y2="180" />
    <path
      d="M187.1,152.4c7.9.4,29.1-1.3,36.9-32.4s14.9-72-16-72-80,48-80,80c0-32-49.1-80-80-80S24,88,32,120s29,32.8,36.9,32.4"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M88,144.2A36,36,0,1,0,128,180a36,36,0,1,0,40-35.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
));

Balloon.displayName = 'Balloon';

const Cake = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path
      d="M162,126a34,34,0,0,1-68,0,34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126Z"
      opacity="0.5"
      fill="currentColor"
    />
    <path d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z" opacity="0.5" fill="currentColor" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="88" y2="64" />
    <path d="M128,64c46.2-16,0-56,0-56S80,48,128,64Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M162,126a34,34,0,0,1-68,0" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path
      d="M94,126a34,34,0,0,1-33.3,34c-19.1.4-34.7-15.6-34.7-34.7V112A23.9,23.9,0,0,1,50,88H206a23.9,23.9,0,0,1,24,24v13.3c0,19.1-15.6,35.1-34.7,34.7A34,34,0,0,1,162,126"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M216,153.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V153.3" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
));

Cake.displayName = 'Cake';

const Coffee = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path d="M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80Z" opacity="0.5" fill="currentColor" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="88" x2="88" y1="24" y2="56" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="120" x2="120" y1="24" y2="56" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="152" x2="152" y1="24" y2="56" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="32" x2="208" y1="216" y2="216" />
    <path d="M83.3,216A88,88,0,0,1,32,136V88H208v48a88,88,0,0,1-51.3,80" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M208,88h0a32,32,0,0,1,32,32v8a32,32,0,0,1-32,32h-3.4" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
));

Coffee.displayName = 'Coffee';

const HeartBeat = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" opacity="0.5" fill="currentColor" />
    <polyline fill="none" points="32 128 72 128 88 104 120 152 136 128 160 128" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path
      d="M28.1,96c-.1-1.3-.1-2.7-.1-4A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92c0,68-100,124-100,124s-39.9-22.4-69.3-56"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
));

HeartBeat.displayName = 'HeartBeat';

const Bed = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" {...props} ref={ref}>
    <rect fill="none" height="256" width="256" />
    <path d="M104,80H208a32,32,0,0,1,32,32v56a0,0,0,0,1,0,0H104a0,0,0,0,1,0,0V80A0,0,0,0,1,104,80Z" opacity="0.5" fill="currentColor" />
    <path d="M104,168V80H208a32,32,0,0,1,32,32v56" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="16" x2="16" y1="208" y2="48" />
    <polyline fill="none" points="16 168 240 168 240 208" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="104" x2="16" y1="80" y2="80" />
  </svg>
));

Bed.displayName = 'Bed';

const Sparkle = React.forwardRef(({ className, ...props }, ref) => (
  <svg viewBox="0 0 256 256" fill="none" {...props} ref={ref}>
    <g clipPath="url(#clip0_19_2)">
      <path
        opacity="0.5"
        d="M154.516 159.316L135.316 211.416C134.748 212.947 133.725 214.268 132.384 215.2C131.043 216.132 129.449 216.632 127.816 216.632C126.183 216.632 124.589 216.132 123.248 215.2C121.908 214.268 120.884 212.947 120.316 211.416L101.116 159.316C100.711 158.216 100.072 157.218 99.2432 156.389C98.4145 155.56 97.4158 154.921 96.3161 154.516L44.2161 135.316C42.6851 134.748 41.3647 133.725 40.4322 132.384C39.4998 131.043 39 129.449 39 127.816C39 126.183 39.4998 124.589 40.4322 123.248C41.3647 121.908 42.6851 120.884 44.2161 120.316L96.3161 101.116C97.4158 100.711 98.4145 100.072 99.2432 99.2432C100.072 98.4145 100.711 97.4158 101.116 96.3161L120.316 44.2161C120.884 42.6851 121.908 41.3647 123.248 40.4322C124.589 39.4998 126.183 39 127.816 39C129.449 39 131.043 39.4998 132.384 40.4322C133.725 41.3647 134.748 42.6851 135.316 44.2161L154.516 96.3161C154.921 97.4158 155.56 98.4145 156.389 99.2432C157.218 100.072 158.216 100.711 159.316 101.116L211.416 120.316C212.947 120.884 214.268 121.908 215.2 123.248C216.132 124.589 216.632 126.183 216.632 127.816C216.632 129.449 216.132 131.043 215.2 132.384C214.268 133.725 212.947 134.748 211.416 135.316L159.316 154.516C158.216 154.921 157.218 155.56 156.389 156.389C155.56 157.218 154.921 158.216 154.516 159.316Z"
        fill="currentColor"
      />
      <path
        d="M154.516 159.316L135.316 211.416C134.748 212.947 133.725 214.268 132.384 215.2C131.043 216.132 129.449 216.632 127.816 216.632C126.183 216.632 124.589 216.132 123.248 215.2C121.908 214.268 120.884 212.947 120.316 211.416L101.116 159.316C100.711 158.216 100.072 157.218 99.2432 156.389C98.4145 155.56 97.4158 154.921 96.3161 154.516L44.2161 135.316C42.6851 134.748 41.3647 133.725 40.4322 132.384C39.4998 131.043 39 129.449 39 127.816C39 126.183 39.4998 124.589 40.4322 123.248C41.3647 121.908 42.6851 120.884 44.2161 120.316L96.3161 101.116C97.4158 100.711 98.4145 100.072 99.2432 99.2432C100.072 98.4145 100.711 97.4158 101.116 96.3161L120.316 44.2161C120.884 42.6851 121.908 41.3647 123.248 40.4322C124.589 39.4998 126.183 39 127.816 39C129.449 39 131.043 39.4998 132.384 40.4322C133.725 41.3647 134.748 42.6851 135.316 44.2161L154.516 96.3161C154.921 97.4158 155.56 98.4145 156.389 99.2432C157.218 100.072 158.216 100.711 159.316 101.116L211.416 120.316C212.947 120.884 214.268 121.908 215.2 123.248C216.132 124.589 216.632 126.183 216.632 127.816C216.632 129.449 216.132 131.043 215.2 132.384C214.268 133.725 212.947 134.748 211.416 135.316L159.316 154.516C158.216 154.921 157.218 155.56 156.389 156.389C155.56 157.218 154.921 158.216 154.516 159.316Z"
        stroke="black"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
));
Sparkle.displayName = 'Sparkle';

const PriceHand = React.forwardRef(({ className, ...props }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
    <g clipPath="url(#clip0_3326_3275)">
      <path
        d="M33.3328 28.9565C35.9398 28.9582 38.4887 28.1868 40.6572 26.7399C42.8258 25.293 44.5166 23.2355 45.5158 20.8276C46.515 18.4197 46.7777 15.7696 46.2708 13.2124C45.7639 10.6552 44.51 8.30579 42.6678 6.46119C40.8256 4.61659 38.4778 3.35969 35.9213 2.84943C33.3647 2.33918 30.7143 2.59848 28.3051 3.59456C25.896 4.59063 23.8363 6.27873 22.3865 8.4454C20.9368 10.6121 20.162 13.16 20.1603 15.7669C20.1592 17.4979 20.499 19.2121 21.1604 20.8118C21.8218 22.4114 22.7917 23.8651 24.0149 25.0898C25.2381 26.3146 26.6905 27.2865 28.2893 27.9499C29.8881 28.6134 31.6018 28.9554 33.3328 28.9565Z"
        fill="#906BFF"
      />
      <path
        d="M33.3328 2.5902C30.7424 2.5883 28.2089 3.35021 26.0493 4.78064C23.8897 6.21107 22.1997 8.24651 21.1908 10.6324C20.1819 13.0182 19.8989 15.6486 20.3771 18.1945C20.8554 20.7404 22.0736 23.0887 23.8795 24.9459L42.5075 6.31793C40.0533 3.92505 36.7605 2.58714 33.3328 2.5902Z"
        fill="#B5A1FE"
      />
      <path
        d="M44.0509 36.8878L34.574 40.0389H34.5504C34.7445 39.6808 34.8332 39.275 34.8064 38.8685C34.7796 38.462 34.6383 38.0715 34.3988 37.7419C34.1594 37.4123 33.8316 37.1572 33.4533 37.0061C33.075 36.855 32.6617 36.814 32.2611 36.8878H25.8302C23.2896 34.266 19.8326 32.7295 16.184 32.6006H9.75319L1.17877 36.8878V49.7495L9.75319 44.3905C32.7498 52.0581 24.2675 52.1353 50.4817 39.0314C49.7586 38.0583 48.7539 37.3307 47.6037 36.9473C46.4535 36.5639 45.2133 36.5432 44.0509 36.8878Z"
        fill="#B5A1FE"
      />
      <path
        d="M33.3328 28.9565C35.9398 28.9582 38.4887 28.1868 40.6572 26.7399C42.8258 25.293 44.5166 23.2355 45.5158 20.8276C46.515 18.4197 46.7777 15.7696 46.2708 13.2124C45.7639 10.6552 44.51 8.30579 42.6678 6.46119C40.8256 4.61659 38.4778 3.35969 35.9213 2.84943C33.3647 2.33918 30.7143 2.59848 28.3051 3.59456C25.896 4.59063 23.8363 6.27873 22.3865 8.4454C20.9368 10.6121 20.162 13.16 20.1603 15.7669C20.1592 17.4979 20.499 19.2121 21.1604 20.8118C21.8218 22.4114 22.7917 23.8651 24.0149 25.0898C25.2381 26.3146 26.6905 27.2865 28.2893 27.9499C29.8881 28.6134 31.6018 28.9554 33.3328 28.9565Z"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33.3328 9.021V6.8774" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M36.5481 9.021H32.1987C31.5309 9.02146 30.884 9.2543 30.369 9.67958C29.854 10.1049 29.503 10.6961 29.3763 11.3518C29.2496 12.0076 29.3549 12.687 29.6744 13.2735C29.9938 13.8601 30.5073 14.3172 31.1269 14.5665L35.5513 16.3371C36.171 16.5864 36.6845 17.0436 37.0039 17.6301C37.3233 18.2166 37.4287 18.8961 37.302 19.5518C37.1752 20.2075 36.8243 20.7988 36.3093 21.224C35.7943 21.6493 35.1474 21.8822 34.4795 21.8826H30.1173"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33.3328 24.0263V21.8826" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M34.574 40.039L44.0509 36.8879C45.2133 36.5432 46.4535 36.564 47.6037 36.9474C48.7539 37.3308 49.7586 38.0583 50.4817 39.0315C24.2675 52.1353 32.7498 52.0582 9.75319 44.3905L1.17877 49.7495"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4712 41.1751H32.2611C32.5746 41.2314 32.8968 41.2182 33.2047 41.1365C33.5127 41.0547 33.7989 40.9065 34.0433 40.702C34.2877 40.4976 34.4843 40.2421 34.6192 39.9534C34.754 39.6648 34.8239 39.3501 34.8239 39.0314C34.8239 38.7128 34.754 38.3981 34.6192 38.1095C34.4843 37.8208 34.2877 37.5653 34.0433 37.3609C33.7989 37.1564 33.5127 37.0081 33.2047 36.9264C32.8968 36.8447 32.5746 36.8315 32.2611 36.8878H25.8302C23.2896 34.266 19.8326 32.7295 16.184 32.6006H9.75319L1.17877 36.8878"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3326_3275">
        <rect width="51.4465" height="51.4465" fill="white" transform="translate(0.106934 0.446533)" />
      </clipPath>
    </defs>
  </svg>
));

PriceHand.displayName = 'PriceHand';

const TouchID = React.forwardRef(({ className, ...props }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
    <g clipPath="url(#clip0_3326_3162)">
      <path
        d="M7.79003 5.46595H44.9773C44.9773 5.46595 46.7479 5.46595 46.7479 7.23657V44.4238C46.7479 44.4238 46.7479 46.1945 44.9773 46.1945H7.79003C7.79003 46.1945 6.01941 46.1945 6.01941 44.4238V7.23657C6.01941 7.23657 6.01941 5.46595 7.79003 5.46595Z"
        fill="#4B33FF"
      />
      <path
        d="M13.522 31.1892C13.522 34.6003 14.877 37.8717 17.2891 40.2838C19.7011 42.6958 22.9725 44.0508 26.3836 44.0508C29.7947 44.0508 33.0661 42.6958 35.4782 40.2838C37.8902 37.8717 39.2452 34.6003 39.2452 31.1892V20.4712C39.2452 17.0601 37.8902 13.7887 35.4782 11.3766C33.0661 8.9646 29.7947 7.60954 26.3836 7.60954C22.9725 7.60954 19.7011 8.9646 17.2891 11.3766C14.877 13.7887 13.522 17.0601 13.522 20.4712V31.1892Z"
        fill="#B5A1FE"
      />
      <path
        d="M26.3836 7.60954C22.9725 7.60954 19.7011 8.9646 17.2891 11.3766C14.877 13.7887 13.522 17.0601 13.522 20.4712V31.1892C13.522 34.6003 14.877 37.8717 17.2891 40.2838C19.7011 42.6958 22.9725 44.0508 26.3836 44.0508V7.60954Z"
        fill="white"
      />
      <path
        d="M18.8811 50.4817H3.87584C3.30732 50.4817 2.76209 50.2558 2.36009 49.8538C1.95808 49.4518 1.73224 48.9066 1.73224 48.3381V33.3328"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8811 1.17873H3.87584C3.30732 1.17873 2.76209 1.40458 2.36009 1.80658C1.95808 2.20859 1.73224 2.75382 1.73224 3.32234V18.3276"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.8863 50.4817H48.8915C49.46 50.4817 50.0053 50.2558 50.4073 49.8538C50.8093 49.4518 51.0351 48.9066 51.0351 48.3381V33.3328"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.8863 1.17873H48.8915C49.46 1.17873 50.0053 1.40458 50.4073 1.80658C50.8093 2.20859 51.0351 2.75382 51.0351 3.32234V18.3276"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2594 16.1711C14.889 14.3957 15.9009 12.7802 17.2236 11.4389C18.5463 10.0976 20.1475 9.06326 21.9139 8.40894C23.6804 7.75462 25.569 7.49631 27.4463 7.65228C29.3236 7.80825 31.1437 8.37469 32.778 9.31156"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8092 40.7733C16.4588 39.5687 15.3786 38.092 14.6397 36.4401C13.9008 34.7883 13.5199 32.9988 13.522 31.1892V20.4712"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.97 39.7636C34.2713 41.6602 32.0487 43.0108 29.5829 43.6449C27.1171 44.279 24.5187 44.1681 22.1158 43.3263"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.9741 11.8968C38.0851 14.2534 39.2502 17.3073 39.2453 20.4712V31.1892C39.247 32.6419 39.002 34.0843 38.5207 35.455"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1522 13.0114C23.4567 12.2713 24.9325 11.8862 26.4323 11.8947C27.9322 11.9032 29.4036 12.305 30.6996 13.06C31.9956 13.815 33.0709 14.8967 33.8181 16.1971C34.5654 17.4976 34.9584 18.9713 34.9581 20.4712V23.6866"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0965 26.887V20.4712C22.0965 19.3341 22.5482 18.2437 23.3522 17.4397C24.1562 16.6357 25.2467 16.184 26.3837 16.184C27.5207 16.184 28.6112 16.6357 29.4152 17.4397C30.2192 18.2437 30.6709 19.3341 30.6709 20.4712V31.1892C30.6709 32.3262 30.2192 33.4167 29.4152 34.2207C28.6112 35.0247 27.5207 35.4764 26.3837 35.4764C25.2467 35.4764 24.1562 35.0247 23.3522 34.2207C22.5482 33.4167 22.0965 32.3262 22.0965 31.1892"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26.3837 20.4712V24.7584" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M34.9581 27.9738V31.1892C34.9581 33.4633 34.0547 35.6442 32.4467 37.2522C30.8387 38.8602 28.6577 39.7636 26.3836 39.7636C24.1096 39.7636 21.9286 38.8602 20.3206 37.2522C18.7126 35.6442 17.8092 33.4633 17.8092 31.1892V20.4712C17.8063 19.0066 18.1814 17.5661 18.8982 16.289"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26.3837 29.0456V31.1892" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_3326_3162">
        <rect width="51.4465" height="51.4465" fill="white" transform="translate(0.6604 0.106934)" />
      </clipPath>
    </defs>
  </svg>
));

TouchID.displayName = 'TouchID';

const Feedback = React.forwardRef(({ className, ...props }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
    <g clipPath="url(#clip0_3326_3295)">
      <path
        d="M1.62531 29.8318C1.62531 30.4003 1.85115 30.9455 2.25315 31.3475C2.65516 31.7495 3.20039 31.9754 3.76891 31.9754H10.1997V40.5498L18.7741 31.9754H44.4974C45.0659 31.9754 45.6112 31.7495 46.0132 31.3475C46.4152 30.9455 46.641 30.4003 46.641 29.8318V4.10851C46.641 3.53999 46.4152 2.99476 46.0132 2.59275C45.6112 2.19075 45.0659 1.9649 44.4974 1.9649H3.76891C3.20039 1.9649 2.65516 2.19075 2.25315 2.59275C1.85115 2.99476 1.62531 3.53999 1.62531 4.10851V29.8318Z"
        fill="#4B33FF"
      />
      <path
        d="M3.76891 31.9754H10.1997L40.2102 1.9649H3.76891C3.20039 1.9649 2.65516 2.19075 2.25315 2.59275C1.85115 2.99476 1.62531 3.53999 1.62531 4.10851V29.8318C1.62531 30.4003 1.85115 30.9455 2.25315 31.3475C2.65516 31.7495 3.20039 31.9754 3.76891 31.9754Z"
        fill="#906BFF"
      />
      <path
        d="M25.205 38.4062C25.205 41.8173 26.56 45.0887 28.972 47.5007C31.3841 49.9128 34.6555 51.2678 38.0666 51.2678C41.4777 51.2678 44.7491 49.9128 47.1611 47.5007C49.5732 45.0887 50.9282 41.8173 50.9282 38.4062C50.9282 34.9951 49.5732 31.7237 47.1611 29.3116C44.7491 26.8996 41.4777 25.5446 38.0666 25.5446C34.6555 25.5446 31.3841 26.8996 28.972 29.3116C26.56 31.7237 25.205 34.9951 25.205 38.4062Z"
        fill="#4B33FF"
      />
      <path
        d="M28.9713 47.5015C26.559 45.0892 25.2039 41.8176 25.2039 38.4062C25.2039 34.9947 26.559 31.7231 28.9713 29.3108C31.3835 26.8986 34.6552 25.5434 38.0666 25.5434C41.478 25.5434 44.7497 26.8986 47.1619 29.3108L28.9713 47.5015Z"
        fill="#906BFF"
      />
      <path
        d="M25.205 38.4062C25.205 41.8173 26.56 45.0887 28.972 47.5007C31.3841 49.9128 34.6555 51.2678 38.0666 51.2678C41.4777 51.2678 44.7491 49.9128 47.1611 47.5007C49.5732 45.0887 50.9282 41.8173 50.9282 38.4062C50.9282 34.9951 49.5732 31.7237 47.1611 29.3116C44.7491 26.8996 41.4777 25.5446 38.0666 25.5446C34.6555 25.5446 31.3841 26.8996 28.972 29.3116C26.56 31.7237 25.205 34.9951 25.205 38.4062Z"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.0665 31.9754V44.837" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44.4973 38.4062H31.6357" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.9178 31.9754H18.7741L10.1997 40.5498V31.9754H3.76891C3.20039 31.9754 2.65516 31.7495 2.25315 31.3475C1.85115 30.9455 1.62531 30.4003 1.62531 29.8318V4.10851C1.62531 3.53999 1.85115 2.99476 2.25315 2.59275C2.65516 2.19075 3.20039 1.9649 3.76891 1.9649H44.4974C45.0659 1.9649 45.6112 2.19075 46.0132 2.59275C46.4152 2.99476 46.641 3.53999 46.641 4.10851V21.2574"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3326_3295">
        <rect width="51.4465" height="51.4465" fill="white" transform="translate(0.553467 0.893066)" />
      </clipPath>
    </defs>
  </svg>
));

Feedback.displayName = 'Feedback';

const Celebrate = React.forwardRef(({ className, ...props }, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
    <g clipPath="url(#clip0_3326_3444)">
      <path
        d="M11.7898 11.5042C11.7898 12.9255 12.3544 14.2886 13.3594 15.2936C14.3644 16.2986 15.7275 16.8632 17.1488 16.8632C18.5701 16.8632 19.9332 16.2986 20.9382 15.2936C21.9432 14.2886 22.5078 12.9255 22.5078 11.5042C22.5078 10.0829 21.9432 8.71983 20.9382 7.71482C19.9332 6.70981 18.5701 6.1452 17.1488 6.1452C15.7275 6.1452 14.3644 6.70981 13.3594 7.71482C12.3544 8.71983 11.7898 10.0829 11.7898 11.5042Z"
        fill="#906BFF"
      />
      <path
        d="M38.5849 9.36058C38.5849 10.4976 39.0366 11.5881 39.8406 12.3921C40.6446 13.1961 41.7351 13.6478 42.8721 13.6478C44.0092 13.6478 45.0996 13.1961 45.9037 12.3921C46.7077 11.5881 47.1594 10.4976 47.1594 9.36058C47.1594 8.22354 46.7077 7.13307 45.9037 6.32906C45.0996 5.52505 44.0092 5.07336 42.8721 5.07336C41.7351 5.07336 40.6446 5.52505 39.8406 6.32906C39.0366 7.13307 38.5849 8.22354 38.5849 9.36058Z"
        fill="#906BFF"
      />
      <path
        d="M37.5131 30.7966C37.5131 31.9336 37.9648 33.0241 38.7688 33.8281C39.5728 34.6321 40.6633 35.0838 41.8003 35.0838C42.9373 35.0838 44.0278 34.6321 44.8318 33.8281C45.6358 33.0241 46.0875 31.9336 46.0875 30.7966C46.0875 29.6596 45.6358 28.5691 44.8318 27.7651C44.0278 26.9611 42.9373 26.5094 41.8003 26.5094C40.6633 26.5094 39.5728 26.9611 38.7688 27.7651C37.9648 28.5691 37.5131 29.6596 37.5131 30.7966Z"
        fill="#906BFF"
      />
      <path
        d="M35.3331 26.9725C37.3292 24.9806 40.034 23.8619 42.854 23.8619C45.6739 23.8619 48.3787 24.9806 50.3748 26.9725"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.2258 16.9018C26.2139 15.9142 26.9978 14.7416 27.5327 13.451C28.0675 12.1604 28.3428 10.777 28.3428 9.37991C28.3428 7.98285 28.0675 6.59947 27.5327 5.30883C26.9978 4.01819 26.2139 2.84558 25.2258 1.858"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38.7456 18.4688L46.2675 15.965" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.7318 13.4592L36.2398 5.93515" stroke="black" strokeWidth="2.14361" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17.0737 11.0133C17.2159 11.0133 17.3522 11.0698 17.4527 11.1703C17.5532 11.2708 17.6096 11.4071 17.6096 11.5492"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5378 11.5492C16.5378 11.4071 16.5943 11.2708 16.6948 11.1703C16.7953 11.0698 16.9316 11.0133 17.0737 11.0133"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0737 12.0851C16.9316 12.0851 16.7953 12.0287 16.6948 11.9282C16.5943 11.8277 16.5378 11.6914 16.5378 11.5492"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6096 11.5492C17.6096 11.6914 17.5532 11.8277 17.4527 11.9282C17.3522 12.0287 17.2159 12.0851 17.0737 12.0851"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.1508 17.4441C33.2929 17.4441 33.4292 17.5006 33.5297 17.6011C33.6302 17.7016 33.6867 17.8379 33.6867 17.98"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.6149 17.98C32.6149 17.8379 32.6714 17.7016 32.7719 17.6011C32.8724 17.5006 33.0087 17.4441 33.1508 17.4441"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.1508 18.5159C33.0087 18.5159 32.8724 18.4595 32.7719 18.359C32.6714 18.2584 32.6149 18.1221 32.6149 17.98"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.6867 17.98C33.6867 18.1221 33.6302 18.2584 33.5297 18.359C33.4292 18.4595 33.2929 18.5159 33.1508 18.5159"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.7252 30.3058C41.8673 30.3058 42.0036 30.3622 42.1041 30.4627C42.2046 30.5632 42.2611 30.6995 42.2611 30.8417"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.1893 30.8417C41.1893 30.6995 41.2458 30.5632 41.3463 30.4627C41.4468 30.3622 41.5831 30.3058 41.7252 30.3058"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.7252 31.3776C41.5831 31.3776 41.4468 31.3211 41.3463 31.2206C41.2458 31.1201 41.1893 30.9838 41.1893 30.8417"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.2611 30.8417C42.2611 30.9838 42.2046 31.1201 42.1041 31.2206C42.0036 31.3211 41.8673 31.3776 41.7252 31.3776"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.797 8.86972C42.9391 8.86972 43.0754 8.92618 43.1759 9.02668C43.2764 9.12718 43.3329 9.26349 43.3329 9.40562"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.2611 9.40562C42.2611 9.26349 42.3176 9.12718 42.4181 9.02668C42.5186 8.92618 42.6549 8.86972 42.797 8.86972"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.797 9.94151C42.6549 9.94151 42.5186 9.88505 42.4181 9.78455C42.3176 9.68405 42.2611 9.54774 42.2611 9.40561"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.3329 9.40561C43.3329 9.54774 43.2764 9.68405 43.1759 9.78455C43.0754 9.88505 42.9391 9.94151 42.797 9.94151"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.4649 36.3164L5.3247 50.8201C4.77785 51.1125 4.15143 51.2212 3.53803 51.1301C2.92463 51.0391 2.35678 50.7532 1.91841 50.3145C1.48004 49.8759 1.1944 49.3079 1.10371 48.6945C1.01301 48.081 1.12207 47.4547 1.41477 46.908L15.9163 19.7678L32.4649 36.3164Z"
        fill="#4B33FF"
      />
      <path d="M24.1905 28.0421L15.9162 19.7678L1.41469 46.908C1.12241 47.4555 1.0146 48.0827 1.10729 48.6964C1.19998 49.31 1.48821 49.8774 1.92916 50.3142L24.1905 28.0421Z" fill="#906BFF" />
      <path
        d="M32.4649 36.3164L5.3247 50.8201C4.77785 51.1125 4.15143 51.2212 3.53803 51.1301C2.92463 51.0391 2.35678 50.7532 1.91841 50.3145C1.48004 49.8759 1.1944 49.3079 1.10371 48.6945C1.01301 48.081 1.12207 47.4547 1.41477 46.908L15.9163 19.7678"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8658 31.3668C21.9638 32.4824 23.1549 33.4904 24.3696 34.3321C25.5842 35.1737 26.798 35.8322 27.9403 36.269C29.0825 36.7059 30.1302 36.9123 31.0223 36.8764C31.9144 36.8404 32.633 36.5627 33.1361 36.0595C33.6393 35.5564 33.917 34.8378 33.953 33.9457C33.9889 33.0536 33.7825 32.0059 33.3456 30.8637C32.9088 29.7214 32.2503 28.5076 31.4087 27.293C30.567 26.0783 29.559 24.8872 28.4434 23.7892C27.3454 22.6736 26.1543 21.6656 24.9396 20.8239C23.725 19.9823 22.5112 19.3238 21.3689 18.887C20.2267 18.4501 19.179 18.2437 18.2869 18.2796C17.3948 18.3156 16.6762 18.5933 16.1731 19.0965C15.6699 19.5996 15.3922 20.3182 15.3562 21.2103C15.3203 22.1024 15.5267 23.1501 15.9636 24.2923C16.4004 25.4346 17.0589 26.6484 17.9005 27.863C18.7422 29.0777 19.7502 30.2688 20.8658 31.3668Z"
        fill="#4B33FF"
        stroke="black"
        strokeWidth="2.14361"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3326_3444">
        <rect width="51.4465" height="51.4465" fill="white" transform="translate(0 0.786133)" />
      </clipPath>
    </defs>
  </svg>
));

Celebrate.displayName = 'Celebrate';

export { FlowerIcon, BirthdayIcon, Heart, Gift, Butterfly, Balloon, Cake, Coffee, HeartBeat, Bed, Sparkle, PriceHand, TouchID, Feedback, Celebrate };
