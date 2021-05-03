const mapInit = () => {
  const mapWrapper = document.querySelector('#map')

  const officeGeoLocation = [59.93195126447944, 30.36402767723373]
  const mapIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iMTE0IiB2aWV3Qm94PSIwIDAgODggMTE0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNDQgMEM2Ny45NCAwIDg3LjQxOCAxOS40NzggODcuNDE4IDQzLjQxOEM4Ny40MTggNTIuODkyIDg0LjQyNTUgNjEuODk0IDc4Ljc1NjYgNjkuNDQ2NUw0Ni42NzYzIDExMi42NTNDNDYuNTk2MiAxMTIuNzU4IDQ2LjQ3MzcgMTEyLjc5OCA0Ni4zODQ3IDExMi44OTFDNDQuNzgxNSAxMTQuNjA4IDQyLjQ2ODEgMTE0LjE3NiA0MS4zMjU5IDExMi42NTNDMzIuMDg3OSAxMDAuMzI3IDE1LjE1NDkgNzcuMzA2MiA4LjY0NDQxIDY4LjYyMjdDOC42NDQ0MSA2OC42MjI3IDguNjQyMTkgNjguNjE2IDguNjM5OTYgNjguNjExNUw4LjU5OTg4IDY4LjU1ODFDMy4zNTQxIDYxLjE4ODIgMC41ODIwMzEgNTIuNDk1NyAwLjU4MjAzMSA0My40MThDMC41ODIwMzEgMTkuNDc4IDIwLjA2IDAgNDQgMFoiIGZpbGw9IiMxMjFGMzUiLz4KPHBhdGggZD0iTTQzLjk5OTkgNzEuNjE1NkMzNi45NzE0IDcxLjYxNTYgMzAuMzY0MSA2OC43MjUyIDI1LjM5NzYgNjMuNDgzMkMyMC40MzA5IDU4LjIzNDYgMTcuNjkyMyA1MS4yNjEyIDE3LjY5MjMgNDMuODQzQzE3LjY5MjMgMzYuNDI0OSAyMC40MzA5IDI5LjQ1MTQgMjUuMzk3NiAyNC4yMDk1QzMwLjM3MDUgMTguOTY3NiAzNi45NzE0IDE2LjA3NzEgNDMuOTk5OSAxNi4wNzcxQzUxLjAyODUgMTYuMDc3MSA1Ny42MzU4IDE4Ljk2NzYgNjIuNjAyNCAyNC4yMDk1QzY3LjU2OSAyOS40NTE0IDcwLjMwNzcgMzYuNDI0OSA3MC4zMDc3IDQzLjg0M0M3MC4zMDc3IDUxLjI2MTIgNjcuNTY5IDU4LjIzNDYgNjIuNjAyNCA2My40NzY1QzU3LjYzNTggNjguNzI1MiA1MS4wMjg1IDcxLjYxNTYgNDMuOTk5OSA3MS42MTU2Wk00My45OTk5IDE3Ljc3NUMzNy42NzM2IDE3Ljc3NSAzMS4zNDA4IDIwLjMxNTEgMjYuNTI3NSAyNS40MDJDMTYuODk0MyAzNS41NjkyIDE2Ljg5NDMgNTIuMTE2OCAyNi41Mjc1IDYyLjI5MDZDMzYuMTYwNiA3Mi40NTc4IDUxLjgzOTMgNzIuNDU3OCA2MS40Nzg4IDYyLjI5MDZDNzEuMTEyIDUyLjEyMzYgNzEuMTEyIDM1LjU3NTkgNjEuNDc4OCAyNS40MDJDNTYuNjU5MSAyMC4zMTUxIDUwLjMzMjcgMTcuNzc1IDQzLjk5OTkgMTcuNzc1WiIgZmlsbD0iI0VBQzU3RSIvPgo8cGF0aCBkPSJNNDkuODExOSA3MC45MTMzQzQ1LjAxMzYgNzIuMjQ2NyAzOS45OTEgNzEuNjcyIDM1LjU2OTUgNjkuMjY2MUMzMC45MDY3IDY2LjczMjIgMjcuNDcyNiA2Mi40NTczIDI1LjkwNDcgNTcuMjQ2MUMyNC4zMzUxIDUyLjAyODMgMjQuODE5NiA0Ni40OTc0IDI3LjI2NzMgNDEuNjUzM0MyNy40MDQ0IDQxLjM3ODUgMjcuNTQ5NSA0MS4xMDg0IDI3LjcwMjQgNDAuODQzMUMyNy45MjcxIDQwLjQzOTQgMjguNDIzNyA0MC4zMDg0IDI4LjgxMjkgNDAuNTQxNEMyOS4yMDIxIDQwLjc3NDUgMjkuMzI4NCA0MS4yODk0IDI5LjEwMzcgNDEuNjkzMUMyOC45NjYxIDQxLjk0MDIgMjguODM0OCA0Mi4xODU1IDI4LjcwNTIgNDIuNDM3NEMyNi40NjE3IDQ2Ljg3NjYgMjYuMDE1NSA1MS45NTgyIDI3LjQ1MzkgNTYuNzQ1OUMyOC44OTIyIDYxLjUzMzYgMzIuMDQ1MiA2NS40NDc5IDM2LjMyNzIgNjcuNzgxM0M0MC42MDc0IDcwLjEwODEgNDUuNTEzNCA3MC41NjkgNTAuMTIzNSA2OS4wNzlDNTQuNzM5OCA2Ny41ODczIDU4LjUxNCA2NC4zMTcyIDYwLjc2MzggNTkuODc2M0M2My4wMDczIDU1LjQzNzIgNjMuNDUzNSA1MC4zNTU1IDYyLjAxNTEgNDUuNTY3OEM2MC41NzY4IDQwLjc4MDIgNTcuNDIzOCAzNi44NjU4IDUzLjE0MTggMzQuNTMyNUM0OS41NTY3IDMyLjU4MzUgNDUuNTYzMiAzMS45Mzg2IDQxLjU4ODkgMzIuNjY3QzQxLjE0NjcgMzIuNzQ4MSA0MC43MjQ4IDMyLjQ0MDYgNDAuNjQ4MyAzMS45ODg0QzQwLjU3IDMxLjUyOTcgNDAuODY2NSAzMS4wOTIyIDQxLjMwMjUgMzEuMDEyOEM0NS42MzQzIDMwLjIxMjggNDkuOTg1OSAzMC45MTg0IDUzLjg5MTYgMzMuMDQzQzU4LjU1NjEgMzUuNTgzMyA2MS45ODg1IDM5Ljg1MTcgNjMuNTU2NCA0NS4wNjI5QzY1LjEyNiA1MC4yODA3IDY0LjY0MzIgNTUuODE4MSA2Mi4xOTM3IDYwLjY1NTdDNTkuNzQ0MyA2NS40OTMzIDU1LjYyODggNjkuMDUzMSA1MC42MDQxIDcwLjY3OTJDNTAuMzM2NCA3MC43NjA2IDUwLjA3NDkgNzAuODQwMiA0OS44MTE5IDcwLjkxMzNaIiBmaWxsPSIjRUFDNTdFIi8+Cjwvc3ZnPgo='
  const colorScheme = [
    '#1b2330',
    '#1d2a42',
    '#223a53',
    '#304468',
    '#3d5176',
  ]

  let map = new google.maps.Map(mapWrapper, {
    center: new google.maps.LatLng(...officeGeoLocation),
    zoom: 13,
    streetViewControl: false,
    mapTypeControl: false,
    gestureHandling: 'greedy',
    scrollwheel: false,
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": '#FFFFFF'
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [
          {
            "saturation": -5
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": colorScheme[3]
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6f9ba5"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#3C7680"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": colorScheme[2]
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": colorScheme[2]
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": colorScheme[2]
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": colorScheme[1]
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#FFFFFF"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": colorScheme[1]
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": colorScheme[0]
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }

    ]
  })

  let marker = new google.maps.Marker({
    position: {
      lat: officeGeoLocation[0],
      lng: officeGeoLocation[1],
    },
    icon: mapIcon,
    map: map,
  })
}

export default mapInit