import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    };

    return (
        <LazyLoadComponent>
            <section className="w-full flex flex-col items-center justify-center py-5 my-3">
                <div className='w-4/5 flex flex-col items-center justify-center container mx-auto'>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-4xl md:text-5xl font-semibold my-3 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Contact Us</h2>
                    </div>

                    <div className='w-full flex items-center justify-center my-3'>
                        <form
                            className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'
                            onSubmit={handleSubmit}
                        >
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="col-span-2 md:col-auto"
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="col-span-2 md:col-auto"
                            />
                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="col-span-2"
                            />
                            <Button
                                type="submit"
                                className="w-full"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    );
};

export default ContactForm;
