import ContentTable from "@/components/mineLauncherComponents/content/contentTable";
import InfoContent from "@/components/mineLauncherComponents/content/infoContent";
import {HeadMainPage} from "@/components/mineLauncherComponents/headMainPage";

export default function MainPage() {
    return (
        // <div className="bg-[url('/fon.jpg')]">
        <div className="bg-gradient-to-l from-[#94bbe9] via-[#bdb3d0] to-[#94bbe9]">
            <HeadMainPage/>
            <InfoContent/>
            <ContentTable/>
        </div>
    )
}