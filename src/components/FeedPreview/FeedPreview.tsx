import React, { useEffect, useState } from "react";
import * as ui from "./FeedPreviewUI";
import axios from "axios";
import xml2js from "xml2js";
import FeedDisplayer from "./FeedDisplayer/FeedDisplayer";
import FeedFilter from "./FeedFilter/FeedFilter";
import ErrorDisplayer from "./ErrorDisplayer/ErrorDisplayer";
interface IFeedPreview {
    url: string;
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

const FeedPreview = ({ url }: IFeedPreview) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // using to get past the cors
    const [posts, setPosts] = useState<Array<IFeedAtributes>>([]);
    const [postsToDisplay, setPostsToDisplay] = useState<Array<IFeedAtributes>>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        try {
            const response = await axios.get(proxyUrl + url);
            const xmlResponse = response.data;
            const value = await xml2js.parseStringPromise(xmlResponse);
            setPosts(value.rss.channel[0].item);
            setPostsToDisplay(value.rss.channel[0].item);
            setError(false);
        }
        catch (e) {
            setError(true);
        }
    };

    const filterPosts = (query: string) => {
        const filteredPosts = posts.filter((post) => post.title[0].toLowerCase().includes(query.toLowerCase()));
        setPostsToDisplay(filteredPosts);
    };

    return (
        <ui.FeedPreviewWrapper>
            <FeedFilter filterPosts={filterPosts} />
            <FeedDisplayer posts={postsToDisplay} />
            {error && <ErrorDisplayer retry={getPosts}/>}
        </ui.FeedPreviewWrapper>
    );
};

export default FeedPreview;
