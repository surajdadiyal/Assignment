import checkIcon from '@/assets/check.svg';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Button } from '../components/ui/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const pricingTiers = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

function Pricing() {
    return (
        <LazyLoadComponent>
            <section className="my-3 py-5">
                <div className="w-4/5 flex flex-col items-center justify-center container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-6xl font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Pricing</h2>
                        <p className="text-sm lg:text-base font-medium mt-5 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                            Free forever, Upgrade for unlimited tasks, better security, and exclusive features
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center xl:justify-evenly">

                        {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
                            <div
                                key={index}
                                className={twMerge("card",
                                    inverse === true && 'border-black bg-black text-white')}
                            >
                                <div className="flex justify-between">
                                    <h3 className={twMerge("text-lg font-bold text-black/50",
                                        inverse === true && "text-white/60")}
                                    >
                                        {title}
                                    </h3>

                                    {popular === true && (
                                        <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                            <motion.span
                                                animate={{
                                                    backgroundPositionX: "100%",
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: 'linear',
                                                    repeatType: 'loop'
                                                }}
                                                className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">Popular</motion.span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1 mt-[30px]">
                                    <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                                    <span className="tracking-tight font-bold text-black/50">
                                        /month
                                    </span>
                                </div>
                                <Button
                                    className={twMerge("btn btn-primary w-full mt-[30px]",
                                        inverse === true && "bg-white text-black")}
                                >
                                    {buttonText}
                                </Button>

                                <ul className="flex flex-col gap-5 mt-8">
                                    {features.map((feature, index) => (
                                        <li key={index} className="text-sm flex items-center gap-4">
                                            <img
                                                src={checkIcon}
                                                alt="check"
                                                className="h-6 w-6"
                                                loading='lazy'
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    )
};

export default Pricing
