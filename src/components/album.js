import React from "react"
import axios from "axios"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"


class album extends React.Component {
  state = {
    images: null,
  }
  async componentDidMount() {
    const response = await axios.get(
      `https://google-photos-album-demo.glitch.me/${this.props.id}`
    )
    if (response && response.data && response.data.length > 0) {
      this.setState({
        images: response.data.map(url => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`,
        })),
      })
    }
  }


  render() {
    const { images } = this.state
    return <ImageGallery items={images} autoPlay={true} showPlayButton={false} slideDuration={50} lazyLoad={false} /> 
  }
}
export default album
