import {useEffect, useRef, useState} from "react";
import {
    createOrbitControls,
    SkinViewer as SkinRenderer,
    WalkingAnimation,
    IdleAnimation,
    RunningAnimation,
    FlyingAnimation
} from 'skinview3d';
import {AllSkins} from "../../store/allSkins";

export default function Skin() {
    const defaultSkin = '/skin.png'
    let saveSkin = '/skin.png'

    const canvas = useRef<HTMLCanvasElement>();
    const [skin, setSkin] = useState(saveSkin)
    const [walk, setWalk] = useState(true)
    const [run, setRun] = useState(false)
    const [fly, setFly] = useState(false)

    useEffect(() => {

        const cape: string = `/cape.png`;

        const renderer = new SkinRenderer({
            canvas: canvas.current,
            width: 450,
            height: 450,
            skin,
            cape,
            zoom: 0.7
        });

        const control = createOrbitControls(renderer);

        control.enableRotate = true;
        control.enableZoom = false;
        renderer.fov = 70
        renderer.loadPanorama('/panorama.png')

        if (walk) {
            renderer.animations.add(WalkingAnimation)
        } else if (run) {
            renderer.animations.add(RunningAnimation)
        } else if (fly) {
            renderer.animations.add(FlyingAnimation)
        }
        renderer.animations.add(IdleAnimation);
    }, [skin, walk, run, fly]);

    return (
        <>
            <div className="grid grid-cols-2">
                <div>
                    <div className="items-center justify-between m-8">
                        <canvas ref={canvas} className="rounded-2xl "/>
                    </div>
                    <div className="flex ">
                        None<input type={"radio"} onClick={() => {
                        setRun(false)
                        setWalk(false)
                        setFly(false)
                    }}/>
                        Walk<input type={"radio"} onClick={() => {
                        setRun(false)
                        setWalk(true)
                        setFly(false)
                    }}/>
                        Run<input type={"radio"} onClick={() => {
                        setRun(true)
                        setWalk(false)
                        setFly(false)
                    }}/>
                        Fly<input type={"radio"} onClick={() => {
                        setRun(false)
                        setWalk(false)
                        setFly(true)
                    }}/>
                    </div>

                    <div className="items-center justify-between m-8">
                        <button
                            onClick={() => {
                                setSkin(defaultSkin)
                                setRun(false)
                                setWalk(false)
                                setFly(false)
                            }}
                            className={"bg-red-300 w-32 rounded-2xl"}
                        >Remove
                        </button>
                    </div>
                </div>
                {/*!!!!!!!This is Skin Selection!!!!!!!!!*/}
                <div>
                    <div>
                        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {AllSkins.map((skin) => (
                                <li
                                    key={skin.id}
                                    className="col-span- flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                                >
                                    <div className="flex-1 flex flex-col p-8">
                                        <img
                                            className="w-32 h-44 rounded-3xl mx-auto"
                                            src={skin.imageUrl}
                                            alt=""
                                        />
                                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{skin.name}</h3>
                                        <span
                                            className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                {skin.role}
                            </span>
                                    </div>
                                    <div>
                                        <div className="-mt-px flex divide-x divide-gray-200">
                                            <div className="w-0 flex-1 flex">
                                                <button
                                                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                                    onClick={() => {
                                                        setSkin(skin.skinUrl)
                                                        saveSkin = skin.skinUrl
                                                    }
                                                    }
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

