export interface ProductSpec {
  label: string;
  value: string;
}

export interface CatalogProduct {
  id: string;
  name: string;
  image: string;
  description?: string;
  specs: ProductSpec[];
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
        id: 'android-pro-10',
        name: 'Thors Pro 10"',
        image: '/android.jpeg',
        description: 'Flagship 10-inch Android infotainment system',
        specs: [
          { label: 'Screen', value: '10.1" HD Touchscreen' },
          { label: 'OS', value: 'Android 12' },
          { label: 'RAM', value: '4 GB' },
          { label: 'Storage', value: '64 GB (expandable)' },
          { label: 'Connectivity', value: 'Wi-Fi, Bluetooth 5.0, USB' },
          { label: 'Features', value: 'Apple CarPlay, Android Auto, GPS' },
        ],
      },
      {
        id: 'android-std-8',
        name: 'Thors Standard 8"',
        image: '/android.jpeg',
        description: 'Mid-range 8-inch system for everyday use',
        specs: [
          { label: 'Screen', value: '8" HD Touchscreen' },
          { label: 'OS', value: 'Android 11' },
          { label: 'RAM', value: '2 GB' },
          { label: 'Storage', value: '32 GB' },
          { label: 'Connectivity', value: 'Bluetooth 5.0, USB, Aux' },
          { label: 'Features', value: 'MirrorLink, GPS, FM/AM' },
        ],
      },
      {
        id: 'android-basic-7',
        name: 'Thors Basic 7"',
        image: '/android.jpeg',
        description: 'Entry-level 7-inch Android system',
        specs: [
          { label: 'Screen', value: '7" WVGA Touchscreen' },
          { label: 'OS', value: 'Android 10' },
          { label: 'RAM', value: '1 GB' },
          { label: 'Storage', value: '16 GB' },
          { label: 'Connectivity', value: 'Bluetooth 4.2, USB' },
          { label: 'Features', value: 'GPS, FM/AM, Rear camera input' },
        ],
      },
    ],
  },
  {
    id: '360-cameras',
    title: '360° View Cameras',
    description: 'Surround-view camera systems for parking and safety.',
    products: [
      {
        id: '360-4k',
        name: 'Thors 360° 4K',
        image: '/360Camera.jpeg',
        description: 'High-resolution 360-degree surround view',
        specs: [
          { label: 'Resolution', value: '4K (3840 × 2160)' },
          { label: 'Cameras', value: '4 × 1080p wide-angle' },
          { label: 'Viewing angle', value: '190° per camera' },
          { label: 'Display', value: 'Bird\'s eye + split view' },
          { label: 'Night vision', value: 'Yes (IR LED)' },
          { label: 'Compatibility', value: 'Universal 6–12V' },
        ],
      },
      {
        id: '360-hd',
        name: 'Thors 360° HD',
        image: '/360Camera.jpeg',
        description: 'Full HD 360-degree system',
        specs: [
          { label: 'Resolution', value: '1080p Full HD' },
          { label: 'Cameras', value: '4 × 720p' },
          { label: 'Viewing angle', value: '170° per camera' },
          { label: 'Display', value: 'Bird\'s eye view' },
          { label: 'Night vision', value: 'Yes' },
          { label: 'Compatibility', value: 'Universal 12V' },
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
        id: 'dashcam-dual-4k',
        name: 'Thors Dual 4K',
        image: '/Dashcam.jpeg',
        description: 'Front + rear 4K recording',
        specs: [
          { label: 'Front camera', value: '4K @ 30fps' },
          { label: 'Rear camera', value: '1080p @ 30fps' },
          { label: 'Storage', value: 'MicroSD up to 256 GB' },
          { label: 'Parking mode', value: 'Motion & impact detection' },
          { label: 'Display', value: '3" LCD' },
          { label: 'GPS', value: 'Built-in' },
        ],
      },
      {
        id: 'dashcam-single',
        name: 'Thors Single HD',
        image: '/Dashcam.jpeg',
        description: 'Compact front-facing dashcam',
        specs: [
          { label: 'Resolution', value: '1080p @ 60fps' },
          { label: 'Viewing angle', value: '140°' },
          { label: 'Storage', value: 'MicroSD up to 128 GB' },
          { label: 'Parking mode', value: 'Optional (hardwire)' },
          { label: 'Display', value: '2" LCD' },
          { label: 'Night vision', value: 'WDR' },
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
        image: '/CarGPSTracker.jpeg',
        description: 'Live tracking with geofencing',
        specs: [
          { label: 'Tracking', value: 'Real-time (30s interval)' },
          { label: 'Connectivity', value: '4G LTE, GPS/GLONASS' },
          { label: 'Battery', value: 'Built-in backup (24h)' },
          { label: 'Geofencing', value: 'Unlimited zones' },
          { label: 'Alerts', value: 'SMS, App, Email' },
          { label: 'History', value: '90 days cloud' },
        ],
      },
      {
        id: 'gps-basic',
        name: 'Thors GPS Basic',
        image: '/CarGPSTracker.jpeg',
        description: 'Affordable OBD-II plug-in tracker',
        specs: [
          { label: 'Tracking', value: '1–5 min interval' },
          { label: 'Connectivity', value: '2G/3G, GPS' },
          { label: 'Power', value: 'OBD-II port' },
          { label: 'Geofencing', value: '5 zones' },
          { label: 'Alerts', value: 'App push' },
          { label: 'History', value: '30 days' },
        ],
      },
    ],
  },
];
