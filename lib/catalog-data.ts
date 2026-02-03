import stdAndroid from '@/public/Catalog photos/Thors android 9in.png'
import dmAndroid from '@/public/Catalog photos/Thors diamond android 9in.png'
import cretaAndroid from '@/public/Catalog photos/Thors Creta android 9in.png'
import tharAndroid from '@/public/Catalog photos/Thar oem android.png'
import ScorpioNAndroid from '@/public/Catalog photos/Thors Scorpio android 9in.png'
import ThreeSixtyCamera from '@/public/Catalog photos/360 camera kit.webp'
import RearViewCamera from '@/public/Catalog photos/Camera C-24 copy.png'
import FisheyeCamera from '@/public/Catalog photos/camera c04.webp'
import MovingCamera from '@/public/Catalog photos/camera moving.png'
import dvr1 from '@/public/Catalog photos/dvr 01.png'
import dvr2 from '@/public/Catalog photos/dvr 02.png'
import dvr3 from '@/public/Catalog photos/dvr 03.png'
import dvr5 from '@/public/Catalog photos/dvr 05.png'
import gpsTracker from '@/public/Catalog photos/car gps tracker.png'
import ambientLights1 from '@/public/Catalog photos/car ambient light 1.jpg'
import ambientLights2 from '@/public/Catalog photos/car ambient light 2.jpg'
import ambientLights3 from '@/public/Catalog photos/car ambient light 3.avif'
import grillLight1 from '@/public/Catalog photos/grill light pro.png'
import grillLight2 from '@/public/Catalog photos/grill light.png'
import ledProjector3 from '@/public/Catalog photos/3 projector.png'
import ledProjector2 from '@/public/Catalog photos/2_ projector.webp'
import tireInflator1 from '@/public/Catalog photos/TI-02.jpg'
import tireInflator2 from '@/public/Catalog photos/tire inflator.png'
import hornCopper from '@/public/Catalog photos/hornCopper.png'
import horn from '@/public/Catalog photos/horn.png'

export interface CatalogProduct {
  id: string;
  name: string;
  image: string;
  description?: string;
  specs: string[];
}

export interface CatalogSection {
  id: string;
  title: string;
  description?: string;
  products: CatalogProduct[];
}

