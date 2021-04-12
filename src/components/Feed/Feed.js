import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender/MessageSender'
import StoryReel from './StoryReel/StoryReel'
import Post from './Post/Post'
const Feed = () => {
    return (
        <div className="feed">
            {/* StroyReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />

            <Post
            profilePic="https://scontent.fprn1-1.fna.fbcdn.net/v/t1.0-9/123197150_1680387612140157_8726273296675173383_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3cC0ti1QWCMAX_bjWrv&_nc_ht=scontent.fprn1-1.fna&oh=ebf8ec505275c65ee09c615b71355991&oe=60884B2B"
            message="Wow this works!"
            timestamp="this is a timestamp"
            username="Besnik"
            image="https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80"
           />
           <Post
            profilePic="https://scontent.fprn1-1.fna.fbcdn.net/v/t1.0-9/123197150_1680387612140157_8726273296675173383_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3cC0ti1QWCMAX_bjWrv&_nc_ht=scontent.fprn1-1.fna&oh=ebf8ec505275c65ee09c615b71355991&oe=60884B2B"
            message="Wow this works!"
            timestamp="this is a timestamp"
            username="Besnik"
            image="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
           />
            
            <Post />
        </div>
    )
}

export default Feed
