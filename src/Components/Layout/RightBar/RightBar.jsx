import { Avatar, AvatarGroup, Grow, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Context } from '../../../Context/Context';

const RightBar = () => {
  const { profile, setProfile, loading, setLoading, avatars, setAvatars } = useContext(Context);



  const data = useMemo(async () => {
    setLoading(true)
    const promise = await fetch("https://picsum.photos/v2/list");
    const response = await promise.json();
    setProfile(response.slice(27, 30));
    setAvatars(response.slice(10, 20))
    setLoading(false)
  }, [])

  return (
    <section>
      <Toolbar sx={{ justifyContent: "space-between", height: "90.5vh", flexDirection: "column", alignItems: "start", padding: "15px 0" }}>
        <Stack direction='column'>
          <Typography sx={{ color: "text.light", textWrap: "nowrap" }} fontSize={22}>
            Online Friends
          </Typography>
          <AvatarGroup max={7} sx={{ width: "100%", justifyContent: "end" }}>
            {avatars.map((ele) => {
              return (
                <Avatar src={ele.download_url} component='image' />
              )
            })}
          </AvatarGroup>
        </Stack>
        <Stack direction='column'>
          <Typography sx={{ color: "text.light", textWrap: "nowrap" }} fontSize={22}>
            Latest Photos
          </Typography>
          <ImageList cols={3} sx={{ width: 300 }}>
            {profile.map((ele) => {
              return (
                <ImageListItem><img loading='lazy' src={ele.download_url} alt="" /></ImageListItem>
              )
            })}
          </ImageList>
        </Stack>
        <Stack direction='column'>
          <Typography sx={{ color: "text.light", textWrap: "nowrap" }} fontSize={22}>
            Latest Conversations
          </Typography>
          <List sx={{ width: "100%" }}>
            {loading ?
              <Stack spacing={2.5} paddingLeft={2} paddingBottom={1} paddingTop={1.5}>
                {profile.map((ele) => {
                  return (
                    <Stack direction='row' width="100%" spacing={1.5}>
                      <Stack width="fit-content">
                        <Skeleton variant='circular' animation="wave" sx={{ bgcolor: "grey.light" }} width={40} height={40} />
                      </Stack>
                      <Stack direction='column' width="100%">
                        <Skeleton variant='text' animation="wave" sx={{ bgcolor: "grey.light" }} width={200} />

                        <Skeleton variant='text' animation="wave" sx={{ bgcolor: "grey.light" }} />

                        <Skeleton variant='text' animation="wave" sx={{ bgcolor: "grey.light" }} />

                      </Stack>
                    </Stack>
                  )
                })}
              </Stack>
              :
              <>
                {profile.map((item) => {
                  return (
                    <ListItem alignItems='flex-start' >
                      <ListItemAvatar>
                        <Avatar src={item.download_url} />
                      </ListItemAvatar>
                      <ListItemText primary="Brunch this weekend?" secondary={
                        <React.Fragment>
                          <Typography component='span' sx={{ color: "text.dark" }} variant='body2' fontWeight={600}>
                            Gourav
                          </Typography>
                          - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </React.Fragment>
                      }
                      />
                    </ListItem>
                  )
                })
                }
              </>
            }
          </List>
        </Stack>
      </Toolbar>
    </section>
  )
}

export default RightBar
