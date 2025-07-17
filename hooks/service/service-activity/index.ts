import { useEffect, useState } from 'react'
import { supabase } from '@/hooks/service/supabase'
import { Activity } from '@/types'


/**
 * Get activities by video id
 * @param videoId 
 * @returns 
 */



// React à un hook nommé use qui permet de faire des appels asynchrones
export function useActivities(videoId: string) {
    const [data, setData] = useState<Activity[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
        const fetchVideos = async () => {
            const { data, error } = await supabase
                .from('activities')
                .select(`*`).eq('video_id', videoId)

            if (error) {
                setError(error.message)
            } else {
                setData(data)
            }
            setLoading(false)
        }

        fetchVideos()
    }, [videoId])

    return { data, loading, error }
}
