import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
} from '@heroicons/react/outline'
import {forum, callsToAction, rules, recentPosts, help, donat, voting} from "../../store/itemsNavbar";
import {ChevronDownIcon} from '@heroicons/react/solid'
import Link from "next/link";
import {Breadcrumbs} from "@/components/mineLauncherComponents/breadcrumbs";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <>
            <Popover className="relative bg-gray-600">
                <div className="max-w-7xl xl:mx-auto px-4 sm:px-6">
                    <div
                        className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-20 lg:flex-1">
                            <Link href={"/"}>
                                <a>
                                    <img
                                        className="h-15 sm:w-auto sm:h-20"
                                        src="pngegg.png"
                                        alt=""
                                    />
                                </a>
                            </Link>

                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex space-x-10">
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-indigo-400 ' : 'text-indigo-300 outline-none ring-2 ring-offset-2 ring-indigo-500',
                                                'group bg-gray-800 px-5 py-2 w-32 rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Форум</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div
                                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div
                                                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {forum.map((item) => (
                                                            <Link href={item.href}>
                                                                <a
                                                                    key={item.name}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div
                                                        className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                        {callsToAction.map((item) => (
                                                            <div key={item.name} className="flow-root">
                                                                <Link href={item.href}>
                                                                    <a
                                                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                                                    >
                                                                        <item.icon
                                                                            className="flex-shrink-0 h-6 w-6 text-gray-400"
                                                                            aria-hidden="true"/>
                                                                        <span className="ml-3">{item.name}</span>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-400' : 'text-indigo-300 outline-none ring-2 ring-offset-2 ring-indigo-500',
                                                'group px-6 py-2 bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Правила</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                                <div
                                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div
                                                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {rules.map((item) => (
                                                            <Link href={item.href}>
                                                                <a
                                                                    key={item.name}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-400' : 'text-indigo-300 outline-none ring-2 ring-offset-2 ring-indigo-500',
                                                'group px-6 py-2 bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Помощь</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                                <div
                                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div
                                                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {help.map((item) => (
                                                            <Link href={item.href}>
                                                                <a
                                                                    key={item.name}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-400' : 'text-indigo-300 outline-none ring-2 ring-offset-2 ring-indigo-500',
                                                'group px-6 py-2 bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Донат</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                                <div
                                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div
                                                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {donat.map((item) => (
                                                            <Link href={item.href}>
                                                                <a
                                                                    key={item.name}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                            <Popover className="relative">
                                {({open}) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-400' : 'text-indigo-300 outline-none ring-2 ring-offset-2 ring-indigo-500',
                                                'group px-6 py-2 bg-gray-800 rounded-md inline-flex items-center text-base font-medium hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Голосование</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'h-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                                <div
                                                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div
                                                        className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {voting.map((item) => (
                                                            <Link href={item.href}>
                                                                <a
                                                                    key={item.name}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                        <div>
                                                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent
                                                                Posts</h3>
                                                            <ul role="list" className="mt-4 space-y-4">
                                                                {recentPosts.map((post) => (
                                                                    <li key={post.id} className="text-base truncate">
                                                                        <Link href={post.href}>
                                                                            <a
                                                                                className="font-medium text-gray-900 hover:text-gray-700">
                                                                                {post.name}
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="mt-5 text-sm">
                                                            <Link href="#">
                                                                <a href="#"
                                                                   className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    {' '}
                                                                    View all posts <span
                                                                    aria-hidden="true">&rarr;</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </Popover.Group>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus
                                   className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {forum.map((item) => (
                                            <Link href={item.href}>
                                                <a
                                                    key={item.name}
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                >
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                               aria-hidden="true"/>
                                                    <span
                                                        className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                </a>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link href="#">
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Pricing
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Docs
                                        </a>
                                    </Link>
                                    {help.map((item) => (
                                        <Link href={item.href}>
                                            <a
                                                key={item.name}
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
                <Breadcrumbs/>
            </Popover>
        </>
    )
}