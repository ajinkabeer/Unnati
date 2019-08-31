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
      "https://google-photos-album-demo.glitch.me/pyebFG5jdXZHZwW28"
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
    return images ? <ImageGallery items={images} /> : null
  }
}
export default album
