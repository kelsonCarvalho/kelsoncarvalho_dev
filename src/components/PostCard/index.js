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
import FavoriteIcon from '@mui/material/FavoriteIcon';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessegeIcon from '@mui/material/MessegeIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 16,
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: 16,
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
                        <Typography variant="caption" classname={Classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant="sutitle2" classname={Classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant="sutitle2" classname={Classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
                >
            </CardHeader>
                
            <CardContent>
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
                    <MessegeIcon />
                        <Typography
                            style={{ cursor: 'pointer' }}
                            color="textSecondary"
                            variant="body2"
                        >
                            {'30'}
                        </Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={Classes.favorite}>
                    <BookmarkIcon />
                </IconButton>
                </IconButton>
            </CardActions>
            </Card>
        </>
    );
}

export default PostCard;