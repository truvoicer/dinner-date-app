import AllMediaBlock from "../../components/blocks/media/AllMediaBlock";
import AlbumsMediaBlock from "../../components/blocks/media/AlbumsMediaBlock";
import PhotosMediaBlock from "../../components/blocks/media/PhotosMediaBlock";
import VideosMediaBlock from "../../components/blocks/media/VideosMediaBlock";
import MusicMediaBlock from "../../components/blocks/media/MusicMediaBlock";

export const editMediaTabsConfig = {
    defaultTab: "all_media",
    tabBlockName: "media",
    tabs: [
        {
            name: "all_media",
            label: "All Media",
            component: AllMediaBlock
        },
        {
            name: "albums_media",
            label: "Albums",
            component: AlbumsMediaBlock
        },
        {
            name: "photos_media",
            label: "Photos",
            component: PhotosMediaBlock
        },
        {
            name: "videos_media",
            label: "Videos",
            component: VideosMediaBlock
        },
        {
            name: "music_media",
            label: "Music",
            component: MusicMediaBlock
        },
    ]
}