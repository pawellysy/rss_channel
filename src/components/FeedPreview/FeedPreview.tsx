import React, { useEffect, useState } from 'react';
import * as ui from "./FeedPreviewUI";
import axios from 'axios';
import xml2js from 'xml2js';
import FeedDisplayer from './FeedDisplayer/FeedDisplayer';
import FeedFilter from './FeedFilter/FeedFilter';
interface IFeedPreview {
    url: string
}

interface IFeedAtributes {
    title: string;
    link: string;
    description: string;
    guid: any;
    pubDate: string;
    media: any;
    dc: any;
    category: any;
}

const FeedPreview = ( {url} : IFeedPreview) => {

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // using to get past the cors
    const [posts, setPosts] = useState<Array<IFeedAtributes>>([]);
    const [postsToDisplay, setPostsToDisplay] = useState<Array<IFeedAtributes>>([]);

    useEffect(() => {
            getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get(proxyUrl + url);
        const xmlResponse = response.data;
        const value = await xml2js.parseStringPromise(xmlResponse);
        setPosts(value.rss.channel[0].item);
        setPostsToDisplay(value.rss.channel[0].item)
    };

    const filterPosts = (query: string) => {
        const filteredPosts = posts.filter((post) => (post.title[0].includes(query)));
        setPostsToDisplay(filteredPosts);
    }

    console.log(posts[0])
    

    return (
        <ui.FeedPreviewWrapper>
            My FeedPreview with url {url}
            <FeedFilter filterPosts={filterPosts}/>
            <FeedDisplayer posts={postsToDisplay} />
        </ui.FeedPreviewWrapper>
    )
}

export default FeedPreview;