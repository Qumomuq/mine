import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {UrlObject} from 'url';

const convertBreadcrumb = (string: string) => {
    return string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
        .toUpperCase();
};

export const Breadcrumbs = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([{breadcrumb: "", href: ""}]);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/')};
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    const {asPath} = useRouter()

    function Show() {
        return asPath !== '/';
    }

    return (
        Show() &&
        <>
            <nav aria-label="breadcrumbs">
                <ol className="breadcrumb">
                    <div className="flex mt-1 pb-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/">
                            <a
                                className="inline-flex items-center font-medium text-indigo-300 hover:text-indigo-400 dark:hover:text-white">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                                HOME
                            </a>
                        </Link>
                        {breadcrumbs.map((breadcrumb, i: any) => {
                            return (
                                <li key={breadcrumb.href}>
                                    <div
                                        className="flex flex-nowrap font-medium text-indigo-300 hover:text-indigo-400 dark:hover:text-white">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <Link href={breadcrumb.href}>
                                            <a>
                                                {convertBreadcrumb(breadcrumb.breadcrumb)}
                                            </a>
                                        </Link>
                                    </div>
                                </li>
                            );
                        })}
                    </div>
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;