import React from 'react'

const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
    'Node.js', 'Python', 'Git', 'Tailwind', 'SQL', 'Github', 'Django',
]

function SkillsSlide() {
    return (
        <div className='mt-20 bg-gray-900 py-8 overflow-hidden'>
            <div className='flex w-max animate-[scroll_30s_linear_infinite]'>
                {[...skills, ...skills].map((skill, i) => (
                    <span
                        key={i}
                        className='text-2xl font-helvetica font-bold text-gradient mx-8 whitespace-nowrap'
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillsSlide
