/* This example requires Tailwind CSS v2.0+ */
const stats = [
    {label: 'Дата', value: '27.08.2022'},
    {label: 'Сюда можете кидать свои идеи', value: 'lenovoMine@mail.ru'},
    {label: 'Топ онлайна', value: '100 из 100 игроков'},
    {label: 'Онлайн дня', value: '93 из 100 игроков'},
]

export default function InfoContent() {
    return (
        <div className="relative  py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 w-full shadow-xl bg-[url('/mine1.jpg')] rounded-r-3xl lg:right-72"/>
                        <svg
                            className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                            width={404}
                            height={392}
                            fill="none"
                            viewBox="0 0 404 392"
                        >
                            <defs>
                                <pattern
                                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"/>
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-36 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src="mine3.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"/>
                            <div className="relative px-8">
                                <div>
                                    <img
                                        className="h-16"
                                        src="/pngegg.png"
                                        alt="Logo"
                                    />
                                    <div>
                                        <p className="text-7xl font-extrabold tracking-tight text-gray-900">
                                            Minecraft Lenovo
                                        </p>
                                        <p className="text-2xl font-bold tracking-tight text-gray-900">
                                            0.0.1
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                            Выбери свой путь к победе...
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                Неповторимый игровой опыт: битвы фракций, улучшение оружий, собственная роль в
                                сообществе, участие в интригах, война за ресурсы на земле.
                            </p>
                            <p className="text-base leading-7">
                                Присоединяйся, саботируй, драматизируй, чтобы внести вклад в историю игры.
                            </p>
                            <p className="text-base leading-7">
                                Завоевывай земли врагов и стань королем фракции. А так же отзывчивое комьюнити, которое
                                придёт на помощь, заходи, будет весело
                            </p>
                        </div>
                    </div>

                    {/* Stats section */}
                    <div className="mt-10">
                        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                                    <dd className="text-2xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-10">
                            <a href="#" className="text-base font-medium text-indigo-600">
                                {' '}
                                Узнай больше о нашем мире здесь <span
                                aria-hidden="true">&rarr;</span>{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
