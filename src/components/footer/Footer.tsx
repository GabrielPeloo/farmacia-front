import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    

    return (
        <>
            <div className="flex justify-center bg-[#090d1c] text-white py-14">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Gabriel Luiz</p>
                    <p className='text-lg pt-2 font-bold'>Contato</p>
                    <div className='flex gap-2 pt-2'>
                        <a href="https://github.com/GabrielPeloo" target="_blank" className='hover:scale-90'>
                            <GithubLogo size={60}/>
                        </a>
                        <a  href='https://www.linkedin.com/in/gabriel-luiz-pelo/' target="_blank" className='hover:scale-90'>
                            <LinkedinLogo size={60}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer