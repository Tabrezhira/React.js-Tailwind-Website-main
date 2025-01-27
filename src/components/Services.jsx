import React from 'react';
import icons1 from '../assets/icons/Logo.png';
import icons2 from '../assets/icons/Logo2.png';
import icons3 from'../assets/icons/Logo3.png';
import icons4 from '../assets/icons/Logo4.png';
import icons5 from '../assets/icons/Logo5.png';
import icons6 from '../assets/icons/Logo6.png';
import icons7 from '../assets/icons/Logo7.png';
import icons8 from '../assets/icons/logo8.png';
import icons9 from '../assets/icons/logo9.png';
import icons10 from '../assets/icons/logo10.png';

const Services = () => {
 const Services = [
    {
     id: 1, 
     title: "Membership Organisations", 
     descroption: "Our membership management software provides full automation of membership renewals and payments", 
     image:icons8
    },
    {
        id: 2, 
        title: "National Associations", 
        descroption: "Our membership management software provides full automation of membership renewals and payments", 
        image: icons9
    },
    {
       id: 3, 
       title: "Clubs And Groups Organisations", 
       descroption: "Our membership management software provides full automation of membership renewals and payments", 
       image: icons10
    },
 ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralGrey '>We have been working with some Fortune 500+ clients</p>

            {/* company logo */}

            <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>
                <img src={icons1}  />
                <img src={icons2} />
                <img src={icons3}  />
                <img src={icons4} />
                <img src={icons5} />
                <img src={icons6}  />
                <img src={icons7}  />
            </div>
        </div>

        {/* Services card*/}

        <div className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
            <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
        </div>

        {/* card */}

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                Services.map(Services => <div key={Services.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src={Services.image} alt="" className='-ml-5' />
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{Services.title}</h4>
                        <p className='text-sm text-neutralGrey'>{Services.descroption}</p>
                    </div>

                </div>)
            }
        </div>


    </div>
  )
}

export default Services