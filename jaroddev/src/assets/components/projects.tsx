import antifragile from '../images/antifragile.png'

function Projects() {
    return (
        <section className='mt-20 px-4 md:px-20 md:mx-40 '>
            <h2 className='text-5xl font-helvetica font-bold text-white text-center'>Projets</h2>
            <div className='mt-10 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-40 px-6 md:px-0'>
                <div className='relative flex items-center justify-center w-full md:w-1/2'>
                    <div className='absolute w-full h-full rounded-full bg-purple-600 blur-xl opacity-50'></div>
                    <img src={antifragile} alt="antifragile" className='relative w-full rounded-lg' />
                </div>
                <div className='w-full md:w-1/2 text-center md:text-left'>
                    <h3 className='text-4xl font-poppins font-bold text-gradient'>Nutrition Antifragile</h3>
                    <div className='flex flex-wrap gap-2 mt-1 mb-8 justify-center md:justify-start'>
                        <div className ="border-gradient rounded-full py-1 px-6 flex items-center gap-2">
                            <p className='text-sm font-poppins text-gradient'>React</p>
                        </div>
                        <div className ="border-gradient rounded-full py-1 px-6 flex items-center gap-2">
                            <p className='text-sm font-poppins text-gradient'>Django</p>
                        </div>
                        <div className ="border-gradient rounded-full py-1 px-6 flex items-center gap-2">
                            <p className='text-sm font-poppins text-gradient'>TailwindCSS</p>
                        </div>
                    </div>
                    <p className='text-lg md:text-xl font-poppins text-white text-left md:text-left'>Nutrition Antifragile est un site web dédié au partage d’articles sur la nutrition et la santé. Le projet intègre un système d’abonnement permettant d’accéder à du contenu premium.Le site a été développé avec React pour le front-end et Django / Django REST Framework pour le back-end. Les articles sont créés et gérés via CKEditor depuis l’interface d’administration. Les principales fonctionnalités incluent : authentification des utilisateurs, abonnement avec Stripe, gestion dynamique des articles et système de commentaires pour les utilisateurs connectés.</p>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-4 mt-6 md:mt-10 items-center md:items-start'>
                        <button className='px-6 md:px-8 py-2 btn-gradient text-white rounded-full font-poppins font-bold text-base md:text-lg flex items-center gap-2'>
                        Voir le projet</button>
                        <button className='px-6 md:px-8 py-2 btn-gradient text-white rounded-full font-poppins font-bold text-base md:text-lg flex items-center gap-2'>
                            Voir le Github
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Projects
