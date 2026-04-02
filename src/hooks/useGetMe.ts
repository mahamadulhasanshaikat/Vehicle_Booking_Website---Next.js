'use client'
import axios from 'axios'
import { useEffect } from 'react'

function useGetMe() {
    return (
        useEffect(() => {
            const getMe = async () => {
                const { data } = await axios.get('/api/user/me')
                console.log(data)

            }
            getMe()
        }, [])

    )
}

export default useGetMe