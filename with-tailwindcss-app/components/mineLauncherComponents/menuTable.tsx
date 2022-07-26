import Link from "next/link";

const object = [
    {
        id: 1,
        name: 'Shop',
        imageUrl:
            '/mine3.jpg',
        value: 'shop',
    }, {
        id: 1,
        name: 'Profile',
        imageUrl:
            '/mine3.jpg',
        value: 'profile',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    }, {
        id: 1,
        name: 'Jane Cooper',
        imageUrl:
            '/mine3.jpg',
        value: 'menu',
    },
]

export default function MenuTable() {
    return (
        <div className="bg-gradient-to-l from-[#94bbe9] via-[#bdb3d0] to-[#94bbe9]">
            <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {object.map((icons) => (
                    <Link href={icons.value}>
                        <a
                            key={icons.id}
                        >
                            <div className="flex-1 flex flex-col p-8 hover:text-gray-700">

                                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover"
                                        src={icons.imageUrl}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-indigo-200 mix-blend-multiply"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-500 opacity-70 hover:opacity-30"/>
                                    <div className="relative px-8">
                                        <blockquote className="mt-8">
                                            <div className="relative text-5xl text-indigo-200 font-medium md:flex-grow">
                                                <p className="relative ">
                                                    {icons.name}
                                                </p>
                                            </div>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
