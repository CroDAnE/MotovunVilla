var APP_DATA = {
  "scenes": [
    {
      "id": "0-bazen",
      "name": "Bazen",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.137588150449215,
          "pitch": -0.049866525681897755,
          "rotation": 12.566370614359176,
          "target": "1-terasa"
        },
        {
          "yaw": 0.40228691705137365,
          "pitch": -0.12170325231046597,
          "rotation": 0,
          "target": "2-dnevni"
        },
        {
          "yaw": -2.581050593953883,
          "pitch": 0.4475553978201958,
          "rotation": 0,
          "target": "8-saht"
        },
        {
          "yaw": 2.028375282937187,
          "pitch": 0.26254740064443993,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        },
        {
          "yaw": -0.5671722260154386,
          "pitch": -0.002495004785762589,
          "rotation": 0,
          "target": "9-prilaz-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terasa",
      "name": "Terasa",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5271108796034305,
          "pitch": 0.2753148897099713,
          "rotation": 0,
          "target": "0-bazen"
        },
        {
          "yaw": -2.1131928538309754,
          "pitch": 0.1553670807687162,
          "rotation": 0,
          "target": "2-dnevni"
        },
        {
          "yaw": 2.315917345221531,
          "pitch": 0.274668869486689,
          "rotation": 0,
          "target": "8-saht"
        },
        {
          "yaw": 1.422080817459019,
          "pitch": 0.4251242842952294,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dnevni",
      "name": "Dnevni",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.535492219593774,
          "pitch": 0.24352132984282804,
          "rotation": 0,
          "target": "0-bazen"
        },
        {
          "yaw": 2.101737847692661,
          "pitch": 0.10394701440538334,
          "rotation": 0,
          "target": "1-terasa"
        },
        {
          "yaw": -0.9646834773282897,
          "pitch": -0.01054791373183761,
          "rotation": 0,
          "target": "9-prilaz-"
        },
        {
          "yaw": 1.6667402524483874,
          "pitch": 0.09529645229662265,
          "rotation": 0,
          "target": "3-ulaz-unutra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ulaz-unutra",
      "name": "Ulaz Unutra",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4246576188098352,
          "pitch": 0.18473519887887413,
          "rotation": 0,
          "target": "2-dnevni"
        },
        {
          "yaw": 3.1375329140368002,
          "pitch": 0.22054446051965826,
          "rotation": 0,
          "target": "4-glavna-soba"
        },
        {
          "yaw": 2.7688167012348988,
          "pitch": 0.24904634656089542,
          "rotation": 4.71238898038469,
          "target": "5-kupatilo-glavna-soba"
        },
        {
          "yaw": 0.3615700390323102,
          "pitch": 0.34084832458498227,
          "rotation": 1.5707963267948966,
          "target": "10-stari-put"
        },
        {
          "yaw": -0.5021878569192566,
          "pitch": 0.7507606680645402,
          "rotation": 10.210176124166829,
          "target": "7-predsoblje"
        },
        {
          "yaw": -1.9901915655660574,
          "pitch": 0.5172335744716214,
          "rotation": 10.995574287564278,
          "target": "1-terasa"
        },
        {
          "yaw": -0.2576425566502927,
          "pitch": 0.8860740052707072,
          "rotation": 0.7853981633974483,
          "target": "6-stepenice"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2590571826083323,
          "pitch": 0.19663645111546657,
          "title": "WC za goste",
          "text": "Soba je premala za 360 sliku"
        }
      ]
    },
    {
      "id": "4-glavna-soba",
      "name": "Glavna Soba",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9379586089130045,
          "pitch": 0.2910275713065342,
          "rotation": 1.5707963267948966,
          "target": "3-ulaz-unutra"
        },
        {
          "yaw": 1.715311378418801,
          "pitch": 0.2892059098716526,
          "rotation": 4.71238898038469,
          "target": "1-terasa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kupatilo-glavna-soba",
      "name": "Kupatilo glavna soba",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6709314904874724,
          "pitch": 0.7589844280424032,
          "rotation": 1.5707963267948966,
          "target": "3-ulaz-unutra"
        },
        {
          "yaw": -3.0334275839555644,
          "pitch": 0.7895840611676839,
          "rotation": 4.71238898038469,
          "target": "4-glavna-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stepenice",
      "name": "Stepenice",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25770642620588724,
          "pitch": 0.027994512662743887,
          "rotation": 0,
          "target": "3-ulaz-unutra"
        },
        {
          "yaw": 0.4166350212766101,
          "pitch": 0.712086656983189,
          "rotation": 12.566370614359176,
          "target": "7-predsoblje"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-predsoblje",
      "name": "Predsoblje",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09519648379786716,
          "pitch": -0.3221605617112697,
          "rotation": 0.7853981633974483,
          "target": "3-ulaz-unutra"
        },
        {
          "yaw": 0.6267985148364694,
          "pitch": 0.3165072273257863,
          "rotation": 1.5707963267948966,
          "target": "17-soba-za-druzenje"
        },
        {
          "yaw": 1.5651257106191725,
          "pitch": 0.31060120218792164,
          "rotation": 0,
          "target": "18-kupatilo-1"
        },
        {
          "yaw": 1.7712669804907737,
          "pitch": 0.542319124659862,
          "rotation": 1.5707963267948966,
          "target": "19-soba-1"
        },
        {
          "yaw": 0.015542705539960622,
          "pitch": 0.09298411995940192,
          "rotation": 6.283185307179586,
          "target": "6-stepenice"
        },
        {
          "yaw": 2.9268779765409345,
          "pitch": 0.6413173405092287,
          "rotation": 0,
          "target": "16-kupatilo-2"
        },
        {
          "yaw": -3.0060060995958366,
          "pitch": 0.7207184343510988,
          "rotation": 1.5707963267948966,
          "target": "15-soba-2"
        },
        {
          "yaw": -1.5727178107953232,
          "pitch": 0.12880502506205715,
          "rotation": 0,
          "target": "14-kupatilo-3"
        },
        {
          "yaw": -1.6784738666798091,
          "pitch": 0.2008111173501188,
          "rotation": 4.71238898038469,
          "target": "13-soba-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-saht",
      "name": "Saht",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7263301307211982,
          "pitch": -0.152888658042432,
          "rotation": 0,
          "target": "0-bazen"
        },
        {
          "yaw": 1.62115312965566,
          "pitch": 0.01653273157970503,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        },
        {
          "yaw": -0.0681206909975085,
          "pitch": -0.12812660633508877,
          "rotation": 0,
          "target": "9-prilaz-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-prilaz-",
      "name": "Prilaz ",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20767989922523888,
          "pitch": 0.07051089517142017,
          "rotation": 0,
          "target": "8-saht"
        },
        {
          "yaw": -1.159450120402104,
          "pitch": -0.06875523713148368,
          "rotation": 0,
          "target": "10-stari-put"
        },
        {
          "yaw": -0.8413286511741589,
          "pitch": -0.01111142677402377,
          "rotation": 0,
          "target": "2-dnevni"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-stari-put",
      "name": "Stari put",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17010564845584142,
          "pitch": 0.009306754035097953,
          "rotation": 0,
          "target": "9-prilaz-"
        },
        {
          "yaw": -1.3070571596346205,
          "pitch": 0.2889223972279602,
          "rotation": 0,
          "target": "11-stari-put-nize"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-stari-put-nize",
      "name": "Stari put nize",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1302722173928963,
          "pitch": -0.1313452167900735,
          "rotation": 0,
          "target": "10-stari-put"
        },
        {
          "yaw": -2.34022746056921,
          "pitch": 0.04970918479486386,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-djecije-igraliste",
      "name": "Djecije igraliste",
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
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.1181453647503865,
        "pitch": -0.10905341989439421,
        "fov": 1.4999314637932997
      },
      "linkHotspots": [
        {
          "yaw": -0.967873244148878,
          "pitch": -0.09998844251947503,
          "rotation": 0,
          "target": "0-bazen"
        },
        {
          "yaw": -1.4259555452706323,
          "pitch": 0.03046607910062349,
          "rotation": 0,
          "target": "8-saht"
        },
        {
          "yaw": 1.2198195625691284,
          "pitch": -0.03067240924512582,
          "rotation": 0,
          "target": "11-stari-put-nize"
        },
        {
          "yaw": 0.8175195843063605,
          "pitch": -0.4240576865647796,
          "rotation": 0,
          "target": "4-glavna-soba"
        },
        {
          "yaw": 0.26577331195372267,
          "pitch": -0.27518609841072106,
          "rotation": 0,
          "target": "1-terasa"
        },
        {
          "yaw": 0.7618963403662757,
          "pitch": -0.033178916812916626,
          "rotation": 0,
          "target": "19-soba-1"
        },
        {
          "yaw": 0.3181110344873197,
          "pitch": -0.02160974527712156,
          "rotation": 0,
          "target": "15-soba-2"
        },
        {
          "yaw": -0.16748890769829572,
          "pitch": -0.02304968083069525,
          "rotation": 0,
          "target": "13-soba-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-soba-3",
      "name": "Soba 3",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.118670907615841,
          "pitch": 0.38593837138827425,
          "rotation": 1.5707963267948966,
          "target": "7-predsoblje"
        },
        {
          "yaw": 1.9716466430744353,
          "pitch": 0.38632458408098813,
          "rotation": 4.71238898038469,
          "target": "14-kupatilo-3"
        },
        {
          "yaw": -1.6815268121637956,
          "pitch": 0.37184937915025884,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-kupatilo-3",
      "name": "Kupatilo 3",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05206585309939271,
          "pitch": 0.2215611951450871,
          "rotation": 0,
          "target": "7-predsoblje"
        },
        {
          "yaw": 0.14162339490492393,
          "pitch": 0.6433619871253775,
          "rotation": 1.5707963267948966,
          "target": "13-soba-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-soba-2",
      "name": "Soba 2",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7908479180305168,
          "pitch": 0.40802240484732444,
          "rotation": 5.497787143782138,
          "target": "7-predsoblje"
        },
        {
          "yaw": -1.6118208544743027,
          "pitch": 0.46767275399225916,
          "rotation": 1.5707963267948966,
          "target": "16-kupatilo-2"
        },
        {
          "yaw": 0.1645794591745524,
          "pitch": 0.47185800246531073,
          "rotation": 0,
          "target": "12-djecije-igraliste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-kupatilo-2",
      "name": "Kupatilo 2",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5293641891247614,
          "pitch": 0.5312342862813857,
          "rotation": 0,
          "target": "7-predsoblje"
        },
        {
          "yaw": 2.232512901663398,
          "pitch": 0.5105624037585734,
          "rotation": 4.71238898038469,
          "target": "15-soba-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-soba-za-druzenje",
      "name": "Soba za druzenje",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.496171591844167,
          "pitch": 0.19446438009773281,
          "rotation": 0,
          "target": "7-predsoblje"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-kupatilo-1",
      "name": "Kupatilo 1",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09260848029378366,
          "pitch": 0.4539122875891799,
          "rotation": 0,
          "target": "7-predsoblje"
        },
        {
          "yaw": -0.2278605166731804,
          "pitch": 0.45967060639380897,
          "rotation": 10.995574287564278,
          "target": "19-soba-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-soba-1",
      "name": "Soba 1",
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
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5774309566911917,
          "pitch": 0.46877176933780973,
          "rotation": 0.7853981633974483,
          "target": "7-predsoblje"
        },
        {
          "yaw": 2.761255060107189,
          "pitch": 0.41852269868266134,
          "rotation": 0.7853981633974483,
          "target": "12-djecije-igraliste"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Motovun",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
