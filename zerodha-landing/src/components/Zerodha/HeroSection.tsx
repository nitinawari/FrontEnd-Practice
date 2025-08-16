import landing from "../../assets/landing.png"

export default function HeroSection(){
    return(
        <main className="w-full">
            <section className="mt-[90px] max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex flex-col justify-center items-center">
                    <img src={landing} alt="landing" className=" w-full  max-w-[968px] h-auto lg:w-[968px] lg:h-[407px] "  />
                    <h1 className="font-semibold text-3xl text-neutral-600 mt-16 text-center">Invest in everything</h1>
                    <p className="text-xl text-gray-700 my-4 font-normal mt-2 text-center ">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <a href="#" className=" bg-[#387ed1] px-8 py-2.5 text-white font-medium text-lg rounded-sm mt-6 text-center hover:bg-black ">Sign up for free</a>
                </div>
            </section>
        </main>
    )
}