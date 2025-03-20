import React from 'react'
import { Button } from '../components/ui/button'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function Home() {
    return (
        <LazyLoadComponent>
            <section className="w-full flex items-center justify-center">
                <div className='relative'>
                    <video
                        autoPlay
                        loop muted
                        className='object-cover aspect-video'
                    >
                        <source
                            src="https://videos.pexels.com/video-files/8971250/8971250-uhd_2560_1440_25fps.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="absolute w-4/5 container mx-auto">
                    <h1 className='md:text-5xl font-medium text-white mb-2'>Welcome to Our Service</h1>
                    <p className='md:text-xl font-medium text-white mb-2'>Your solution starts here</p>
                    <Button variant="secondary">
                        Get Started
                    </Button>
                </div>
            </section>
        </LazyLoadComponent>
    )
}

export default Home