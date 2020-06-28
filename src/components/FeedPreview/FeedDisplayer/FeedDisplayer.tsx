import React from "react";
import * as ui from "./FeedDisplayerUI";

interface IFeedDisplayer {
    posts: Array<IFeedAtributes>;
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

const FeedDisplayer = ({ posts }: IFeedDisplayer) => (
    <ui.FeedDisplayerWrapper>
        {posts.map((post, index) => (
            <ui.singleFeed key={index}>
                <ui.title> {post.title} </ui.title>
                <ui.link href={post.link} target='blank'> {post.link} </ui.link>
                <ui.date> published date: {post.pubDate} </ui.date>
            </ui.singleFeed>
        ))}
    </ui.FeedDisplayerWrapper>
);

export default FeedDisplayer;
