import { useEffect, useState } from 'react'
import { supabase } from '@/hooks/service/supabase'

interface Video {
    id: string
    title: string
    description: string
    url: string
    playlist_id: string
}

/**
 * Get videos by playlist id
 * @param playlistId 
 * @returns 
 */
export function useVideosByPlaylist(playlistId: string) {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        if (!playlistId) return

        const fetchVideos = async () => {
            const { data, error } = await supabase
                .from('playlist_videos')
                .select(`
          *,
          videos(*)
        `)
                .eq('playlist_id', playlistId)

            if (error) {
                setError(error.message)
            } else {

                const flatVideos = data.map((pv) => pv.videos)
                setVideos(flatVideos)
            }
            setLoading(false)
        }

        fetchVideos()
    }, [playlistId])

    return { videos, loading, error }
}
