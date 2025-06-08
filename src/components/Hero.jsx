import React from 'react';

const Hero = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <span className="text-primary font-medium">Melhores ofertas personalizadas</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                        Queima de estoque Nike <span className="text-primary">🔥</span>
                    </h1>
                    <p className="text-gray-600 mb-6 max-w-md">
                        Os melhores tênis com descontos exclusivos. Aproveite agora antes que esgotem!
                    </p>
                    <button className="btn-primary">Ver Ofertas</button>
                </div>
                <div className="md:w-1/2 relative">
                    <img
                        src="/assets/nike-hero-large.jpg"
                        srcSet="/assets/nike-hero-small.jpg 480w, /assets/nike-hero-medium.jpg 768w, /assets/nike-hero-large.jpg 1280w"
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 50vw"
                        alt="Tênis Nike"
                        className="w-full max-w-lg mx-auto transition-all hover:scale-105"
                    />
                    <div className="flex justify-center mt-6 space-x-2">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className={`w-3 h-3 rounded-full ${item === 1 ? 'bg-primary' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;