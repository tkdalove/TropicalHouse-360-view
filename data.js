var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-house",
      "name": "Front house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016765820841454726,
          "pitch": 0.06183457554964278,
          "rotation": 0,
          "target": "1-living-room"
        },
        {
          "yaw": -0.568913031137841,
          "pitch": 0.07265252471415806,
          "rotation": 0,
          "target": "2-bed-room-1"
        },
        {
          "yaw": 0.5708242550122158,
          "pitch": 0.09996208868135525,
          "rotation": 0,
          "target": "4-bed-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25282630585045496,
          "pitch": 0.20768393108529715,
          "rotation": 5.497787143782138,
          "target": "2-bed-room-1"
        },
        {
          "yaw": -0.06245897129018019,
          "pitch": 0.20143944246304812,
          "rotation": 0.7853981633974483,
          "target": "3-bath-room-1"
        },
        {
          "yaw": -0.7400242755555677,
          "pitch": 0.2786527126472844,
          "rotation": 0,
          "target": "0-front-house"
        },
        {
          "yaw": -2.0087405847260005,
          "pitch": 0.20203355115674526,
          "rotation": 0,
          "target": "4-bed-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bed-room-1",
      "name": "Bed room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.653569962247417,
          "pitch": 0.355914862032467,
          "rotation": 0,
          "target": "0-front-house"
        },
        {
          "yaw": -1.236642333355194,
          "pitch": 0.25845908215116964,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bath-room-1",
      "name": "Bath room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4439524580276792,
          "pitch": 0.3646002470785259,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bed-room-2",
      "name": "Bed room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8215983782540057,
          "pitch": 0.35038360154760895,
          "rotation": 5.497787143782138,
          "target": "1-living-room"
        },
        {
          "yaw": 1.2989574635507832,
          "pitch": 0.3364679785838014,
          "rotation": 1.5707963267948966,
          "target": "5-bath-room-2"
        },
        {
          "yaw": -1.95481457933505,
          "pitch": 0.4004788365810157,
          "rotation": 0,
          "target": "0-front-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bath-room-2",
      "name": "Bath room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0991934855794856,
          "pitch": 0.4053698372083421,
          "rotation": 0,
          "target": "4-bed-room-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TropicalHouse",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
