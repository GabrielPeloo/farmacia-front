import { Link } from "react-router-dom"
import {  } from '@phosphor-icons/react'

function NavBar() {

    return (
        <>
            <div className='w-full bg-[#090d1c] text-white flex justify-center align- center py-12 px-14 font-bold'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='items-center'>
                        <Link to='/home' className="text-2xl font-bold">Obelisk Pharma</Link>
                    </div>

                    <div className='flex gap-3 cursor-pointer'>
                        <Link to='/home' className='hover:bg-[#F44E3F] py-1 px-4 rounded-3xl duration-300'>Home</Link>
                        <Link to='/categories' className='hover:bg-[#F44E3F] py-1 px-4 rounded-3xl duration-300'>Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar