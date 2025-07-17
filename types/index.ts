
export type FontAwesomeIconName =
    | "laptop"
    | "globe"
    | "leaf"
    | "map"
    | "car"
    | "book"
    | "shield"
    | "paw"
    | "circle"
    | "graduation-cap"
    | "music"
    | "heart"
    | "camera"
    | "film"
    | "university"
    | "flask"
    | "bolt"
    | "trophy"
    | "graduation-cap"
    | "star"
    | "money-bill"
export interface Playlist {
    id: string;
    name: string;
    color: string;
    icon: FontAwesomeIconName;
    createdAt: string;
    playlist_videos: PlaylistVideo[];
}

export interface PlaylistVideo {
    id: string;
    videos: Video;
    video_id: string;
    playlist_id: string;
}

export interface Video {
    id: string;
    playlist_id: string;
    title: string;
    youtube_id: string;
    createdAt: string;
}

export interface Activity {
    id: string
    video_id: string
    data: JSON
    theme_id: string
}