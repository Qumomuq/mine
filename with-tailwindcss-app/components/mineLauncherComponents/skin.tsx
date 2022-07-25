// import {useState} from "react";
// import {Box} from "@chakra-ui/react";
// import {AmbientLight,DirectionalLight} from "three"
import * as skinview3d from "skinview3d";
import {useEffect, useRef, useState} from "react";

import {
    createOrbitControls,
    SkinViewer as SkinRenderer,
    WalkingAnimation,
    IdleAnimation
} from 'skinview3d';

//     const x:HTMLCanvasElement | null =document.getElementById("skin_container") as HTMLCanvasElement
//     let skinViewer = new skinview3d.SkinViewer({
//         canvas: x,
//         width: 300,
//         height: 400,
//         skin: "/skin.png"
//     });
//     skinViewer.width = 600;
//     skinViewer.height = 800;
//
//     // Load another skin
//     skinViewer.loadSkin("/skin1.png");
//
//     // Load a cape
//     skinViewer.loadCape("img/cape.png");
//
//     // Load an elytra (from a cape texture)
//     skinViewer.loadCape("img/cape.png", {backEquipment: "elytra"});
//
//     // Unload(hide) the cape / elytra
//     skinViewer.loadCape(null);
//
//     // Set the background color
//     skinViewer.background = 0x5a76f3;
//
//     // Set the background to a normal image
//     skinViewer.loadBackground("img/background.png");
//
//     // Set the background to a panoramic image
//     skinViewer.loadPanorama("img/panorama1.png");
//
//     // Change camera FOV
//     skinViewer.fov = 70;
//
//     // Zoom out
//     skinViewer.zoom = 0.5;
//
//     // Control objects with your mouse!
//     let control = skinview3d.createOrbitControls(skinViewer);
//     control.enableRotate = true;
//     control.enableZoom = false;
//     control.enablePan = false;
//
//     // Add an animation
//     let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
//     // Add another animation
//     let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
//     // Remove an animation, stop walking dude
//     walk.remove();
//     // Remove the rotating animation, and make the player face forward
//     rotate.resetAndRemove();
//     // And run for now!
//     let run = skinViewer.animations.add(skinview3d.RunningAnimation);
//
//     // Set the speed of an animation
//     run.speed = 3;
//     // Pause single animation
//     run.paused = true;
//     // Pause all animations!
//     skinViewer.animations.paused = true;
//     skinViewer.cameraLight.intensity = 0.9;
//     skinViewer.globalLight.intensity = 0.1;
//     ///////////////////////////////////////////////////////////////////////////////////////////////
//     const skinParts = ["head", "body", "rightArm", "leftArm", "rightLeg", "leftLeg"];
//     const skinLayers = ["innerLayer", "outerLayer"];
//     const availableAnimations = {
//         idle: skinview3d.IdleAnimation,
//         walk: skinview3d.WalkingAnimation,
//         run: skinview3d.RunningAnimation,
//         fly: skinview3d.FlyingAnimation
//     };
// const currentSong = useContext(Song);
// const canvas = useRef<HTMLCanvasElement>();
export default function Skin() {
    //
    const defaultSkin = '/skin.png'


    const canvas = useRef<HTMLCanvasElement>();
    const [skin, setSkin] = useState(defaultSkin)

    function onSkinChange() {
        setSkin([...e.target.files].toString());
    }


    useEffect(() => {
        //const skins: string = `/skin.png`;
        const cape: string = `/cape.png`;

        const renderer = new SkinRenderer({
            canvas: canvas.current,
            width: 300,
            height: 450,
            skin,
            cape,
            zoom: 0.9
        });


        const control = createOrbitControls(renderer);

        control.enableRotate = true;
        control.enableZoom = false;


        renderer.animations.add(WalkingAnimation);
        renderer.animations.add(IdleAnimation);
    }, []);


    return (
        <>
            <div>
                <div className="items-center justify-between m-8">
                    <canvas ref={canvas} className="skin bg-indigo-200 rounded-2xl "/>
                    <input
                        type={"file"}
                        name="mySkin"
                        onChange={onSkinChange}
                    />
                    <button
                        onClick={() => {
                            setSkin(defaultSkin)
                        }}
                        className={"bg-indigo-300"}
                    >Remove
                    </button>
                </div>
            </div>
        </>
    )
}

