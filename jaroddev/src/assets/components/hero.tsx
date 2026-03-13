import React from 'react'
import github from '../../assets/images/github.svg'
import linkdin from '../../assets/images/linkdin.svg'
import gmail from '../../assets/images/gmail.svg'
import jarod from '../../assets/images/jarod.jpg'
import SkillsSlide from './skillsSlide'


function Hero() {
    return (
        <header>
            <div className='mt-10 md:mt-20 flex flex-col-reverse md:flex-row gap-10 md:gap-40 items-center justify-center px-6 md:px-0'>
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mt-6 md:mt-20 font-helvetica'>Salut, Je suis Jarod</h1>
                    <h2 className='text-3xl md:text-5xl text-gradient mt-4 font-poppins font-bold'>Développeur Fullstack</h2>
                    <p className='text-lg md:text-2xl text-gray-400 mt-6 md:mt-10 font-poppins'>Bienvenue sur mon portefolio, où je partage <br className='hidden md:block'/>mes projets et mes compétences en développement web.</p>
                    <div className='flex flex-row gap-4 mt-8 justify-center md:justify-start'>
                        <button className='px-6 md:px-8 py-2 btn-gradient text-white rounded-full font-poppins text-base md:text-lg flex items-center gap-2'>
                            Voir mon CV
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                        </button>
                        <div className='flex flex-row gap-2'>
                            <div className='glass-circle'>
                                <img src={github} alt="GitHub" className='w-10' />
                            </div>
                            <div className='glass-circle'>
                                <img src={gmail} alt="gmail" className='w-10' />
                            </div>
                            <div className='glass-circle'>
                                <img src={linkdin} alt="linkdin" className='w-10' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex items-center justify-center'>
                    <div className='absolute w-56 h-56 md:w-96 md:h-96 rounded-full bg-purple-600 blur-xl opacity-50'></div>
                    <img src={jarod} alt="Jarod" className='relative w-56 md:w-96 rounded-full' />
                </div>
            </div>
        <SkillsSlide />    
        </header>
    
    );
}

export default Hero