//flow
import React from "react";
import _ from "lodash";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

class MySerarch extends React.Component {
  render() {
    // let { onSearchBoxMounted, bounds, onPlacesChanged } = this.state;
    return (
      <SearchBox>
        <div>
          <input
            type="text"
            placeholder="Customized placeholder"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `140px`,
              height: `32px`,
              marginTop: `10px`,
              padding: `0 10px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `12px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </div>
      </SearchBox>
    );
  }
}

export default MySerarch;

// state = {
//     onSearchBoxMounted: "",
//     bounds: "",
//     onPlacesChanged: ""
//   };
//   componentWillMount = () => {
//     const refs = {};
//     this.setState({
//       bounds: null,
//       center: {
//         lat: -34.397,
//         lng: 150.644
//       },
//       markers: [],
//       onMapMounted: ref => {
//         refs.map = ref;
//       },
//       onBoundsChanged: () => {
//         this.setState({
//           bounds: refs.map.getBounds(),
//           center: refs.map.getCenter()
//         });
//       },
//       onSearchBoxMounted: ref => {
//         refs.searchBox = ref;
//       },
//       onPlacesChanged: () => {
//         const places = refs.searchBox.getPlaces();
//         // console.log(".............place.......", places);

//         const bounds = new window.google.maps.LatLngBounds();

//         places.forEach(place => {
//           if (place.geometry.viewport) {
//             bounds.union(place.geometry.viewport);
//           } else {
//             bounds.extend(place.geometry.location);
//           }
//         });
//         const nextMarkers = places.map(place => ({
//           position: place.geometry.location
//         }));
//         const nextCenter = _.get(nextMarkers, "0.position", this.state.center);
//         // console.log("...nextCenter...", nextCenter);

//         this.setState({
//           center: nextCenter,
//           markers: nextMarkers
//         });
//         // refs.map.fitBounds(bounds);
//       }
//     });
//   };
