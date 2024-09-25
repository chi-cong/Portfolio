interface GradientTiTleProps {
  title: string;
}

export const GradientTiTle = ({ title }: GradientTiTleProps) => {
  return (
    <>
      <div className='h-0.5 w-full bg-gradient-to-r from-primary-blue to-primary-pink' />
      <div className={`text-6xl w-full justify-center flex items-center p-7`}>
        <span className='bg-gradient-to-r from-primary-blue to-primary-pink bg-clip-text text-transparent'>
          {title}
        </span>
      </div>
    </>
  );
};
