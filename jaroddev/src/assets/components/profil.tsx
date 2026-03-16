import bitmoji from '../images/bitmoji.png'
import vector from '../images/vector.svg'

function Profil() {
    return (
        <section id="about" className='mt-20'>
            <h2 className='text-5xl font-helvetica font-bold text-white text-center'>À propos</h2>
            <div className="mt-10 md:mx-60 flex flex-col-reverse md:flex-row gap-10 md:gap-50 px-6">
                 <div className='relative flex items-center justify-center'>
                    <div className='absolute w-56 h-56 rounded-full'></div>
                    <img src={bitmoji} alt="bitmoji" className='relative w-56 md:w-120 rounded-full' />
                </div>
                <div className='flex flex-col text-left md:max-w-2xl'>
                    <p className='text-lg md:text-2xl font-poppins text-white mt-6 md:mt-10'>Développeur Web Full Stack diplômé d’un Bac +2 en Développement Web et Web Mobile, je conçois des sites et applications web modernes et performants.<br/><br/>Passionné par le développement, je crée des solutions efficaces en combinant front-end et back-end afin d’offrir une expérience utilisateur optimale.</p>
                    <div className='flex flex-col gap-4 mt-6 md:mt-10'>
                        <div className ="border-gradient rounded-full p-4 flex items-center gap-2">
                            <img src={vector} alt="vector" className='w-6 inline-block mr-2' />
                            <span className='text-lg md:text-2xl font-poppins text-gradient'>Developpement web</span>
                        </div>
                        <div className ="border-gradient rounded-full p-4 flex items-center gap-2">
                            <img src={vector} alt="vector" className='w-6 inline-block mr-2' />
                            <span className='text-lg md:text-2xl font-poppins text-gradient'>Developpement d'application web</span>
                        </div>
                        <div className ="border-gradient rounded-full p-4 flex items-center gap-2">
                            <img src={vector} alt="vector" className='w-6 inline-block mr-2' />
                            <span className='text-lg md:text-2xl font-poppins text-gradient'>Résolution de problèmes</span>
                        </div>

                </div>
                </div>
            </div>
        </section>
    )
}

export default Profil