import Image from 'next/image';
import Box from './Box';

export default function About({ data, timeline }) {
  const contentAnimation = delay => {
    const offset = 0.3;
    timeline
      .from('.about-text', { opacity: 0, y: 30, duration: 0.8 }, delay + offset)
      .from(
        '.about-icon',
        { opacity: 0, rotate: 180, duration: 1, ease: 'slow.out' },
        delay + offset
      );
  };

  return (
    <Box
      timeline={timeline}
      className='-translate-y-full scale-0 opacity-0'
      callbackAnimation={contentAnimation}
    >
      <div className='flex size-full flex-col justify-between gap-4'>
        {/* Icon */}
        <div className='size-[2.75rem]'>
          {data?.icon && (
            <Image
              src={data.icon}
              width={100}
              height={100}
              alt='disk'
              className='about-icon size-full'
            />
          )}
        </div>

        <div className='about-text max-w-[25rem] space-y-3 pb-2 text-lg leading-[135%]'>
          <p>{data?.text}</p>
          {data?.bullets && (
            <ul className='list-inside list-disc text-base'>
              {data.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Box>
  );
}
