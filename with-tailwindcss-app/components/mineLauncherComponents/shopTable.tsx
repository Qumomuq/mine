import {object} from "../../store/contentShop";

export default function ShopTable() {
    return (
        <div className="bg-gradient-to-l from-[#94bbe9] via-[#bdb3d0] to-[#94bbe9]">
            <div className="my-6 ">
                <ul role="list"
                    className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                    {object.map((icons) => (
                        <li
                            key={icons.id}
                            className="col-span-1 flex flex-col text-center bg-indigo-200 rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-lg" src={icons.photo} alt=""/>
                                <h3 className="mt-6 text-gray-900 text-3xl font-medium">{icons.title}</h3>
                                <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Role</dt>
                                    <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xl font-medium bg-cyan-100 rounded-full">
                  {icons.category}
                </span>
                                        <div className="mt-3 -mb-3 font-semibold text-xl">
                                            {icons.price} за {icons.count} шт.
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <button
                                className={icons.is_available ? "rounded-lg font-semibold text-xl bg-green-400" : "bg-red-400 rounded-lg font-semibold text-xl"}

                            >Купить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
