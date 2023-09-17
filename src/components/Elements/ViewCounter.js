"use client"
import {useEffect, useState} from "react";

import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

const supabase = createClientComponentClient()
const ViewCounter = ({slug, noCount = false, showCount = true}) => {
    const [views, setViews] = useState(0);


    useEffect(() => {
        const incrementViews = async () => {
            try {
                let {data, error} = await supabase
                    .rpc('increment', {
                        slug_text: slug
                    })

                if (error) console.error(error)

            } catch (e) {
                console.log(e)
            }
        }
        if (!noCount) {
            incrementViews()
        }

    }, [slug, noCount]);

    useEffect(() => {
        const getViews = async () => {
            try {

                let {data, error} = await supabase
                    .from('views')
                    .select('count')
                    .match({slug})
                    .single()

                if (error) return console.error(error)

                setViews(data?.count || 0)

            } catch (e) {
                console.log(e)
            }
        }
        getViews()

    }, [slug]);

    if (!showCount) {
        return null
    }

    return (
        <div>
            {views} views
        </div>
    )
};

export default ViewCounter;