import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                formRef.current?.reset();
            })
            .catch(() => {
                setStatus('error');
            });
    };

    return (
        <section id="contact" className='mt-20 px-6 md:px-60'>
            <h2 className='text-5xl font-helvetica font-bold text-white text-center'>Me contacter</h2>
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-50 mt-10 md:mt-20">
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <p className='text-lg md:text-2xl font-poppins font-bold text-gradient mt-6 md:mt-10'>
                        Envie d'en savoir plus sur moi ? Au plaisir de discuter !
                    </p>
                    <button
                        type='submit'
                        form='contact-form'
                        disabled={status === 'sending'}
                        className='px-6 md:px-8 py-2 btn-gradient text-white rounded-full font-poppins font-bold text-base md:text-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                        {status === 'sending' ? 'Envoi...' : 'Me contacter'}
                    </button>
                    {status === 'success' && (
                        <p className='text-green-400 font-poppins font-bold'>Message envoyé avec succès !</p>
                    )}
                    {status === 'error' && (
                        <p className='text-red-400 font-poppins font-bold'>Erreur lors de l'envoi. Réessaie.</p>
                    )}
                </div>
                <div className='flex flex-col gap-4 w-full md:w-1/2'>
                    <form id='contact-form' ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4 mt-0 md:mt-10'>
                        <input
                            type="text"
                            name="from_name"
                            placeholder='Nom'
                            required
                            className='p-4 text-white font-bold font-poppins focus:outline-none border-gradient-bottom bg-transparent'
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder='Email'
                            required
                            className='p-4 text-white font-bold font-poppins focus:outline-none border-gradient-bottom bg-transparent'
                        />
                        <textarea
                            name="message"
                            placeholder='Votre message'
                            required
                            className='p-4 h-32 resize-none focus:outline-none border-gradient-bottom font-bold font-poppins text-white bg-transparent'
                        ></textarea>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact
