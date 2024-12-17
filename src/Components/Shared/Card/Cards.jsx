import { useGSAP } from '@gsap/react'
import { Favorite, Message, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Link, SwipeableDrawer, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

const Cards = (props) => {
  const [liked, setLiked] = useState(false);
  const [likedPost, setLikedPost] = useState([])

  useGSAP(() => {
    gsap.fromTo(".like", {
      scale: 1.25,
    },
      {
        duration: .5,
        scale: 1
      })
  }, [liked])

  return (
    <Card sx={{ width: "92%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[600] }} src={props.avatar} />
        }
        title={props.title}
        subheader={props.subheader}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      />
      <CardMedia
        component='img'
        image={props.img}
        alt='Image'
        sx={{ width: "100%", height: "29vw", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant='body2' sx={{ color: "text" }}>
          {(props.description).split("").splice(0, 70)}... <Link color='text.light'>see more</Link>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color={liked ? "warning" : "text"} onClick={(e) => {
          setLiked(!liked);
          props.onLiked()
        }}>
          <Favorite className='like' />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <Message />
        </IconButton>
        <Typography fontSize={15}>
          <Link>5 comments</Link>
        </Typography>
        {/* <SwipeableDrawer open={true}
        // container={container}
        anchor="bottom"
        // onClose={toggleDrawer(false)}
        // onOpen={toggleDrawer(true)}
        swipeAreaWidth={56}
        disableSwipeToOpen={false}
        // ModalProps={{
        //   keepMounted: true,
        // }}
        >
          Heyyyylooo
        </SwipeableDrawer> */}
      </CardActions>
    </Card>
  )
}

export default Cards
