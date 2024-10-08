import { Image } from "antd";
import React from "react";
import './GalleryPage.css'
import BottomBar from "../../Component/BottomBar";
import weeding from '../../Component/Images/desti-wedding1.jpeg'
import sangeet from '../../Component/Images/sangeet1.jpeg'
import catering1 from '../../Component/Images/catering1.jpg'
import celebrity from '../../Component/Images/celebrity1.jpg'
import corporate from '../../Component/Images/coporate_meeting.jpg'
import decoration from '../../Component/Images/decoration3.jpg'
import theme from '../../Component/Images/theme2.jpeg'
import makeup from '../../Component/Images/makeup2.jpg'
import mehndi from '../../Component/Images//mehndi2.jpeg'
import photo from '../../Component/Images/photo2.jpg'
import family from '../../Component/Images/family_events2.jpg'
import corp from '../../Component/Images/corp2.jpeg'

export default function GalleryPage() {
  return (
    <>
      <section className="section1_service_banner">
        <div className="serve_sec_bar_cont">
          <div className="service_sec_1_bar" />
          <h1>Our Gallery</h1>
        </div>
      </section>
      <section>
        <section className="gallery-card">
          <div className="gallery-card-body text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam erat volutpat. Donec gravida, eros eu pretium tincidunt, purus justo vestibulum libero, non porta sem eros a est. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.
            </p>
          </div>
        </section>
        <section className="container">
          <div className="row gallerypage-custom-row">
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  src={weeding}
                  width={'100%'}
                  height={'100%'}
                  alt="Image 1"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={sangeet}
                  alt="Image 2"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  src={corporate}
                  width={'100%'}
                  height={'100%'}
                  alt="Image 3"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row gallerypage-custom-row">
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={catering1}
                  alt="Image 4"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={celebrity}
                  alt="Image 5"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={decoration}
                  alt="Image 6"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row gallerypage-custom-row">
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={theme}
                  alt="Image 4"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={makeup}
                  alt="Image 5"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={mehndi}
                  alt="Image 6"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row gallerypage-custom-row">
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  src={photo}
                  alt="Image 4"
                  width={'100%'}
                  height={'100%'}
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={family}
                  alt="Image 5"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="gallerypage-image-container">
                <Image
                  width={'100%'}
                  height={'100%'}
                  src={corp}
                  alt="Image 6"
                  className="gallerypage-img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <BottomBar />
    </>
  );
}
