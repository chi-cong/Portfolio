import { GradientTiTle, ContactForm } from "@/components/";

export const Contact = () => {
  return (
    <div
      className='flex w-full flex-col gap-8 min-h-dvh items-center'
      id='contact'
    >
      <GradientTiTle title='CONTACT' />;
      <ContactForm />
    </div>
  );
};
