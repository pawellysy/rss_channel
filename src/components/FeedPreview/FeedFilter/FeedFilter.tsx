import React from 'react';
import * as ui from './FeedFilterUI'

interface IFeedFilter {
    filterPosts: (query: string) => void;
}
const FeedFilter = ({filterPosts}: IFeedFilter) => {
 
    const handleChange = (ev:any) => {
        filterPosts(ev.target.value)
    }

    return (
        <ui.FeedFilterWrapper>
            Filter the feed by title: 
            <input type="text" onChange={handleChange}></input>
        </ui.FeedFilterWrapper>
    )
}

export default FeedFilter