export const catalogSections: CatalogSection[] = [
  {
    id: 'android-infotainment',
    title: 'Android Infotainment Systems',
    description: 'Premium touchscreen systems with Android Auto, navigation, and connectivity.',
    products: [
      {
        id: 'A07-9',
        name: 'Thors A07 9"',
        image: stdAndroid.src,
        description: '',
        specs: [
          'Android Auto & Apple Carplay',
          'DUO Screen',
          'R.D.S.',
          '4X50W Hi-Fi Sound',
          'True Colour',
          'Ultra HD',
          'SW Control',
          'I.P.S. Display',
          '3V Pre Out',
          'Capacitive Touch',
          '2GB Ram & 32GB ROM',
          '4 Core Processing Unit',
        ],
      },
      {
        id: 'A22-9',
        name: 'Thors A22 9"',
        image: stdAndroid.src,
        description: '',
        specs: [
          '2GB Ram & 64GB Rom',
          'Apple Carplay & Android Auto',
          'DUO Screen',
          'R.D.S.',
          '4x50w Hi-Fi Sound',
          'True Colour',
          'Ultra HD',
          'SW Control',
          'I.P.S. Display',
          '3V Pre Out',
          'Capacitive Touch',
        ],
      },
      {
        id: 'A-12-9',
        name: 'Thors A-12 9"',
        image: stdAndroid.src,
        description: '',
        specs: [
          'Android Auto & Apple Carplay',
          'DUO Screen',
          'R.D.S.',
          '4X50W Hi-Fi Sound',
          'True Colour',
          'Ultra HD',
          'SW Control',
          'I.P.S. Display',
          '3V Pre Out',
          'Capacitive Touch',
          'SW Control',
          '2GB Ram & 32GB ROM',
          '4 Core Processing Unit',
          '360˚ Camera Input',
        ],
      },
      {
        id: 'dm05',
        name: 'Thors DM05 9"',
        image: dmAndroid.src,
        description: '',
        specs: [
          '2GB Ram & 32 Rom',
          'DSP and TDA Sound',
          '360˚ and 2 Way DVR Support',
          '8 Core Processing Unit',
          'Qled 2k Display',
          'Apple Carplay & Android Auto',
          'Ultra HD',
          'SW Control',
          'True Colour',
        ],
      },
      {
        id: 'oem-creta',
        name: 'Thors Creta OEM',
        image: cretaAndroid.src,
        description: '',
        specs: [
          '2GB Ram & 32GB Rom',
          '4GB Ram & 64GB Rom',
          'Apple Carplay & Android Auto',
          'Qled 2k Display',
          '1920X720p Full HD',
          'Glossy Frame',
          'OE Fit Android Sterio',
          'Backup Camera Ready',
          'Google Play Store',
          'Bluetooth',
          '360˚ Camera Input',
        ],
      },
      {
        id: 'oem-02',
        name: 'Thors Thar OEM',
        image: tharAndroid.src,
        description: '',
        specs: [
          '2GB Ram & 32GB Rom',
          '4GB Ram & 64GB Rom',
          'Apple Carplay & Android Auto',
          'Qled 2k Display',
          '1920X720p Full HD',
          'Glossy Frame',
          'OE Fit Android Sterio',
          'Backup Camera Ready',
          'Google Play Store',
          'Bluetooth',
          '360˚ Camera Input',
        ],
      },
      {
        id: 'oem-04',
        name: 'Thors Scorpio-N OEM',
        image: ScorpioNAndroid.src,
        description: '',
        specs: [
          '2GB Ram & 32GB Rom',
          '4GB Ram & 64GB Rom',
          'Apple Carplay & Android Auto',
          'Qled 2k Display',
          '1920X720p Full HD',
          'Glossy Frame',
          'OE Fit Android Sterio',
          'Backup Camera Ready',
          'Google Play Store',
          'Bluetooth',
          '360˚ Camera Input',
        ],
      },
    ],
  },
  {
    id: '360-cameras',
    title: 'Parking Cameras',
    description: '360 view and rear view camera systems for parking and safety.',
    products: [
      {
        id: 'C-360',
        name: 'Thors 360° Camera',
        image: ThreeSixtyCamera.src,
        description: 'High-resolution 360-degree surround view',
        specs: [
          'Anti Fogg Glass lens',
          'Super wide angle Sony Lens to eliminate the Blind Spots',
          'Metal body',
          'Switchable resolution between 1080p and 720p',
          'Ultra Clear Night Vision',
          'Water and dust protection certification',
          'Shock Proof and Anti Shake',
        ],
      },
      {
        id: 'C-24',
        name: 'Thors Rear View Camera',
        image: RearViewCamera.src,
        description: '',
        specs: [
          'Comes with Anti Fogg Glass lens Sterardy metal body',
          '720p High Resolution',
          'Ultra Clear Night Vision',
          'Water and dust protection certification',
          'Shock Proof and Anti Shake',  
        ],
      },
      {
        id: 'C-03',
        name: 'Thors Fisheye Camera',
        image: FisheyeCamera.src,
        description: '',
        specs: [
          'Comes with Anti Fogg Glass lens Sterardy metal body',    
          '720p High Resolution',
          'Comes with Fisheye Lens for Super Ultra Wide View',
          'Ultra Clear Night Vision',
          'Water and dust protection certification',
          'Shock Proof and Anti Shake',
        ],
      },
      {
        id: 'C-04',
        name: 'Thors Moving Camera',
        image: MovingCamera.src,
        description: '',
        specs: [
          'Comes with Anti Fogg Glass lens Sterardy metal body',
          '720p High Resolution',
          'Comes with Moving Guidelines',
          'Ultra Clear Night Vision',
          'Water and dust protection certification',
          'Shock Proof and Anti Shake',
        ],
      },
      {
        id: 'C-05',
        name: 'Thors Fisheye and Moving Camera',
        image: MovingCamera.src,
        description: '',
        specs: [
          'Comes with Anti Fogg Glass lens Sterardy metal body',
          '720p High Resolution',
          'Comes with Moving Guidelines',
          'Comes with Fisheye Lens for Super Ultra Wide View',
          'Ultra Clear Night Vision',
          'Water and dust protection certification',
          'Shock Proof and Anti Shake',
        ],
      },
    ],
  },
  {
    id: 'dashcams',
    title: 'Dashcams',
    description: 'Front and dual-channel dash cams with parking mode.',
    products: [
      {
        id: 'dvr-01',
        name: 'Thors Dashcam DVR-01',
        image: dvr1.src,
        description: '',
        specs: [
          "Voltage: 5V Current: 0.4A",
          "Video Frame Number:30-Frames",
          "Senson High Sensivity and Low Illumination",
          "MIC Support",
          "Connection Mode: USB Port and Android Navigation",
          "Video Ratio: 720p Optional",
          "Camera CMOS Image",
        ],
      },
      {
        id: 'dvr-02',
        name: 'Thors Dashcam DVR-02',
        image: dvr2.src,
        description: '',
        specs: [
          "Voltage: 5v Current: 0.4 A",
          "Video Ratio: 720P Optional",
          "Video Frame Number: 30 frame",
          "Camera CMOS Image",
          "Sensor High Sensivity and Low Illumination",
          "MIC Support",
          "Connection Mode USB Port, Android Navigation",
          "Support Wifi+ Mobile App",
        ],
      },
      {
        id: 'dvr-03',
        name: 'Thors Dashcam DVR-03',
        image: dvr3.src,
        description: '',
        specs: [
          "Recording Resolution 1920x1080p Full HD",
          "Automatic Cyclic Recording",
          "170 degree Wide Angle View",
          "Compatible with All Android Stereo",
          "Controllable from App In Stereo",
        ],
      },
      {
        id: 'dvr-05',
        name: 'Thors Dashcam DVR-05',
        image: dvr5.src,
        description: '',
        specs: [
          "Comes with 4 inch IPS Screen",
          "Super Clear Resolution",
          "1080 Loop Recording",
          "Support Upto 64GB Memory Card",
          "Night Vision",
          "Interior FOV: 120 degree",
          "Exterior FOV: 170 degree",
          "MIC Support",
          "Motion Detection",
        ],
      },
      {
        id: 'dvr-06',
        name: 'Thors Dashcam DVR-06',
        image: dvr3.src,
        description: '',
        specs: [
          "Recording Resolution 1920x1080p Full HD",
          "Automatic Cyclic Recording",
          "170 degree Wide Angle View",
          "Compatible with All Android Stereo",
          "Controllable from App in Stereo",
        ],
      },
    ],
  },
  {
    id: 'gps-trackers',
    title: 'GPS Trackers',
    description: 'Real-time vehicle tracking and fleet management.',
    products: [
      {
        id: 'gps-realtime',
        name: 'Thors GPS Real-Time',
        image: gpsTracker.src,
        description: 'Live tracking with geofencing',
        specs: [
          'Real-time (30s interval)',
          '4G LTE, GPS/GLONASS',
          'Built-in backup (24h)',
          'Unlimited geofencing',
          'SMS, App, Email alerts',
          '90 days cloud history',
        ],
      },
    ],
  },
  {
    id: 'ambient-lights',
    title: 'Ambient Lights',
    description: 'App controlled ambient lights for your vehicle.',
    products: [
      {
        id: 'ambient-light-k4-6',
        name: 'Thors Ambient Light K4-6',
        image: ambientLights1.src,
        description: 'Ambient light 6 pcs',
        specs: [
          "Comes with 4 Door Strips, 2 Dashboard Strips",
          "Experience a new dimension of driving",
          "Personalised Oasis: Custom Colour, Multi Colour",
          "Voice Control Mode: Changes the light on your command",
          "Perfect compannion for every journey",
          "Comes with IP 65 and IP68 Water and Dust Resistance",
        ],
      },
      {
        id: 'ambient-light-k4-10',
        name: 'Thors Ambient Light K4-10',
        image: ambientLights2.src,
        description: 'Ambient light 10 pcs',
        specs: [
          "Comes with 4 Door Strips, 2 Dashboard Strips, 4 Footlights",
          "Experience a new dimension of driving",
          "Personalised Oasis: Custom Colour, Multi Colour",
          "Voice Control Mode: Changes the light on your command",
          "Perfect compannion for every journey",
          "Comes with IP 65 and IP68 Water and Dust Resistance",
        ],
      },
      {
        id: 'ambient-light-k4-18',
        name: 'Thors Ambient Light K4-18',
        image: ambientLights3.src,
        description: 'Ambient light 18 pcs',
        specs: [
          "Comes with 4 Door Strips, 2 Dashboard Strips, 4 Footlights, 4 Storage and 4 Door Handles",
          "Experience a new dimension of driving",
          "Personalised Oasis: Custom Colour, Multi Colour",
          "Voice Control Mode: Changes the light on your command",
          "Perfect compannion for every journey",
          "Comes with IP 65 and IP68 Water and Dust Resistance",
        ],
      },
    ],
  },
  {
    id: 'grill-lights',
    title: 'LED Grill Lights',
    description: 'Remote/App controlled LED grill lights for front grill',
    products: [
      {
        id: 'grill-light-01',
        name: 'Thors Grill Light Pro',
        image: grillLight1.src,
        description: 'Set of 4 lights with White and Yellow colors',
        specs: [
          "Set of 4 lights with White and Yellow colors",
          "Remote/App controlled",
          "LED Grill Lights",
          "Water and dust protection certification",
          "Shock Proof and Anti Shake",
        ],
      },
      {
        id: 'grill-light-02',
        name: 'Thors Grill Light',
        image: grillLight2.src,
        description: 'Set of 4 lights with White color',
        specs: [
          "Set of 4 lights with White color",
          "Remote/App controlled",
          "LED Grill Lights",
          "Water and dust protection certification",
          "Shock Proof and Anti Shake",
        ],
      },
    ],
  },
  {
    id: 'LED-projector',
    title: 'LED Projector Lamps',
    description: 'Remote/App controlled LED projector lamps',
    products: [
      {
        id: 'led-projector-3',
        name: 'Thors LED Projector 3"',
        image: ledProjector3.src,
        description: '3 inch projector LED lamp',
        specs: [
          "120 W Power",
          "6000K/4500K/3000K",
          "15000 Lm Brightness",
        ],
      },
      {
        id: 'led-projector-2',
        name: 'Thors LED Projector 2"',
        image: ledProjector2.src,
        description: '2 inch projector LED lamp',
        specs: [
          "120 W Power",
          "6000K",
          "15000 Lm Brightness",
        ],
      },
    ],
  },
  {
    id: 'Tire-inflator',
    title: 'Tire Inflator',
    description: 'Tire inflator for your vehicle',
    products: [
      {
        id: 'tire-inflator-01',
        name: 'Thors TI-02',
        image: tireInflator1.src,
        description: 'Tire inflator for Trucks',
        specs: [
          "Air Compressor with Dual Cylinder",
          "Voltage : DC 12-13.5V",
          "MAX AMPS: 15AMP",
          "MAX Pressure: 150 PSI",
          "Flow Rate: @150 PSI",
          "Compact in Size",
          "Comes with Machine and Motor",
        ],
      },
      {
        id: 'tire-inflator-02',
        name: 'Thors TI-01',
        image: tireInflator2.src,
        description: 'Tire inflator for Cars and Bikes',
        specs: [
          "Voltage : DC 10V ",
          "MAX AMPS: 10AMP",
          "Compact in Size",
        ],
      },
    ],
  },
  {
    id: 'WindTone-Horn',
    title: 'WindTone Horn',
    description: 'WindTone Horn for your vehicle',
    products: [
      {
        id: 'windtone-horn-01',
        name: 'Thors WindTone Horn Copper',
        image: hornCopper.src,
        description: 'WindTone Horn for Cars',
        specs: [
          "ISO/TS 16949 Certified",
          "Voltage : DC 12V ",
        ],
      },
      {
        id: 'windtone-horn-02',
        name: 'Thors WindTone Horn',
        image: horn.src,
        description: 'WindTone Horn for Cars',
        specs: [
          "ISO/TS 16949 Certified",
          "Voltage : DC 12V ",
        ],
      },
      {
        id: 'windtone-horn-03',
        name: 'Thors WindTone Horn OE',
        image: horn.src,
        description: 'WindTone Horn for Cars',
        specs: [
          "ISO/TS 16949 Certified",
          "Voltage : DC 12V ",
        ],
      },
      {
        id: 'windtone-horn-04',
        name: 'Thors WindTone Horn Sports',
        image: hornCopper.src,
        description: 'WindTone Horn for Sports Cars',
        specs: [
          "ISO/TS 16949 Certified",
          "Voltage : DC 12V ",
        ],
      },
    ],
  },

];
