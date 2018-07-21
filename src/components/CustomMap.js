//flow
import React, { Component } from "react";
import _ from "lodash";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  TrafficLayer
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCt0DvWyNK8EHsD1WAJabgr3uyvzxT7Ihg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: -34.397,
          lng: 150.644
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          console.log(".............place.......", places);

          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location
          }));
          const nextCenter = _.get(
            nextMarkers,
            "0.position",
            this.state.center
          );
          console.log("...nextCenter...", nextCenter);

          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
          // refs.map.fitBounds(bounds);
        },
        getLocation: ref => {
          let showPosition = position => {
            let p = {
              Lat: position.coords.latitude,
              Lng: position.coords.longitude
            };
            console.log(p);
            console.log("....", this.state);
            this.setState({
              center: p
            });
          };
          if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
          console.log("..........");
        }
      });
    }
  })
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={8}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <div>
        <input
          type="text"
          placeholder="Customized your placeholder"
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
    <button onClick={props.getLocation}>your place</button>

    {props.markers.map((marker, index) => (
      <Marker key={index} position={marker.position} />
    ))}
    <TrafficLayer autoUpdate />
  </GoogleMap>
));

class CustomMap extends Component {
  render() {
    return (
      <div>
        <MyMapComponent />
      </div>
    );
  }
}

export default CustomMap;
