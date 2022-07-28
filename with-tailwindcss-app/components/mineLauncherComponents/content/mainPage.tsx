import ContentTable from "@/components/mineLauncherComponents/content/contentTable";
import InfoContent from "@/components/mineLauncherComponents/content/infoContent";
import {HeadMainPage} from "@/components/mineLauncherComponents/headMainPage";
import LoginComponent from "@/components/mineLauncherComponents/loginComponent";

export default function MainPage() {
    return (
        // <div className="bg-[url('/fon.jpg')]">
        <div>
            <div className="columns-2">
                <HeadMainPage/>
                <LoginComponent/>
            </div>
            <InfoContent/>
            <ContentTable/>
        </div>
    )
}