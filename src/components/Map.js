import React, { useState } from "react"

import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet"

import "leaflet/dist/leaflet.css"

const MapComponent = (props) => {
  let tileLayers = []

  tileLayers[1] = {
    tiles:
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
  }
  tileLayers[2] = {
    tiles: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
  tileLayers[3] = {
    tiles: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
  tileLayers[4] = {
    tiles: "https://mapserver.mapy.cz/base-m/{z}-{x}-{y}",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://seznam.cz">Seznam.cz, a.s.</a>',
  }
  tileLayers[5] = {
    tiles: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
  }
  tileLayers[6] = {
    tiles: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a>',
  }
  tileLayers[7] = {
    tiles:
      "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }

  const MarkerIcon = "/svg/marker.svg",
    MarkerIconHighlight = "/svg/marker-hover.svg"

  const [hover, setHover] = useState(false)

  const icon = L.icon({
    iconUrl: MarkerIcon,
    shadowUrl: "",
    iconRetinaUrl: MarkerIcon,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19],
  })

  const highlightIcon = L.icon({
    iconUrl: MarkerIconHighlight,
    shadowUrl: "",
    iconRetinaUrl: MarkerIconHighlight,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19],
  })
  function Focus() {
    const map = useMapEvent({
      focus: () => {
        map.scrollWheelZoom.enable()
      },
      blur: () => {
        map.scrollWheelZoom.disable()
      },
    })
    return null
  }
  return (
    <MapContainer
      center={props.center && props.center}
      zoom={props.zoom}
      scrollWheelZoom={false}
      className={props.className}
      dragging={props.dragging}
      tap={props.tap}
      bounds={props.geoJSON ? markers : null}
    >
      <Focus />
      {/* You can change a map look by changing to another tileLayer, e.g. tileLayers[1].tiles */}

      <TileLayer
        url={tileLayers[7].tiles}
        attribution={tileLayers[7].attribution}
      />
      {props.markerPosition && (
        <Marker position={props.markerPosition} icon={icon} />
      )}
    </MapContainer>
  )
}

export default MapComponent
