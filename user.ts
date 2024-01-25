export interface IUser {
  id: number;
  name: string;
  role: string;
  uri: any;
  description: string;
  images: string[];
}
export const users: IUser[] = [
  {
    id: 1,
    name: "Courier",
    role: "Alopeyk",
    description: `<h1>React Native Developer / Alopeyk</h1>
    <p>Alopeyk is a technology company that provides on-demand delivery services. It is the first and largest provider of on-demand delivery services in Iran.</p>
    <p>Store: <a href="https://cafebazaar.ir/app/com.alopeyk.courier">Cafebazaar Link</a></p>
    <h3>Development Details:</h3>
    <ul>
    <li>Updated React Native version from 0.66 to 0.72, implementing necessary modifications.</li>
    <li>Conducted updates for outdated packages and enhanced performance.</li>
    <li>Completely restructured the project using TypeScript, incorporating type safety and improved maintainability.</li>
    <li>Introduced new features and resolved numerous bugs.</li>
  </ul>
    `,
    uri: require("./assets/users/courier.png"),
    images: [
      require("./assets/users/courier1.jpg"),
      require("./assets/users/courier2.jpg"),
      require("./assets/users/courier3.jpg"),
      require("./assets/users/courier4.jpg"),
      require("./assets/users/courier5.jpg"),
      require("./assets/users/courier6.jpg"),
    ],
  },
  {
    id: 2,
    name: "Customer",
    role: "Alopeyk",
    uri: require("./assets/users/customer.png"),
    description: `<h1>React Native Developer / Alopeyk</h1>
    <p>Alopeyk is a technology company that provides on-demand delivery services. It is the first and largest provider of on-demand delivery services in Iran.</p>
    <p>Store: <a href="https://cafebazaar.ir/app/com.alopeyk.customer">Cafebazaar Link</a></p>
    <p>Store: <a href="https://sibapp.com/applications/alopeyk">Sibapp Link</a></p>
    <h3>Development Details:</h3>
    `,
    images: [
      require("./assets/users/customer1.jpeg"),
      require("./assets/users/customer2.jpeg"),
      require("./assets/users/customer3.jpeg"),
      require("./assets/users/customer4.jpeg"),
    ],
  },
  {
    id: 3,
    name: "Ketabkhan",
    role: "e-estekhdam",
    description: `<h1>React Native Developer / E-Estekhdam</h1>
    <p>E-estekhdam is a prominent platform that specializes in job advertisement publishing. It serves as a comprehensive online resource for both job seekers and employers in the country.</p>
    <h3>Development Details:</h3>
    <ul>
      <li>Developed high-performance app for Android & iOS with TypeScript.</li>
      <li>Fully custom components.</li>
      <li>Library: React Navigation, Redux, Reanimated, Gesture Handler, Axios, Bottom Sheet, Pdf, mmkv, Firebase, Crypto-Js.</li>
    </ul>
    <ul>
      <li>Developed high-performance app for Windows with Electron-Js and React.</li>
      <li>Fully custom components.</li>
      <li>Library: MUI, Router-dom, framer-motion, Redux, Axios, pdfjs-dist, react-pdf-viewer, Crypto-Js.</li>
    </ul>`,
    uri: require("./assets/users/ketabkhan.png"),
    images: [
      require("./assets/users/ketabkhan1.png"),
      require("./assets/users/ketabkhan2.png"),
      require("./assets/users/ketabkhan3.png"),
      require("./assets/users/ketabkhan4.png"),
    ],
  },
  {
    id: 4,
    name: "Vendor-App",
    role: "Delino",
    uri: require("./assets/users/vendor.png"),
    description: `<h1>React Native Developer / Delino</h1>
    <p>Vendor application is for information management of Delino ordering system member collections.</p>    
    <p>Store: <a href="https://cafebazaar.ir/app/com.vendorapp">Cafebazaar Link</a></p>
    <h3>Development Details:</h3>
    <ul>
      <li>Develop a high-performance app for Android & iOS with TypeScript</li>
      <li>Fully custom components</li>
      <li>Library: React Navigation, Redux, Reanimated, Gesture Handler, Axios, Web View, Bottom Sheet, Calendar, FlashList, mmkv, imageCropPicker, firebase, CodePush</li>
    </ul>`,
    images: [
      require("./assets/users/vendor1.jpg"),
      require("./assets/users/vendor2.jpg"),
      require("./assets/users/vendor3.jpg"),
      require("./assets/users/vendor4.jpg"),
    ],
  },
  {
    id: 5,
    name: "Delino-App",
    role: "Delino",
    description: `<h1>React Native Developer / Delino</h1>
    <p>Delino is an online food ordering startup that was established in 2015 with the investment of System Group Co, the largest private sector software company.</p>
    <p>Store: <a href="https://sibapp.com/applications/OnlineDelino">Sibapp Link</a></p>
    <h3>Development Details:</h3>
    <ul>
      <li>Successfully identified and resolved 20+ bugs in the project.</li>
      <li>Created full compatibility with the new version of iOS and iPhone.</li>
      <li>Upgraded 30+ outdated packages, resulting in improved performance and bug fixes.</li>
    </ul>`,
    uri: require("./assets/users/delino.png"),
    images: [
      require("./assets/users/delino1.jpeg"),
      require("./assets/users/delino2.jpeg"),
      require("./assets/users/delino3.jpeg"),
      require("./assets/users/delino4.jpeg"),
    ],
  },
  {
    id: 6,
    name: "Vendo",
    role: "Delino",
    description: `<h1>React Native Developer / Delino</h1>
    <p>Vendo Application: online food ordering and delivery platform.</p>
    <h3>Development Details:</h3>
    <ul>
      <li>Develop high performance app for android & ios</li>
      <li>Base on monorepo for sharing codes with web</li>
      <li>Fully custom component/li>
      <li>Library: React Native Navigation, Redux ,Reanimated, Gesture Handler, Axios, Map, Web View</li>
    </ul>`,
    uri: require("./assets/users/vendo.png"),
    images: [
      require("./assets/users/vendo1.jpg"),
      require("./assets/users/vendo2.jpg"),
      require("./assets/users/vendo3.jpg"),
      require("./assets/users/vendo4.jpg"),
      require("./assets/users/vendo5.jpg"),
    ],
  },
  {
    id: 7,
    name: "Denj",
    role: "Karafs",
    description: `<h1>React Native Developer / Denj</h1>
    <p>Development of the new version of the Denj application as a freelancer</p>
    <p>Store: <a href="https://play.google.com/store/apps/details?id=com.denjapp.android">Denj App on Google Play Store</a></p>
    <h3>Development Details:</h3>
    <ul>
      <li>Platform: Android, iOS, and web</li>
      <li>Framework: Expo with TypeScript</li>
      <li>Web: Built using Expo web for Progressive Web App (PWA) development</li>
      <li>Libraries: React Navigation, Reanimated, Gesture Handler, Fetch, Bottom Sheet, imageCropPicker, mmkv, track player, Context, Expo AV</li>
    </ul>`,
    uri: require("./assets/users/denj.png"),
    images: [
      require("./assets/users/denj1.webp"),
      require("./assets/users/denj2.webp"),
      require("./assets/users/denj3.webp"),
      require("./assets/users/denj4.webp"),
      require("./assets/users/denj5.webp"),
      require("./assets/users/denj6.webp"),
    ],
  },
  {
    id: 8,
    name: "Taskyn",
    role: "Taskyn",
    description: `<h1>Co-Founder, React Native Developer / Taskyn</h1>
    <p>Taskyn is designed to manage Psychoanalytic psychotherapy sessions. I work as a React Native Developer and UI/UX Designer.</p>
    <p>It was stopped in phase 2 due to financial problems and lack of people.</p>
    <p>Github: <a href="https://github.com/sssajjad007/react-native-psychology-app">Github Link</a></p>
    <h3>Development Details:</h3>
    <ul>
      <li>Developed for Android, iOS, and web</li>
      <li>Based on Expo, TypeScript</li>
      <li>Utilized Expo web for building Progressive Web Apps (PWA)</li>
      <li>Fully custom components</li>
      <li>Library: React Navigation, Mobx, Reanimated, Gesture Handler, Fetch, Bottom Sheet, imageCropPicker, mmkv</li>
    </ul>`,
    uri: require("./assets/users/taskyn.png"),
    images: [
      require("./assets/users/taskyn1.png"),
      require("./assets/users/taskyn2.png"),
      require("./assets/users/taskyn3.png"),
      require("./assets/users/taskyn4.png"),
      require("./assets/users/taskyn5.png"),
      require("./assets/users/taskyn6.png"),
      require("./assets/users/taskyn7.png"),
      require("./assets/users/taskyn8.png"),
    ],
  },
  {
    id: 9,
    name: "Adviser",
    role: "Farzan",
    description: ``,
    uri: require("./assets/users/adviser.webp"),
    images: [],
  },
];
