import { Box, Container, Skeleton, Stack, Toolbar } from "@mui/material";
import React, { useContext, useEffect, useMemo } from "react";
import Cards from "../../Shared/Card/Cards";
import { Context } from "../../../Context/Context";
import scrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(scrollTrigger)

const Home = () => {
  const { profile, loading, avatars, posts, setPosts } = useContext(Context);

  const post = useMemo(async () => {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await promise.json();
    setPosts(response)
  }, [])

  return (
    <Container maxWidth="lg" sx={{ height: "90.5vh", padding: "20px 0" }} className="Home">
      {loading ?
        <Stack direction='column' width='100%' spacing={1.5} padding={2}>
          <Stack width='100%' direction='row' spacing={2}>
            <Skeleton sx={{ bgColor: "grey.light" }} variant='circular' animation='wave' width={45} height={45} />
            <Stack direction='column' width='60%'>
              <Skeleton sx={{ bgColor: "grey.light" }} variant='text' width={190} animation="wave" />
              <Skeleton sx={{ bgColor: "grey.light" }} variant='text' width={100} animation="wave" />
            </Stack>
          </Stack>
          <Stack />
          <Stack>
            <Skeleton sx={{ bgColor: "grey.light" }} variant='rectangular' width="100%" height="60vh" animation="wave" />
          </Stack>
          <Stack>
            <Skeleton sx={{ bgColor: "grey.light" }} variant='text' width='100%' />
            <Skeleton sx={{ bgColor: "grey.light" }} variant='text' width='40%' />
          </Stack>
          <Stack direction='row' spacing={1}>
            <Skeleton sx={{ bgColor: "grey.light" }} animation="wave" variant='circular' width={30} height={30} />
            <Skeleton sx={{ bgColor: "grey.light" }} animation="wave" variant='circular' width={30} height={30} />
            <Skeleton sx={{ bgColor: "grey.light" }} animation="wave" variant='circular' width={30} height={30} />
          </Stack>
        </Stack>
        :
        <Stack spacing={5}>
          {avatars.map((ele) => {
            return (
              <Cards
                avatar={ele.download_url}
                img={ele.download_url}
                title="Gourav paliwal"
                subheader="GouravPaliwal"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad similique dolores"
              />
            )
          })}
        </Stack>
      }
    </Container>
  );
};

export default Home;
