import { useEffect, useState } from 'react'
import { supabase } from '@/hooks/service/supabase'
import { Playlist } from '@/types'

/**
 * Get all playlists and videos
 * @returns 
 */
export function useData() {
    const [data, setData] = useState<Playlist[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        const fetchVideos = async () => {
            const { data, error } = await supabase
                .from('playlists')
                .select(`
    *,
    playlist_videos(
      *,
      videos(*)
    )
  `)

            if (error) {
                setError(error.message)
            } else {
                setData(data)
            }
            setLoading(false)
        }

        fetchVideos()
    }, [])

    return { data, loading, error }
}
