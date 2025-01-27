import React from 'react';
import pana from '../assets/pana.png';
import pimg from '../assets/pimg.png';
import icons1 from '../assets/icons/Logo.png';
import icons2 from '../assets/icons/Logo2.png';
import icons3 from'../assets/icons/Logo3.png';
import icons4 from '../assets/icons/Logo4.png';
import icons5 from '../assets/icons/Logo5.png';
import icons6 from '../assets/icons/Logo6.png';


const Products = () => {
  return (
    <div>
        {/* about text*/}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                  <img src={pana}/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                    How to design your site footer like we did
                    </h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
        </div>

        {/* Company stats */}

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/3'>
                    <img src={pimg} alt="" />
                </div>

                {/* stats */}
                <div className='md:w-2/3 mx-auto'>
                    <div>
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>
                            Tim Smith
                        </h5>
                        <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src={icons1}  className='cursor-pointer' />
                                <img src={icons2}  className='cursor-pointer'/>
                                <img src={icons3} className='cursor-pointer' />
                                <img src={icons4} className='cursor-pointer' />
                                <img src={icons5} className='cursor-pointer' />
                                <img src={icons6} className='cursor-pointer' />
                                <div className='flex items-center gap-8'>
                                    <a href='/'className='font-bold text-brandPrimary hover:text-neutral-700'>
                                        Meet all customers 
                                        <svg 
                                            width="17" 
                                            height="11" 
                                            viewBox="0 0 17 11" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className='inline-block ml-2'
                                        >
                                            <path 
                                                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" 
                                                stroke="#4CAF4F" 
                                                strokeWidth="1.5" 
                                                strokeLinecap="round"
                                                />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
          </div>
        </div>
    </div>
  )
}

export default Products