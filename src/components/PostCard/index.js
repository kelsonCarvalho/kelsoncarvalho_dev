import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton'
import CardActionArea from "@mui/material/CardActionArea";
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
    },
    captiion: {
        marginRight: 30,
    },
    messege: {
        height: 'auto',
        marginBottom: 16,
        padding: '0 24px',
    },
    image: {
        height:300,
        width: '100%',
        maxWidth:'100%',
    },
    favorite: {
        marginLeft: 380,
    },
    content: {
        padding: 0,
    }
}))

function PostCard({ post }) {
    const Classes = useStyles();

    return (
        <>
            <Card className={Classes.root}>
                <CardHeader
                    avatar={<Avatar src={post.author.avatar}></Avatar>}
                    title={<Typography variant="h6">{post.title}</Typography>}
                    subheader={
                    <div classname={Classes.subheader}>
                        <Typography variant="" className={Classes.captiion}>
                            {'Avaliado por   '}
                        </Typography>
                        <Typography variant="" className={Classes.captiion}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="" className={Classes.captiion}>
                            {post.date}
                        </Typography>
                    </div>
                }
                >
            </CardHeader>
                
            <CardContent className={Classes.content}>
                <Typography
                    classname={Classes.messege}
                    variant="body1"
                >
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                        <img src={post.image} className={Classes.image} alt="meupost" />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                        <Typography
                            style={{ cursor: 'pointer' }}
                            color="textSecondary"
                            variant="body2"
                        >
                            {'10'}
                        </Typography>
                <IconButton aria-label="comment">
                    <MessageIcon />
                        <Typography
                            style={{ cursor: 'pointer' }}
                            color="textSecondary"
                            variant="body2"
                        >
                            {'30'}
                        </Typography>
                </IconButton>
                <IconButton aria-label="favorite">
                    <BookmarkIcon className={Classes.favorite} />
                </IconButton>
                </IconButton>
            </CardActions>
            </Card>
        </>
    );
}

export default PostCard;