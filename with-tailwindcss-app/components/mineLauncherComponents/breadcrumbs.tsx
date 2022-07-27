import {useRouter} from "next/router";

export function Breadcrumbs() {
    const {asPath} = useRouter()

    function Show() {
        return asPath !== '/';
    }

    return (
        Show() &&
        <>
            <div>
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 ">
                    <p className="text-5xl font-sans tracking-tight text-gray-900">
                        {asPath}
                    </p>
                </div>
            </div>
        </>
    )
}