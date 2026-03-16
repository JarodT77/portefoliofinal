function Contact() {
    return (
        <section className='mt-20 px-6 md:px-60'>
            <h2 className='text-5xl font-helvetica font-bold text-white text-center'>Me contacter</h2>
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-50 mt-10 md:mt-20">
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <p className='text-lg md:text-2xl font-poppins font-bold text-gradient mt-6 md:mt-10'>
                        Envie d'en savoir plus sur moi ? Au plaisir de discuter !
                    </p>
                    <button type='submit' className='px-6 md:px-8 py-2 btn-gradient text-white rounded-full font-poppins font-bold text-base md:text-lg flex items-center gap-2'>
                        Me contacter
                    </button>
                </div>
                <div className='flex flex-col gap-4 w-full md:w-1/2'>
                    <form className='flex flex-col gap-4 mt-0 md:mt-10'>
                        <input type="text" placeholder='Nom' className='p-4 text-white font-bold font-poppins focus:outline-none border-gradient-bottom' />
                        <input type="text" placeholder='Email' className='p-4 text-white font-bold font-poppins focus:outline-none border-gradient-bottom' />
                        <textarea placeholder='Votre message' className='p-4 h-32 resize-none focus:outline-none border-gradient-bottom font-bold font-poppins text-white'></textarea>
                    </form>
                </div>
            </div>
        </section>
    
    );
}

export default Contact