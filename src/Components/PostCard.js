import { Card } from 'react-bootstrap'

function PostCard({post}){

    return (
        <Card className={"post"}>
            <Card.Img src={post.images["474x"].url}  alt="Camera Shy"/>
            <Card.Body className={"postText"}>
                <Card.Title style={{fontSize:"25px"}}alt={"Cute Cat"}>{post.title}</Card.Title>
                <Card.Text style={{width:"500px"}}>{post.description}</Card.Text>
            </Card.Body>
        </Card>
    )
    
}

export default PostCard