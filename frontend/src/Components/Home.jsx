import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Home.css"


const data=[
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-creams.jpg",
        link:""
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991839_lipsticks.jpg",
        link:""
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991840_foundations.jpg",
        link:""
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991842_eyeshadows.jpg",
        link:""
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-serums.jpg",
        link:""
    },
    {
        img:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1669991841_face-serums.jpg",
        link:""
    },
]
const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Home=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(<div>
        <div>
        <Carousel responsive={responsive} showDots={true}>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1669887376_final-2.5-lacs-women-wishlisted-web.gif" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673938537_hair-serums-web.gif" /></div>
        </Carousel>
        </div>
        <div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674476143_1280x272-web.jpg" /></div>
        </div>
        <div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,ar-80-17,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674818261_thickstrip_web.jpg" /></div>
        </div>
        <div style={{width:"80%",margin:"auto"}}>
            <Carousel responsive={responsive2}>
                {data.map((item)=>(<div style={{width:"80%",margin:"auto"}}><img width={"80%"} src={item.img} /></div>))}
            </Carousel>
        </div>




        <div>
        <Carousel responsive={responsive} showDots={true}>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674661780_freegift_thickstrip_mov549_web-1.jpg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674661784_799-web.gif" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674661778_ft-new-strip-web-1280-x-272-1.gif" /></div>
        </Carousel>
        </div>

        <div style={{width:"80%",margin:"auto"}}>
            <div><img width={"100%"} src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1669989418_what-is-everybody-looking-for_-web.jpg" /></div>
        </div>

        <div style={{width:"80%",margin:"auto"}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
                <div><img width={"100%"} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673529559_mini-lipstick.jpg" /></div>
                <div><img  width={"100%"} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673529554_nude-lipstick.jpg" /></div>
                <div><img   width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529545_white-kajal.jpg" /></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
                <div><img width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529550_sanitary-care.jpg" /></div>
                <div><img  width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529557_moisturizer-for-face.jpg" /></div>
                <div><img   width={"100%"} src="https://media6.ppl-media.com/tr:w-427,ar-40-43,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1673529565_kajal.jpg" /></div>
            </div>
        </div>

        <div>
        <Carousel responsive={responsive} showDots={true}>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674829039_swiss-beauty_-spectacular-2596x836.jpeg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1674829518_maybelline_web_hp-1.jpg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674650266_exclusivestamp01_hpweb-2.jpg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674630796_hp-web.gif" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674632117_faces_yami-kajal-copy-1-2596x836.jpg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674106511_pu_webhp-1.jpg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674829415_plum-rashmika-ihb-2596x836.jpeg" /></div>
            <div style={{width:"80%",margin:"auto"}}><img width={"100%"} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674829725_ezgif-2-c62c865092.gif" /></div>
        </Carousel>
        </div>

    </div>)
}


export default Home