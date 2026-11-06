
function Home({ person }) {
    return (
        <>
            <section className="min-h-screen">
                <div className="min-h-screen w-full bg-[url('https://plus.unsplash.com/premium_photo-1700251651044-06e38d006b26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center bg-fixed px-4 py-10 sm:px-8 md:px-12 lg:px-20">

                    
                    <div className="mx-auto pt-10 w-full max-w-6xl overflow-hidden rounded-lg shadow-lg shadow-zinc-800">

                       
                        <div className="hidden md:grid lg:grid xl:grid h-20 grid-cols-4 bg-white/80 py-5 backdrop-blur-2xl ">

                            <p className="flex items-center justify-center text-sm font-semibold sm:text-base">
                                Profile Picture
                            </p>

                            <p className="flex items-center justify-center text-sm font-semibold sm:text-base">
                                Name
                            </p>

                            <p className="flex items-center justify-center text-sm font-semibold sm:text-base">
                                Age
                            </p>

                            <p className="flex items-center justify-center text-sm font-semibold sm:text-base">
                                Address
                            </p>

                        </div>

                        <div className="flex md:hidden lg:hidden xl:hidden h-15 rounded-t-lg grid-cols-4 bg-white/80 py-5 backdrop-blur-2xl">

                           

                        </div>

                       
                        <div>
                            {person.map(({ id, name, age, address, profile }) => (
                                <div
                                    key={id}
                                    className="grid grid-cols-1 items-center gap-4 border-b border-white/20 bg-black/40 p-5 backdrop-blur-lg transition duration-300 hover:bg-black/60 sm:h-40 sm:grid-cols-4 sm:gap-2 sm:p-3"
                                >

                                  
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-24 w-24 rounded-full border-4 border-double border-blue-600 object-cover transition duration-300 hover:scale-110 sm:h-28 sm:w-28 lg:h-30 lg:w-30"
                                            src={profile}
                                            alt={`${name}'s profile`}
                                        />
                                    </div>

                                    <p className="break-words text-center text-base font-semibold text-white transition duration-300 hover:scale-105 sm:text-lg">
                                        <span className="mb-1 block text-xs font-normal text-white/60 sm:hidden">
                                            Name
                                        </span>
                                        {name}
                                    </p>

                                    <p className="text-center text-sm italic text-white transition duration-300 hover:scale-105 sm:text-base">
                                        <span className="mb-1 block text-xs not-italic text-white/60 sm:hidden">
                                            Age
                                        </span>
                                        {age}
                                    </p>

                                   
                                    <p className="break-words text-center text-base italic text-white transition duration-300 hover:scale-105 sm:text-lg">
                                        <span className="mb-1 block text-xs not-italic text-white/60 sm:hidden">
                                            Address
                                        </span>
                                        {address}
                                    </p>

                                </div>
                            ))}
                        </div>

                        
                        <div className="flex min-h-12 items-center justify-center bg-white/80 px-3 py-3 text-center text-zinc-700 backdrop-blur-2xl">

                    

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
