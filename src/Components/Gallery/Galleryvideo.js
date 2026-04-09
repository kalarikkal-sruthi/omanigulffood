import React from 'react'
import { Player, ControlBar, PosterImage } from 'video-react';


function Galleryvideo({ props }) {
    return (
        <div>
            <Player controls={true}
                poster="/gallery/poster.png"
                src="/gallery/AD Low Res MP4.mp4">

                <ControlBar autoHide={false} className="my-class" />
            </Player>
            {/* <Player>
                <source controls={true}
                    width="640"
                    height="360" src="/gallery/AD Low Res MP4.mp4" type='video/mp4' />
            </Player> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="health-box d-flex" style={{ height: "100%" }}>
                        <Player controls={true}

                            src="/gallery/Nesto Salalah promo -  Sundrops Sunflower Oil.mp4">

                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="health-box d-flex" style={{ height: "100%" }}>
                        <Player controls={true}

                            src="/gallery/Nesto UAE promo -  Sunlife Cooking Oil.mp4" >

                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                    </div>
                </div>
            </div >




        </div >
    )
}

export default Galleryvideo