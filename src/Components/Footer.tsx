import { Button, Typography } from '@material-tailwind/react'
import {  useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate=useNavigate()

    return (
        <div className='bg-gray-900 p-16'>
            <div className='flex flex-row justify-between p-16'>
                <div className='flex flex-col text-gray-700 gap-2'>
                    <Typography className='text-white cursor-pointer' onClick={()=>{navigate('/')}}>Home</Typography>
                    <Typography>Categories</Typography>
                    <Typography>Devices</Typography>
                    <Typography>Pricing</Typography>
                    <Typography>FAQ</Typography>


                </div>
                <div className='flex flex-col text-gray-700 gap-2'>
                    <Typography className='text-white cursor-pointer' onClick={()=>{navigate('/')}}>Movies</Typography>
                    <Typography>Genres</Typography>
                    <Typography>Trending</Typography>
                    <Typography>New Release</Typography>
                    <Typography>Popular</Typography>


                </div>
                <div className='flex flex-col text-gray-700 gap-2'>
                    <Typography className='text-white cursor-pointer' onClick={()=>{navigate('/')}}>Show</Typography>
                    <Typography>Genres</Typography>
                    <Typography>Trending</Typography>
                    <Typography>New Release</Typography>
                    <Typography>Popular</Typography>


                </div>
                <div className='flex flex-col text-gray-700 gap-2'>
                    <Typography className='text-white cursor-pointer' onClick={()=>{navigate('/')}}>Support</Typography>
                    <Typography>Contact Us</Typography>


                </div>
                <div className='flex flex-col text-gray-700 gap-2'>
                    <Typography className='text-white cursor-pointer' onClick={()=>{navigate('/')}}>Subscription</Typography>
                    <Typography>Plans</Typography>
                    <Typography>Features</Typography>

                </div>
                <div className='flex flex-col text-gray-700 gap-2 text-center'>
                    <Typography className='text-white' >Connect With Us</Typography>
                    <div className='flex flex-row gap-3'>
                        <Button >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0,0,256,256"
                            >
                                <g
                                    fill="#ffffff"
                                    fill-rule="nonzero"
                                    stroke="none"
                                    stroke-width="1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="10"
                                    stroke-dasharray=""
                                    stroke-dashoffset="0"
                                    font-family="none"
                                    font-weight="none"
                                    font-size="none"
                                    text-anchor="none"
                                    style={{ mixBlendMode: 'normal' }}
                                >
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                                    </g>
                                </g>
                            </svg>
                        </Button>
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0,0,256,256"
                            >
                                <g
                                    fill="#ffffff"
                                    fill-rule="nonzero"
                                    stroke="none"
                                    stroke-width="1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="10"
                                    stroke-dasharray=""
                                    stroke-dashoffset="0"
                                    font-family="none"
                                    font-weight="none"
                                    font-size="none"
                                    text-anchor="none"
                                    style={{ mixBlendMode: 'normal' }}
                                >
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path>
                                    </g>
                                </g>
                            </svg>
                        </Button>

                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0,0,256,256"
                            >
                                <g
                                    fill="#ffffff"
                                    fillRule="nonzero"
                                    stroke="none"
                                    strokeWidth="1"
                                    strokeLinecap="butt"
                                    strokeLinejoin="miter"
                                    strokeMiterlimit="10"
                                    strokeDasharray=""
                                    strokeDashoffset="0"
                                    fontFamily="none"
                                    fontWeight="none"
                                    fontSize="none"
                                    textAnchor="none"
                                    style={{ mixBlendMode: 'normal' }}
                                >
                                    <g transform="scale(5.12,5.12)">
                                        <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                                    </g>
                                </g>
                            </svg>
                        </Button>

                    </div>

                </div>
                
            </div>
            <hr className=" border-gray-600" />
            <div className='flex flex-row justify-between p-3 text-gray-600'>
                <div>
        <Typography>@2023 Utsav,All Rights Reserved</Typography>
                </div>
                <div>
        <Typography>Terms of Use | Privacy Policy | Cookie Policy</Typography>
                </div>
            </div>
          
        </div>
    )
}

export default Footer
